import React, { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { IMAGES } from "../data/mock";
import { VideoCard } from "../components/cards/VideoCard";
import { getTeachings } from "../api/teachings";

export default function Teachings() {
  const { t, lang } = useLang();

  const [teachings, setTeachings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cat, setCat] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachings = async () => {
      try {
        const data = await getTeachings();

        setTeachings(data);
        setFiltered(data);
      } catch (error) {
        console.error("Unable to load teachings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachings();
  }, []);

  useEffect(() => {
    if (cat === "all") {
      setFiltered(teachings);
    } else {
      setFiltered(
        teachings.filter(
          (teaching) =>
            teaching.categorie &&
            teaching.categorie.toLowerCase() === cat.toLowerCase()
        )
      );
    }
  }, [cat, teachings]);

  const filters = [
    { id: "all", label: t("media.filterAll") },
    { id: "Foi", label: "Foi" },
    { id: "Famille", label: "Famille" },
    { id: "Prière", label: "Prière" },
    { id: "Jeunesse", label: "Jeunesse" },
  ];

  return (
    <div data-testid="page-teachings">
      <PageHero
        eyebrow={t("media.eyebrow")}
        title={t("media.title")}
        image={IMAGES.modernChurch}
      />

      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container">

          {loading && (
            <div className="text-center py-20">
              Chargement...
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <Reveal>
              <div className="mb-16">
                <VideoCard video={filtered[0]} large />
              </div>
            </Reveal>
          )}

          {/* <div className="flex flex-wrap items-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setCat(f.id)}
                className={`text-[11px] uppercase tracking-[0.32em] px-4 py-2 rounded-sm border transition-all ${
                  cat === f.id
                    ? "bg-dmi-charcoal text-white border-dmi-charcoal"
                    : "bg-transparent text-dmi-charcoal/70 border-dmi-charcoal/15 hover:border-dmi-charcoal/40 hover:text-dmi-charcoal"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div> */}

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.slice(1).map((teaching, index) => (
                <Reveal key={teaching.id} delay={index * 0.05}>
                  <VideoCard video={teaching} />
                </Reveal>
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-20 text-dmi-charcoal/50">
              {lang === "fr"
                ? "Aucun enseignement disponible."
                : "No teachings available."}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
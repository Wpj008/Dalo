import React, { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { VIDEOS, IMAGES } from "../data/mock";
import { VideoCard } from "../components/cards/VideoCard";

export default function Media() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState("all");

  const filters = [
    { id: "all", label: t("media.filterAll") },
    { id: "sermon", label: t("media.filterSermons") },
    { id: "teaching", label: t("media.filterTeach") },
    { id: "podcast", label: t("media.filterPodcasts") },
    { id: "interview", label: t("media.filterInterviews") },
  ];

  const filtered =
    cat === "all" ? VIDEOS : VIDEOS.filter((v) => v.category === cat);

  return (
    <div data-testid="page-media">
      <PageHero
        eyebrow={t("media.eyebrow")}
        title={t("media.title")}
        image={IMAGES.modernChurch}
      />

      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container">
          {/* Featured */}
          {filtered[0] && (
            <Reveal>
              <div className="mb-16">
                <VideoCard video={filtered[0]} large />
              </div>
            </Reveal>
          )}

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setCat(f.id)}
                data-testid={`media-filter-${f.id}`}
                className={`text-[11px] uppercase tracking-[0.32em] px-4 py-2 rounded-sm border transition-all ${
                  cat === f.id
                    ? "bg-dmi-charcoal text-white border-dmi-charcoal"
                    : "bg-transparent text-dmi-charcoal/70 border-dmi-charcoal/15 hover:border-dmi-charcoal/40 hover:text-dmi-charcoal"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(1).map((v, i) => (
              <Reveal key={v.id} delay={i * 0.05}>
                <VideoCard video={v} />
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-dmi-charcoal/50">
              {lang === "fr" ? "Aucun contenu pour ce filtre." : "No content for this filter."}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

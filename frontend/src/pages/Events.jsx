import React, { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { IMAGES } from "../data/mock";
import { EventCard } from "../components/cards/EventCard";
import { getEvents } from "../api/events";

export default function Events() {
  const { t, lang } = useLang();

  const [events, setEvents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();

        setEvents(data);
        setFiltered(data);
      } catch (error) {
        console.error("Unable to load events :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFiltered(events);
    } else {
      setFiltered(
        events.filter(
          (event) =>
            event.event_type &&
            event.event_type.nom.toLowerCase() === filter.toLowerCase()
        )
      );
    }
  }, [filter, events]);

  const eventTypes = [
    ...new Set(
      events
        .filter((e) => e.event_type)
        .map((e) => e.event_type.nom)
    ),
  ];

  const filters = [
    {
      id: "all",
      label: t("events.filterAll"),
    },
    ...eventTypes.map((type) => ({
      id: type,
      label: type,
    })),
  ];

  return (
    <div data-testid="page-events">
      <PageHero
        eyebrow={t("events.eyebrow")}
        title={t("events.title")}
        image={IMAGES.conf2}
      />

      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container">

          {loading && (
            <div className="text-center py-20">
              Chargement...
            </div>
          )}

          {!loading && (
            <>
              <div className="flex flex-wrap items-center gap-3 mb-12">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFilter(f.id)}
                    className={`text-[11px] uppercase tracking-[0.32em] px-4 py-2 rounded-sm border transition-all ${
                      filter === f.id
                        ? "bg-dmi-charcoal text-white border-dmi-charcoal"
                        : "bg-transparent text-dmi-charcoal/70 border-dmi-charcoal/15 hover:border-dmi-charcoal/40 hover:text-dmi-charcoal"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((event, index) => (
                  <Reveal key={event.id} delay={index * 0.05}>
                    <EventCard event={event} />
                  </Reveal>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20 text-dmi-charcoal/50">
                  {lang === "fr"
                    ? "Aucun événement disponible."
                    : "No events available."}
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </div>
  );
}
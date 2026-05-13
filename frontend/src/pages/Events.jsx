import React, { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { EVENTS, IMAGES } from "../data/mock";
import { EventCard } from "../components/cards/EventCard";

export default function Events() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState("all");

  const filters = [
    { id: "all", label: t("events.filterAll") },
    { id: "conference", label: t("events.filterConf") },
    { id: "campaign", label: t("events.filterCamp") },
    { id: "retreat", label: t("events.filterRetreat") },
  ];

  const filtered =
    filter === "all" ? EVENTS : EVENTS.filter((e) => e.type === filter);

  return (
    <div data-testid="page-events">
      <PageHero
        eyebrow={t("events.eyebrow")}
        title={t("events.title")}
        image={IMAGES.conf2}
      />

      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                data-testid={`events-filter-${f.id}`}
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.05}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-dmi-charcoal/50">
              {lang === "fr" ? "Aucun événement pour ce filtre." : "No events for this filter."}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionEyebrow } from "../common/SectionEyebrow";
import { useLang } from "../../i18n/LanguageContext";
import { EVENTS } from "../../data/mock";
import { EventCard } from "../cards/EventCard";

export const EventsPreview = () => {
  const { t } = useLang();
  const events = EVENTS.slice(0, 3);
  return (
    <section
      className="dmi-section bg-dmi-charcoal text-white relative overflow-hidden"
      data-testid="home-events"
    >
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.6),transparent_40%)]" />
      <div className="dmi-container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <SectionEyebrow>{t("home.eventsEyebrow")}</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="dmi-h2 mt-6 max-w-3xl">
                {t("home.eventsTitle")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-white hover:text-dmi-gold transition-colors group"
              data-testid="home-events-cta"
            >
              <span className="underline-grow">{t("cta.seeAll")}</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.1}>
              <EventCard event={e} dark />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

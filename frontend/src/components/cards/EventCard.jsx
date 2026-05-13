import React from "react";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";

export const EventCard = ({ event, dark = false }) => {
  const { lang, t } = useLang();
  const dateObj = new Date(event.date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    month: "short",
  });
  const year = dateObj.getFullYear();

  return (
    <article
      className={`group relative overflow-hidden rounded-md border ${
        dark
          ? "bg-white/[0.03] border-white/10 hover:border-dmi-gold/40"
          : "bg-white border-dmi-charcoal/10 hover:border-dmi-gold/60"
      } transition-all duration-500 hover:-translate-y-1`}
      data-testid={`event-card-${event.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.image}
          alt={event.title[lang]}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dmi-charcoal/70 via-transparent to-transparent" />
        {event.upcoming && (
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.32em] bg-dmi-gold text-dmi-charcoal px-3 py-1 rounded-sm font-medium">
            {t("events.upcoming")}
          </span>
        )}
        {/* Date block */}
        <div className="absolute bottom-4 left-4 bg-dmi-charcoal/85 backdrop-blur-sm text-white px-4 py-2 rounded-sm">
          <div className="font-serif text-2xl leading-none">{day}</div>
          <div className="text-[10px] uppercase tracking-[0.32em] mt-1">
            {month} {year}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3
          className={`font-serif text-2xl leading-tight ${
            dark ? "text-white" : "text-dmi-charcoal"
          } group-hover:text-dmi-gold transition-colors`}
        >
          {event.title[lang]}
        </h3>
        <div
          className={`flex items-center gap-4 mt-4 text-xs ${
            dark ? "text-white/60" : "text-dmi-charcoal/60"
          }`}
        >
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} className="text-dmi-gold" />
            {event.city} · {event.country[lang]}
          </span>
        </div>
        <div
          className={`mt-4 text-xs ${
            dark ? "text-white/60" : "text-dmi-charcoal/60"
          }`}
        >
          {event.speakers.slice(0, 2).join(" · ")}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span
            className={`text-xs uppercase tracking-[0.2em] ${
              dark ? "text-white/70" : "text-dmi-charcoal/70"
            } group-hover:text-dmi-gold transition-colors`}
          >
            {t("cta.register")}
          </span>
          <ArrowUpRight
            size={18}
            className={`${
              dark ? "text-white/70" : "text-dmi-charcoal/70"
            } group-hover:text-dmi-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`}
          />
        </div>
      </div>
    </article>
  );
};

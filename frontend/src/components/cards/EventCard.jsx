import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowUpRight, Tag } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";

export const EventCard = ({ event, dark = false }) => {
  const { lang } = useLang();

  const imageUrl = event.image
    ? `${process.env.REACT_APP_STORAGE_URL}/${event.image}`
    : "/images/placeholder-event.jpg";

  const date = new Date(event.date_debut);

  const day = date.getDate();

  const month = date.toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-US",
    {
      month: "short",
    }
  );

  const year = date.getFullYear();

  return (
    <Link
      to={`/events/${event.id}`}
      className="group block"
      data-testid={`event-card-${event.id}`}
    >
      <article
        className={`relative overflow-hidden rounded-md border ${
          dark
            ? "bg-white/[0.03] border-white/10 hover:border-dmi-gold/40"
            : "bg-white border-dmi-charcoal/10 hover:border-dmi-gold/60"
        } transition-all duration-500 hover:-translate-y-1`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">

          <img
            src={imageUrl}
            alt={event.titre}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-dmi-charcoal/70 via-transparent to-transparent" />

          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-sm text-[10px] uppercase tracking-[0.32em] ${
              event.statut === "EN_COURS"
                ? "bg-green-600 text-white"
                : event.statut === "A_VENIR"
                ? "bg-dmi-gold text-dmi-charcoal"
                : "bg-dmi-charcoal text-white"
            }`}
          >
            {event.statut}
          </span>

          <div className="absolute bottom-4 left-4 bg-dmi-charcoal/85 backdrop-blur-sm text-white px-4 py-2 rounded-sm">
            <div className="font-serif text-2xl leading-none">
              {day}
            </div>

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
            {event.titre}
          </h3>

          <div
            className={`flex items-center gap-2 mt-5 text-xs ${
              dark ? "text-white/60" : "text-dmi-charcoal/60"
            }`}
          >
            <MapPin size={14} className="text-dmi-gold" />

            {event.ville}, {event.pays}
          </div>

          <div
            className={`flex items-center gap-2 mt-3 text-xs ${
              dark ? "text-white/60" : "text-dmi-charcoal/60"
            }`}
          >
            <Calendar size={14} className="text-dmi-gold" />

            {new Date(event.date_debut).toLocaleDateString(
              lang === "fr" ? "fr-FR" : "en-US"
            )}
          </div>

          {event.event_type && (
            <div
              className={`flex items-center gap-2 mt-3 text-xs ${
                dark ? "text-white/60" : "text-dmi-charcoal/60"
              }`}
            >
              <Tag size={14} className="text-dmi-gold" />

              {event.event_type.nom}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between">

            <span
              className={`text-xs uppercase tracking-[0.2em] ${
                dark ? "text-white/70" : "text-dmi-charcoal/70"
              } group-hover:text-dmi-gold transition-colors`}
            >
              Voir les détails
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
    </Link>
  );
};
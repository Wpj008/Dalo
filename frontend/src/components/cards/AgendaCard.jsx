import React from "react";
import { Calendar, MapPin, ArrowUpRight, Tag } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";

export const AgendaCard = ({ agenda, dark = false }) => {
  const { lang } = useLang();

  const date = new Date(agenda.date_debut);

  const day = date.getDate();

  const month = date.toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-US",
    {
      month: "short",
    }
  );

  const year = date.getFullYear();

  return (
    <article
      className={`relative overflow-hidden rounded-md border ${
        dark
          ? "bg-white/[0.03] border-white/10 hover:border-dmi-gold/40"
          : "bg-white border-dmi-charcoal/10 hover:border-dmi-gold/60"
      } transition-all duration-500 hover:-translate-y-1`}
    >
      {/* Date */}
      <div className="absolute top-4 right-4 bg-dmi-gold text-dmi-charcoal px-4 py-2 rounded-sm text-center">
        <div className="font-serif text-2xl leading-none">{day}</div>

        <div className="text-[10px] uppercase tracking-[0.32em] mt-1">
          {month} {year}
        </div>
      </div>

      <div className="p-8">
        {/* Type d'agenda */}
        {agenda.agenda_type && (
          <div className="inline-flex items-center gap-2 mb-5 text-xs uppercase tracking-[0.2em] text-dmi-gold">
            <Tag size={14} />

            {agenda.agenda_type.nom}
          </div>
        )}

        {/* Titre */}
        <h3
          className={`font-serif text-2xl leading-tight ${
            dark ? "text-white" : "text-dmi-charcoal"
          }`}
        >
          {agenda.titre}
        </h3>

        {/* Description */}
        {agenda.description && (
          <p
            className={`mt-4 text-sm leading-7 ${
              dark ? "text-white/70" : "text-dmi-charcoal/70"
            }`}
          >
            {agenda.description}
          </p>
        )}

        {/* Lieu */}
        {agenda.lieu && (
          <div
            className={`flex items-center gap-2 mt-6 text-sm ${
              dark ? "text-white/70" : "text-dmi-charcoal/70"
            }`}
          >
            <MapPin size={16} className="text-dmi-gold" />

            {agenda.lieu}
          </div>
        )}

        {/* Date complète */}
        <div
          className={`flex items-center gap-2 mt-3 text-sm ${
            dark ? "text-white/70" : "text-dmi-charcoal/70"
          }`}
        >
          <Calendar size={16} className="text-dmi-gold" />

          {date.toLocaleDateString(
            lang === "fr" ? "fr-FR" : "en-US",
            {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}
        </div>

        {/* Indication */}
        <div className="mt-8 flex items-center justify-end">
          <span
            className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] ${
              dark ? "text-white/70" : "text-dmi-charcoal/70"
            }`}
          >
            Prochain rendez-vous

            <ArrowUpRight size={16} className="text-dmi-gold" />
          </span>
        </div>
      </div>
    </article>
  );
};
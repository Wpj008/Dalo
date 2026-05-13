import React from "react";
import { MapPin, ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../../i18n/LanguageContext";

export const ChurchCard = ({ church }) => {
  const { lang, t } = useLang();
  return (
    <article
      className="group relative overflow-hidden rounded-md bg-white border border-dmi-charcoal/10 hover:border-dmi-gold/50 transition-all duration-500 hover:-translate-y-1"
      data-testid={`church-card-${church.id}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={church.image}
          alt={church.city}
          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dmi-charcoal/85 via-dmi-charcoal/20 to-transparent" />
        <div className="absolute bottom-5 left-5 text-white">
          <div className="text-[10px] uppercase tracking-[0.32em] text-dmi-gold">
            {church.country[lang]}
          </div>
          <h3 className="font-serif text-3xl mt-1">{church.city}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-2 text-sm text-dmi-charcoal/70">
          <MapPin size={14} className="text-dmi-gold mt-0.5 shrink-0" />
          <span>{church.address}</span>
        </div>
        <div className="mt-4 space-y-1">
          {church.schedule.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-xs text-dmi-charcoal/70"
            >
              <span className="uppercase tracking-[0.2em]">{s.day[lang]}</span>
              <span>{s.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 text-xs text-dmi-charcoal/80">
          {church.pastors.join(" · ")}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-dmi-charcoal/50">
            <a href={church.socials.facebook} aria-label="Facebook" className="hover:text-dmi-gold">
              <Facebook size={15} />
            </a>
            <a href={church.socials.instagram} aria-label="Instagram" className="hover:text-dmi-gold">
              <Instagram size={15} />
            </a>
            <a href={church.socials.youtube} aria-label="Youtube" className="hover:text-dmi-gold">
              <Youtube size={15} />
            </a>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-dmi-charcoal group-hover:text-dmi-gold transition-colors"
          >
            {t("churches.visit")} <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};

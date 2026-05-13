import React from "react";
import {
  BookOpen,
  Crown,
  Flame,
  Globe2,
  Sparkles,
  Radio,
  Heart,
} from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";

const ICONS = { BookOpen, Crown, Flame, Globe2, Sparkles, Radio, Heart };

export const MinistryCard = ({ ministry, index = 0 }) => {
  const { lang } = useLang();
  const Icon = ICONS[ministry.icon] || BookOpen;
  return (
    <article
      className="group relative h-full p-8 lg:p-10 bg-white border border-dmi-charcoal/10 rounded-md hover:border-dmi-gold/50 hover:shadow-premium-light transition-all duration-500 hover:-translate-y-1"
      data-testid={`ministry-card-${ministry.id}`}
    >
      <div className="text-[10px] uppercase tracking-[0.32em] text-dmi-gold mb-6">
        0{index + 1}
      </div>
      <Icon
        size={32}
        strokeWidth={1.2}
        className="text-dmi-navy group-hover:text-dmi-gold transition-colors duration-500"
      />
      <h3 className="font-serif text-2xl lg:text-3xl text-dmi-charcoal mt-6 leading-tight">
        {ministry.title[lang]}
      </h3>
      <p className="text-sm text-dmi-charcoal/70 mt-4 leading-relaxed">
        {ministry.desc[lang]}
      </p>
    </article>
  );
};

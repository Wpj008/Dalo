import React from "react";
import { useLang } from "../../i18n/LanguageContext";

export const LanguageSwitcher = ({ tone = "light" }) => {
  const { lang, setLang } = useLang();
  const base =
    tone === "light"
      ? "text-white/70 hover:text-white"
      : "text-dmi-charcoal/60 hover:text-dmi-charcoal";
  const active =
    tone === "light" ? "text-white" : "text-dmi-charcoal";
  return (
    <div
      className="flex items-center text-[11px] uppercase tracking-[0.32em] font-medium"
      data-testid="language-switcher"
    >
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={`${lang === "fr" ? active : base} transition-colors`}
        data-testid="lang-fr-btn"
      >
        FR
      </button>
      <span className={`mx-2 ${tone === "light" ? "text-white/30" : "text-dmi-charcoal/30"}`}>
        /
      </span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${lang === "en" ? active : base} transition-colors`}
        data-testid="lang-en-btn"
      >
        EN
      </button>
    </div>
  );
};

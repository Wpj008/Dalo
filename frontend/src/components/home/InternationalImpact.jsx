import React, { useState } from "react";
import { Reveal } from "../common/Reveal";
import { SectionEyebrow } from "../common/SectionEyebrow";
import { COUNTRIES, IMAGES } from "../../data/mock";
import { useLang } from "../../i18n/LanguageContext";

export const InternationalImpact = () => {
  const { t } = useLang();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="dmi-section relative overflow-hidden bg-dmi-navy text-white"
      data-testid="home-impact"
    >
      <div className="absolute inset-0 opacity-30">
        <img
          src={IMAGES.abstractNavyGold}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dmi-navy/95 via-dmi-navy/85 to-dmi-navy" />

      <div className="relative dmi-container">
        <div className="max-w-3xl">
          <Reveal>
            <SectionEyebrow>{t("home.impactEyebrow")}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="dmi-h2 mt-6 whitespace-pre-line">
              {t("home.impactTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 dmi-lead text-white/70 max-w-2xl">
              {t("home.impactSub")}
            </p>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.3} className="mt-14">
          <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-white/10 bg-dmi-navy-light">
            <img
              src={IMAGES.worldMap}
              alt="World map"
              className="w-full h-full object-cover opacity-60 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dmi-navy/70" />

            {/* Country dots */}
            {COUNTRIES.map((c) => (
              <button
                key={c.code}
                type="button"
                onMouseEnter={() => setHovered(c.code)}
                onMouseLeave={() => setHovered(null)}
                className="absolute group"
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
                aria-label={c.name}
                data-testid={`country-${c.code}`}
              >
                <span className="absolute -inset-3 rounded-full bg-dmi-gold/30 animate-pulse-gold" />
                <span className="relative block w-2 h-2 rounded-full bg-dmi-gold ring-2 ring-dmi-gold/40 shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
                {hovered === c.code && (
                  <span className="absolute left-1/2 -translate-x-1/2 -top-8 text-[10px] uppercase tracking-[0.2em] text-white whitespace-nowrap bg-dmi-charcoal/80 px-2 py-1 rounded">
                    {c.name}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Mini cards under map */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { v: "30", l: t("stats.countries") },
            { v: "4", l: "Continents" },
            { v: "20+", l: t("stats.conferences") },
            { v: "10K", l: t("stats.community") },
          ].map((s, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="border border-white/10 rounded-md p-6 bg-white/[0.02] backdrop-blur-sm">
                <div className="font-serif text-4xl text-dmi-gold font-light">
                  {s.v}
                </div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/60 mt-2">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

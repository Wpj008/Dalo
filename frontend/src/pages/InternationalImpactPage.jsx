import React from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { InternationalImpact } from "../components/home/InternationalImpact";
import { COUNTRIES, IMAGES } from "../data/mock";

export default function InternationalImpactPage() {
  const { t, lang } = useLang();
  return (
    <div data-testid="page-impact">
      <PageHero
        eyebrow={t("impactPage.eyebrow")}
        title={t("impactPage.title")}
        sub={t("impactPage.sub")}
        image={IMAGES.worship1}
      />

      <InternationalImpact />

      {/* Country list */}
      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container">
          <Reveal>
            <h2 className="dmi-h2 text-dmi-charcoal max-w-2xl">
              {lang === "fr" ? "Là où l'Évangile résonne." : "Where the Gospel resounds."}
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {COUNTRIES.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.03}>
                <div
                  className="border border-dmi-charcoal/10 rounded-md p-6 hover:border-dmi-gold transition-colors bg-white"
                  data-testid={`impact-country-${c.code}`}
                >
                  <div className="text-[10px] uppercase tracking-[0.32em] text-dmi-gold">
                    {c.code}
                  </div>
                  <div className="font-serif text-2xl text-dmi-charcoal mt-2">
                    {c.name}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

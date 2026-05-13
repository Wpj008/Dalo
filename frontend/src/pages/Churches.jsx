import React from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { CHURCHES, IMAGES } from "../data/mock";
import { ChurchCard } from "../components/cards/ChurchCard";

export default function Churches() {
  const { t } = useLang();
  return (
    <div data-testid="page-churches">
      <PageHero
        eyebrow={t("churches.eyebrow")}
        title={t("churches.title")}
        image={IMAGES.modernChurch}
      />
      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CHURCHES.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.05}>
                <ChurchCard church={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

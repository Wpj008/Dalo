import React from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { MINISTRIES, IMAGES } from "../data/mock";
import { MinistryCard } from "../components/cards/MinistryCard";

export default function Ministries() {
  const { t } = useLang();
  return (
    <div data-testid="page-ministries">
      <PageHero
        eyebrow={t("ministries.eyebrow")}
        title={t("ministries.title")}
        sub={t("ministries.sub")}
        image={IMAGES.conf1}
      />
      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {MINISTRIES.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.05}>
                <MinistryCard ministry={m} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

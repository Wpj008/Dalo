import React from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { SectionEyebrow } from "../components/common/SectionEyebrow";
import { AnimatedCounter } from "../components/common/AnimatedCounter";
import { IMAGES, STATS, TIMELINE } from "../data/mock";
import { Quote } from "lucide-react";

export default function About() {
  const { t, lang } = useLang();
  return (
    <div data-testid="page-about">
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        image={IMAGES.heroPastor}
      />

      {/* Bio */}
      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-md">
              <img
                src={IMAGES.heroPastor}
                alt="Roland Dalo"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              <SectionEyebrow>{t("about.bioTitle")}</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="dmi-h2 mt-6 text-dmi-charcoal">Roland Dalo</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 dmi-lead text-dmi-charcoal/75 max-w-2xl">
                {t("about.bioBody")}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-dmi-charcoal/10 pt-8">
                {STATS.map((s) => (
                  <div key={s.key}>
                    <div className="font-serif text-3xl text-dmi-charcoal font-light">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.32em] text-dmi-charcoal/60 mt-2">
                      {t(`stats.${s.key}`)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="dmi-section bg-dmi-navy text-white">
        <div className="dmi-container grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <div className="p-10 border border-white/10 rounded-md h-full">
              <div className="dmi-eyebrow !text-dmi-gold">
                <span>{t("about.visionTitle")}</span>
              </div>
              <p className="mt-8 font-serif italic text-3xl leading-snug">
                "{t("about.visionBody")}"
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="p-10 border border-white/10 rounded-md h-full bg-white/[0.03]">
              <div className="dmi-eyebrow !text-dmi-gold">
                <span>{t("about.missionTitle")}</span>
              </div>
              <p className="mt-8 font-serif italic text-3xl leading-snug">
                "{t("about.missionBody")}"
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container">
          <Reveal>
            <SectionEyebrow>{t("about.timelineTitle")}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="dmi-h2 mt-6 text-dmi-charcoal max-w-2xl">
              {t("about.timelineTitle")}
            </h2>
          </Reveal>
          <div className="mt-16 relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-dmi-charcoal/10" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div
                    className={`relative flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                    data-testid={`timeline-${item.year}`}
                  >
                    <div className="hidden sm:block w-1/2" />
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-dmi-gold ring-4 ring-dmi-offwhite" />
                    <div className="pl-12 sm:pl-0 sm:w-1/2">
                      <div className="font-serif text-5xl text-dmi-gold font-light leading-none">
                        {item.year}
                      </div>
                      <h3 className="font-serif text-2xl mt-3 text-dmi-charcoal">
                        {item.title[lang]}
                      </h3>
                      <p className="mt-3 text-dmi-charcoal/70 max-w-md">
                        {item.desc[lang]}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-dmi-charcoal text-white py-24">
        <div className="dmi-container max-w-4xl text-center">
          <Quote className="mx-auto text-dmi-gold/40" size={48} strokeWidth={1} />
          <p className="mt-6 font-serif italic text-3xl sm:text-4xl leading-snug font-light">
            "{t("about.legacyQuote")}"
          </p>
          <div className="mt-6 text-[10px] uppercase tracking-[0.32em] text-dmi-gold">
            — Pasteur Roland Dalo
          </div>
        </div>
      </section>
    </div>
  );
}

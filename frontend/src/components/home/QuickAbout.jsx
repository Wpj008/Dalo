import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { IMAGES, STATS } from "../../data/mock";
import { Reveal } from "../common/Reveal";
import { SectionEyebrow } from "../common/SectionEyebrow";
import { AnimatedCounter } from "../common/AnimatedCounter";

export const QuickAbout = () => {
  const { t } = useLang();
  return (
    <section className="dmi-section bg-dmi-offwhite" data-testid="home-about">
      <div className="dmi-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Image side */}
        <Reveal className="lg:col-span-5 relative" y={40}>
          <div className="relative h-[750px] overflow-hidden rounded-md">
            <img
              src="/images/_MG_8410.png"
              alt="Pastor Roland Dalo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dmi-charcoal/40 via-transparent to-transparent" />
          </div>
          {/* Gold accent block */}
          <div className="hidden lg:block absolute -bottom-8 -right-8 w-40 h-40 bg-dmi-gold/90 rounded-md p-6 flex flex-col justify-end">
            <div className="font-serif text-5xl text-dmi-charcoal leading-none">
              27<span className="text-2xl align-top">+</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-dmi-charcoal/80 mt-2">
              {t("stats.years")}
            </div>
          </div>
        </Reveal>

        {/* Content side */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal>
            <SectionEyebrow>{t("home.aboutEyebrow")}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="dmi-h2 mt-6 text-dmi-charcoal whitespace-pre-line">
              {t("home.aboutTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 dmi-lead text-dmi-charcoal/70 max-w-2xl">
              {t("home.aboutBody")}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 mt-10 text-sm tracking-wide text-dmi-charcoal hover:text-dmi-gold transition-colors w-fit"
              data-testid="home-about-cta"
            >
              <span className="underline-grow">{t("cta.learnMore")}</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.4}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-dmi-charcoal/10 pt-10">
              {STATS.map((s) => (
                <div key={s.key} data-testid={`stat-${s.key}`}>
                  <div className="font-serif text-4xl sm:text-5xl text-dmi-charcoal font-light">
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
  );
};

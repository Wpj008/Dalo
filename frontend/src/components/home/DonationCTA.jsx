import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowUpRight } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionEyebrow } from "../common/SectionEyebrow";
import { useLang } from "../../i18n/LanguageContext";
import { IMAGES } from "../../data/mock";

export const DonationCTA = () => {
  const { t } = useLang();
  return (
    <section
      className="relative overflow-hidden text-white"
      data-testid="home-donation-cta"
    >
      <div className="absolute inset-0">
        <img
          src={IMAGES.prayerHands}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dmi-charcoal via-dmi-charcoal/85 to-dmi-charcoal/40" />
      </div>
      <div className="relative dmi-container py-24 sm:py-36 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionEyebrow>{t("home.donateEyebrow")}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="dmi-h2 mt-6 whitespace-pre-line">
              {t("home.donateTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 dmi-lead text-white/75 max-w-xl">
              {t("home.donateBody")}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/partnership"
                className="btn-gold"
                data-testid="donation-cta-primary"
              >
                <Heart size={16} />
                {t("cta.donate")}
              </Link>
              <Link
                to="/member"
                className="btn-outline-light"
                data-testid="donation-cta-secondary"
              >
                {t("cta.becomeMember")}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionEyebrow } from "../common/SectionEyebrow";
import { useLang } from "../../i18n/LanguageContext";
import { VIDEOS } from "../../data/mock";
import { VideoCard } from "../cards/VideoCard";

export const LatestVideos = () => {
  const { t } = useLang();
  const videos = VIDEOS.slice(0, 4);
  return (
    <section className="dmi-section bg-dmi-offwhite" data-testid="home-videos">
      <div className="dmi-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <SectionEyebrow>{t("home.videosEyebrow")}</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="dmi-h2 mt-6 text-dmi-charcoal max-w-3xl">
                {t("home.videosTitle")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/media"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-dmi-charcoal hover:text-dmi-gold transition-colors group"
              data-testid="home-videos-cta"
            >
              <span className="underline-grow">{t("cta.seeAll")}</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}>
              <VideoCard video={v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

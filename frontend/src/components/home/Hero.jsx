import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "../../i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLang();
  const title = t("home.heroTitle");
  const lines = title.split("\n");

  return (
    <section
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-dmi-charcoal"
      data-testid="home-hero"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="/images/9S6A4757.jpg"
          alt="Pastor Roland Dalo"
          className="w-full h-full object-cover object-center animate-ken-burns"
        />
      </div>
      {/* Premium overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dmi-charcoal/40 via-dmi-charcoal/55 to-dmi-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-dmi-charcoal/70 via-transparent to-transparent" />
      <div className="absolute inset-0 grain" />

      {/* Content */}
      <div className="relative h-full dmi-container flex flex-col justify-end pb-24 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="dmi-eyebrow !text-dmi-gold mb-6"
        >
          <span>{t("home.heroEyebrow")}</span>
        </motion.div>

        <h1 className="dmi-h1 text-white max-w-5xl">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.35 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block italic"
              style={{ fontWeight: 300 }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-8 max-w-xl text-white/80 dmi-lead"
        >
          {t("home.heroSub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/partnership"
            className="btn-gold"
            data-testid="hero-donate-btn"
          >
            {t("cta.donate")}
          </Link>
          <Link
            to="/about"
            className="btn-outline-light"
            data-testid="hero-vision-btn"
          >
            {t("cta.discoverVision")}
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.32em] mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

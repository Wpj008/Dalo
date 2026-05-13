import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../common/Reveal";
import { SectionEyebrow } from "../common/SectionEyebrow";
import { useLang } from "../../i18n/LanguageContext";
import { TESTIMONIES } from "../../data/mock";

export const Testimonials = () => {
  const { t, lang } = useLang();
  const [i, setI] = useState(0);
  const total = TESTIMONIES.length;
  const next = () => setI((v) => (v + 1) % total);
  const prev = () => setI((v) => (v - 1 + total) % total);
  const current = TESTIMONIES[i];

  return (
    <section
      className="dmi-section bg-dmi-beige/50 relative overflow-hidden"
      data-testid="home-testimonials"
    >
      <div className="dmi-container">
        <div className="text-center mb-14">
          <Reveal>
            <SectionEyebrow>{t("home.testimoniesEyebrow")}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="dmi-h2 mt-6 text-dmi-charcoal max-w-3xl mx-auto whitespace-pre-line">
              {t("home.testimoniesTitle")}
            </h2>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote
            className="absolute -top-6 -left-6 text-dmi-gold/30"
            size={80}
            strokeWidth={1}
          />
          <div className="relative bg-white rounded-md p-8 sm:p-14 shadow-premium-light">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                data-testid={`testimonial-${current.id}`}
              >
                <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-dmi-charcoal leading-snug font-light">
                  "{current.quote[lang]}"
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-dmi-gold/30"
                  />
                  <div>
                    <div className="font-medium text-dmi-charcoal">
                      {current.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.32em] text-dmi-charcoal/50 mt-1">
                      {current.location[lang]}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  data-testid={`testimonial-dot-${idx}`}
                  className={`h-[2px] transition-all ${
                    idx === i ? "w-10 bg-dmi-gold" : "w-5 bg-dmi-charcoal/20"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="w-11 h-11 rounded-full border border-dmi-charcoal/15 hover:border-dmi-gold hover:text-dmi-gold flex items-center justify-center transition-colors"
                aria-label="Previous"
                data-testid="testimonial-prev"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-11 h-11 rounded-full border border-dmi-charcoal/15 hover:border-dmi-gold hover:text-dmi-gold flex items-center justify-center transition-colors"
                aria-label="Next"
                data-testid="testimonial-next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

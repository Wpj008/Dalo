import React from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "./SectionEyebrow";

export const PageHero = ({ eyebrow, title, sub, image, children }) => {
  const lines = (title || "").split("\n");
  return (
    <section
      className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden bg-dmi-charcoal text-white"
      data-testid="page-hero"
    >
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-dmi-charcoal/85 via-dmi-charcoal/75 to-dmi-charcoal" />
        </div>
      )}
      <div className="relative dmi-container max-w-5xl">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
          </motion.div>
        )}
        <h1 className="dmi-h1 mt-6">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="block italic font-light"
            >
              {line}
            </motion.span>
          ))}
        </h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 dmi-lead text-white/75 max-w-2xl"
          >
            {sub}
          </motion.p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
};

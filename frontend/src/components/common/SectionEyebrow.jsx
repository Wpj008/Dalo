import React from "react";

export const SectionEyebrow = ({ children, className = "", light = false }) => (
  <div
    className={`dmi-eyebrow ${light ? "text-dmi-gold" : "text-dmi-gold"} ${className}`}
    data-testid="section-eyebrow"
  >
    <span>{children}</span>
  </div>
);

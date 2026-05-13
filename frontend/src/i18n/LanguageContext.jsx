import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "fr";
    return localStorage.getItem("dmi-lang") || "fr";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dmi-lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = useMemo(() => {
    return (key) => {
      const parts = key.split(".");
      let cur = translations[lang];
      for (const p of parts) {
        if (cur && typeof cur === "object" && p in cur) {
          cur = cur[p];
        } else {
          return key;
        }
      }
      return cur ?? key;
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

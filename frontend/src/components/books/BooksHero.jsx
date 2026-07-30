import React from "react";
import { Reveal } from "../common/Reveal";
import { useLang } from "../../i18n/LanguageContext";

export const BooksHero = () => {
  const { t } = useLang();

  return (
    <section
      className="relative h-[520px] overflow-hidden"
      data-testid="books-hero"
    >
      {/* Image de fond */}
      <img
        src="/images/books/books-hero.jpg"
        alt="Books"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenu */}
      <div className="relative z-10 dmi-container h-full flex items-center justify-center text-center">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-dmi-gold uppercase tracking-[0.35em] text-sm">
              {t("books.eyebrow")}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 font-serif text-5xl md:text-7xl leading-tight text-white">
              {t("books.title")}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-white/80 max-w-3xl mx-auto leading-8">
              {t("books.subtitle")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
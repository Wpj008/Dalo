import React, { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { PARTNERSHIP_TIERS, IMAGES } from "../data/mock";
import { Check, Heart } from "lucide-react";
import { toast } from "sonner";

export default function Partnership() {
  const { t, lang } = useLang();
  const [amount, setAmount] = useState("50");
  const presets = ["20", "50", "100", "250"];

  const onGive = (e) => {
    e.preventDefault();
    if (!amount || Number(amount) <= 0) {
      toast.error(lang === "fr" ? "Montant invalide" : "Invalid amount");
      return;
    }
    toast.success(
      (lang === "fr"
        ? "Merci pour votre don de "
        : "Thank you for your gift of ") + `${amount}€`
    );
  };

  return (
    <div data-testid="page-partnership">
      <PageHero
        eyebrow={t("partnership.eyebrow")}
        title={t("partnership.title")}
        sub={t("partnership.sub")}
        image={IMAGES.sunset}
      />

      {/* Tiers */}
      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PARTNERSHIP_TIERS.map((tier, i) => (
              <Reveal key={tier.id} delay={i * 0.08}>
                <div
                  className={`relative h-full rounded-md p-8 lg:p-10 border transition-all duration-500 ${
                    tier.featured
                      ? "bg-dmi-charcoal text-white border-dmi-gold shadow-gold-glow"
                      : "bg-white border-dmi-charcoal/10 hover:border-dmi-gold/50"
                  }`}
                  data-testid={`tier-${tier.id}`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-8 text-[10px] uppercase tracking-[0.32em] bg-dmi-gold text-dmi-charcoal px-3 py-1 rounded-sm">
                      {lang === "fr" ? "Recommandé" : "Recommended"}
                    </div>
                  )}
                  <div
                    className={`text-[10px] uppercase tracking-[0.32em] ${
                      tier.featured ? "text-dmi-gold" : "text-dmi-gold"
                    }`}
                  >
                    {t(`partnership.${tier.titleKey}`)}
                  </div>
                  <div
                    className={`font-serif text-3xl mt-5 ${
                      tier.featured ? "text-white" : "text-dmi-charcoal"
                    }`}
                  >
                    {tier.price[lang]}
                  </div>
                  <ul className="mt-8 space-y-3">
                    {tier.perks[lang].map((p, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check
                          size={16}
                          className={tier.featured ? "text-dmi-gold mt-0.5" : "text-dmi-gold mt-0.5"}
                        />
                        <span
                          className={
                            tier.featured ? "text-white/85" : "text-dmi-charcoal/80"
                          }
                        >
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Donation form */}
      <section className="dmi-section bg-dmi-navy text-white">
        <div className="dmi-container max-w-3xl">
          <Reveal>
            <h2 className="dmi-h2">
              {lang === "fr" ? "Faire un don maintenant." : "Give now."}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-white/70">
              {lang === "fr"
                ? "Choisissez un montant ou personnalisez votre don."
                : "Choose an amount or customize your gift."}
            </p>
          </Reveal>
          <form
            onSubmit={onGive}
            className="mt-10 space-y-6"
            data-testid="donation-form"
          >
            <div className="flex flex-wrap gap-3">
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setAmount(p)}
                  data-testid={`donation-preset-${p}`}
                  className={`px-6 py-3 rounded-sm border text-sm transition-all ${
                    amount === p
                      ? "bg-dmi-gold text-dmi-charcoal border-dmi-gold"
                      : "bg-transparent text-white border-white/20 hover:border-white/60"
                  }`}
                >
                  {p}€
                </button>
              ))}
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-gold">
                {lang === "fr" ? "Montant personnalisé" : "Custom amount"}
              </label>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-3 w-full bg-transparent border-b border-white/15 focus:border-dmi-gold outline-none py-3 text-white text-2xl font-serif"
                data-testid="donation-amount-input"
              />
            </div>
            <button
              type="submit"
              className="btn-gold mt-6"
              data-testid="donation-submit-btn"
            >
              <Heart size={16} />
              {t("cta.donate")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { IMAGES } from "../data/mock";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function BecomeMember() {
  const { t, lang } = useLang();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    born: "",
    journey: "",
    motivation: "",
    commit: false,
  });

  const handle = (k) => (e) =>
    setForm({ ...form, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const steps = [t("member.step1"), t("member.step2"), t("member.step3")];

  const next = () => setStep((s) => Math.min(s + 1, 2));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.commit) {
      toast.error(lang === "fr" ? "Veuillez confirmer votre engagement." : "Please confirm your commitment.");
      return;
    }
    toast.success(t("member.done"));
    setStep(0);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      born: "",
      journey: "",
      motivation: "",
      commit: false,
    });
  };

  return (
    <div data-testid="page-member">
      <PageHero
        eyebrow={t("member.eyebrow")}
        title={t("member.title")}
        sub={t("member.sub")}
        image={IMAGES.worship2}
      />

      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container max-w-3xl">
          {/* Stepper */}
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              {steps.map((label, i) => (
                <div key={i} className="flex-1 flex items-center">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm transition-colors ${
                        i <= step
                          ? "bg-dmi-gold text-dmi-charcoal"
                          : "bg-white text-dmi-charcoal/50 border border-dmi-charcoal/10"
                      }`}
                      data-testid={`member-step-${i + 1}`}
                    >
                      {i < step ? <Check size={14} /> : i + 1}
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60 hidden sm:inline">
                      {label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px bg-dmi-charcoal/10 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <form
              onSubmit={onSubmit}
              className="bg-white p-8 lg:p-12 rounded-md border border-dmi-charcoal/10"
              data-testid="member-form"
            >
              {step === 0 && (
                <div className="space-y-6">
                  <h3 className="dmi-h3 text-dmi-charcoal">{steps[0]}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label={lang === "fr" ? "Prénom" : "First name"}>
                      <input
                        required
                        value={form.firstName}
                        onChange={handle("firstName")}
                        className="member-input"
                        data-testid="member-firstname-input"
                      />
                    </Field>
                    <Field label={lang === "fr" ? "Nom" : "Last name"}>
                      <input
                        required
                        value={form.lastName}
                        onChange={handle("lastName")}
                        className="member-input"
                        data-testid="member-lastname-input"
                      />
                    </Field>
                  </div>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={handle("email")}
                      className="member-input"
                      data-testid="member-email-input"
                    />
                  </Field>
                  <Field label={lang === "fr" ? "Ville" : "City"}>
                    <input
                      value={form.city}
                      onChange={handle("city")}
                      className="member-input"
                      data-testid="member-city-input"
                    />
                  </Field>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="dmi-h3 text-dmi-charcoal">{steps[1]}</h3>
                  <Field label={lang === "fr" ? "Né(e) de nouveau depuis" : "Born again since"}>
                    <input
                      value={form.born}
                      onChange={handle("born")}
                      placeholder={lang === "fr" ? "Année" : "Year"}
                      className="member-input"
                      data-testid="member-born-input"
                    />
                  </Field>
                  <Field label={lang === "fr" ? "Votre parcours spirituel" : "Your spiritual journey"}>
                    <textarea
                      rows={4}
                      value={form.journey}
                      onChange={handle("journey")}
                      className="member-input resize-none"
                      data-testid="member-journey-input"
                    />
                  </Field>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="dmi-h3 text-dmi-charcoal">{steps[2]}</h3>
                  <Field
                    label={
                      lang === "fr"
                        ? "Pourquoi souhaitez-vous rejoindre DMI ?"
                        : "Why do you want to join DMI?"
                    }
                  >
                    <textarea
                      rows={4}
                      value={form.motivation}
                      onChange={handle("motivation")}
                      className="member-input resize-none"
                      data-testid="member-motivation-input"
                    />
                  </Field>
                  <label className="flex items-start gap-3 text-sm text-dmi-charcoal/80">
                    <input
                      type="checkbox"
                      checked={form.commit}
                      onChange={handle("commit")}
                      className="mt-1 accent-dmi-gold"
                      data-testid="member-commit-checkbox"
                    />
                    <span>
                      {lang === "fr"
                        ? "Je m'engage à honorer les valeurs et la vision de Dalo Ministries International."
                        : "I commit to honoring the values and vision of Dalo Ministries International."}
                    </span>
                  </label>
                </div>
              )}

              <div className="flex items-center justify-between mt-10">
                <button
                  type="button"
                  onClick={prev}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 text-sm text-dmi-charcoal/70 disabled:opacity-30 hover:text-dmi-gold transition-colors"
                  data-testid="member-prev-btn"
                >
                  <ArrowLeft size={14} />
                  {lang === "fr" ? "Précédent" : "Back"}
                </button>
                {step < 2 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="btn-gold"
                    data-testid="member-next-btn"
                  >
                    {lang === "fr" ? "Suivant" : "Next"}
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-gold"
                    data-testid="member-submit-btn"
                  >
                    {t("cta.submit")}
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <style>{`
        .member-input {
          width: 100%;
          background: transparent;
          border-bottom: 1px solid rgba(10,10,10,0.15);
          padding: 0.75rem 0;
          color: #0A0A0A;
          outline: none;
          transition: border-color 0.3s;
        }
        .member-input:focus {
          border-color: #D4AF37;
        }
      `}</style>
    </div>
  );
}

const Field = ({ label, children }) => (
  <div>
    <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60">
      {label}
    </label>
    <div className="mt-2">{children}</div>
  </div>
);

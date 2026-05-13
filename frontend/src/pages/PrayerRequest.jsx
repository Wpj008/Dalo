import React, { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { IMAGES } from "../data/mock";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function PrayerRequest() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", country: "", request: "" });

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success(t("prayer.sent"));
    setForm({ name: "", email: "", country: "", request: "" });
  };

  return (
    <div data-testid="page-prayer">
      <PageHero
        eyebrow={t("prayer.eyebrow")}
        title={t("prayer.title")}
        sub={t("prayer.sub")}
        image={IMAGES.prayerHands}
      />

      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container max-w-3xl">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="bg-white p-8 lg:p-12 rounded-md border border-dmi-charcoal/10 space-y-8"
              data-testid="prayer-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60">
                    {t("prayer.name")}
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={handle("name")}
                    className="mt-2 w-full bg-transparent border-b border-dmi-charcoal/15 focus:border-dmi-gold outline-none py-3 text-dmi-charcoal"
                    data-testid="prayer-name-input"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60">
                    {t("prayer.email")}
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={handle("email")}
                    className="mt-2 w-full bg-transparent border-b border-dmi-charcoal/15 focus:border-dmi-gold outline-none py-3 text-dmi-charcoal"
                    data-testid="prayer-email-input"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60">
                  {t("prayer.country")}
                </label>
                <input
                  value={form.country}
                  onChange={handle("country")}
                  className="mt-2 w-full bg-transparent border-b border-dmi-charcoal/15 focus:border-dmi-gold outline-none py-3 text-dmi-charcoal"
                  data-testid="prayer-country-input"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60">
                  {t("prayer.request")}
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.request}
                  onChange={handle("request")}
                  className="mt-2 w-full bg-transparent border-b border-dmi-charcoal/15 focus:border-dmi-gold outline-none py-3 text-dmi-charcoal resize-none"
                  data-testid="prayer-request-input"
                />
              </div>
              <button
                type="submit"
                className="btn-gold"
                data-testid="prayer-submit-btn"
              >
                <Send size={14} />
                {t("cta.submit")}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

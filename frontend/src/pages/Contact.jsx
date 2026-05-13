import React, { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { PageHero } from "../components/common/PageHero";
import { Reveal } from "../components/common/Reveal";
import { IMAGES } from "../data/mock";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success(t("contact.sent"));
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div data-testid="page-contact">
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        sub={t("contact.sub")}
        image={IMAGES.abstractNavyGold}
      />

      <section className="dmi-section bg-dmi-offwhite">
        <div className="dmi-container grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info */}
          <Reveal className="lg:col-span-4">
            <div className="space-y-8">
              <div>
                <div className="dmi-eyebrow">
                  <span>Paris HQ</span>
                </div>
                <div className="mt-4 space-y-3 text-dmi-charcoal/80">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-1 text-dmi-gold" />
                    <span>12 Avenue de la Lumière, 75011 Paris</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-dmi-gold" />
                    <a href="mailto:contact@rolanddalo.com">contact@rolanddalo.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-dmi-gold" />
                    <span>+33 1 23 45 67 89</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="dmi-eyebrow">
                  <span>London</span>
                </div>
                <div className="mt-4 space-y-3 text-dmi-charcoal/80">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-1 text-dmi-gold" />
                    <span>88 Royal Crescent Hall, London E1 6AN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-dmi-gold" />
                    <a href="mailto:london@rolanddalo.com">london@rolanddalo.com</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="dmi-eyebrow">
                  <span>Abidjan</span>
                </div>
                <div className="mt-4 space-y-3 text-dmi-charcoal/80">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-1 text-dmi-gold" />
                    <span>Boulevard de la Grâce, Cocody, Abidjan</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="bg-white p-8 lg:p-12 rounded-md border border-dmi-charcoal/10 space-y-8"
              data-testid="contact-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60">
                    {t("contact.name")}
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={handle("name")}
                    className="mt-2 w-full bg-transparent border-b border-dmi-charcoal/15 focus:border-dmi-gold outline-none py-3 text-dmi-charcoal"
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60">
                    {t("contact.email")}
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={handle("email")}
                    className="mt-2 w-full bg-transparent border-b border-dmi-charcoal/15 focus:border-dmi-gold outline-none py-3 text-dmi-charcoal"
                    data-testid="contact-email-input"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60">
                  {t("contact.subject")}
                </label>
                <input
                  required
                  value={form.subject}
                  onChange={handle("subject")}
                  className="mt-2 w-full bg-transparent border-b border-dmi-charcoal/15 focus:border-dmi-gold outline-none py-3 text-dmi-charcoal"
                  data-testid="contact-subject-input"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-charcoal/60">
                  {t("contact.message")}
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={handle("message")}
                  className="mt-2 w-full bg-transparent border-b border-dmi-charcoal/15 focus:border-dmi-gold outline-none py-3 text-dmi-charcoal resize-none"
                  data-testid="contact-message-input"
                />
              </div>
              <button
                type="submit"
                className="btn-gold"
                data-testid="contact-submit-btn"
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

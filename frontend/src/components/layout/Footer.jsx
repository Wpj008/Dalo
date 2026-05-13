import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Send,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { toast } from "sonner";

export const Footer = () => {
  const { t } = useLang();
  const [email, setEmail] = useState("");

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success(
      t("footer.newsletter") + " — " + email
    );
    setEmail("");
  };

  return (
    <footer
      className="bg-dmi-charcoal text-white pt-20 pb-10 border-t border-white/5"
      data-testid="site-footer"
    >
      <div className="dmi-container grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand block */}
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-dmi-gold flex items-center justify-center font-serif text-dmi-charcoal text-xl leading-none">
              D
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl">Dalo Ministries</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-dmi-gold/80">
                International
              </div>
            </div>
          </Link>
          <p className="font-serif italic text-2xl text-white/80 max-w-md leading-snug">
            {t("footer.tagline")}
          </p>

          <form
            onSubmit={onSubscribe}
            className="mt-8 max-w-md"
            data-testid="newsletter-form"
          >
            <label className="text-[11px] uppercase tracking-[0.32em] text-dmi-gold/80">
              {t("footer.newsletter")}
            </label>
            <div className="mt-3 flex items-end border-b border-white/15 focus-within:border-dmi-gold transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.newsletterPh")}
                className="flex-1 bg-transparent border-0 outline-none py-3 text-white placeholder:text-white/40 text-sm"
                data-testid="newsletter-email-input"
                required
              />
              <button
                type="submit"
                className="ml-3 mb-2 text-dmi-gold hover:text-dmi-gold-light transition-colors"
                aria-label="Subscribe"
                data-testid="newsletter-submit-btn"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* Explore */}
        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.32em] text-dmi-gold mb-5">
            {t("footer.explore")}
          </div>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <Link to="/about" className="hover:text-white transition-colors" data-testid="footer-about-link">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to="/ministries" className="hover:text-white transition-colors" data-testid="footer-ministries-link">
                {t("nav.ministries")}
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-white transition-colors" data-testid="footer-events-link">
                {t("nav.events")}
              </Link>
            </li>
            <li>
              <Link to="/media" className="hover:text-white transition-colors" data-testid="footer-media-link">
                {t("nav.media")}
              </Link>
            </li>
            <li>
              <Link to="/impact" className="hover:text-white transition-colors" data-testid="footer-impact-link">
                {t("nav.impact")}
              </Link>
            </li>
            <li>
              <Link to="/churches" className="hover:text-white transition-colors" data-testid="footer-churches-link">
                {t("nav.churches")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.32em] text-dmi-gold mb-5">
            {t("footer.resources")}
          </div>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <Link to="/prayer" className="hover:text-white transition-colors" data-testid="footer-prayer-link">
                {t("nav.prayer")}
              </Link>
            </li>
            <li>
              <Link to="/member" className="hover:text-white transition-colors" data-testid="footer-member-link">
                {t("nav.member")}
              </Link>
            </li>
            <li>
              <Link to="/partnership" className="hover:text-white transition-colors" data-testid="footer-partnership-link">
                {t("nav.partnership")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors" data-testid="footer-contact-link">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.32em] text-dmi-gold mb-5">
            {t("footer.connect")}
          </div>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 text-dmi-gold/80" />
              <span>12 Avenue de la Lumière, 75011 Paris</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-dmi-gold/80" />
              <a href="mailto:contact@rolanddalo.com" className="hover:text-white">
                contact@rolanddalo.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-dmi-gold/80" />
              <span>+33 1 23 45 67 89</span>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-5 text-white/70">
            <a href="#" aria-label="Facebook" className="hover:text-dmi-gold transition-colors" data-testid="social-facebook">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-dmi-gold transition-colors" data-testid="social-instagram">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-dmi-gold transition-colors" data-testid="social-youtube">
              <Youtube size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-dmi-gold transition-colors" data-testid="social-twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="dmi-container mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
        <div>
          © {new Date().getFullYear()} Dalo Ministries International. {t("footer.rights")}
        </div>
        <div className="flex items-center gap-6">
          <Link to="/contact" className="hover:text-white/80">{t("footer.legal")}</Link>
          <Link to="/contact" className="hover:text-white/80">{t("footer.privacy")}</Link>
        </div>
      </div>
    </footer>
  );
};

import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isHome = location.pathname === "/";
  // For non-home pages we always want solid bg to ensure legibility
  const transparent = isHome && !scrolled && !open;

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/ministries", label: t("nav.ministries") },
    { to: "/events", label: t("nav.events") },
    { to: "/media", label: t("nav.media") },
    { to: "/impact", label: t("nav.impact") },
    { to: "/churches", label: t("nav.churches") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-dmi-charcoal/85 backdrop-blur-xl border-b border-white/5"
      }`}
      data-testid="site-header"
    >
      <div className="dmi-container flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          data-testid="logo-link"
        >
          <div className="w-9 h-9 rounded-md bg-dmi-gold flex items-center justify-center font-serif text-dmi-charcoal text-lg leading-none">
            D
          </div>
          <div className="leading-tight">
            <div className="font-serif text-white text-lg tracking-tight">
              Dalo Ministries
            </div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-dmi-gold/80">
              International
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden xl:flex items-center gap-8"
          data-testid="desktop-nav"
        >
          {nav.slice(0, 7).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`nav-${item.to.replace("/", "") || "home"}`}
              className={({ isActive }) =>
                `text-[13px] tracking-wide transition-colors underline-grow ${
                  isActive ? "text-dmi-gold" : "text-white/80 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher tone="light" />
          <Link
            to="/member"
            className="text-[12px] tracking-wide text-white/80 hover:text-white transition-colors hidden xl:inline"
            data-testid="header-member-btn"
          >
            {t("nav.member")}
          </Link>
          <Link
            to="/partnership"
            className="btn-gold !py-2.5 !px-5 text-[12px]"
            data-testid="header-donate-btn"
          >
            {t("cta.donate")}
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile fullscreen */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed inset-0 top-20 bg-dmi-charcoal flex flex-col"
            data-testid="mobile-menu"
          >
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `block py-4 font-serif text-3xl border-b border-white/5 ${
                          isActive ? "text-dmi-gold" : "text-white"
                        }`
                      }
                      data-testid={`mobile-nav-${item.to.replace("/", "") || "home"}`}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <NavLink
                  to="/prayer"
                  className="block py-4 font-serif text-3xl border-b border-white/5 text-white"
                  data-testid="mobile-nav-prayer"
                >
                  {t("nav.prayer")}
                </NavLink>
                <NavLink
                  to="/member"
                  className="block py-4 font-serif text-3xl border-b border-white/5 text-white"
                  data-testid="mobile-nav-member"
                >
                  {t("nav.member")}
                </NavLink>
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <Link
                  to="/partnership"
                  className="btn-gold w-full"
                  data-testid="mobile-donate-btn"
                >
                  {t("cta.donate")}
                </Link>
                <div className="pt-3">
                  <LanguageSwitcher tone="light" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

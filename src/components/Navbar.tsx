import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t(translations.nav.home) },
    { href: "#services", label: t(translations.nav.services) },
    { href: "#about", label: t(translations.nav.about) },
    { href: "#pricing", label: t(translations.nav.pricing) },
    { href: "#testimonials", label: t(translations.nav.testimonials) },
    { href: "#contact", label: t(translations.nav.contact) },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-medium tracking-wide">
          <span className={scrolled ? "text-foreground" : "text-cream"}>Eldfjall</span>{" "}
          <span className="text-primary">Beauty</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-cream/80 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#booking"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-sm text-sm font-body tracking-wide hover:opacity-90 transition-opacity"
          >
            {t(translations.nav.bookNow)}
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-4 space-y-3 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-primary-foreground px-5 py-2 rounded-sm text-sm text-center font-body tracking-wide"
            >
              {t(translations.nav.bookNow)}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

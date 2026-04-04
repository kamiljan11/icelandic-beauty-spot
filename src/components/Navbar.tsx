import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#home", label: t(translations.nav.home) },
    { href: "#services", label: t(translations.nav.services) },
    { href: "#about", label: t(translations.nav.about) },
    { href: "#pricing", label: t(translations.nav.pricing) },
    { href: "#testimonials", label: t(translations.nav.testimonials) },
    { href: "#contact", label: t(translations.nav.contact) },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-medium tracking-wide text-foreground">
          Eldfjall <span className="text-primary">Beauty</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
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
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;

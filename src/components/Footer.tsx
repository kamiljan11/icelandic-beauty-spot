import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const footerTranslations = {
  nav: { en: "Navigation", is: "Leiðsögn", pl: "Nawigacja" },
  contactTitle: { en: "Contact", is: "Hafa samband", pl: "Kontakt" },
  hoursTitle: { en: "Opening hours", is: "Opnunartímar", pl: "Godziny otwarcia" },
  bookVia: { en: "Book via", is: "Bóka í gegnum", pl: "Rezerwacja przez" },
  vat: { en: "VAT/Kennitala", is: "VSK/Kennitala", pl: "NIP/Kennitala" },
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-volcanic pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-cream/90 mb-3">
              Eldfjall <span className="text-sage-light">Beauty</span>
            </p>
            <p className="font-body text-xs text-cream/40 leading-relaxed mb-4">
              Laugavegur 42, 101 Reykjavík
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/eldfjallbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} className="text-cream/70" />
              </a>
              <a
                href="https://facebook.com/eldfjallbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} className="text-cream/70" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
              {t(footerTranslations.nav)}
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#home", label: t(translations.nav.home) },
                { href: "#services", label: t(translations.nav.services) },
                { href: "#about", label: t(translations.nav.about) },
                { href: "#pricing", label: t(translations.nav.pricing) },
                { href: "#testimonials", label: t(translations.nav.testimonials) },
                { href: "#booking", label: t(translations.nav.bookNow) },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/50 hover:text-cream/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
              {t(footerTranslations.contactTitle)}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-cream/40 shrink-0" />
                <span className="font-body text-sm text-cream/50">Laugavegur 42, 101 Reykjavík</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-cream/40 shrink-0" />
                <a href="tel:+3545551234" className="font-body text-sm text-cream/50 hover:text-cream/80 transition-colors">
                  +354 555 1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-cream/40 shrink-0" />
                <a href="mailto:info@eldfjallbeauty.is" className="font-body text-sm text-cream/50 hover:text-cream/80 transition-colors">
                  info@eldfjallbeauty.is
                </a>
              </div>
              <div className="mt-3">
                <p className="font-body text-xs text-cream/30">
                  {t(footerTranslations.bookVia)}{" "}
                  <a href="https://sinna.is" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold transition-colors">
                    Sinna.is
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
              {t(footerTranslations.hoursTitle)}
            </h4>
            <div className="font-body text-sm text-cream/50 space-y-1">
              <p>{t({ en: "Mon–Fri", is: "Mán–Fös", pl: "Pon–Pt" })}: 09:00 – 19:00</p>
              <p>{t({ en: "Saturday", is: "Laugardagur", pl: "Sobota" })}: 10:00 – 16:00</p>
              <p>{t({ en: "Sunday", is: "Sunnudagur", pl: "Niedziela" })}: {t({ en: "Closed", is: "Lokað", pl: "Zamknięte" })}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/30">
            {t(translations.footer.rights)}
          </p>
          <div className="flex items-center gap-4">
            <p className="font-body text-xs text-cream/20">
              {t(footerTranslations.vat)}: 690521-0680
            </p>
            <span className="text-cream/10">|</span>
            <p className="font-body text-xs text-cream/20">
              VSK: 112233
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Contact = () => {
  const { t } = useLanguage();
  const c = translations.contact;

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {t(c.subtitle)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {t(c.title)}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t(c.location)}</p>
                <p className="font-body text-sm text-muted-foreground">
                  Laugavegur 42, 101 Reykjavík, Ísland
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t(c.phone)}</p>
                <p className="font-body text-sm text-muted-foreground">+354 555 1234</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t(c.email)}</p>
                <p className="font-body text-sm text-muted-foreground">info@eldfjallbeauty.is</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t(c.hours)}</p>
                <p className="font-body text-sm text-muted-foreground whitespace-pre-line">
                  {t(c.hoursDetail)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-sm font-semibold text-foreground">Instagram</p>
                <p className="font-body text-sm text-muted-foreground">@eldfjallbeauty</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-sm overflow-hidden border border-border h-80 md:h-auto">
            <iframe
              title="Eldfjall Beauty location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1742.5!2d-21.9!3d64.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjTCsDA4JzQyLjAiTiAyMcKwNTQnMDAuMCJX!5e0!3m2!1sis!2sis!4v1600000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

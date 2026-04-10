import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Globe, Camera, BarChart3, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import { useDemo } from "@/hooks/useDemo";
import { useBooking } from "@/hooks/useBooking";

const ctaTranslations = {
  subtitle: { en: "YOUR SKIN DESERVES ICELAND", is: "HÚÐIN ÞÍN VERÐSKULDAR ÍSLAND", pl: "TWOJA SKÓRA ZASŁUGUJE NA ISLANDIĘ" },
  title1: { en: "One Visit.", is: "Ein heimsókn.", pl: "Jedna wizyta." },
  title2: { en: "You'll Feel the Difference.", is: "Þú munt finna muninn.", pl: "Poczujesz różnicę." },
  description: {
    en: "One treatment with Sigríður — volcanic minerals, geothermal water, and ingredients we source ourselves. 90 minutes, real results, nothing artificial.",
    is: "Ein meðferð hjá Sigríði — eldfjallasteinefni, jarðhitavatn og hráefni sem við sækjum sjálf. 90 mínútur, raunverulegur árangur, ekkert tilbúið.",
    pl: "Jeden zabieg u Sigríður — minerały wulkaniczne, woda geotermalna i składniki, które sami pozyskujemy. 90 minut, prawdziwe efekty, nic sztucznego.",
  },
  features: [
    { icon: Globe, label: { en: "Locally Sourced", is: "Staðbundið", pl: "Lokalne składniki" } },
    { icon: Camera, label: { en: "Real Results", is: "Raunverulegur árangur", pl: "Prawdziwe efekty" } },
    { icon: Leaf, label: { en: "100% Natural", is: "100% náttúrulegt", pl: "100% naturalne" } },
    { icon: Zap, label: { en: "Same-Week Booking", is: "Bókun í sömu viku", pl: "Rezerwacja w tym tygodniu" } },
  ],
  price: { en: "First facial from 12.900 kr.", is: "Fyrsta andlitsmeðferð frá 12.900 kr.", pl: "Pierwszy zabieg od 12 900 kr." },
};

const Booking = () => {
  const { t } = useLanguage();
  const { showDemo } = useDemo();
  const { selectedService, clearService } = useBooking();
  const selectRef = useRef<HTMLSelectElement>(null);
  const b = translations.booking;

  const treatmentOptions = translations.pricing.categories.flatMap((cat) =>
    cat.items.map((item) => t(item.name))
  );

  useEffect(() => {
    if (selectedService && selectRef.current) {
      const match = treatmentOptions.find(
        (opt) => opt.toLowerCase() === selectedService.toLowerCase()
      );
      if (match) {
        selectRef.current.value = match;
      } else {
        const partial = treatmentOptions.find((opt) =>
          opt.toLowerCase().includes(selectedService.toLowerCase()) ||
          selectedService.toLowerCase().includes(opt.toLowerCase())
        );
        if (partial) selectRef.current.value = partial;
      }
    }
  }, [selectedService, treatmentOptions]);

  return (
    <section id="booking" className="bg-volcanic py-14 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: CTA content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="font-body text-[10px] md:text-sm tracking-[0.3em] uppercase text-gold mb-4 md:mb-6">
              {t(ctaTranslations.subtitle)}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-light text-cream leading-tight mb-1 md:mb-2">
              {t(ctaTranslations.title1)}
            </motion.h2>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-light italic text-gold leading-tight mb-5 md:mb-8">
              {t(ctaTranslations.title2)}
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xs md:text-sm text-cream/60 leading-relaxed max-w-md mb-6 md:mb-10">
              {t(ctaTranslations.description)}
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {ctaTranslations.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-cream/70">
                  <feat.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold shrink-0" />
                  <span className="font-body text-[11px] md:text-xs">{t(feat.label)}</span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="font-body text-xs md:text-sm text-gold/80">
              {t(ctaTranslations.price)}
            </motion.p>

            <motion.p variants={fadeInUp} className="font-body text-[10px] md:text-xs text-cream/40 mt-3 flex items-center gap-1.5">
              <span className="text-gold">⚡</span>
              {t({
                en: "Pay on-site · No deposit · Free skin consultation",
                is: "Greitt á staðnum · Engin innborgun · Ókeypis húðráðgjöf",
                pl: "Płatność na miejscu · Bez zaliczki · Bezpłatna konsultacja",
              })}
            </motion.p>
          </motion.div>

          {/* Right: Booking form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-sage-light/95 backdrop-blur-sm rounded-sm p-6 md:p-8">
              <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-1 md:mb-2 text-center">
                {t(b.title)}
              </h3>
              <p className="font-body text-[10px] md:text-xs text-muted-foreground text-center mb-5 md:mb-6">
                {t(b.description)}
              </p>

              <form
                className="space-y-3 md:space-y-4"
                onSubmit={(e) => { e.preventDefault(); showDemo(); clearService(); }}
              >
                <div>
                  <label className="font-body text-[10px] md:text-xs text-muted-foreground block mb-1">{t(b.name)}</label>
                  <input
                    type="text"
                    placeholder={t(b.namePlaceholder)}
                    className="w-full bg-background border border-border rounded-sm px-3 md:px-4 py-2.5 md:py-3 font-body text-xs md:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] md:text-xs text-muted-foreground block mb-1">{t(b.email)}</label>
                  <input
                    type="email"
                    placeholder={t(b.emailPlaceholder)}
                    className="w-full bg-background border border-border rounded-sm px-3 md:px-4 py-2.5 md:py-3 font-body text-xs md:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] md:text-xs text-muted-foreground block mb-1">{t(b.phone)}</label>
                  <input
                    type="tel"
                    placeholder={t(b.phonePlaceholder)}
                    className="w-full bg-background border border-border rounded-sm px-3 md:px-4 py-2.5 md:py-3 font-body text-xs md:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] md:text-xs text-muted-foreground block mb-1">{t(b.treatment)}</label>
                  <select
                    ref={selectRef}
                    className="w-full bg-background border border-border rounded-sm px-3 md:px-4 py-2.5 md:py-3 font-body text-xs md:text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                  >
                    <option value="">{t(b.treatmentPlaceholder)}</option>
                    {treatmentOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-body text-[10px] md:text-xs text-muted-foreground block mb-1">{t(b.message)}</label>
                  <textarea
                    placeholder={t(b.messagePlaceholder)}
                    rows={3}
                    className="w-full bg-background border border-border rounded-sm px-3 md:px-4 py-2.5 md:py-3 font-body text-xs md:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-shadow"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-3 md:py-3.5 rounded-sm font-body text-xs md:text-sm tracking-wide hover:opacity-90 transition-opacity"
                >
                  {t(b.submit)}
                </button>
                <p className="font-body text-[10px] md:text-xs text-muted-foreground/70 text-center flex items-center justify-center gap-1.5">
                  <span className="text-primary">✓</span>
                  {t({ en: "Payment on-site — no deposit required", is: "Greitt á staðnum — engin innborgun", pl: "Płatność na miejscu — bez zaliczki" })}
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

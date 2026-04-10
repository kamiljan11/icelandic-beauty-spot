import { Globe, Camera, BarChart3, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import { useDemo } from "@/hooks/useDemo";

const translations = {
  subtitle: { en: "YOUR SKIN DESERVES ICELAND", is: "HÚÐIN ÞÍN VERÐSKULDAR ÍSLAND", pl: "TWOJA SKÓRA ZASŁUGUJE NA ISLANDIĘ" },
  title1: { en: "One Visit.", is: "Ein heimsókn.", pl: "Jedna wizyta." },
  title2: { en: "You'll Feel the Difference.", is: "Þú munt finna muninn.", pl: "Poczujesz różnicę." },
  description: {
    en: "No subscriptions, no pressure, no upselling. Just Sigríður, volcanic minerals, geothermal water, and 90 minutes of your time. If you don't see a difference, we won't charge you.",
    is: "Engin áskrift, enginn þrýstingur, engin uppselja. Bara Sigríður, eldfjallasteinefni, jarðhitavatn og 90 mínútur af þínum tíma. Ef þú sérð ekki mun munum við ekki rukka þig.",
    pl: "Bez abonamentów, bez presji, bez wciskania. Tylko Sigríður, minerały wulkaniczne, woda geotermalna i 90 minut Twojego czasu. Jeśli nie zobaczysz różnicy, nie zapłacisz.",
  },
  features: [
    { icon: Globe, label: { en: "Locally Sourced", is: "Staðbundið", pl: "Lokalne składniki" } },
    { icon: Camera, label: { en: "Real Results", is: "Raunverulegur árangur", pl: "Prawdziwe efekty" } },
    { icon: BarChart3, label: { en: "No Contracts", is: "Engar skuldbindingar", pl: "Bez umów" } },
    { icon: Zap, label: { en: "Same-Week Booking", is: "Bókun í sömu viku", pl: "Rezerwacja w tym tygodniu" } },
  ],
  cta: { en: "BOOK YOUR FIRST VISIT", is: "BÓKAÐU FYRSTU HEIMSÓKNINA", pl: "UMÓW PIERWSZĄ WIZYTĘ" },
  price: { en: "First facial from 12.900 kr.", is: "Fyrsta andlitsmeðferð frá 12.900 kr.", pl: "Pierwszy zabieg od 12 900 kr." },
  perks: {
    en: "⚡ Pay on-site · No deposit · Free skin consultation",
    is: "⚡ Greitt á staðnum · Engin innborgun · Ókeypis húðráðgjöf",
    pl: "⚡ Płatność na miejscu · Bez zaliczki · Bezpłatna konsultacja skóry",
  },
};

const CtaBanner = () => {
  const { t } = useLanguage();
  const { showDemo } = useDemo();

  return (
    <section className="bg-volcanic py-14 md:py-28 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto px-5 md:px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="font-body text-[10px] md:text-sm tracking-[0.3em] uppercase text-gold mb-4 md:mb-6">
          {t(translations.subtitle)}
        </motion.p>
        <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-6xl font-light text-cream leading-tight mb-1 md:mb-2">
          {t(translations.title1)}
        </motion.h2>
        <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-6xl font-light italic text-gold leading-tight mb-6 md:mb-8">
          {t(translations.title2)}
        </motion.h2>
        <motion.p variants={fadeInUp} className="font-body text-xs md:text-base text-cream/60 leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12">
          {t(translations.description)}
        </motion.p>

        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-12 mb-8 md:mb-14">
          {translations.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-cream/70 justify-center md:justify-start">
              <feat.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
              <span className="font-body text-[11px] md:text-sm">{t(feat.label)}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
          <button
            onClick={showDemo}
            className="bg-gold text-volcanic px-10 md:px-12 py-3.5 md:py-4 font-body text-xs md:text-sm tracking-[0.2em] font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-3"
          >
            {t(translations.cta)}
            <span aria-hidden>→</span>
          </button>
          <p className="font-body text-xs md:text-sm text-cream/60">{t(translations.price)}</p>
        </motion.div>

        <motion.p variants={fadeInUp} className="font-body text-[10px] md:text-xs text-cream/40">
          {t(translations.perks)}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CtaBanner;

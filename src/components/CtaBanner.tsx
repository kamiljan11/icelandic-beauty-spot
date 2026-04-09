import { Globe, Camera, BarChart3, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";

const translations = {
  subtitle: {
    en: "ELDFJALL BEAUTY",
    is: "ELDFJALL BEAUTY",
    pl: "ELDFJALL BEAUTY",
  },
  title1: {
    en: "Want to Experience",
    is: "Viltu upplifa",
    pl: "Chcesz doświadczyć",
  },
  title2: {
    en: "True Icelandic Beauty?",
    is: "sanna íslenska fegurð?",
    pl: "prawdziwego islandzkiego piękna?",
  },
  description: {
    en: "We offer personalized treatments using geothermal water, volcanic minerals and organic Icelandic ingredients. Everything tailored to your skin. One visit. Pure transformation.",
    is: "Við bjóðum upp á persónulegar meðferðir með jarðhitavatni, eldfjallasteinefnum og lífrænni íslenskri náttúru. Allt sérstaklega hannað fyrir þína húð. Ein heimsókn. Hrein umbreyting.",
    pl: "Oferujemy spersonalizowane zabiegi z wodą geotermalną, minerałami wulkanicznymi i organicznymi islandzkimi składnikami. Wszystko dopasowane do Twojej skóry. Jedna wizyta. Czysta transformacja.",
  },
  features: [
    { icon: Globe, label: { en: "Natural Ingredients", is: "Náttúruleg efni", pl: "Naturalne składniki" } },
    { icon: Camera, label: { en: "Luxury Experience", is: "Lúxus upplifun", pl: "Luksusowe doznania" } },
    { icon: BarChart3, label: { en: "Proven Results", is: "Sannað árangur", pl: "Udowodnione efekty" } },
    { icon: Zap, label: { en: "Instant Glow", is: "Tafarlaus birta", pl: "Natychmiastowy blask" } },
  ],
  cta: { en: "BOOK NOW", is: "BÓKA TÍMA", pl: "UMÓW SIĘ" },
  price: { en: "From only 5.900 kr./treatment", is: "Frá aðeins 5.900 kr./meðferð", pl: "Już od 5.900 kr./zabieg" },
  perks: {
    en: "⚡ Same-week availability · Fully personalised · No commitments",
    is: "⚡ Laus tími á vikunni · Fullkomlega persónulegt · Engar skuldbindingar",
    pl: "⚡ Dostępność w tym tygodniu · W pełni spersonalizowane · Bez zobowiązań",
  },
};

const CtaBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-volcanic py-20 md:py-28 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp} className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-6">
          {t(translations.subtitle)}
        </motion.p>
        <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light text-cream leading-tight mb-2">
          {t(translations.title1)}
        </motion.h2>
        <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-light italic text-gold leading-tight mb-8">
          {t(translations.title2)}
        </motion.h2>
        <motion.p variants={fadeInUp} className="font-body text-base text-cream/60 leading-relaxed max-w-2xl mx-auto mb-12">
          {t(translations.description)}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-8 md:gap-12 mb-14">
          {translations.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-cream/70">
              <feat.icon className="w-5 h-5 text-gold" />
              <span className="font-body text-sm">{t(feat.label)}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="#booking"
            className="bg-gold text-volcanic px-12 py-4 font-body text-sm tracking-[0.2em] font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-3"
          >
            {t(translations.cta)}
            <span aria-hidden>→</span>
          </a>
          <p className="font-body text-sm text-cream/60">{t(translations.price)}</p>
        </motion.div>

        <motion.p variants={fadeInUp} className="font-body text-xs text-cream/40">
          {t(translations.perks)}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CtaBanner;

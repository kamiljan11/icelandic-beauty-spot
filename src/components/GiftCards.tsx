import { Gift, Snowflake, Sun, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import { useDemo } from "@/hooks/useDemo";

const translations = {
  subtitle: { en: "Gift Cards & Packages", is: "Gjafakort og pakkar", pl: "Karty podarunkowe i pakiety" },
  title: { en: "The perfect gift", is: "Fullkomna gjöfin", pl: "Idealny prezent" },
  description: {
    en: "For yourself, your loved ones, or someone who deserves a moment of calm",
    is: "Fyrir þig, þína nánustu, eða einhvern sem á skilið augnablik af ró",
    pl: "Dla siebie, bliskich lub kogoś, kto zasługuje na chwilę spokoju",
  },
  giftCards: {
    title: { en: "Gift Cards", is: "Gjafakort", pl: "Karty podarunkowe" },
    items: [
      {
        name: { en: "Warm Welcome", is: "Hlý viðtaka", pl: "Ciepłe powitanie" },
        price: "10.000 kr.",
        description: { en: "Perfect for a first-time treatment experience", is: "Fullkomið fyrir fyrstu meðferðarupplifun", pl: "Idealna na pierwszy zabieg" },
        icon: Sparkles,
      },
      {
        name: { en: "Eldfjall Signature", is: "Eldfjall undirskrift", pl: "Eldfjall Signature" },
        price: "25.000 kr.",
        description: { en: "Choose any premium treatment from our menu", is: "Veldu hvaða lúxusmeðferð sem er af matseðlinum", pl: "Wybierz dowolny zabieg premium z naszego menu" },
        icon: Gift,
        featured: true,
      },
      {
        name: { en: "Pure Luxury", is: "Hrein lúxus", pl: "Czysty luksus" },
        price: "50.000 kr.",
        description: { en: "Full day of pampering with multiple treatments", is: "Heill dagur af dekri með mörgum meðferðum", pl: "Cały dzień rozpieszczania z wieloma zabiegami" },
        icon: Sparkles,
      },
    ],
  },
};

const GiftCards = () => {
  const { t } = useLanguage();
  const { showDemo } = useDemo();

  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-2 md:mb-3">
            {t(translations.subtitle)}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-3 md:mb-4">
            {t(translations.title)}
          </h2>
          <p className="font-body text-xs md:text-sm text-muted-foreground max-w-md mx-auto">
            {t(translations.description)}
          </p>
        </motion.div>

        {/* Gift Cards */}
        <motion.div className="mb-12 md:mb-20" initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}>
          <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-5 md:mb-8 text-center">
            {t(translations.giftCards.title)}
          </h3>
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
            {translations.giftCards.items.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative p-6 md:p-8 rounded-sm border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-w-[72vw] md:min-w-0 snap-center ${
                    card.featured ? "border-gold bg-volcanic text-cream" : "border-border bg-card"
                  }`}
                >
                  {card.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-volcanic font-body text-[10px] md:text-xs font-semibold px-3 md:px-4 py-1 rounded-sm tracking-wide">
                      POPULAR
                    </div>
                  )}
                  <Icon size={24} className={card.featured ? "text-gold mx-auto mb-3 md:mb-4" : "text-primary mx-auto mb-3 md:mb-4"} />
                  <h4 className="font-display text-lg md:text-xl font-medium mb-2">{t(card.name)}</h4>
                  <p className={`font-display text-2xl md:text-3xl font-medium mb-2 md:mb-3 ${card.featured ? "text-gold" : "text-primary"}`}>
                    {card.price}
                  </p>
                  <p className={`font-body text-xs md:text-sm leading-relaxed ${card.featured ? "text-cream/70" : "text-muted-foreground"}`}>
                    {t(card.description)}
                  </p>
                  <button
                    onClick={showDemo}
                    className={`inline-block mt-4 md:mt-6 px-5 md:px-6 py-2 md:py-2.5 rounded-sm font-body text-xs md:text-sm tracking-wide transition-opacity hover:opacity-90 ${
                      card.featured ? "bg-gold text-volcanic" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {t({ en: "Buy gift card", is: "Kaupa gjafakort", pl: "Kup kartę" })}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Seasonal Packages */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}>
          <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-5 md:mb-8 text-center">
            {t(translations.packages.title)}
          </h3>
          <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
            {translations.packages.items.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative p-6 md:p-8 rounded-sm border border-border bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-w-[80vw] md:min-w-0 snap-center"
                >
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-gold/15 text-gold font-body text-[10px] md:text-xs font-semibold px-2 md:px-3 py-1 rounded-sm">
                    {t(pkg.tag)}
                  </div>
                  <Icon size={20} className="text-primary mb-3 md:mb-4" />
                  <h4 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                    {t(pkg.name)}
                  </h4>
                  <div className="flex items-baseline gap-2 md:gap-3 mb-2 md:mb-3">
                    <span className="font-display text-xl md:text-2xl font-medium text-primary">{pkg.price}</span>
                    <span className="font-body text-xs md:text-sm text-muted-foreground line-through">{pkg.original}</span>
                  </div>
                  <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    {t(pkg.description)}
                  </p>
                  <button
                    onClick={showDemo}
                    className="inline-block bg-primary text-primary-foreground px-5 md:px-6 py-2 md:py-2.5 rounded-sm font-body text-xs md:text-sm tracking-wide hover:opacity-90 transition-opacity"
                  >
                    {t({ en: "Book package", is: "Bóka pakka", pl: "Zarezerwuj pakiet" })}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftCards;

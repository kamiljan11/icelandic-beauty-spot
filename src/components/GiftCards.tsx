import { Gift, Snowflake, Sun, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";

const translations = {
  subtitle: { en: "Gift Cards & Packages", is: "Gjafakort og pakkar", pl: "Karty podarunkowe i pakiety" },
  title: { en: "The perfect gift", is: "Hið fullkomna gjöf", pl: "Idealny prezent" },
  giftCards: {
    title: { en: "Gift Cards", is: "Gjafakort", pl: "Karty podarunkowe" },
    items: [
      {
        name: { en: "Warm Welcome", is: "Hlý viðtaka", pl: "Ciepłe powitanie" },
        price: "10.000 kr.",
        description: {
          en: "Perfect for a first-time treatment experience",
          is: "Fullkomið fyrir fyrstu meðferðarupplifun",
          pl: "Idealna na pierwszy zabieg",
        },
        icon: Sparkles,
      },
      {
        name: { en: "Eldfjall Signature", is: "Eldfjall undirskrift", pl: "Eldfjall Signature" },
        price: "25.000 kr.",
        description: {
          en: "Choose any premium treatment from our menu",
          is: "Veldu hvaða lúxusmeðferð sem er af matseðlinum",
          pl: "Wybierz dowolny zabieg premium z naszego menu",
        },
        icon: Gift,
        featured: true,
      },
      {
        name: { en: "Pure Luxury", is: "Hrein lúxus", pl: "Czysty luksus" },
        price: "50.000 kr.",
        description: {
          en: "Full day of pampering with multiple treatments",
          is: "Heill dagur af dekri með mörgum meðferðum",
          pl: "Cały dzień rozpieszczania z wieloma zabiegami",
        },
        icon: Sparkles,
      },
    ],
  },
  packages: {
    title: { en: "Seasonal Packages", is: "Árstíðapakkar", pl: "Pakiety sezonowe" },
    items: [
      {
        name: { en: "Winter Glow Package", is: "Vetrarljómi pakki", pl: "Pakiet Zimowy Blask" },
        price: "34.900 kr.",
        original: "42.600 kr.",
        description: {
          en: "Hot stone massage + Geothermal facial + Icelandic salt scrub",
          is: "Heitt steinanudd + Jarðhita andlitsmeðferð + Íslenskt saltskrúbb",
          pl: "Masaż gorącymi kamieniami + Zabieg geotermalny + Peeling solny",
        },
        icon: Snowflake,
        tag: { en: "Save 18%", is: "Sparaðu 18%", pl: "Oszczędź 18%" },
      },
      {
        name: { en: "Midnight Sun Ritual", is: "Miðnætursólarhelgi", pl: "Rytuał Północnego Słońca" },
        price: "44.900 kr.",
        original: "56.700 kr.",
        description: {
          en: "Full body treatment + Anti-aging luxury facial + Natural manicure",
          is: "Heildar líkamsmeðferð + Anti-aging lúxus andlitsmeðferð + Náttúruleg handleggur",
          pl: "Pełny zabieg na ciało + Luksusowy anti-aging + Naturalny manicure",
        },
        icon: Sun,
        tag: { en: "Save 21%", is: "Sparaðu 21%", pl: "Oszczędź 21%" },
      },
    ],
  },
};

const GiftCards = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {t(translations.subtitle)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {t(translations.title)}
          </h2>
        </motion.div>

        {/* Gift Cards */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <h3 className="font-display text-2xl font-medium text-foreground mb-8 text-center">
            {t(translations.giftCards.title)}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {translations.giftCards.items.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative p-8 rounded-sm border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    card.featured
                      ? "border-gold bg-volcanic text-cream"
                      : "border-border bg-card"
                  }`}
                >
                  {card.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-volcanic font-body text-xs font-semibold px-4 py-1 rounded-sm tracking-wide">
                      POPULAR
                    </div>
                  )}
                  <Icon
                    size={28}
                    className={card.featured ? "text-gold mx-auto mb-4" : "text-primary mx-auto mb-4"}
                  />
                  <h4 className="font-display text-xl font-medium mb-2">{t(card.name)}</h4>
                  <p className={`font-display text-3xl font-medium mb-3 ${card.featured ? "text-gold" : "text-primary"}`}>
                    {card.price}
                  </p>
                  <p className={`font-body text-sm leading-relaxed ${card.featured ? "text-cream/70" : "text-muted-foreground"}`}>
                    {t(card.description)}
                  </p>
                  <a
                    href="#booking"
                    className={`inline-block mt-6 px-6 py-2.5 rounded-sm font-body text-sm tracking-wide transition-opacity hover:opacity-90 ${
                      card.featured
                        ? "bg-gold text-volcanic"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {t({ en: "Buy gift card", is: "Kaupa gjafakort", pl: "Kup kartę" })}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Seasonal Packages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <h3 className="font-display text-2xl font-medium text-foreground mb-8 text-center">
            {t(translations.packages.title)}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {translations.packages.items.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="relative p-8 rounded-sm border border-border bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 bg-gold/15 text-gold font-body text-xs font-semibold px-3 py-1 rounded-sm">
                    {t(pkg.tag)}
                  </div>
                  <Icon size={24} className="text-primary mb-4" />
                  <h4 className="font-display text-xl font-medium text-foreground mb-2">
                    {t(pkg.name)}
                  </h4>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display text-2xl font-medium text-primary">
                      {pkg.price}
                    </span>
                    <span className="font-body text-sm text-muted-foreground line-through">
                      {pkg.original}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                    {t(pkg.description)}
                  </p>
                  <a
                    href="#booking"
                    className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-body text-sm tracking-wide hover:opacity-90 transition-opacity"
                  >
                    {t({ en: "Book package", is: "Bóka pakka", pl: "Zarezerwuj pakiet" })}
                  </a>
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

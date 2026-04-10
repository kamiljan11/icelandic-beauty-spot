import { Droplets, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import skincareImg from "@/assets/treatment-skincare.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import skincareProductsImg from "@/assets/skincare-products.jpg";
import geothermalImg from "@/assets/ingredient-geothermal.jpg";
import volcanicImg from "@/assets/ingredient-volcanic.jpg";
import mossImg from "@/assets/ingredient-moss.jpg";
import herbsImg from "@/assets/ingredient-herbs.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import { useBooking } from "@/hooks/useBooking";

const icons = [Sparkles, Droplets, Leaf];
const images = [skincareImg, salonImg, skincareProductsImg];

const ingredientTranslations = {
  subtitle: { en: "What goes into every treatment", is: "Það sem fer í hverja meðferð", pl: "Co wchodzi w każdy zabieg" },
  ingredients: [
    {
      name: { en: "Geothermal Water", is: "Jarðhitavatn", pl: "Woda geotermalna" },
      description: {
        en: "From deep volcanic springs at 70°C — silica and minerals that hydrate and protect.",
        is: "Úr djúpum eldfjallalindum við 70°C — kísill og steinefni sem raka og vernda.",
        pl: "Z głębokich źródeł wulkanicznych o 70°C — krzemionka i minerały nawilżające i chroniące.",
      },
      image: geothermalImg,
    },
    {
      name: { en: "Volcanic Minerals", is: "Eldfjallasteinefni", pl: "Minerały wulkaniczne" },
      description: {
        en: "Basalt clay and obsidian micro-particles for deep cleansing and detox.",
        is: "Basalt-leir og obsidían örkorn til djúphreinsunar og eitrunarlausnar.",
        pl: "Glinka bazaltowa i mikrocząsteczki obsydianu do głębokiego oczyszczania.",
      },
      image: volcanicImg,
    },
    {
      name: { en: "Icelandic Moss & Birch", is: "Mosi og birki", pl: "Mech i brzoza" },
      description: {
        en: "Wild-harvested extracts with antioxidant and anti-inflammatory properties.",
        is: "Villt uppskorin útdráttur með andoxunar- og bólgueyðandi eiginleikum.",
        pl: "Dziko zbierane ekstrakty o właściwościach antyoksydacyjnych i przeciwzapalnych.",
      },
      image: mossImg,
    },
    {
      name: { en: "Arctic Thyme & Herbs", is: "Blóðberg og jurtir", pl: "Tymianek i zioła" },
      description: {
        en: "Hand-picked wild herbs used in our signature essential oil blends.",
        is: "Handtíndar villtar jurtir notaðar í okkar sérstöku ilmkjarnaolíublöndur.",
        pl: "Ręcznie zbierane dzikie zioła w naszych autorskich olejkach eterycznych.",
      },
      image: herbsImg,
    },
  ],
};

const Services = () => {
  const { t } = useLanguage();
  const { bookService } = useBooking();

  return (
    <section id="services">
      {/* Treatments */}
      <div className="py-16 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <motion.div
            className="text-center mb-8 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-2 md:mb-3">
              {t(translations.services.subtitle)}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
              {t(translations.services.title)}
            </h2>
          </motion.div>

          <motion.div
            className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {translations.services.items.map((service, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group min-w-[75vw] md:min-w-0 snap-center"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-hidden rounded-sm mb-4 md:mb-6">
                    <img
                      src={images[i]}
                      alt={t(service.title)}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <Icon size={16} className="text-primary" />
                    <h3 className="font-display text-lg md:text-xl font-medium text-foreground">
                      {t(service.title)}
                    </h3>
                  </div>
                  <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(service.description)}
                  </p>
                  <button
                    onClick={() => bookService(t(service.title))}
                    className="font-body text-[11px] md:text-xs tracking-wide border border-primary/30 text-primary px-5 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {t({ en: "Book now", is: "Bóka núna", pl: "Zarezerwuj" })}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="flex justify-center gap-1.5 mt-3 md:hidden">
            {translations.services.items.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>
      </div>

      {/* Ingredients strip */}
      <div className="py-12 md:py-20 bg-volcanic">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <motion.p
            className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold mb-6 md:mb-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            {t(ingredientTranslations.subtitle)}
          </motion.p>

          <motion.div
            className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {ingredientTranslations.ingredients.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group min-w-[55vw] md:min-w-0 snap-center"
              >
                <div className="aspect-square overflow-hidden rounded-sm mb-3 md:mb-4">
                  <img
                    src={item.image}
                    alt={t(item.name)}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-sm md:text-base font-medium text-cream mb-1">
                  {t(item.name)}
                </h3>
                <p className="font-body text-[10px] md:text-xs text-cream/50 leading-relaxed">
                  {t(item.description)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center gap-1.5 mt-3 md:hidden">
            {ingredientTranslations.ingredients.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/30" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

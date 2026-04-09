import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import geothermalImg from "@/assets/ingredient-geothermal.jpg";
import volcanicImg from "@/assets/ingredient-volcanic.jpg";
import mossImg from "@/assets/ingredient-moss.jpg";
import herbsImg from "@/assets/ingredient-herbs.jpg";

const translations = {
  subtitle: { en: "OUR SCIENCE", is: "OKKAR VÍSINDI", pl: "NASZA NAUKA" },
  title: { en: "Powered by Icelandic nature", is: "Knúin af íslenskri náttúru", pl: "Siła islandzkiej natury" },
  description: {
    en: "Every treatment at Eldfjall Beauty harnesses the unique natural resources of Iceland — pure geothermal water, mineral-rich volcanic earth, and wild-harvested botanicals from pristine landscapes untouched for millennia.",
    is: "Sérhver meðferð hjá Eldfjall Beauty nýtir einstaka náttúruauðlindir Íslands — hreint jarðhitavatn, steinefnaríka eldfjallajörð og villt uppskerin jurtir frá ósnortnum landslagi í árþúsundir.",
    pl: "Każdy zabieg w Eldfjall Beauty wykorzystuje unikalne zasoby naturalne Islandii — czystą wodę geotermalną, bogatą w minerały ziemię wulkaniczną i dzikie rośliny zbierane z dziewiczych krajobrazów nietkniętych od tysiącleci.",
  },
  ingredients: [
    {
      name: { en: "Geothermal Water", is: "Jarðhitavatn", pl: "Woda geotermalna" },
      description: {
        en: "Sourced from deep volcanic springs at 70°C, rich in silica and minerals that hydrate and protect the skin barrier.",
        is: "Sótt úr djúpum eldfjallalindum við 70°C, ríkt af kísli og steinefnum sem raka og vernda húðþröskuldinn.",
        pl: "Pozyskiwana z głębokich źródeł wulkanicznych o temperaturze 70°C, bogata w krzemionkę i minerały nawilżające i chroniące barierę skórną.",
      },
      image: geothermalImg,
    },
    {
      name: { en: "Volcanic Minerals", is: "Eldfjallasteinefni", pl: "Minerały wulkaniczne" },
      description: {
        en: "Basalt-derived clay and obsidian micro-particles for deep cleansing and detoxification of pores.",
        is: "Basalt-unnin leir og obsidían örkorn til djúphreinsunar og eitrunarlausnar á svitaholum.",
        pl: "Glinka bazaltowa i mikrocząsteczki obsydianu do głębokiego oczyszczania i detoksykacji porów.",
      },
      image: volcanicImg,
    },
    {
      name: { en: "Icelandic Moss & Birch", is: "Íslenskur mosi og birki", pl: "Islandzki mech i brzoza" },
      description: {
        en: "Wild-harvested fjallagrös and birki extracts with powerful antioxidant and anti-inflammatory properties.",
        is: "Villt uppskorin fjallagrös og birkiútdráttur með öflugum andoxunar- og bólgueyðandi eiginleikum.",
        pl: "Dziko zbierane ekstrakty z mchu i brzozy o silnych właściwościach antyoksydacyjnych i przeciwzapalnych.",
      },
      image: mossImg,
    },
    {
      name: { en: "Arctic Thyme & Herbs", is: "Blóðberg og jurtir", pl: "Tymianek arktyczny i zioła" },
      description: {
        en: "Hand-picked Thymus praecox arcticus and wild Icelandic herbs used in our signature essential oil blends.",
        is: "Handtínt blóðberg og villtar íslenskar jurtir notaðar í okkar sérstöku ilmkjarnaolíublöndur.",
        pl: "Ręcznie zbierany tymianek arktyczny i dzikie islandzkie zioła stosowane w naszych autorskich mieszankach olejków eterycznych.",
      },
      image: herbsImg,
    },
  ],
};

const Ingredients = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-32 bg-volcanic overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold mb-2 md:mb-3">
            {t(translations.subtitle)}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-cream leading-tight">
            {t(translations.title)}
          </h2>
          <p className="font-body text-xs md:text-sm text-cream/60 leading-relaxed mt-4 md:mt-6 max-w-2xl mx-auto">
            {t(translations.description)}
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <motion.div
          className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.ingredients.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group min-w-[65vw] md:min-w-0 snap-center"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
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
              <h3 className="font-display text-base md:text-lg font-medium text-cream mb-1 md:mb-2">
                {t(item.name)}
              </h3>
              <p className="font-body text-[11px] md:text-xs text-cream/50 leading-relaxed">
                {t(item.description)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-1.5 mt-3 md:hidden">
          {translations.ingredients.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/30" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;

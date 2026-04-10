import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import beforeFacialImg from "@/assets/before-facial.jpg";
import afterFacialImg from "@/assets/after-facial.jpg";
import afterNailsImg from "@/assets/after-nails.jpg";
import beforeNailsImg from "@/assets/before-nails.jpg";
import beforeLashImg from "@/assets/before-lash.jpg";
import afterLashImg from "@/assets/after-lash.jpg";
import beforeMakeupImg from "@/assets/before-makeup.jpg";
import afterMakeupImg from "@/assets/after-makeup.jpg";

const translations = {
  subtitle: { en: "Results", is: "Árangur", pl: "Rezultaty" },
  title: { en: "See the transformation", is: "Sjáðu umbreytinguna", pl: "Zobacz przemianę" },
  before: { en: "Before", is: "Fyrir", pl: "Przed" },
  after: { en: "After", is: "Eftir", pl: "Po" },
  tapHint: { en: "Tap to compare", is: "Ýttu til að bera saman", pl: "Dotknij, aby porównać" },
  items: [
    {
      title: { en: "Geothermal Facial", is: "Jarðhita-andlitsmeðferð", pl: "Zabieg geotermalny" },
      description: {
        en: "Deep mineral cleansing with volcanic clay and geothermal water",
        is: "Djúp steinefnahreinsiún með eldfjallaLeiru og jarðhitavatni",
        pl: "Głębokie oczyszczanie mineralne z glinką wulkaniczną i wodą geotermalną",
      },
      before: beforeFacialImg,
      after: afterFacialImg,
    },
    {
      title: { en: "Natural Nail Care", is: "Náttúruleg naglaumhirða", pl: "Naturalna pielęgnacja paznokci" },
      description: {
        en: "Organic nail treatment with Icelandic mineral oils",
        is: "Lífræn naglameðferð með íslenskum steinefnaolíum",
        pl: "Organiczna pielęgnacja paznokci z islandzkimi olejkami mineralnymi",
      },
      before: beforeNailsImg,
      after: afterNailsImg,
    },
    {
      title: { en: "Occasion Makeup", is: "Makeup fyrir tilefni", pl: "Makijaż okolicznościowy" },
      description: {
        en: "From bare skin to event-ready — natural glow with warm tones",
        is: "Frá hreinni húð til viðburðar — náttúruleg birta með hlýjum litum",
        pl: "Od czystej skóry do gotowej na wyjście — naturalny blask w ciepłych tonach",
      },
      before: beforeMakeupImg,
      after: afterMakeupImg,
    },
    {
      title: { en: "Lash Lift & Tint", is: "Augnahárslyfta og litun", pl: "Lifting i koloryzacja rzęs" },
      description: {
        en: "Natural lash enhancement for a wide-eyed, lifted look",
        is: "Náttúruleg augnahársmeðferð fyrir opið og lyft útlit",
        pl: "Naturalne podkreślenie rzęs dla otwartego, uniesionego spojrzenia",
      },
      before: beforeLashImg,
      after: afterLashImg,
    },
  ],
};

const MobileCard = ({ item, index, t }: { item: typeof translations.items[0]; index: number; t: (obj: Record<string, string>) => string }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div variants={fadeInUp} className="flex gap-4 items-start">
      <button
        onClick={() => setShowAfter(!showAfter)}
        className="relative w-28 h-28 shrink-0 rounded-sm overflow-hidden"
        aria-label={t(translations.tapHint)}
      >
        <img
          src={showAfter ? item.after : item.before}
          alt={`${t(item.title)} - ${showAfter ? "after" : "before"}`}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className={`absolute top-1.5 left-1.5 text-[9px] font-body px-1.5 py-0.5 rounded-sm ${showAfter ? "bg-primary/70 text-primary-foreground" : "bg-volcanic/70 text-cream"}`}>
          {showAfter ? t(translations.after) : t(translations.before)}
        </div>
        <div className="absolute bottom-1.5 inset-x-0 text-center">
          <span className="text-[8px] font-body text-cream/80 bg-volcanic/50 px-1.5 py-0.5 rounded-full">
            {t(translations.tapHint)}
          </span>
        </div>
      </button>
      <div className="flex-1 pt-1">
        <h3 className="font-display text-base font-medium text-foreground mb-1">
          {t(item.title)}
        </h3>
        <p className="font-body text-xs text-muted-foreground leading-relaxed">
          {t(item.description)}
        </p>
      </div>
    </motion.div>
  );
};

const DesktopCard = ({ item, index, t }: { item: typeof translations.items[0]; index: number; t: (obj: Record<string, string>) => string }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <motion.div variants={fadeInUp} className="group">
      <div className="relative overflow-hidden rounded-sm aspect-square mb-3 md:mb-4">
        <img
          src={item.after}
          alt={`${t(item.title)} - after`}
          loading="lazy"
          width={640}
          height={640}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img
            src={item.before}
            alt={`${t(item.title)} - before`}
            loading="lazy"
            width={640}
            height={640}
            className="w-full h-full object-cover"
            style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
          />
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-cream z-10" style={{ left: `${sliderPos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-cream rounded-full flex items-center justify-center shadow-lg">
            <span className="text-volcanic text-xs font-bold">⇔</span>
          </div>
        </div>
        <input
          type="range"
          min={5}
          max={95}
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          aria-label="Before/After slider"
        />
        <div className="absolute top-3 left-3 bg-volcanic/70 text-cream text-xs font-body px-2 py-1 rounded-sm">
          Before
        </div>
        <div className="absolute top-3 right-3 bg-primary/70 text-primary-foreground text-xs font-body px-2 py-1 rounded-sm">
          After
        </div>
      </div>
      <h3 className="font-display text-xl font-medium text-foreground mb-1">
        {t(item.title)}
      </h3>
      <p className="font-body text-sm text-muted-foreground">
        {t(item.description)}
      </p>
    </motion.div>
  );
};

const BeforeAfter = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-32 bg-card">
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
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            {t(translations.title)}
          </h2>
        </motion.div>

        {/* Mobile: vertical list with tap-to-toggle */}
        <motion.div
          className="flex flex-col gap-6 md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.items.map((item, i) => (
            <MobileCard key={i} item={item} index={i} t={t} />
          ))}
        </motion.div>

        {/* Desktop: grid with slider */}
        <motion.div
          className="hidden md:grid md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.items.map((item, i) => (
            <DesktopCard key={i} item={item} index={i} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;

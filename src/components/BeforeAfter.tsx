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

const BeforeAfter = () => {
  const { t } = useLanguage();
  const [sliderPos, setSliderPos] = useState<Record<number, number>>({});

  const handleSlider = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos((prev) => ({ ...prev, [index]: Number(e.target.value) }));
  };

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

        <motion.div
          className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.items.map((item, i) => {
            const pos = sliderPos[i] ?? 50;
            return (
              <motion.div key={i} variants={fadeInUp} className="group min-w-[70vw] md:min-w-0 snap-center">
                <div className="relative overflow-hidden rounded-sm aspect-square mb-3 md:mb-4">
                  <img
                    src={item.after}
                    alt={`${t(item.title)} - after`}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
                    <img
                      src={item.before}
                      alt={`${t(item.title)} - before`}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="w-full h-full object-cover"
                      style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
                    />
                  </div>
                  <div className="absolute top-0 bottom-0 w-0.5 bg-cream z-10" style={{ left: `${pos}%` }}>
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 md:w-8 md:h-8 bg-cream rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-volcanic text-[10px] md:text-xs font-bold">⇔</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={95}
                    value={pos}
                    onChange={(e) => handleSlider(i, e)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label="Before/After slider"
                  />
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-volcanic/70 text-cream text-[10px] md:text-xs font-body px-2 py-0.5 md:py-1 rounded-sm">
                    Before
                  </div>
                  <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-primary/70 text-primary-foreground text-[10px] md:text-xs font-body px-2 py-0.5 md:py-1 rounded-sm">
                    After
                  </div>
                </div>
                <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-1">
                  {t(item.title)}
                </h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground">
                  {t(item.description)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;

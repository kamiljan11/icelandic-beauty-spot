import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import beforeFacialImg from "@/assets/before-facial.jpg";
import afterFacialImg from "@/assets/after-facial.jpg";
import afterNailsImg from "@/assets/after-nails.jpg";
import salonImg from "@/assets/salon-interior.jpg";

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
      before: salonImg,
      after: afterNailsImg,
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
    <section className="py-24 md:py-32 bg-card">
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

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.items.map((item, i) => {
            const pos = sliderPos[i] ?? 50;
            return (
              <motion.div key={i} variants={fadeInUp} className="group">
                <div className="relative overflow-hidden rounded-sm aspect-square mb-4">
                  <img
                    src={item.after}
                    alt={`${t(item.title)} - after`}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${pos}%` }}
                  >
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
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-cream z-10"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-cream rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-volcanic text-xs font-bold">⇔</span>
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
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;

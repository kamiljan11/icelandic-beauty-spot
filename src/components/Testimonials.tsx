import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import SteamWisp from "@/components/svg/SteamWisp";
import MineralDots from "@/components/svg/MineralDots";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="relative py-16 md:py-32 bg-card overflow-hidden">
      <MineralDots className="text-primary" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-2 md:mb-3">
            {t(translations.testimonials.subtitle)}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            {t(translations.testimonials.title)}
          </h2>
          <SteamWisp className="text-primary mx-auto mt-3 md:mt-4" />
        </motion.div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <motion.div
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-background p-6 md:p-8 rounded-sm border border-border hover:shadow-lg transition-shadow duration-300 min-w-[80vw] md:min-w-0 snap-center"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-1 mb-3 md:mb-4">
                {Array.from({ length: item.rating }).map((_, si) => (
                  <Star key={si} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6 italic">
                "{t(item.text)}"
              </p>
              <p className="font-display text-sm md:text-base font-medium text-foreground">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-1.5 mt-3 md:hidden">
          {translations.testimonials.items.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

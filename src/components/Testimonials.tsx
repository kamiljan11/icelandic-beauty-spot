import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {t(translations.testimonials.subtitle)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {t(translations.testimonials.title)}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-background p-8 rounded-sm border border-border hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t(item.text)}"
              </p>
              <p className="font-display text-base font-medium text-foreground">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

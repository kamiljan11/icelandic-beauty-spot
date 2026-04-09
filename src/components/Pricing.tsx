import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {t(translations.pricing.subtitle)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {t(translations.pricing.title)}
          </h2>
        </motion.div>

        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.pricing.categories.map((cat, ci) => (
            <motion.div key={ci} variants={fadeInUp}>
              <h3 className="font-display text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                {t(cat.category)}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 hover:bg-muted/30 px-3 -mx-3 rounded-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        {t(item.name)}
                      </p>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {item.duration}
                      </p>
                    </div>
                    <p className="font-display text-lg text-primary font-medium">
                      {item.price}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

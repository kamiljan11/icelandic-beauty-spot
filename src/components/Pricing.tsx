import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-16 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-5 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-2 md:mb-3">
            {t(translations.pricing.subtitle)}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            {t(translations.pricing.title)}
          </h2>
        </motion.div>

        <motion.div
          className="space-y-8 md:space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.pricing.categories.map((cat, ci) => (
            <motion.div key={ci} variants={fadeInUp}>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-4 md:mb-6 pb-2 md:pb-3 border-b border-border">
                {t(cat.category)}
              </h3>
              <div className="space-y-1 md:space-y-4">
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    className="flex items-center justify-between py-2.5 md:py-3 border-b border-border/50 last:border-0 hover:bg-muted/30 px-2 md:px-3 -mx-2 md:-mx-3 rounded-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="min-w-0 flex-1 mr-4">
                      <p className="font-body text-xs md:text-sm font-semibold text-foreground">
                        {t(item.name)}
                      </p>
                      <p className="font-body text-[10px] md:text-xs text-muted-foreground mt-0.5">
                        {item.duration}
                      </p>
                    </div>
                    <p className="font-display text-base md:text-lg text-primary font-medium whitespace-nowrap">
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

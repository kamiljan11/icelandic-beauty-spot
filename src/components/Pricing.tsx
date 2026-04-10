import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import { useBooking } from "@/hooks/useBooking";

const Pricing = () => {
  const { t } = useLanguage();
  const { bookService } = useBooking();
  const [activeTab, setActiveTab] = useState(0);
  const categories = translations.pricing.categories;
  const packages = translations.pricing.packages;
  const totalTabs = categories.length + 1;
  const isPackagesTab = activeTab === categories.length;

  return (
    <section id="pricing" className="py-16 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-5 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
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

        {/* Tab buttons */}
        <motion.div
          className="flex justify-center mb-8 md:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <div className="inline-flex bg-muted/50 rounded-sm p-1 gap-0.5 flex-wrap justify-center">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`relative font-body text-[11px] md:text-xs tracking-wide px-4 md:px-6 py-2 md:py-2.5 rounded-sm transition-colors duration-300 ${
                  activeTab === i
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="pricing-tab"
                    className="absolute inset-0 bg-primary rounded-sm"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{t(cat.category)}</span>
              </button>
            ))}
            <button
              onClick={() => setActiveTab(categories.length)}
              className={`relative font-body text-[11px] md:text-xs tracking-wide px-4 md:px-6 py-2 md:py-2.5 rounded-sm transition-colors duration-300 ${
                isPackagesTab
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isPackagesTab && (
                <motion.div
                  layoutId="pricing-tab"
                  className="absolute inset-0 bg-primary rounded-sm"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{t(packages.category)}</span>
            </button>
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="divide-y divide-border/40">
              {categories[activeTab].items.map((item, ii) => (
                <motion.div
                  key={ii}
                  className="group flex items-center gap-3 md:gap-4 py-4 md:py-5"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Number */}
                  <span className="font-display text-lg md:text-xl text-primary/30 font-light w-6 text-right shrink-0">
                    {String(ii + 1).padStart(2, "0")}
                  </span>

                  {/* Name */}
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm md:text-base font-medium text-foreground">
                      {t(item.name)}
                    </p>
                  </div>

                  {/* Duration pill */}
                  <span className="font-body text-[10px] md:text-xs text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full shrink-0 hidden sm:inline">
                    {item.duration}
                  </span>

                  {/* Price */}
                  <span className="font-display text-base md:text-lg text-primary font-medium shrink-0">
                    {item.price}
                  </span>

                  {/* Book button */}
                  <button
                    onClick={() => bookService(t(item.name))}
                    className="font-body text-[10px] md:text-xs tracking-wide bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors shrink-0"
                  >
                    {t({ en: "Book", is: "Bóka", pl: "Rezerwuj" })}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-8 md:mt-10 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <button
            onClick={() => bookService("")}
            className="bg-primary text-primary-foreground px-8 py-3 md:py-3.5 rounded-sm font-body text-xs md:text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            {t({ en: "Book a treatment", is: "Bóka meðferð", pl: "Zarezerwuj zabieg" })}
          </button>
          <p className="font-body text-[10px] md:text-xs text-muted-foreground/70 flex items-center justify-center gap-1.5">
            <span className="text-primary">✓</span>
            {t({
              en: "All prices include VAT · Payment on-site",
              is: "Öll verð innihalda VSK · Greitt á staðnum",
              pl: "Wszystkie ceny zawierają VAT · Płatność na miejscu",
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

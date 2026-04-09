import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";

const Booking = () => {
  const { t } = useLanguage();
  const b = translations.booking;

  const treatmentOptions = translations.pricing.categories.flatMap((cat) =>
    cat.items.map((item) => t(item.name))
  );

  return (
    <section id="booking" className="py-24 md:py-32 bg-sage-light relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {t(b.subtitle)}
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            {t(b.title)}
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-body text-sm text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            {t(b.description)}
          </motion.p>
        </motion.div>

        <motion.form
          className="max-w-md mx-auto space-y-4 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <label className="font-body text-xs text-muted-foreground block mb-1">{t(b.name)}</label>
            <input
              type="text"
              placeholder={t(b.namePlaceholder)}
              className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <label className="font-body text-xs text-muted-foreground block mb-1">{t(b.email)}</label>
            <input
              type="email"
              placeholder={t(b.emailPlaceholder)}
              className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <label className="font-body text-xs text-muted-foreground block mb-1">{t(b.phone)}</label>
            <input
              type="tel"
              placeholder={t(b.phonePlaceholder)}
              className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <label className="font-body text-xs text-muted-foreground block mb-1">{t(b.treatment)}</label>
            <select className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow">
              <option value="">{t(b.treatmentPlaceholder)}</option>
              {treatmentOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <label className="font-body text-xs text-muted-foreground block mb-1">{t(b.message)}</label>
            <textarea
              placeholder={t(b.messagePlaceholder)}
              rows={3}
              className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-shadow"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <button
              type="button"
              className="w-full bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-body text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              {t(b.submit)}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Booking;

import { motion } from "framer-motion";
import landscapeImg from "@/assets/iceland-landscape.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, slideInLeft, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";

const About = () => {
  const { t } = useLanguage();
  const stats = [
    { value: "15+", label: t(translations.about.stats.years) },
    { value: "2000+", label: t(translations.about.stats.clients) },
    { value: "100%", label: t(translations.about.stats.natural) },
  ];

  return (
    <section id="about" className="py-16 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            className="overflow-hidden rounded-sm"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={slideInLeft}
          >
            <img
              src={landscapeImg}
              alt="Iceland landscape"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-64 md:h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-2 md:mb-3">
              {t(translations.about.subtitle)}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-light text-foreground mb-4 md:mb-6">
              {t(translations.about.title1)}
              <br />
              <span className="italic">{t(translations.about.title2)}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6">
              {t(translations.about.p1)}
            </motion.p>
            <motion.p variants={fadeInUp} className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-6 md:mb-8">
              {t(translations.about.p2)}
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-medium text-primary">
                    {stat.value}
                  </p>
                  <p className="font-body text-[10px] md:text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

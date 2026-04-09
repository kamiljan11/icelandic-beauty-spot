import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-spa.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroImage}
          alt="Eldfjall Beauty Spa á Íslandi"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-volcanic/50" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 py-24 md:py-32"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="font-body text-[10px] md:text-sm tracking-[0.3em] uppercase text-frost mb-4 md:mb-6"
          >
            {t(translations.hero.subtitle)}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-display text-[2.5rem] leading-[1.1] md:text-7xl font-light text-cream md:leading-tight mb-4 md:mb-6"
          >
            {t(translations.hero.title1)}
            <br />
            <span className="italic font-light">{t(translations.hero.title2)}</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="font-body text-sm md:text-base text-cream/80 leading-relaxed max-w-md mb-8 md:mb-10"
          >
            {t(translations.hero.description)}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="#booking"
              className="bg-primary text-primary-foreground px-8 py-3 md:py-3.5 rounded-sm font-body text-sm tracking-wide hover:opacity-90 transition-opacity text-center"
            >
              {t(translations.hero.cta)}
            </a>
            <a
              href="#services"
              className="border border-cream/30 text-cream px-8 py-3 md:py-3.5 rounded-sm font-body text-sm tracking-wide hover:bg-cream/10 transition-colors text-center"
            >
              {t(translations.hero.seeServices)}
            </a>
          </motion.div>
          <motion.p variants={fadeInUp} className="font-body text-[10px] md:text-xs text-cream/50 mt-5 md:mt-6 flex items-center gap-2">
            <span className="text-frost">✓</span>
            {t({
              en: "Payment on-site · No deposit required · Free consultation",
              is: "Greitt á staðnum · Engin innborgun · Ókeypis ráðgjöf",
              pl: "Płatność na miejscu · Bez zaliczki · Bezpłatna konsultacja",
            })}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { Instagram, Star, Shield, Award, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, fadeIn, staggerContainer, viewportConfig, scaleIn } from "@/hooks/useScrollAnimation";
import igProductsImg from "@/assets/ig-products.jpg";
import igSalonImg from "@/assets/ig-salon.jpg";
import igGeothermalImg from "@/assets/ig-geothermal.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import skincareImg from "@/assets/treatment-skincare.jpg";
import landscapeImg from "@/assets/iceland-landscape.jpg";

const translations = {
  subtitle: { en: "Follow our journey", is: "Fylgdu ferðinni okkar", pl: "Śledź naszą podróż" },
  title: { en: "Trusted by thousands", is: "Treyst af þúsundum", pl: "Zaufanie tysięcy" },
  googleRating: { en: "Google Reviews", is: "Google umsagnir", pl: "Opinie Google" },
  followUs: { en: "Follow us on Instagram", is: "Fylgdu okkur á Instagram", pl: "Obserwuj nas na Instagramie" },
  badges: [
    {
      icon: Shield,
      label: { en: "Certified Organic", is: "Vottað lífrænt", pl: "Certyfikat ekologiczny" },
    },
    {
      icon: Award,
      label: { en: "Icelandic Quality", is: "Íslensk gæði", pl: "Islandzka jakość" },
    },
    {
      icon: Leaf,
      label: { en: "Cruelty Free", is: "Dýravænt", pl: "Cruelty Free" },
    },
  ],
};

const igImages = [
  { src: igProductsImg, alt: "Icelandic skincare products" },
  { src: igSalonImg, alt: "Salon interior" },
  { src: igGeothermalImg, alt: "Geothermal pool" },
  { src: salonImg, alt: "Treatment room" },
  { src: skincareImg, alt: "Skincare treatment" },
  { src: landscapeImg, alt: "Iceland landscape" },
];

const SocialProof = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-card overflow-hidden">
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

        {/* Stats & Badges Row */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {/* Google Rating */}
          <motion.div variants={scaleIn} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="font-display text-3xl font-medium text-foreground">4.9</p>
            <p className="font-body text-xs text-muted-foreground mt-1">{t(translations.googleRating)}</p>
          </motion.div>

          <div className="hidden md:block w-px h-16 bg-border" />

          {/* Trust Badges */}
          {translations.badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div key={i} variants={scaleIn} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <span className="font-body text-sm font-semibold text-foreground">
                  {t(badge.label)}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {igImages.map((img, i) => (
              <motion.a
                key={i}
                href="https://instagram.com/eldfjallbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden rounded-sm group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-volcanic/0 group-hover:bg-volcanic/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram size={24} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="https://instagram.com/eldfjallbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram size={16} />
              {t(translations.followUs)} — @eldfjallbeauty
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;

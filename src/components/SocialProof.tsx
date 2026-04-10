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
  subtitle: { en: "Why locals love us", is: "Af hverju heimamenn elska okkur", pl: "Dlaczego lokalni nas kochają" },
  title: { en: "A hidden gem in Reykjavík", is: "Falin perla í Reykjavík", pl: "Ukryty skarb Reykjavíku" },
  googleRating: { en: "on Google", is: "á Google", pl: "na Google" },
  reviewCount: { en: "127 reviews", is: "127 umsagnir", pl: "127 opinii" },
  followUs: { en: "Follow us on Instagram", is: "Fylgdu okkur á Instagram", pl: "Obserwuj nas na Instagramie" },
  badges: [
    { icon: Shield, label: { en: "Certified Organic", is: "Vottað lífrænt", pl: "Certyfikat ekologiczny" } },
    { icon: Award, label: { en: "Reykjavík Best 2024", is: "Reykjavík Best 2024", pl: "Reykjavík Best 2024" } },
    { icon: Leaf, label: { en: "Cruelty Free", is: "Dýravænt", pl: "Cruelty Free" } },
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
    <section className="py-16 md:py-32 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-2 md:mb-3">
            {t(translations.subtitle)}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            {t(translations.title)}
          </h2>
        </motion.div>

        {/* Stats & Badges - horizontal scroll on mobile */}
        <motion.div
          className="flex gap-6 md:gap-16 items-center justify-start md:justify-center mb-10 md:mb-16 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.div variants={scaleIn} className="text-center min-w-[28vw] md:min-w-0 snap-center">
            <div className="flex items-center justify-center gap-0.5 md:gap-1 mb-1 md:mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={`${i < 4 ? "fill-gold text-gold" : "fill-gold/60 text-gold/60"} md:w-[18px] md:h-[18px]`} />
              ))}
            </div>
            <p className="font-display text-2xl md:text-3xl font-medium text-foreground">4.8</p>
            <p className="font-body text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">{t(translations.reviewCount)} {t(translations.googleRating)}</p>
          </motion.div>

          <div className="hidden md:block w-px h-16 bg-border" />

          {translations.badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div key={i} variants={scaleIn} className="flex items-center gap-2 md:gap-3 min-w-fit snap-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-primary md:w-[18px] md:h-[18px]" />
                </div>
                <span className="font-body text-xs md:text-sm font-semibold text-foreground whitespace-nowrap">
                  {t(badge.label)}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Instagram Grid - 2 cols on mobile */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeIn}>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-1.5 md:gap-2">
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
                  <Instagram size={20} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
          <div className="text-center mt-4 md:mt-6">
            <a
              href="https://instagram.com/eldfjallbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram size={14} />
              {t(translations.followUs)} — @eldfjallbeauty
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;

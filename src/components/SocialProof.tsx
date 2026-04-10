import { Instagram, Star, Shield, Award, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations as globalTranslations } from "@/i18n/translations";
import { fadeInUp, fadeIn, staggerContainer, viewportConfig, scaleIn } from "@/hooks/useScrollAnimation";
import { useDemo } from "@/hooks/useDemo";
import SteamWisp from "@/components/svg/SteamWisp";
import MineralDots from "@/components/svg/MineralDots";
import igProductsImg from "@/assets/ig-products.jpg";
import igSalonImg from "@/assets/ig-salon.jpg";
import igGeothermalImg from "@/assets/ig-geothermal.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import skincareImg from "@/assets/treatment-skincare.jpg";
import landscapeImg from "@/assets/iceland-landscape.jpg";

const translations = {
  subtitle: { en: "Word of mouth", is: "Orðspor", pl: "Z ust do ust" },
  title: { en: "Don't take our word for it", is: "Ekki bara trúa okkur", pl: "Nie wierz nam na słowo" },
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
  const { showDemo } = useDemo();

  return (
    <section id="testimonials" className="relative py-16 md:py-32 bg-card overflow-hidden">
      <MineralDots className="text-primary" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
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
          <SteamWisp className="text-primary mx-auto mt-3 md:mt-4" />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {globalTranslations.testimonials.items.map((item, i) => (
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

        {/* Stats & Badges */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-16 items-center justify-center mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.div variants={scaleIn} className="text-center">
            <div className="flex items-center justify-center gap-0.5 md:gap-1 mb-1 md:mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={`${i < 4 ? "fill-gold text-gold" : "fill-gold/60 text-gold/60"} md:w-[18px] md:h-[18px]`} />
              ))}
            </div>
            <p className="font-display text-2xl md:text-3xl font-medium text-foreground">4.8</p>
            <p className="font-body text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">{t(translations.reviewCount)} {t(translations.googleRating)}</p>
          </motion.div>

          <div className="hidden md:block w-px h-16 bg-border" />

          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {translations.badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div key={i} variants={scaleIn} className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-primary md:w-[18px] md:h-[18px]" />
                  </div>
                  <span className="font-body text-xs md:text-sm font-semibold text-foreground whitespace-nowrap">
                    {t(badge.label)}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeIn}>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-1.5 md:gap-2">
            {igImages.map((img, i) => (
              <motion.button
                key={i}
                onClick={showDemo}
                className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
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
              </motion.button>
            ))}
          </div>
          <div className="text-center mt-4 md:mt-6">
            <button
              onClick={showDemo}
              className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram size={14} />
              {t(translations.followUs)} — @eldfjallbeauty
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;

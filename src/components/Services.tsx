import { Droplets, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import skincareImg from "@/assets/treatment-skincare.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import landscapeImg from "@/assets/iceland-landscape.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";

const icons = [Sparkles, Droplets, Leaf];
const images = [skincareImg, salonImg, landscapeImg];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {t(translations.services.subtitle)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {t(translations.services.title)}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden rounded-sm mb-6">
                  <img
                    src={images[i]}
                    alt={t(service.title)}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="text-primary" />
                  <h3 className="font-display text-xl font-medium text-foreground">
                    {t(service.title)}
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {t(service.description)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

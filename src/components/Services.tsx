import { Droplets, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import skincareImg from "@/assets/treatment-skincare.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import landscapeImg from "@/assets/iceland-landscape.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import { useBooking } from "@/hooks/useBooking";

const icons = [Sparkles, Droplets, Leaf];
const images = [skincareImg, salonImg, landscapeImg];

const Services = () => {
  const { t } = useLanguage();
  const { bookService } = useBooking();

  return (
    <section id="services" className="py-16 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-2 md:mb-3">
            {t(translations.services.subtitle)}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            {t(translations.services.title)}
          </h2>
        </motion.div>

        <motion.div
          className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
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
                className="group min-w-[75vw] md:min-w-0 snap-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden rounded-sm mb-4 md:mb-6">
                  <img
                    src={images[i]}
                    alt={t(service.title)}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Icon size={16} className="text-primary" />
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground">
                    {t(service.title)}
                  </h3>
                </div>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                  {t(service.description)}
                </p>
                <button
                  onClick={() => bookService(t(service.title))}
                  className="font-body text-[11px] md:text-xs tracking-wide border border-primary/30 text-primary px-5 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {t({ en: "Book now", is: "Bóka núna", pl: "Zarezerwuj" })}
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-center gap-1.5 mt-3 md:hidden">
          {translations.services.items.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

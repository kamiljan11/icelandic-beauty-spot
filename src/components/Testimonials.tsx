import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {t(translations.testimonials.subtitle)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {t(translations.testimonials.title)}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {translations.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="bg-background p-8 rounded-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t(item.text)}"
              </p>
              <p className="font-display text-base font-medium text-foreground">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

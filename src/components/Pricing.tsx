import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {t(translations.pricing.subtitle)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {t(translations.pricing.title)}
          </h2>
        </div>

        <div className="space-y-12">
          {translations.pricing.categories.map((cat, ci) => (
            <div key={ci}>
              <h3 className="font-display text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                {t(cat.category)}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                  >
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        {t(item.name)}
                      </p>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {item.duration}
                      </p>
                    </div>
                    <p className="font-display text-lg text-primary font-medium">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

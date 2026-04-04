import landscapeImg from "@/assets/iceland-landscape.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const About = () => {
  const { t } = useLanguage();
  const stats = [
    { value: "15+", label: t(translations.about.stats.years) },
    { value: "2000+", label: t(translations.about.stats.clients) },
    { value: "100%", label: t(translations.about.stats.natural) },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-sm">
            <img
              src={landscapeImg}
              alt="Iceland landscape"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              {t(translations.about.subtitle)}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              {t(translations.about.title1)}
              <br />
              <span className="italic">{t(translations.about.title2)}</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              {t(translations.about.p1)}
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              {t(translations.about.p2)}
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-3xl font-medium text-primary">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

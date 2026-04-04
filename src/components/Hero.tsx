import heroImage from "@/assets/hero-spa.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Eldfjall Beauty Spa á Íslandi"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-volcanic/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-frost mb-6">
            {t(translations.hero.subtitle)}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-cream leading-tight mb-6">
            {t(translations.hero.title1)}
            <br />
            <span className="italic font-light">{t(translations.hero.title2)}</span>
          </h1>
          <p className="font-body text-base text-cream/80 leading-relaxed max-w-md mb-10">
            {t(translations.hero.description)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-sm font-body text-sm tracking-wide hover:opacity-90 transition-opacity text-center"
            >
              {t(translations.hero.cta)}
            </a>
            <a
              href="#services"
              className="border border-cream/30 text-cream px-8 py-3.5 rounded-sm font-body text-sm tracking-wide hover:bg-cream/10 transition-colors text-center"
            >
              {t(translations.hero.seeServices)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

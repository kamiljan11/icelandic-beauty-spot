import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-volcanic py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-xl text-cream/90">
            Eldfjall <span className="text-sage-light">Beauty</span>
          </p>
          <p className="font-body text-xs text-cream/50">
            {t(translations.footer.rights)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

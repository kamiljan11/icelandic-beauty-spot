import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "is", label: "IS" },
  { code: "pl", label: "PL" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((l, i) => (
        <span key={l.code} className="flex items-center">
          <button
            onClick={() => setLang(l.code)}
            className={`font-body text-xs tracking-wide px-1.5 py-0.5 rounded-sm transition-colors ${
              lang === l.code
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l.label}
          </button>
          {i < languages.length - 1 && (
            <span className="text-border text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

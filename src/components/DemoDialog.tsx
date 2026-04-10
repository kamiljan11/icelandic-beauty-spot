import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const translations = {
  title: {
    en: "🚀 This is a Demo",
    is: "🚀 Þetta er sýnishorn",
    pl: "🚀 To jest wersja demo",
  },
  description: {
    en: "This website is a demo simulation showcasing what a premium beauty salon website can look like. In a full version, this action would be fully functional — booking system, payments, email notifications, and more.",
    is: "Þessi vefsíða er sýnishorn sem sýnir hvernig vefsíða fyrir lúxus snyrtistofu gæti litið út. Í fullri útgáfu væri þessi aðgerð fullkomlega virk — bókunarkerfi, greiðslur, tölvupóststilkynningar og fleira.",
    pl: "Ta strona to symulacja demo pokazująca, jak może wyglądać strona premium salonu kosmetycznego. W pełnej wersji ta akcja byłaby w pełni funkcjonalna — system rezerwacji, płatności, powiadomienia email i więcej.",
  },
  cta: {
    en: "Want a website like this?",
    is: "Viltu vefsíðu eins og þessa?",
    pl: "Chcesz taką stronę?",
  },
  contact: {
    en: "Get in touch →",
    is: "Hafðu samband →",
    pl: "Skontaktuj się →",
  },
  contactUrl: {
    en: "mailto:hello@example.com",
    is: "mailto:hello@example.com",
    pl: "mailto:hello@example.com",
  },
};

const DemoDialog = ({ open, onOpenChange }: DemoDialogProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader className="sm:text-center">
          <DialogTitle className="font-display text-xl md:text-2xl">
            {t(translations.title)}
          </DialogTitle>
          <DialogDescription className="font-body text-xs md:text-sm leading-relaxed mt-3">
            {t(translations.description)}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-3">
          <p className="font-body text-sm font-semibold text-foreground">
            {t(translations.cta)}
          </p>
          <a
            href={t(translations.contactUrl)}
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-body text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            {t(translations.contact)}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;

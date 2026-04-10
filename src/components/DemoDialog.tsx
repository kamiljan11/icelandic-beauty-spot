import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Globe, Camera, BarChart3, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const translations = {
  title: {
    en: "This is a Demo Website",
    is: "Þetta er sýnisvefsíða",
    pl: "To jest strona demo",
  },
  description: {
    en: "You're viewing a showcase of what a premium beauty salon website looks like. All features — booking, payments, notifications — would be fully functional in the real version.",
    is: "Þú ert að skoða sýnishorn af því hvernig vefsíða lúxus snyrtistofu lítur út. Allir eiginleikar — bókanir, greiðslur, tilkynningar — yrðu fullkomlega virkir í raunverulegri útgáfu.",
    pl: "Oglądasz pokaz tego, jak wygląda strona premium salonu kosmetycznego. Wszystkie funkcje — rezerwacje, płatności, powiadomienia — byłyby w pełni funkcjonalne w prawdziwej wersji.",
  },
  cta: {
    en: "Want a Website Like This?",
    is: "Viltu vefsíðu eins og þessa?",
    pl: "Chcesz taką stronę?",
  },
  ctaDesc: {
    en: "We build stunning, personalised websites for salons, restaurants, and local businesses. Everything done for you — website, photos, ads, social media.",
    is: "Við smíðum stórkostlegar, sérsniðnar vefsíður fyrir snyrtistofur, veitingastaði og staðbundin fyrirtæki. Allt gert fyrir þig — vefsíða, ljósmyndir, auglýsingar, samfélagsmiðlar.",
    pl: "Tworzymy piękne, spersonalizowane strony dla salonów, restauracji i lokalnych firm. Wszystko zrobione za Ciebie — strona, zdjęcia, reklamy, social media.",
  },
  contact: {
    en: "GET STARTED",
    is: "BYRJA",
    pl: "ZACZNIJ",
  },
  price: {
    en: "From only 19,990 ISK/month",
    is: "Frá aðeins 19.990 kr./mán",
    pl: "Już od 19 990 ISK/mies.",
  },
  perks: {
    en: "Live in 7 days · Fully personalised · No long-term contracts",
    is: "Tilbúið á 7 dögum · Fullkomlega sérsniðið · Engar langtímaskuldbindingar",
    pl: "Gotowe w 7 dni · W pełni spersonalizowane · Bez długoterminowych umów",
  },
};

const features = [
  { icon: Globe, label: { en: "Custom Website", is: "Sérsniðin vefsíða", pl: "Własna strona" } },
  { icon: Camera, label: { en: "Professional Photos", is: "Faglegar ljósmyndir", pl: "Profesjonalne zdjęcia" } },
  { icon: BarChart3, label: { en: "Social Media Ads", is: "Samfélagsmiðlaauglýsingar", pl: "Reklamy social media" } },
  { icon: Zap, label: { en: "All-In-One Plan", is: "Allt-í-einu áætlun", pl: "Plan All-In-One" } },
];

const DemoDialog = ({ open, onOpenChange }: DemoDialogProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-hidden border-none bg-volcanic text-cream">
        {/* Top section */}
        <div className="px-6 pt-8 pb-6 md:px-8 md:pt-10 md:pb-8 text-center">
          <DialogHeader className="sm:text-center">
            <p className="font-body text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold/70 mb-3">
              ✦ DEMO
            </p>
            <DialogTitle className="font-display text-xl md:text-2xl font-light text-cream leading-snug">
              {t(translations.title)}
            </DialogTitle>
            <DialogDescription className="font-body text-xs md:text-sm text-cream/50 leading-relaxed mt-3">
              {t(translations.description)}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10" />

        {/* Promo section */}
        <div className="px-6 py-6 md:px-8 md:py-8 text-center bg-volcanic">
          <p className="font-display text-lg md:text-xl font-light text-cream mb-1">
            {t(translations.cta)}
          </p>
          <p className="font-body text-[11px] md:text-xs text-cream/40 leading-relaxed max-w-sm mx-auto mb-5">
            {t(translations.ctaDesc)}
          </p>

          <div className="grid grid-cols-2 gap-2.5 mb-6 max-w-xs mx-auto">
            {features.map((feat, i) => (
              <div key={i} className="flex items-center gap-1.5 text-cream/60">
                <feat.icon className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                <span className="font-body text-[10px] md:text-xs">{t(feat.label)}</span>
              </div>
            ))}
          </div>

          <a
            href="https://businessautopilot.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-volcanic px-8 py-3 font-body text-xs tracking-[0.15em] font-semibold hover:opacity-90 transition-opacity"
          >
            {t(translations.contact)}
            <span aria-hidden>→</span>
          </a>
          <p className="font-body text-[10px] md:text-xs text-cream/30 mt-3">
            {t(translations.price)}
          </p>
          <p className="font-body text-[9px] md:text-[10px] text-cream/20 mt-1.5">
            ⚡ {t(translations.perks)}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;

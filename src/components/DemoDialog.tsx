import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Globe, Camera, BarChart3, Zap, CalendarCheck, CreditCard, Bell, Gift, Star, Mail } from "lucide-react";
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
    en: "You're viewing a showcase of what a premium beauty salon website can do. Here's what each feature would do on the real version:",
    is: "Þú ert að skoða sýnishorn af því hvað vefsíða lúxus snyrtistofu getur gert. Hér er hvað hver eiginleiki myndi gera í raunverulegri útgáfu:",
    pl: "Oglądasz pokaz tego, co może strona premium salonu kosmetycznego. Oto co każda funkcja robiłaby w prawdziwej wersji:",
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

const realFeatures = [
  {
    icon: CalendarCheck,
    label: { en: "Online Booking", is: "Netbókun", pl: "Rezerwacja online" },
    desc: {
      en: "Clients pick a date, time & treatment — confirmed instantly",
      is: "Viðskiptavinir velja dag, tíma og meðferð — staðfest samstundis",
      pl: "Klienci wybierają datę, godzinę i zabieg — potwierdzone natychmiast",
    },
  },
  {
    icon: CreditCard,
    label: { en: "Online Payments", is: "Netgreiðslur", pl: "Płatności online" },
    desc: {
      en: "Secure card payments & deposits at checkout",
      is: "Öruggar kortagreiðslur og innborganir við útskráningu",
      pl: "Bezpieczne płatności kartą i zaliczki przy kasie",
    },
  },
  {
    icon: Bell,
    label: { en: "SMS & Email Reminders", is: "SMS og tölvupóst", pl: "Przypomnienia SMS/email" },
    desc: {
      en: "Automatic reminders so clients never miss appointments",
      is: "Sjálfvirkar áminningar svo viðskiptavinir missi aldrei af tímum",
      pl: "Automatyczne przypomnienia, by klienci nie przegapili wizyt",
    },
  },
  {
    icon: Gift,
    label: { en: "Gift Card Sales", is: "Gjafakortasala", pl: "Sprzedaż kart podarunkowych" },
    desc: {
      en: "Sell & deliver digital gift cards directly from the site",
      is: "Seldu og afhentu stafræn gjafakort beint af síðunni",
      pl: "Sprzedawaj i dostarczaj cyfrowe karty podarunkowe ze strony",
    },
  },
  {
    icon: Star,
    label: { en: "Review Collection", is: "Umsagnasöfnun", pl: "Zbieranie opinii" },
    desc: {
      en: "Auto-request Google reviews after each visit",
      is: "Sjálfvirk beiðni um Google umsagnir eftir hverja heimsókn",
      pl: "Automatyczne prośby o opinie Google po każdej wizycie",
    },
  },
  {
    icon: Mail,
    label: { en: "Contact Forms", is: "Samskiptaform", pl: "Formularze kontaktowe" },
    desc: {
      en: "Enquiries go straight to your inbox & phone",
      is: "Fyrirspurnir fara beint í pósthólfið þitt og símann",
      pl: "Zapytania trafiają prosto do Twojej skrzynki i na telefon",
    },
  },
];

const buildFeatures = [
  { icon: Globe, label: { en: "Custom Website", is: "Sérsniðin vefsíða", pl: "Własna strona" } },
  { icon: Camera, label: { en: "Professional Photos", is: "Faglegar ljósmyndir", pl: "Profesjonalne zdjęcia" } },
  { icon: BarChart3, label: { en: "Social Media Ads", is: "Samfélagsmiðlaauglýsingar", pl: "Reklamy social media" } },
  { icon: Zap, label: { en: "All-In-One Plan", is: "Allt-í-einu áætlun", pl: "Plan All-In-One" } },
];

const DemoDialog = ({ open, onOpenChange }: DemoDialogProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-hidden border-none bg-volcanic text-cream max-h-[90vh] overflow-y-auto">
        {/* Top section */}
        <div className="px-6 pt-8 pb-4 md:px-8 md:pt-10 md:pb-5 text-center">
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

        {/* Feature list */}
        <div className="px-6 md:px-8 pb-4 space-y-2.5">
          {realFeatures.map((feat, i) => (
            <div key={i} className="flex items-start gap-3 bg-cream/[0.03] rounded-lg px-3.5 py-2.5">
              <feat.icon className="w-4 h-4 text-gold/70 shrink-0 mt-0.5" />
              <div>
                <span className="font-body text-xs font-semibold text-cream/80">{t(feat.label)}</span>
                <p className="font-body text-[10px] md:text-[11px] text-cream/40 leading-relaxed">{t(feat.desc)}</p>
              </div>
            </div>
          ))}
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
            {buildFeatures.map((feat, i) => (
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

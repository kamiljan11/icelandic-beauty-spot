import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const translations = {
  subtitle: {
    en: "FAQ",
    is: "ALGENGAR SPURNINGAR",
    pl: "NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  },
  title: {
    en: "Common questions",
    is: "Algengar spurningar",
    pl: "Częste pytania",
  },
  items: [
    {
      q: {
        en: "How do I book an appointment?",
        is: "Hvernig bóka ég tíma?",
        pl: "Jak umówić się na wizytę?",
      },
      a: {
        en: "You can book directly through our website form, call us at +354 555 1234, or use our booking partner Sinna.is. We recommend booking 2–3 days in advance, especially for weekend appointments.",
        is: "Þú getur bókað beint í gegnum eyðublaðið okkar, hringt í okkur í +354 555 1234, eða notað bókunaraðilann okkar Sinna.is. Við mælum með að bóka 2–3 dögum fyrirfram, sérstaklega fyrir helgartíma.",
        pl: "Możesz zarezerwować wizytę przez formularz na stronie, zadzwonić pod +354 555 1234 lub skorzystać z naszego partnera rezerwacyjnego Sinna.is. Zalecamy rezerwację 2–3 dni wcześniej, szczególnie na weekendy.",
      },
    },
    {
      q: {
        en: "Do I need to pay a deposit?",
        is: "Þarf ég að borga innborgun?",
        pl: "Czy muszę wpłacać zaliczkę?",
      },
      a: {
        en: "No deposit is required. Full payment is made on-site after your treatment. We accept credit cards, debit cards, and cash (ISK).",
        is: "Engin innborgun er nauðsynleg. Full greiðsla fer fram á staðnum eftir meðferð. Við tökum við kreditkortum, debetkortum og reiðufé (ISK).",
        pl: "Zaliczka nie jest wymagana. Pełna płatność następuje na miejscu po zabiegu. Akceptujemy karty kredytowe, debetowe i gotówkę (ISK).",
      },
    },
    {
      q: {
        en: "What should I expect during my first visit?",
        is: "Hvers má ég vænta í fyrstu heimsókn?",
        pl: "Czego mogę się spodziewać podczas pierwszej wizyty?",
      },
      a: {
        en: "Arrive 10 minutes early for a brief skin consultation. Your therapist will assess your skin type and customize the treatment. We provide robes, towels, and complimentary herbal tea. Each treatment begins with cleansing using our Icelandic geothermal water.",
        is: "Komdu 10 mínútum fyrr fyrir stutta húðráðgjöf. Meðferðaraðili þinn metur húðgerð þína og sérsníður meðferðina. Við bjóðum upp á sloppa, handklæði og ókeypis jurtate. Sérhver meðferð byrjar á hreinsiún með íslensku jarðhitavatni okkar.",
        pl: "Przyjdź 10 minut wcześniej na krótką konsultację skóry. Terapeuta oceni Twój typ skóry i dostosuje zabieg. Zapewniamy szlafroki, ręczniki i herbatę ziołową. Każdy zabieg rozpoczyna się oczyszczaniem naszą islandzką wodą geotermalną.",
      },
    },
    {
      q: {
        en: "Are your products really natural?",
        is: "Eru vörurnar ykkar raunverulega náttúrulegar?",
        pl: "Czy wasze produkty są naprawdę naturalne?",
      },
      a: {
        en: "Yes — all our skincare products are certified organic and cruelty-free. We source ingredients from Icelandic suppliers: geothermal water from Hveragerði, volcanic clay from Mývatn region, and wild herbs hand-picked from the highlands.",
        is: "Já — allar húðvörur okkar eru vottaðar lífrænar og dýravænar. Við fáum hráefnin frá íslenskum birgjum: jarðhitavatn frá Hveragerði, eldfjallaLeir frá Mývatnssvæðinu og villtar jurtir handtíndar af hálendinu.",
        pl: "Tak — wszystkie nasze kosmetyki są certyfikowane jako organiczne i cruelty-free. Pozyskujemy składniki od islandzkich dostawców: wodę geotermalną z Hveragerði, glinę wulkaniczną z regionu Mývatn i dzikie zioła zbierane ręcznie z wyżyn.",
      },
    },
    {
      q: {
        en: "Do you offer treatments in English?",
        is: "Bjóðið þið meðferðir á ensku?",
        pl: "Czy oferujecie zabiegi po angielsku?",
      },
      a: {
        en: "Absolutely. All our therapists speak fluent English and Icelandic. We welcome international guests and tourists visiting Reykjavík.",
        is: "Alveg. Allir meðferðaraðilar okkar tala reiprennandi ensku og íslensku. Við tökum fagnandi á móti alþjóðlegum gestum og ferðamönnum sem heimsækja Reykjavík.",
        pl: "Oczywiście. Wszyscy nasi terapeuci mówią płynnie po angielsku i islandzku. Zapraszamy gości międzynarodowych i turystów odwiedzających Reykjavík.",
      },
    },
    {
      q: {
        en: "Can I cancel or reschedule?",
        is: "Get ég aflýst eða breytt tíma?",
        pl: "Czy mogę odwołać lub przełożyć wizytę?",
      },
      a: {
        en: "You can cancel or reschedule free of charge up to 24 hours before your appointment. Late cancellations may incur a 50% fee.",
        is: "Þú getur aflýst eða breytt tíma án kostnaðar allt að 24 klukkustundum fyrir tímann. Seinar aflýsingar geta haft í för með sér 50% gjald.",
        pl: "Możesz odwołać lub przełożyć wizytę bezpłatnie do 24 godzin przed terminem. Późne odwołania mogą wiązać się z opłatą 50%.",
      },
    },
  ],
};

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            {t(translations.subtitle)}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            {t(translations.title)}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {translations.items.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="border border-border rounded-sm px-6 bg-card"
                >
                  <AccordionTrigger className="font-body text-sm font-semibold text-foreground hover:text-primary transition-colors py-5">
                    {t(item.q)}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                    {t(item.a)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

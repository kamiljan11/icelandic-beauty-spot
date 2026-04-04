export type Lang = "en" | "is" | "pl";

export const translations = {
  nav: {
    home: { en: "Home", is: "Heim", pl: "Strona główna" },
    services: { en: "Services", is: "Þjónusta", pl: "Usługi" },
    about: { en: "About us", is: "Um okkur", pl: "O nas" },
    pricing: { en: "Pricing", is: "Verðskrá", pl: "Cennik" },
    testimonials: { en: "Testimonials", is: "Umsagnir", pl: "Opinie" },
    contact: { en: "Contact", is: "Hafa samband", pl: "Kontakt" },
    bookNow: { en: "Book now", is: "Bóka tíma", pl: "Umów wizytę" },
  },
  hero: {
    subtitle: {
      en: "Natural beauty in Iceland",
      is: "Náttúruleg fegurð á Íslandi",
      pl: "Naturalne piękno na Islandii",
    },
    title1: { en: "Pure natural", is: "Hreinn náttúrulegur", pl: "Czyste naturalne" },
    title2: { en: "beauty treatment", is: "fegurðarmeðferð", pl: "zabiegi kosmetyczne" },
    description: {
      en: "Experience the power of Icelandic nature. Our treatments use geothermal water, volcanic minerals and organic ingredients to renew your skin and soul.",
      is: "Upplifðu kraftinn í íslenskri náttúru. Okkar meðferðir nota jarðhitavatn, eldfjallamineral og lífræn efni til að endurnýja húð þína og sál.",
      pl: "Doświadcz mocy islandzkiej natury. Nasze zabiegi wykorzystują wodę geotermalną, minerały wulkaniczne i organiczne składniki, aby odnowić Twoją skórę i duszę.",
    },
    cta: { en: "Book now", is: "Bóka tíma", pl: "Umów wizytę" },
    seeServices: { en: "See services", is: "Sjá þjónustu", pl: "Zobacz usługi" },
  },
  services: {
    subtitle: { en: "Services", is: "Þjónusta", pl: "Usługi" },
    title: { en: "Our treatments", is: "Okkar meðferðir", pl: "Nasze zabiegi" },
    items: [
      {
        title: { en: "Facial treatments", is: "Andlitsmeðferðir", pl: "Zabiegi na twarz" },
        description: {
          en: "Deep cleansing and moisturizing treatments with Icelandic geothermal minerals and organic seaweed.",
          is: "Djúphreinsunar- og rakameðferðir með íslenskum jarðhitamineralum og lífrænni sjávarþörungu.",
          pl: "Głębokie oczyszczanie i nawilżanie z islandzkimi minerałami geotermalnymi i organicznymi wodorostami.",
        },
      },
      {
        title: { en: "Body treatments", is: "Líkamsmeðferðir", pl: "Zabiegi na ciało" },
        description: {
          en: "Relaxation treatments and body scrubs with volcanic stones and natural oils.",
          is: "Slökunarmeðferðir og líkamsskrúbbur með eldfjallasteinum og náttúrulegum olíum.",
          pl: "Zabiegi relaksacyjne i peelingi ciała z kamieniami wulkanicznymi i naturalnymi olejkami.",
        },
      },
      {
        title: { en: "Natural skincare line", is: "Náttúruleg snyrtivörumerki", pl: "Naturalna linia kosmetyków" },
        description: {
          en: "Custom skincare range made from Icelandic herbs, moss and pure geothermal water.",
          is: "Sérhannað húðvöruúrval unnið úr íslenskum jurtum, mosa og hreinu jarðhitavatni.",
          pl: "Autorska linia kosmetyków z islandzkich ziół, mchu i czystej wody geotermalnej.",
        },
      },
    ],
  },
  about: {
    subtitle: { en: "About us", is: "Um okkur", pl: "O nas" },
    title1: { en: "Inspired by", is: "Innblásin af", pl: "Inspirowani" },
    title2: { en: "Icelandic nature", is: "íslenskri náttúru", pl: "islandzką naturą" },
    p1: {
      en: "Eldfjall Beauty was founded by Sigríður Jónsdóttir, with over 15 years of experience in aesthetics and skincare treatments. She graduated from the Beauty School in Reykjavík and specializes in natural treatments harnessing the power of Icelandic nature.",
      is: "Eldfjall Beauty var stofnað af Sigríði Jónsdóttur, sem hefur yfir 15 ára reynslu í fagurfræði og húðvörumeðferðum. Hún lauk námi frá Snyrtiskólanum í Reykjavík og hefur sérhæft sig í náttúrulegum meðferðum sem nýta kraft íslenskrar náttúru.",
      pl: "Eldfjall Beauty zostało założone przez Sigríður Jónsdóttir, która ma ponad 15 lat doświadczenia w estetyce i zabiegach pielęgnacyjnych. Ukończyła Szkołę Kosmetyczną w Reykjavíku i specjalizuje się w naturalnych zabiegach wykorzystujących moc islandzkiej natury.",
    },
    p2: {
      en: "Our studio is located in the heart of Reykjavík, offering a peaceful environment where you can relax and enjoy treatments based on geothermal water, volcanic minerals and organic Icelandic flora.",
      is: "Stúdíóið okkar er staðsett í hjarta Reykjavíkur og býður friðsælt umhverfi þar sem hægt er að slaka á og njóta meðferða sem byggja á jarðhitavatni, eldfjallasteinefnum og lífrænni íslenskri flóru.",
      pl: "Nasze studio znajduje się w sercu Reykjavíku i oferuje spokojne otoczenie, gdzie można się zrelaksować i cieszyć zabiegami opartymi na wodzie geotermalnej, minerałach wulkanicznych i organicznej islandzkiej florze.",
    },
    stats: {
      years: { en: "Years of experience", is: "Ára reynsla", pl: "Lat doświadczenia" },
      clients: { en: "Happy clients", is: "Ánægðir viðskiptavinir", pl: "Zadowolonych klientów" },
      natural: { en: "Natural ingredients", is: "Náttúruleg efni", pl: "Naturalne składniki" },
    },
  },
  pricing: {
    subtitle: { en: "Pricing", is: "Verðskrá", pl: "Cennik" },
    title: { en: "Our prices", is: "Okkar verð", pl: "Nasze ceny" },
    categories: [
      {
        category: { en: "Facial treatments", is: "Andlitsmeðferðir", pl: "Zabiegi na twarz" },
        items: [
          { name: { en: "Classic facial", is: "Klassísk andlitsmeðferð", pl: "Klasyczny zabieg na twarz" }, duration: "60 min", price: "12.900 kr." },
          { name: { en: "Deep cleansing", is: "Djúphreinsunarmeðferð", pl: "Głębokie oczyszczanie" }, duration: "75 min", price: "16.900 kr." },
          { name: { en: "Geothermal mineral facial", is: "Jarðhita-mineral andlitsmeðferð", pl: "Zabieg geotermalny" }, duration: "90 min", price: "21.900 kr." },
          { name: { en: "Anti-aging luxury", is: "Anti-aging lúxusmeðferð", pl: "Luksusowy anti-aging" }, duration: "90 min", price: "24.900 kr." },
        ],
      },
      {
        category: { en: "Body treatments", is: "Líkamsmeðferðir", pl: "Zabiegi na ciało" },
        items: [
          { name: { en: "Icelandic salt scrub", is: "Íslenskt saltskrúbb", pl: "Islandzki peeling solny" }, duration: "45 min", price: "9.900 kr." },
          { name: { en: "Hot stone oil massage", is: "Heitt steinaolíunudd", pl: "Masaż gorącymi kamieniami" }, duration: "60 min", price: "14.900 kr." },
          { name: { en: "Geothermal bath treatment", is: "Jarðhitabaðsmeðferð", pl: "Kąpiel geotermalna" }, duration: "75 min", price: "18.900 kr." },
          { name: { en: "Full body treatment", is: "Heildar-líkamsmeðferð", pl: "Pełny zabieg na ciało" }, duration: "120 min", price: "29.900 kr." },
        ],
      },
      {
        category: { en: "Beauty treatments", is: "Snyrtimeðferðir", pl: "Zabiegi upiększające" },
        items: [
          { name: { en: "Manicure & nail treatment", is: "Náttúruleg handleggs- og naglameðferð", pl: "Manicure i pielęgnacja paznokci" }, duration: "45 min", price: "7.900 kr." },
          { name: { en: "Brow & lash shaping", is: "Augabrúna- og augnahármótun", pl: "Modelowanie brwi i rzęs" }, duration: "30 min", price: "5.900 kr." },
          { name: { en: "Occasion makeup", is: "Makeupp fyrir tilefni", pl: "Makijaż okolicznościowy" }, duration: "60 min", price: "15.900 kr." },
        ],
      },
    ],
  },
  testimonials: {
    subtitle: { en: "Testimonials", is: "Umsagnir", pl: "Opinie" },
    title: { en: "What clients say", is: "Hvað viðskiptavinir segja", pl: "Co mówią klienci" },
    items: [
      {
        name: "Anna Þorsteinsdóttir",
        text: {
          en: "Best facial treatment I've ever tried. My skin has never looked this good. Sigríður is a true expert!",
          is: "Besta andlitsmeðferð sem ég hef prófað. Húðin mín hefur aldrei lítt svona vel út. Sigríður er sannkölluð sérfræðingur!",
          pl: "Najlepszy zabieg na twarz, jaki kiedykolwiek miałam. Moja skóra nigdy nie wyglądała tak dobrze. Sigríður to prawdziwy ekspert!",
        },
        rating: 5,
      },
      {
        name: "Helga Magnúsdóttir",
        text: {
          en: "Wonderful space and excellent service. The geothermal treatment was an incredible experience. Highly recommend.",
          is: "Undursamlegt rými og frábær þjónusta. Jarðhitameðferðin var ótrúleg upplifun. Mæli eindregið með.",
          pl: "Cudowne miejsce i doskonała obsługa. Zabieg geotermalny to niesamowite doświadczenie. Gorąco polecam.",
        },
        rating: 5,
      },
      {
        name: "Kristín Björnsdóttir",
        text: {
          en: "I always go to Eldfjall Beauty for special occasions. The makeup service is top-notch and all products are natural.",
          is: "Ég fer alltaf til Eldfjall Beauty fyrir sérstök tilefni. Makeupp þjónustan er í efsta flokki og efnin eru öll náttúruleg.",
          pl: "Zawsze chodzę do Eldfjall Beauty na specjalne okazje. Usługa makijażu jest na najwyższym poziomie, a wszystkie produkty są naturalne.",
        },
        rating: 5,
      },
    ],
  },
  booking: {
    subtitle: { en: "Book now", is: "Bóka tíma", pl: "Umów wizytę" },
    title: { en: "Ready to start?", is: "Tilbúin/n að byrja?", pl: "Gotowa/y, żeby zacząć?" },
    description: {
      en: "Contact us to book an appointment or get advice on which treatment suits you best. We offer personalized service and customized treatments.",
      is: "Hafðu samband við okkur til að bóka tíma eða fáðu ráðgjöf um hvaða meðferð hentar þér best. Við bjóðum upp á persónulega þjónustu og sérhannaðar meðferðir.",
      pl: "Skontaktuj się z nami, aby umówić wizytę lub uzyskać poradę, jaki zabieg będzie dla Ciebie najlepszy. Oferujemy spersonalizowaną obsługę i dostosowane zabiegi.",
    },
    name: { en: "Name", is: "Nafn", pl: "Imię i nazwisko" },
    namePlaceholder: { en: "Full name", is: "Fullt nafn", pl: "Pełne imię i nazwisko" },
    email: { en: "Email", is: "Netfang", pl: "E-mail" },
    emailPlaceholder: { en: "email@example.com", is: "netfang@dæmi.is", pl: "email@przykład.pl" },
    phone: { en: "Phone", is: "Símanúmer", pl: "Telefon" },
    phonePlaceholder: { en: "+354 XXX XXXX", is: "+354 XXX XXXX", pl: "+354 XXX XXXX" },
    treatment: { en: "Treatment", is: "Meðferð", pl: "Zabieg" },
    treatmentPlaceholder: { en: "Choose a treatment...", is: "Veldu meðferð...", pl: "Wybierz zabieg..." },
    message: { en: "Message", is: "Skilaboð", pl: "Wiadomość" },
    messagePlaceholder: {
      en: "Message or special requests...",
      is: "Skilaboð eða sérstakar óskir...",
      pl: "Wiadomość lub specjalne życzenia...",
    },
    submit: { en: "Send booking", is: "Senda bókun", pl: "Wyślij rezerwację" },
  },
  contact: {
    subtitle: { en: "Contact", is: "Hafa samband", pl: "Kontakt" },
    title: { en: "Find us", is: "Finndu okkur", pl: "Znajdź nas" },
    location: { en: "Location", is: "Staðsetning", pl: "Lokalizacja" },
    phone: { en: "Phone", is: "Sími", pl: "Telefon" },
    email: { en: "Email", is: "Netfang", pl: "E-mail" },
    hours: { en: "Opening hours", is: "Opnunartímar", pl: "Godziny otwarcia" },
    hoursDetail: {
      en: "Mon–Fri: 09:00 – 19:00\nSat: 10:00 – 16:00\nSun: Closed",
      is: "Mán–Fös: 09:00 – 19:00\nLau: 10:00 – 16:00\nSun: Lokað",
      pl: "Pon–Pt: 09:00 – 19:00\nSob: 10:00 – 16:00\nNdz: Zamknięte",
    },
  },
  footer: {
    rights: {
      en: "© 2026 Eldfjall Beauty. All rights reserved.",
      is: "© 2026 Eldfjall Beauty. Allur réttur áskilinn.",
      pl: "© 2026 Eldfjall Beauty. Wszelkie prawa zastrzeżone.",
    },
  },
} as const;

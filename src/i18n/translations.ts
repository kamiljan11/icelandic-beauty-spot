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
      en: "Laugavegur 42, Reykjavík",
      is: "Laugavegur 42, Reykjavík",
      pl: "Laugavegur 42, Reykjavík",
    },
    title1: { en: "Your skin deserves", is: "Húðin þín á skilið", pl: "Twoja skóra zasługuje na" },
    title2: { en: "what only Iceland can give", is: "það sem aðeins Ísland getur gefið", pl: "to, co może dać tylko Islandia" },
    description: {
      en: "A small studio in central Reykjavík where every treatment uses geothermal water, volcanic minerals and wild Icelandic botanicals — sourced by us, mixed by hand, made for your skin.",
      is: "Lítil stúdía í miðborg Reykjavíkur þar sem sérhver meðferð notar jarðhitavatn, eldfjallasteinefni og villtar íslenskar jurtir — safnað af okkur, blandað í höndunum, búið til fyrir þína húð.",
      pl: "Małe studio w centrum Reykjavíku, gdzie każdy zabieg wykorzystuje wodę geotermalną, minerały wulkaniczne i dzikie islandzkie rośliny — zbierane przez nas, mieszane ręcznie, stworzone dla Twojej skóry.",
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
    subtitle: { en: "Our story", is: "Sagan okkar", pl: "Nasza historia" },
    title1: { en: "Born from", is: "Fædd úr", pl: "Zrodzone z" },
    title2: { en: "fire and water", is: "eldi og vatni", pl: "ognia i wody" },
    p1: {
      en: "Eldfjall Beauty started in 2017 in a tiny room on Laugavegur with one treatment chair and a dream. Sigríður Jónsdóttir, a Reykjavík-trained aesthetician, wanted to prove that the minerals beneath Iceland's surface could do what expensive imported products couldn't.",
      is: "Eldfjall Beauty hófst árið 2017 í litlu herbergi á Laugavegi með einn meðferðarstól og draum. Sigríður Jónsdóttir, snyrtifræðingur menntuð í Reykjavík, vildi sanna að steinefnin undir yfirborði Íslands gætu gert það sem dýrar innfluttar vörur gátu ekki.",
      pl: "Eldfjall Beauty powstało w 2017 roku w małym pokoju na Laugavegur z jednym fotelem do zabiegów i marzeniem. Sigríður Jónsdóttir, kosmetolog wykształcona w Reykjavíku, chciała udowodnić, że minerały pod powierzchnią Islandii mogą zdziałać to, czego drogie importowane produkty nie potrafią.",
    },
    p2: {
      en: "Eight years later, word of mouth did the rest. We're still small — intentionally. Every client gets Sigríður's personal attention, every treatment uses ingredients we source ourselves from geothermal springs and wild Icelandic highlands.",
      is: "Átta árum síðar gerði orðsporið restina. Við erum ennþá lítil — viljandi. Sérhver viðskiptavinur fær persónulega athygli Sigríðar, sérhver meðferð notar hráefni sem við sækjum sjálf úr jarðhitauppsprettum og villtu íslensku hálendinu.",
      pl: "Osiem lat później poczta pantoflowa zrobiła resztę. Wciąż jesteśmy mali — celowo. Każdy klient otrzymuje osobistą uwagę Sigríður, każdy zabieg wykorzystuje składniki, które sami pozyskujemy ze źródeł geotermalnych i dzikiego islandzkiego wyżu.",
    },
    stats: {
      years: { en: "Years in Reykjavík", is: "Ár í Reykjavík", pl: "Lat w Reykjavíku" },
      clients: { en: "Returning clients", is: "Endurkomu viðskiptavinir", pl: "Powracających klientów" },
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
    packages: {
      category: { en: "Packages", is: "Pakkar", pl: "Pakiety" },
      items: [
        {
          name: { en: "Winter Glow Package", is: "Vetrarljómi pakki", pl: "Pakiet Zimowy Blask" },
          duration: "180 min",
          price: "34.900 kr.",
          original: "42.600 kr.",
          tag: { en: "Save 18%", is: "Sparaðu 18%", pl: "Oszczędź 18%" },
          description: { en: "Hot stone massage + Geothermal facial + Icelandic salt scrub", is: "Heitt steinanudd + Jarðhita andlitsmeðferð + Íslenskt saltskrúbb", pl: "Masaż gorącymi kamieniami + Zabieg geotermalny + Peeling solny" },
        },
        {
          name: { en: "Midnight Sun Ritual", is: "Miðnætursólarhelgi", pl: "Rytuał Północnego Słońca" },
          duration: "210 min",
          price: "44.900 kr.",
          original: "56.700 kr.",
          tag: { en: "Save 21%", is: "Sparaðu 21%", pl: "Oszczędź 21%" },
          description: { en: "Full body treatment + Anti-aging luxury facial + Natural manicure", is: "Heildar líkamsmeðferð + Anti-aging lúxus andlitsmeðferð + Náttúruleg handleggur", pl: "Pełny zabieg na ciało + Luksusowy anti-aging + Naturalny manicure" },
        },
      ],
    },
  },
  testimonials: {
    subtitle: { en: "Word of mouth", is: "Orðspor", pl: "Z ust do ust" },
    title: { en: "Don't take our word for it", is: "Ekki bara trúa okkur", pl: "Nie wierz nam na słowo" },
    items: [
      {
        name: "Anna Þ.",
        text: {
          en: "I came for one facial before my wedding and now I've been coming back every month for two years. Sigríður knows my skin better than I do.",
          is: "Ég kom í eina andlitsmeðferð fyrir brúðkaupið mitt og nú hef ég verið að koma til baka í hverjum mánuði í tvö ár. Sigríður þekkir húðina mína betur en ég sjálf.",
          pl: "Przyszłam na jeden zabieg przed ślubem, a teraz wracam co miesiąc od dwóch lat. Sigríður zna moją skórę lepiej niż ja sama.",
        },
        rating: 5,
      },
      {
        name: "Helga M.",
        text: {
          en: "The volcanic scrub is unlike anything I've tried abroad. You can feel the difference — it's real ingredients, not just nice packaging. Also the tea is amazing.",
          is: "Eldfjallasskrúbbið er ólíkt öllu sem ég hef prófað erlendis. Maður finnur muninn — þetta eru raunveruleg hráefni, ekki bara fallegar umbúðir. Líka teið er stórkostlegt.",
          pl: "Peeling wulkaniczny to coś zupełnie innego niż to, co próbowałam za granicą. Czujesz różnicę — to prawdziwe składniki, nie tylko ładne opakowanie. A herbata jest niesamowita.",
        },
        rating: 5,
      },
      {
        name: "Jón K.",
        text: {
          en: "My girlfriend dragged me here. Now I go more often than she does. Never thought I'd say this about a beauty salon, but it's genuinely relaxing.",
          is: "Kærastan mín dró mig hingað. Núna fer ég oftar en hún. Hélt aldrei að ég myndi segja þetta um snyrtistofu, en þetta er virkilega afslappandi.",
          pl: "Dziewczyna mnie tu zaciągnęła. Teraz chodzę częściej niż ona. Nigdy nie myślałem, że powiem to o salonie kosmetycznym, ale to naprawdę relaksujące.",
        },
        rating: 4,
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

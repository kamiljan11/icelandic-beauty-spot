const pricingCategories = [
  {
    category: "Andlitsmeðferðir",
    items: [
      { name: "Klassísk andlitsmeðferð", duration: "60 mín", price: "12.900 kr." },
      { name: "Djúphreinsunarmeðferð", duration: "75 mín", price: "16.900 kr." },
      { name: "Jarðhita-mineral andlitsmeðferð", duration: "90 mín", price: "21.900 kr." },
      { name: "Anti-aging lúxusmeðferð", duration: "90 mín", price: "24.900 kr." },
    ],
  },
  {
    category: "Líkamsmeðferðir",
    items: [
      { name: "Íslenskt saltskrúbb", duration: "45 mín", price: "9.900 kr." },
      { name: "Heitt steinaolíunudd", duration: "60 mín", price: "14.900 kr." },
      { name: "Jarðhitabaðsmeðferð", duration: "75 mín", price: "18.900 kr." },
      { name: "Heildar-líkamsmeðferð", duration: "120 mín", price: "29.900 kr." },
    ],
  },
  {
    category: "Snyrtimeðferðir",
    items: [
      { name: "Náttúruleg handleggs- og naglameðferð", duration: "45 mín", price: "7.900 kr." },
      { name: "Augabrúna- og augnahármótun", duration: "30 mín", price: "5.900 kr." },
      { name: "Makeupp fyrir tilefni", duration: "60 mín", price: "15.900 kr." },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Verðskrá
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Okkar verð
          </h2>
        </div>

        <div className="space-y-12">
          {pricingCategories.map((cat, ci) => (
            <div key={ci}>
              <h3 className="font-display text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                  >
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {item.duration}
                      </p>
                    </div>
                    <p className="font-display text-lg text-primary font-medium">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

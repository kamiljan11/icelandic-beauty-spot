import landscapeImg from "@/assets/iceland-landscape.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-sm">
            <img
              src={landscapeImg}
              alt="Íslensku landslag"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Um okkur
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Innblásin af
              <br />
              <span className="italic">íslenskri náttúru</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Eldfjall Beauty var stofnað af Sigríði Jónsdóttur, sem hefur yfir 15 ára
              reynslu í fagurfræði og húðvörumeðferðum. Hún lauk námi frá
              Snyrtiskólanum í Reykjavík og hefur sérhæft sig í náttúrulegum
              meðferðum sem nýta kraft íslenskrar náttúru.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              Stúdíóið okkar er staðsett í hjarta Reykjavíkur og býður
              friðsælt umhverfi þar sem hægt er að slaka á og njóta meðferða
              sem byggja á jarðhitavatni, eldfjallasteinefnum og lífrænni íslenskri flóru.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "15+", label: "Ára reynsla" },
                { value: "2000+", label: "Ánægðir viðskiptavinir" },
                { value: "100%", label: "Náttúruleg efni" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-3xl font-medium text-primary">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

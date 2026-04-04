import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna Þorsteinsdóttir",
    text: "Besta andlitsmeðferð sem ég hef prófað. Húðin mín hefur aldrei lítt svona vel út. Sigríður er sannkölluð sérfræðingur!",
    rating: 5,
  },
  {
    name: "Helga Magnúsdóttir",
    text: "Undursamlegt rými og frábær þjónusta. Jarðhitameðferðin var ótrúleg upplifun. Mæli eindregið með.",
    rating: 5,
  },
  {
    name: "Kristín Björnsdóttir",
    text: "Ég fer alltaf til Eldfjall Beauty fyrir sérstök tilefni. Makeupp þjónustan er í efsta flokki og efnin eru öll náttúruleg.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Umsagnir
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Hvað viðskiptavinir segja
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background p-8 rounded-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-display text-base font-medium text-foreground">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

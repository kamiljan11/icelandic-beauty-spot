import { Droplets, Sparkles, Leaf } from "lucide-react";
import skincareImg from "@/assets/treatment-skincare.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import landscapeImg from "@/assets/iceland-landscape.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Andlitsmeðferðir",
    description: "Djúphreinsunar- og rakameðferðir með íslenskum jarðhitamineralum og lífrænni sjávarþörungu.",
    image: skincareImg,
  },
  {
    icon: Droplets,
    title: "Líkamsmeðferðir",
    description: "Slökunarmeðferðir og líkamsskrúbbur með eldfjallasteinum og náttúrulegum olíum.",
    image: salonImg,
  },
  {
    icon: Leaf,
    title: "Náttúruleg snyrtivörumerki",
    description: "Sérhannað húðvöruúrval unnið úr íslenskum jurtum, mosa og hreinu jarðhitavatni.",
    image: landscapeImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Þjónusta
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Okkar meðferðir
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden rounded-sm mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <service.icon size={18} className="text-primary" />
                <h3 className="font-display text-xl font-medium text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

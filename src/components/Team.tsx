import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { fadeInUp, staggerContainer, viewportConfig } from "@/hooks/useScrollAnimation";
import sigridurImg from "@/assets/team-sigridur.jpg";
import birtaImg from "@/assets/team-birta.jpg";
import gudrunImg from "@/assets/team-gudrun.jpg";

const translations = {
  subtitle: {
    en: "OUR TEAM",
    is: "OKKAR TEÝ",
    pl: "NASZ ZESPÓŁ",
  },
  title: {
    en: "Meet the specialists",
    is: "Kynntu þér sérfræðingana",
    pl: "Poznaj specjalistów",
  },
  members: [
    {
      name: "Sigríður Jónsdóttir",
      role: { en: "Founder & Lead Esthetician", is: "Stofnandi og aðal fagurfræðingur", pl: "Założycielka i główna kosmetolog" },
      description: {
        en: "15+ years in aesthetics. Graduate of Snyrtiskólinn í Reykjavík. Specialist in geothermal facial treatments and natural skincare.",
        is: "15+ ára reynsla í fagurfræði. Útskrifuð úr Snyrtiskólanum í Reykjavík. Sérfræðingur í jarðhita-andlitsmeðferðum og náttúrulegri húðvernd.",
        pl: "15+ lat w estetyce. Absolwentka Snyrtiskólinn í Reykjavík. Specjalistka w zabiegach geotermalnych i naturalnej pielęgnacji skóry.",
      },
      image: sigridurImg,
    },
    {
      name: "Birta Ólafsdóttir",
      role: { en: "Skincare Therapist", is: "Húðmeðferðarfræðingur", pl: "Terapeuta skóry" },
      description: {
        en: "Certified in HydraFacial and microneedling. Passionate about combining Icelandic botanicals with modern techniques.",
        is: "Vottaður í HydraFacial og örnálameðferð. Brennur fyrir því að sameina íslenskar jurtir og nútíma tækni.",
        pl: "Certyfikowana w HydraFacial i mikronakłuwaniu. Pasjonatka łączenia islandzkich botaników z nowoczesnymi technikami.",
      },
      image: birtaImg,
    },
    {
      name: "Guðrún Magnúsdóttir",
      role: { en: "Massage & Body Therapist", is: "Nudd- og líkamsmeðferðarfræðingur", pl: "Masażystka i terapeuta ciała" },
      description: {
        en: "Trained in hot stone therapy, deep tissue, and traditional Icelandic relaxation techniques using volcanic minerals.",
        is: "Þjálfuð í heitum steinameðferðum, djúpvefjanuddi og hefðbundnum íslenskum slökunaraðferðum með eldfjallamineralum.",
        pl: "Przeszkolona w terapii gorącymi kamieniami, masażu głębokim i tradycyjnych islandzkich technikach relaksacyjnych.",
      },
      image: gudrunImg,
    },
  ],
};

const Team = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
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
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {translations.members.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden rounded-sm mb-6 aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-1">
                {member.name}
              </h3>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-primary mb-3">
                {t(member.role)}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t(member.description)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

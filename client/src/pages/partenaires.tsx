import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import divineConceptionLogo from "@assets/Divine_conception_1765310035303.jpg";
import leopardsfootLogo from "@assets/leopardsfoot_1765310035305.png";
import makutanoLogo from "@assets/makutano_1765310035306.png";
import ministereLogo from "@assets/Ministère_de_l_Europe_et_des_Affaires_étrangères.svg_1765310035307.png";
import soEdLogo from "@assets/SO_ED_1765310035307.jpg";
import topCongoFmLogo from "@assets/Top_Congo_FM_1765310035307.png";
import bOneLogo from "@assets/B_ONE_LOGO_1765310043574.jpg";
import afriqueDigitalLogo from "@assets/Afrique_digital_1765310055773.jpg";

interface Partner {
  name: string;
  logo: string;
}

interface PartnerCategory {
  title: string;
  partners: Partner[];
}

const partnerCategories: PartnerCategory[] = [
  {
    title: "Partenaires",
    partners: [
      { name: "Divine Conception", logo: divineConceptionLogo },
      { name: "Leopardsfoot", logo: leopardsfootLogo },
      { name: "Makutano", logo: makutanoLogo },
      { name: "Ministère de l'Europe et des Affaires étrangères", logo: ministereLogo },
      { name: "SO ED", logo: soEdLogo },
      { name: "Top Congo FM", logo: topCongoFmLogo },
    ],
  },
  {
    title: "Partenaires Médias",
    partners: [
      { name: "B-One TV", logo: bOneLogo },
    ],
  },
  {
    title: "Sponsors",
    partners: [
      { name: "Afrique Digital", logo: afriqueDigitalLogo },
    ],
  },
];

export default function Partenaires() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Partenaires"
          subtitle="Ils nous font confiance"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="space-y-16">
              {partnerCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                    {category.title}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {category.partners.map((partner) => (
                      <div
                        key={partner.name}
                        data-testid={`card-partner-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="bg-card rounded-lg p-6 flex items-center justify-center min-h-[140px] w-full max-w-[280px]"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-[100px] max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Intéressé par un partenariat ? Contactez-nous à{" "}
                <a
                  href="mailto:partenariat@congonaparis.fr"
                  className="text-primary hover:underline"
                  data-testid="link-partnership-email"
                >
                  partenariat@congonaparis.fr
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

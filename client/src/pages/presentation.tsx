import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Check } from "lucide-react";
import conferenceImage from "@assets/stock_images/african_conference_e_984f8971.jpg";

const values = [
  {
    title: "Connecter",
    description:
      "Créer des ponts entre la diaspora congolaise et les deux Congo pour favoriser les échanges culturels et économiques.",
  },
  {
    title: "Construire",
    description:
      "Accompagner les projets entrepreneuriaux et culturels qui contribuent au développement du Congo.",
  },
  {
    title: "Découvrir",
    description:
      "Mettre en lumière la richesse culturelle, artistique et intellectuelle congolaise.",
  },
];

const services = [
  "Accompagnement des exposants",
  "Promotion des initiatives culturelles",
  "Networking et mise en relation",
];

export default function Presentation() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Présentation"
          subtitle="Découvrez Congo Na Paris"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={conferenceImage}
                  alt="Congo Na Paris Event"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Notre Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Congo Na Paris est né de la volonté de créer un espace unique
                  de rencontre et d'échange entre la diaspora congolaise d'Europe
                  et les acteurs économiques, culturels et sociaux des deux Congo.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Depuis 2018, notre salon rassemble chaque année des milliers de
                  visiteurs, des centaines d'exposants et des dizaines d'intervenants
                  autour d'un objectif commun : connecter, construire et célébrer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Nos Valeurs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-lg p-8 text-center"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Nos Services
            </h2>
            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-4 bg-card rounded-lg p-5"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </span>
                  <span className="text-lg text-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

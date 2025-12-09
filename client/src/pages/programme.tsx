import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ProgrammeItem from "@/components/ProgrammeItem";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import conferenceImage from "@assets/stock_images/african_conference_e_984f8971.jpg";
import speakerImage from "@assets/stock_images/professional_african_d9482444.jpg";
import exhibitionImage from "@assets/stock_images/african_cultural_exh_f2178a31.jpg";

// todo: remove mock functionality
const day1 = [
  {
    time: "09:00 - 10:00",
    title: "Accueil et inscription",
    description:
      "Ouverture des portes, café de bienvenue et remise des badges aux participants.",
    image: exhibitionImage,
  },
  {
    time: "10:00 - 11:30",
    title: "Cérémonie d'ouverture officielle",
    description:
      "Discours des organisateurs et représentants officiels. Présentation du thème Tonga Mboka 2025.",
    image: conferenceImage,
  },
  {
    time: "14:00 - 15:30",
    title: "Table ronde : Économie & Diaspora",
    description:
      "Comment la diaspora contribue-t-elle au développement économique du Congo ? Témoignages et débats.",
    image: speakerImage,
  },
  {
    time: "16:00 - 17:30",
    title: "Focus : Entrepreneuriat au féminin",
    description:
      "Rencontre avec des femmes entrepreneures congolaises qui révolutionnent leurs secteurs.",
    image: conferenceImage,
  },
];

const day2 = [
  {
    time: "10:00 - 11:30",
    title: "Conférence : Le Congo de demain",
    description:
      "Vision prospective sur les opportunités de développement et les défis à relever pour construire le Congo de demain.",
    image: speakerImage,
  },
  {
    time: "14:00 - 15:30",
    title: "Ateliers pratiques",
    description:
      "Sessions interactives sur l'investissement, la création d'entreprise et les partenariats internationaux.",
    image: exhibitionImage,
  },
  {
    time: "16:00 - 17:00",
    title: "Networking & Business Meetings",
    description:
      "Rencontres B2B et opportunités de partenariats entre exposants et visiteurs.",
    image: conferenceImage,
  },
  {
    time: "18:00 - 20:00",
    title: "Soirée de clôture",
    description:
      "Célébration festive avec performances artistiques et remise des prix.",
    image: speakerImage,
  },
];

export default function Programme() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Programme"
          subtitle="Tonga Mboka 2025 - Le Congo de demain"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Samedi 27 Septembre 2025
              </h2>
              <div className="space-y-12">
                {day1.map((item, index) => (
                  <ProgrammeItem
                    key={item.title}
                    {...item}
                    imagePosition={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Dimanche 28 Septembre 2025
              </h2>
              <div className="space-y-12">
                {day2.map((item, index) => (
                  <ProgrammeItem
                    key={item.title}
                    {...item}
                    imagePosition={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

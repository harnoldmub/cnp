import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import SpeakerCard from "@/components/SpeakerCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import danieleSassou1 from "@assets/Daniele_Sassou_Nguesso_1765309986120.jpg";
import danieleSassou2 from "@assets/Danièle_Sassou_Nguesso_1765309986120.jpg";
import malumaMunongo from "@assets/Maluma_Munongo_Claude_1765309986121.jpg";
import yvesKabongo from "@assets/Yves_kabongo_1765309986121.jpg";

const speakers = [
  {
    name: "Danièle Sassou Nguesso",
    role: "Présidente de la Fondation Perspectives d'Avenir",
    image: danieleSassou2,
  },
  {
    name: "Maluma Munongo Claude",
    role: "Entrepreneur & Investisseur",
    image: malumaMunongo,
  },
  {
    name: "Yves Kabongo",
    role: "Expert en Développement Économique",
    image: yvesKabongo,
  },
  {
    name: "Danièle Sassou Nguesso",
    role: "Ambassadrice de la Culture Congolaise",
    image: danieleSassou1,
  },
];

export default function Intervenants() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Intervenants"
          subtitle="Les acteurs clés de cette 7ème édition - Tonga Mboka"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nos Intervenants de Prestige
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des personnalités influentes qui partagent leur vision pour le Congo de demain
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakers.map((speaker, index) => (
                <SpeakerCard key={`${speaker.name}-${index}`} {...speaker} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

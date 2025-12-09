import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import SpeakerCard from "@/components/SpeakerCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import speaker1 from "@assets/stock_images/professional_african_7fc83f19.jpg";
import speaker2 from "@assets/stock_images/professional_african_f534922c.jpg";
import speaker3 from "@assets/stock_images/professional_african_f5dd8be8.jpg";
import speaker4 from "@assets/stock_images/professional_african_3bccf198.jpg";
import speaker5 from "@assets/stock_images/professional_african_c3cc3504.jpg";
import speaker6 from "@assets/stock_images/professional_african_aa463827.jpg";

// todo: remove mock functionality
const speakers = [
  {
    name: "Marie Lumbala",
    role: "Directrice Générale, Congo Tech",
    image: speaker1,
  },
  {
    name: "Patrick Mwamba",
    role: "Fondateur, Africa Invest Group",
    image: speaker4,
  },
  {
    name: "Cécile Nsimba",
    role: "Présidente, Diaspora Connect",
    image: speaker2,
  },
  {
    name: "Jean-Claude Kabongo",
    role: "Économiste, Banque Mondiale",
    image: speaker5,
  },
  {
    name: "Aminata Beko",
    role: "CEO, Kinshasa Fashion Week",
    image: speaker3,
  },
  {
    name: "Michel Tshombe",
    role: "Directeur, Chambre de Commerce",
    image: speaker6,
  },
];

export default function Intervenants() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Intervenants"
          subtitle="Les acteurs clés de cette 7ème édition"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {speakers.map((speaker) => (
                <SpeakerCard key={speaker.name} {...speaker} />
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

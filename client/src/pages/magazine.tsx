import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import conferenceImage from "@assets/stock_images/african_conference_e_984f8971.jpg";
import speakerImage from "@assets/stock_images/professional_african_d9482444.jpg";
import exhibitionImage from "@assets/stock_images/african_cultural_exh_f2178a31.jpg";

// todo: remove mock functionality
const articles = [
  {
    id: "1",
    title: "Les nouvelles opportunités économiques entre l'Europe et le Congo",
    excerpt:
      "Découvrez comment la diaspora congolaise contribue au développement économique et crée des ponts entre les deux continents.",
    image: conferenceImage,
    category: "ÉCONOMIE",
    date: "08/31/2025",
  },
  {
    id: "2",
    title: "Tonga Mboka 2025 : Le thème de cette édition dévoilé",
    excerpt:
      "Le Congo de demain se construit aujourd'hui. Retour sur les ambitions de cette 7ème édition exceptionnelle.",
    image: speakerImage,
    category: "CNP MAG",
    date: "07/15/2025",
  },
  {
    id: "3",
    title: "Culture & Diaspora : L'art congolais à l'honneur",
    excerpt:
      "Artistes, créateurs et entrepreneurs culturels seront au rendez-vous pour célébrer la richesse artistique congolaise.",
    image: exhibitionImage,
    category: "CULTURE & DIASPORA",
    date: "06/22/2025",
  },
  {
    id: "4",
    title: "Retour sur la 6ème édition : Un succès historique",
    excerpt:
      "Plus de 18 500 visiteurs ont participé à la 6ème édition de Congo Na Paris. Retour en images sur cet événement mémorable.",
    image: conferenceImage,
    category: "ÉVÉNEMENTS",
    date: "05/10/2025",
  },
  {
    id: "5",
    title: "Entrepreneuriat : Les success stories de la diaspora",
    excerpt:
      "Ces entrepreneurs congolais qui réussissent en Europe et investissent au Congo. Portraits et témoignages inspirants.",
    image: speakerImage,
    category: "ÉCONOMIE",
    date: "04/28/2025",
  },
  {
    id: "6",
    title: "Mode congolaise : Tendances et créateurs à suivre",
    excerpt:
      "La mode congolaise s'impose sur la scène internationale. Découvrez les créateurs qui font rayonner le Congo.",
    image: exhibitionImage,
    category: "CULTURE & DIASPORA",
    date: "03/15/2025",
  },
];

const categories = [
  "Tous",
  "CNP MAG",
  "ÉCONOMIE",
  "CULTURE & DIASPORA",
  "ÉVÉNEMENTS",
];

const featuredArticles = articles.slice(0, 3);

const tags = [
  "Congo",
  "Diaspora",
  "Économie",
  "Culture",
  "Entrepreneuriat",
  "Paris",
  "Kinshasa",
  "Mode",
  "Art",
  "Musique",
];

export default function Magazine() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="CNP MAG"
          subtitle="Actualités, interviews et coulisses"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-6">
                  {articles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/magazine/${article.id}`}
                      className="group"
                    >
                      <article className="bg-card rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge
                              variant="secondary"
                              className="bg-primary/10 text-primary border-0 text-xs uppercase tracking-wide"
                            >
                              {article.category}
                            </Badge>
                            <span className="text-muted-foreground text-xs">
                              [ {article.date} ]
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>

              <aside className="space-y-8">
                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Catégories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button className="text-muted-foreground hover:text-primary transition-colors text-left w-full py-1">
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    À la une
                  </h3>
                  <ul className="space-y-4">
                    {featuredArticles.map((article) => (
                      <li key={article.id}>
                        <Link
                          href={`/magazine/${article.id}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors line-clamp-2"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Étiquettes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

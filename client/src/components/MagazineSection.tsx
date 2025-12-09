import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import conferenceImage from "@assets/stock_images/african_conference_e_984f8971.jpg";
import speakerImage from "@assets/stock_images/professional_african_d9482444.jpg";
import exhibitionImage from "@assets/stock_images/african_cultural_exh_f2178a31.jpg";

// todo: remove mock functionality
interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

const articles: Article[] = [
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
];

export default function MagazineSection() {
  return (
    <section
      className="relative py-20 md:py-28 bg-[#0a0d1a] overflow-hidden"
      data-testid="magazine-section"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold text-white/[0.02] uppercase tracking-widest whitespace-nowrap">
          MAGAZINE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            CNP MAG
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            Actualités, interviews et coulisses de l'événement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/magazine/${article.id}`}
              className="group"
            >
              <article
                className="bg-[#12151f] rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
                data-testid={`article-${article.id}`}
              >
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
                      className="bg-primary/20 text-primary border-0 text-xs uppercase tracking-wide"
                    >
                      {article.category}
                    </Badge>
                    <span className="text-white/40 text-xs">
                      [ {article.date} ]
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/magazine">
            <Button
              variant="outline"
              className="rounded-full px-8 text-white border-white/30 bg-white/5"
              data-testid="button-voir-tous-articles"
            >
              Voir tous les articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

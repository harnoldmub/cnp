import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Play, Mail } from "lucide-react";
import conferenceImage from "@assets/stock_images/african_conference_e_984f8971.jpg";
import exhibitionImage from "@assets/stock_images/african_cultural_exh_f2178a31.jpg";
import speakerImage from "@assets/stock_images/professional_african_d9482444.jpg";

interface ActionCard {
  title: string;
  description: string;
  image: string;
  action: {
    type: "link" | "email" | "external";
    label: string;
    href: string;
  };
  icon?: "arrow" | "play" | "mail";
}

const actionCards: ActionCard[] = [
  {
    title: "Programme 2025",
    description:
      "Découvrez le programme complet de cette 7ème édition : conférences, tables rondes, ateliers et moments de networking.",
    image: conferenceImage,
    action: {
      type: "link",
      label: "En savoir plus",
      href: "/programme",
    },
    icon: "arrow",
  },
  {
    title: "Devenir Exposant",
    description:
      "Rejoignez les 237 stands de l'événement et présentez vos produits et services à plus de 18 500 visiteurs.",
    image: exhibitionImage,
    action: {
      type: "email",
      label: "Nous contacter",
      href: "mailto:Commercial@congonaparis.fr",
    },
    icon: "mail",
  },
  {
    title: "Regarder CNP TV",
    description:
      "Revivez les moments forts des éditions précédentes et suivez l'actualité de Congo Na Paris sur notre chaîne.",
    image: speakerImage,
    action: {
      type: "external",
      label: "Regarder",
      href: "https://youtube.com",
    },
    icon: "play",
  },
];

export default function ActionCards() {
  return (
    <section className="py-20 md:py-24 bg-muted/30" data-testid="action-cards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {actionCards.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-lg bg-[#050816] transition-transform hover:scale-[1.02]"
              data-testid={`card-${card.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {card.description}
                </p>
                {card.action.type === "link" ? (
                  <Link href={card.action.href}>
                    <Button
                      variant="ghost"
                      className="text-primary p-0 h-auto font-semibold group/btn"
                    >
                      {card.action.label}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                ) : card.action.type === "email" ? (
                  <a href={card.action.href}>
                    <Button
                      variant="ghost"
                      className="text-primary p-0 h-auto font-semibold group/btn"
                    >
                      {card.action.label}
                      <Mail className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                ) : (
                  <a
                    href={card.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="text-primary p-0 h-auto font-semibold group/btn"
                    >
                      {card.action.label}
                      <Play className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

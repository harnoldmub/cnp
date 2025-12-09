import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Store, Ticket, Handshake, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const participationOptions = [
  {
    icon: Store,
    title: "Stands & Exposants",
    description:
      "Rejoignez les 237 stands et présentez vos produits et services à plus de 18 500 visiteurs passionnés. Espace de 9m² à 25m² disponibles.",
    action: {
      label: "Devenir exposant",
      href: "mailto:commercial@congonaparis.fr",
      type: "email" as const,
    },
  },
  {
    icon: Ticket,
    title: "Billetterie",
    description:
      "Réservez votre place dès maintenant pour vivre une expérience unique au cœur de la culture congolaise. Tarif early bird disponible.",
    action: {
      label: "Réserver ma place",
      href: "#billetterie",
      type: "link" as const,
    },
  },
  {
    icon: Handshake,
    title: "Partenariat",
    description:
      "Associez votre marque à l'événement phare de la diaspora congolaise. Plusieurs formules de visibilité adaptées à vos objectifs.",
    action: {
      label: "Devenir partenaire",
      href: "mailto:partenariat@congonaparis.fr",
      type: "email" as const,
    },
  },
];

export default function Participer() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Participer"
          subtitle="Rejoignez l'aventure Congo Na Paris"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {participationOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-card rounded-lg p-8 text-center flex flex-col"
                >
                  <span className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <option.icon className="w-8 h-8 text-primary" />
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {option.description}
                  </p>
                  {option.action.type === "email" ? (
                    <a href={option.action.href}>
                      <Button className="w-full rounded-full uppercase font-semibold">
                        {option.action.label}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  ) : (
                    <Link href={option.action.href}>
                      <Button className="w-full rounded-full uppercase font-semibold">
                        {option.action.label}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  )}
                </div>
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

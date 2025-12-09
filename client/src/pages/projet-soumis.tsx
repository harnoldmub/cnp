import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Home, ArrowRight } from "lucide-react";

export default function ProjetSoumis() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="mb-8">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Projet soumis avec succès
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Merci pour votre candidature ! Nous avons bien reçu votre projet
                et notre équipe l'examinera dans les plus brefs délais.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 md:p-8 mb-8 text-left">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Prochaines étapes
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 text-sm font-medium text-primary">
                    1
                  </span>
                  <span className="text-foreground">
                    Un email de confirmation a été envoyé à l'adresse que vous avez indiquée.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 text-sm font-medium text-primary">
                    2
                  </span>
                  <span className="text-foreground">
                    Notre équipe examinera votre candidature sous 10 jours ouvrés.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 text-sm font-medium text-primary">
                    3
                  </span>
                  <span className="text-foreground">
                    Nous vous contacterons pour vous informer de la suite donnée à votre projet.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                  data-testid="button-home"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Retour à l'accueil
                </Button>
              </Link>
              <Link href="/programme">
                <Button
                  size="lg"
                  className="rounded-full px-8"
                  data-testid="button-programme"
                >
                  Voir le programme
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

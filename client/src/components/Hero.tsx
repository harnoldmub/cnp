import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { headlinePoints, siteContent } from "@/lib/siteContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,187,107,0.25),transparent_32%),linear-gradient(135deg,rgba(87,26,14,0.92),rgba(10,4,4,0.98))]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(270deg,rgba(255,193,122,0.14),transparent)] lg:block" />

      <div className="relative cnp-container py-14 md:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="cnp-eyebrow">{siteContent.edition}</span>
            <h1 className="mt-6 font-display text-6xl uppercase leading-[0.92] text-white md:text-8xl">
              Le rendez-vous
              <span className="block text-primary">de la diaspora</span>
              congolaise
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Congo Na Paris revient a l'Espace Saint Martin pour une edition plus
              dense, plus claire et plus ambitieuse: connecter, inspirer et creer des opportunites concretes.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {headlinePoints.map((point) => (
                <div key={point} className="cnp-panel-dark flex items-center gap-3 px-4 py-4 text-white/80">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/participer">
                <Button size="lg" className="rounded-full px-8 text-base uppercase">
                  Prendre sa place
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/programme">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 bg-white/5 px-8 text-base uppercase text-white"
                >
                  Voir le programme
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-primary/20 blur-3xl" />
            <div className="relative cnp-card-dark overflow-hidden p-4">
              <img
                src="/hero.png"
                alt="Affiche Congo Na Paris 8e edition"
                className="w-full rounded-[24px] object-cover shadow-2xl"
              />
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="cnp-panel-dark flex items-center gap-3 px-4 py-4 text-white/80">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">Dates</p>
                    <p className="font-semibold text-white">{siteContent.dates}</p>
                  </div>
                </div>
                <div className="cnp-panel-dark flex items-center gap-3 px-4 py-4 text-white/80">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">Lieu</p>
                    <p className="font-semibold text-white">{siteContent.venue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

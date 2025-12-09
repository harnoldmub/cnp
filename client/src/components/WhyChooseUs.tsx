import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Play } from "lucide-react";
import conferenceImage from "@assets/stock_images/african_conference_e_984f8971.jpg";

const benefits = [
  "Rencontrer les acteurs clés de la diaspora et du Congo",
  "Découvrir les opportunités économiques et culturelles",
  "Participer à des conférences et des ateliers inspirants",
  "S'immerger dans une ambiance festive et constructive",
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-background" data-testid="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">
              [CNP 7ème ÉDITION]
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Congo Na Paris est le premier salon socio-culturel congolais en Europe,
              créant un pont unique entre la diaspora congolaise et les deux Congo.
              Notre événement rassemble entrepreneurs, artistes, intellectuels et
              passionnés pour célébrer et construire l'avenir ensemble.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/presentation">
              <Button
                size="lg"
                className="rounded-full px-8 uppercase font-semibold mt-4"
                data-testid="button-en-savoir-plus"
              >
                En savoir plus
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={conferenceImage}
                alt="Conférence Congo Na Paris"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <button
                className="absolute inset-0 flex items-center justify-center group"
                onClick={() => console.log("Play video triggered")}
                data-testid="button-play-video"
              >
                <span className="w-20 h-20 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

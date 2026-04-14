import { ArrowRight, Mail, Radio } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { participationCards, programHighlights } from "@/lib/siteContent";

export default function ActionCards() {
  return (
    <section className="cnp-section">
      <div className="cnp-container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="cnp-eyebrow">Experience du salon</p>
            <h2 className="mt-4 cnp-title text-foreground">L'experience congolaise en 5 univers</h2>
          </div>
          <p className="max-w-xl text-foreground/65">
            Business, tourisme, culture, dynamique sociale et gastronomie se rencontrent dans
            une experience ou le salon reste au premier plan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {programHighlights.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[28px] border border-[#3a2118] bg-[#1b0f0b] shadow-[0_22px_50px_rgba(0,0,0,0.22)]"
            >
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="bg-[linear-gradient(180deg,#24130e,#1b0f0b)] p-6">
                <h3 className="font-display text-4xl uppercase text-white">{item.title}</h3>
                <p className="mt-3 text-white/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="cnp-eyebrow">Parcours</p>
                <h2 className="mt-4 cnp-title text-foreground">Choisir sa place dans le salon</h2>
              </div>
              <p className="max-w-xl text-foreground/65">
                Visiteur, exposant, partenaire ou porteur de projet: chaque parcours dispose d'un
                point d'entree clair.
              </p>
            </div>
          </div>
          {participationCards.map((card) => {
            const isMail = card.href.startsWith("mailto:");
            const isInternal = card.href.startsWith("/");
            const isExternal = card.href.startsWith("http");
            return (
              <div key={card.title} className="cnp-panel p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Participer</p>
                <h3 className="mt-3 font-display text-4xl uppercase text-foreground">{card.title}</h3>
                <p className="mt-3 text-foreground/70">{card.description}</p>
                <div className="mt-6">
                  {isInternal ? (
                    <Link href={card.href}>
                      <Button variant="ghost" className="px-0 text-primary">
                        {card.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  ) : isExternal ? (
                    <a href={card.href} target="_blank" rel="noreferrer">
                      <Button variant="ghost" className="px-0 text-primary">
                        {card.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <a href={card.href}>
                      <Button variant="ghost" className="px-0 text-primary">
                        {card.cta}
                        {isMail ? <Mail className="h-4 w-4" /> : <Radio className="h-4 w-4" />}
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

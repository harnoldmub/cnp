import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { participationCards, siteContent } from "@/lib/siteContent";

export default function Participer() {
  return (
    <PageAccessGate pageKey="participer">
      <div className="cnp-shell">
        <Header />
        <main>
        <PageHeader
          title="Participer"
          subtitle="Choisissez votre maniere d'entrer dans l'edition 8: assister, exposer, activer votre marque ou proposer un projet."
        />

        <section className="cnp-section">
          <div className="cnp-container grid gap-6 lg:grid-cols-3">
            {participationCards.map((card) => {
              const internal = card.href.startsWith("/");
              const anchor = card.href.startsWith("#");

              const content = (
                <article className="cnp-card flex h-full flex-col p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">CNP 8</p>
                  <h2 className="mt-4 font-display text-4xl uppercase text-foreground">{card.title}</h2>
                  <p className="mt-4 flex-1 text-foreground/70">{card.description}</p>
                  <div className="mt-8">
                    <Button className="rounded-full uppercase">{card.cta}</Button>
                  </div>
                </article>
              );

              if (internal) {
                return (
                  <Link key={card.title} href={card.href}>
                    {content}
                  </Link>
                );
              }

              return (
                <a key={card.title} href={anchor ? `/${card.href}` : card.href}>
                  {content}
                </a>
              );
            })}
          </div>

          <div className="cnp-container mt-10">
            <div className="cnp-panel p-8 text-foreground/75">
              <p className="cnp-eyebrow">Lieu</p>
              <p className="mt-5 text-lg">
                {siteContent.venue} • {siteContent.address.join(", ")}
              </p>
            </div>
          </div>
        </section>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageAccessGate>
  );
}

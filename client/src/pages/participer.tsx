import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { participationCards, participationSecondaryCards, siteContent } from "@/lib/siteContent";

export default function Participer() {
  return (
    <PageAccessGate pageKey="participer">
      <div className="cnp-shell">
        <Header />
        <main>
          <PageHeader
            title="Participer"
            subtitle="Le site distingue clairement les parcours visiteurs, exposants, partenaires et porteurs de projet. DARAJA et Voyage Congo restent des opportunites associees."
          />

          <section className="cnp-section">
            <div className="cnp-container">
              <div className="mb-8">
                <p className="cnp-eyebrow">Parcours principaux</p>
                <h2 className="mt-4 cnp-title text-foreground">Entrer dans le salon selon votre objectif</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {participationCards.map((card) => {
                  const isInternal = card.href.startsWith("/");
                  const isExternal = card.href.startsWith("http");
                  const content = (
                    <article className="cnp-card flex h-full flex-col p-8">
                      <p className="text-sm uppercase tracking-[0.2em] text-primary">Tonga Mboka</p>
                      <h2 className="mt-4 font-display text-4xl uppercase text-foreground">{card.title}</h2>
                      <p className="mt-4 flex-1 text-foreground/72">{card.description}</p>
                      <div className="mt-8">
                        <Button className="rounded-full uppercase">{card.cta}</Button>
                      </div>
                    </article>
                  );

                  if (isInternal) {
                    return (
                      <Link key={card.title} href={card.href}>
                        {content}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={card.title}
                      href={card.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="cnp-section cnp-section-alt">
            <div className="cnp-container grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="cnp-card p-8">
                <p className="cnp-eyebrow">Autres opportunites 2026</p>
                <h2 className="mt-5 cnp-title text-foreground">DARAJA et Voyage Congo</h2>
                <p className="mt-5 text-foreground/72">
                  Ces initiatives prolongent le salon sans lui prendre sa place. Elles s'adressent
                  aux partenaires, investisseurs et porteurs de projet qui veulent aller plus loin
                  dans l'ecosysteme 2026.
                </p>
              </div>

              <div className="grid gap-4">
                {participationSecondaryCards.map((card) => (
                  <Link key={card.title} href={card.href}>
                    <article className="cnp-panel px-6 py-6">
                      <h3 className="font-display text-3xl uppercase text-foreground">{card.title}</h3>
                      <p className="mt-3 text-foreground/72">{card.description}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="cnp-section">
            <div className="cnp-container">
              <div className="cnp-panel p-8 text-foreground/75">
                <p className="cnp-eyebrow">Lieu du salon</p>
                <div className="mt-5 space-y-3 text-lg">
                  {siteContent.venueDetails.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
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

import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  audiences,
  ecosystemInitiatives,
  movementParagraphs,
  programHighlights,
  siteContent,
} from "@/lib/siteContent";

const pillars = [
  {
    title: "Construire",
    text: "Faire du salon un espace de dialogue, de responsabilite collective et de projection pour un Congo durable et inclusif.",
  },
  {
    title: "Relier",
    text: "Mettre en relation la diaspora, les institutions, les territoires, les talents et les entreprises dans un meme mouvement.",
  },
  {
    title: "Investir",
    text: "Transformer la rencontre en opportunites, en cooperation et en projets utiles pour les Congo et leurs diasporas.",
  },
];

export default function Presentation() {
  return (
    <PageAccessGate pageKey="presentation">
      <div className="cnp-shell">
        <Header />
        <main>
          <PageHeader
            title="Presentation"
            subtitle="Congo Na Paris se presente comme une diplomatie culturelle et sociale en mouvement, avec le salon Tonga Mboka comme point de convergence principal en 2026."
          />

          <section className="cnp-section">
            <div className="cnp-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="cnp-card p-8 md:p-10">
                <p className="cnp-eyebrow">Mouvement</p>
                <h2 className="mt-5 cnp-title text-foreground">{siteContent.movementTitle}</h2>
                <div className="mt-5 space-y-5 text-lg leading-8 text-foreground/76">
                  {movementParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[28px] border border-[#d8e3fb] bg-[linear-gradient(180deg,#f6f9ff,#edf4ff)] p-8">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#234b92]">Salon 2026</p>
                  <h3 className="mt-4 font-display text-4xl uppercase text-foreground">
                    {siteContent.heroTitle}
                  </h3>
                  <p className="mt-4 text-foreground/74">
                    {siteContent.dates} • {siteContent.venueSummary}
                  </p>
                  <p className="mt-4 text-foreground/72">
                    Le grand rendez-vous annuel de la diaspora congolaise, pense comme un forum
                    socio-economique et culturel ou se croisent business, exposition, culture,
                    diplomatie sociale et opportunites.
                  </p>
                </div>

                <div className="cnp-panel p-8">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">Cap 2026</p>
                  <p className="mt-4 text-lg leading-8 text-foreground/76">
                    Apres avoir celebre Tonga Mboka, Congo Na Paris entre dans une phase d'action
                    et de continuite: le salon en premier plan, puis DARAJA et Voyage Congo comme
                    prolongements de l'ecosysteme.
                  </p>
                  <div className="mt-5 space-y-3 text-sm text-foreground/72">
                    {siteContent.venueDetails.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cnp-section cnp-section-alt">
            <div className="cnp-container">
              <div className="mb-8">
                <p className="cnp-eyebrow">Vision</p>
                <h2 className="mt-4 cnp-title text-foreground">Construire, relier, investir</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {pillars.map((pillar) => (
                  <article key={pillar.title} className="cnp-card p-8">
                    <h3 className="font-display text-4xl uppercase text-foreground">{pillar.title}</h3>
                    <p className="mt-4 text-foreground/72">{pillar.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="cnp-section">
            <div className="cnp-container">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="cnp-eyebrow">2026 en 3 initiatives</p>
                  <h2 className="mt-4 cnp-title text-foreground">Le salon d'abord, l'ecosysteme ensuite</h2>
                </div>
                <Link href="/ecosysteme-2026">
                  <Button variant="outline" className="rounded-full px-6 uppercase">
                    Voir l'ecosysteme 2026
                  </Button>
                </Link>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
                {ecosystemInitiatives.map((initiative) => (
                  <article
                    key={initiative.title}
                    className={`rounded-[28px] border p-8 ${
                      initiative.primary
                        ? "border-[#d8e3fb] bg-[linear-gradient(180deg,#f6f9ff,#edf4ff)]"
                        : initiative.tone === "green"
                          ? "border-[#d4e9dd] bg-[linear-gradient(180deg,#f3fbf6,#eaf6ef)]"
                          : "border-[#ead5c8] bg-[linear-gradient(180deg,#fff8f4,#f7ece5)]"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-primary">{initiative.label}</p>
                    <h3 className="mt-4 font-display text-4xl uppercase text-foreground">{initiative.title}</h3>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-foreground/55">{initiative.dates}</p>
                    <p className="mt-4 text-foreground/72">{initiative.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="cnp-section cnp-section-alt">
            <div className="cnp-container grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="cnp-card p-8">
                <p className="cnp-eyebrow">Le salon en 5 univers</p>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {programHighlights.map((item) => (
                    <div key={item.title} className="cnp-panel px-4 py-4 text-foreground/76">
                      <span className="font-semibold text-foreground">{item.title}</span>
                      <p className="mt-2 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cnp-card p-8">
                <p className="cnp-eyebrow">Publics concernes</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {audiences.map((audience) => (
                    <span
                      key={audience}
                      className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-foreground/80"
                    >
                      {audience}
                    </span>
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

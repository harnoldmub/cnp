import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { audiences, siteContent, whyAttend } from "@/lib/siteContent";

const pillars = [
  {
    title: "Connecter",
    text: "Faire se rencontrer les diasporas des deux Congo, les initiatives et les ecosystemes capables de creer des synergies durables.",
  },
  {
    title: "Inspirer",
    text: "Donner la parole a des profils credibles et a des talents qui montrent que l'impact concret est possible.",
  },
  {
    title: "Creer des opportunites",
    text: "Transformer l'energie collective en reseau, en projets et en collaborations utiles pour la diaspora et le continent.",
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
          subtitle="Une edition 8 plus immersive, plus premium et plus ancree dans les enjeux de paix et de prosperite partagee."
        />

        <section className="cnp-section">
          <div className="cnp-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="cnp-card p-8">
              <p className="cnp-eyebrow">L'evenement</p>
              <h2 className="mt-5 cnp-title text-foreground">Le rendez-vous incontournable de la diaspora congolaise</h2>
              <p className="mt-5 cnp-subtitle">
                Depuis 2015, Congo Na Paris rassemble les diasporas des deux Congo autour d'une ambition commune:
                connecter, inspirer et creer des opportunites concretes.
              </p>
              <p className="mt-4 text-foreground/70">
                Cette 8e edition, placee sous le theme "{siteContent.theme}", propose une journee immersive pensee
                pour aller a l'essentiel dans un lieu central a Paris.
              </p>
            </div>
            <div className="cnp-panel p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Infos pratiques</p>
              <div className="mt-5 space-y-4 text-foreground/80">
                <p><span className="text-primary">Dates:</span> {siteContent.dates}</p>
                <p><span className="text-primary">Horaires:</span> {siteContent.hours}</p>
                <p><span className="text-primary">Lieu:</span> {siteContent.venue}</p>
                <p><span className="text-primary">Adresse:</span> {siteContent.address.join(", ")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cnp-section cnp-section-alt">
          <div className="cnp-container">
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="cnp-card p-8">
                  <h3 className="font-display text-4xl uppercase text-foreground">{pillar.title}</h3>
                  <p className="mt-4 text-foreground/70">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cnp-section">
          <div className="cnp-container grid gap-6 lg:grid-cols-2">
            <div className="cnp-panel p-8">
              <p className="cnp-eyebrow">Pourquoi venir ?</p>
              <div className="mt-6 space-y-4">
                {whyAttend.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#ead9cc] bg-white px-4 py-4 text-foreground/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="cnp-card p-8">
              <p className="cnp-eyebrow">Pour qui ?</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {audiences.map((audience) => (
                  <span key={audience} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-foreground/80">
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

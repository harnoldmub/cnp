import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { partnerBenefits, partnerServiceHighlights, partnerSummaryPacks, siteContent } from "@/lib/siteContent";

export default function Sponsoriser() {
  return (
    <PageAccessGate pageKey="sponsoriser">
      <div className="cnp-shell">
        <Header />
        <main>
          <PageHeader
            title="Sponsoriser le salon"
            subtitle="Des offres publiques en resume pour comprendre les possibilites de presence, d'activation et de visibilite autour de Tonga Mboka."
          />

          <section className="cnp-section">
            <div className="cnp-container grid gap-6 lg:grid-cols-3">
              {partnerBenefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className={`rounded-[28px] border p-8 shadow-[0_18px_45px_rgba(75,42,22,0.08)] ${
                    index === 0
                      ? "border-[#d9e6ff] bg-[#f4f8ff]"
                      : index === 1
                        ? "border-[#ead5c8] bg-[#fff7f1]"
                        : "border-[#d9e6ff] bg-white"
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-primary">Salon Tonga Mboka</p>
                  <h2 className="mt-4 font-display text-4xl uppercase text-foreground">
                    {benefit.title}
                  </h2>
                  <p className="mt-4 text-foreground/72">{benefit.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="cnp-section cnp-section-alt">
            <div className="cnp-container">
              <div className="mb-8">
                <p className="cnp-eyebrow">Resume public</p>
                <h2 className="mt-4 cnp-title text-foreground">Formats de partenariat</h2>
                <p className="mt-4 max-w-3xl text-foreground/68">
                  Le site public montre les grandes familles d'offres. La grille complete, les
                  montants et les modalites detaillees sont transmis sur demande.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {partnerSummaryPacks.map((pack) => (
                  <article key={pack.name} className="cnp-card p-8">
                    <p className="text-sm uppercase tracking-[0.22em] text-primary">Partenariat</p>
                    <h3 className="mt-4 font-display text-4xl uppercase text-foreground">{pack.name}</h3>
                    <p className="mt-4 text-foreground/72">{pack.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="cnp-section">
            <div className="cnp-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="cnp-card-dark p-8 text-white">
                <p className="cnp-eyebrow">Services a la carte</p>
                <h2 className="mt-5 font-display text-5xl uppercase text-white">
                  Activer votre presence le jour du salon
                </h2>
                <p className="mt-5 text-white/70">
                  Nous proposons des formats adaptes a la nature de votre marque, a votre
                  objectif de visibilite et a votre budget.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {partnerServiceHighlights.map((item) => (
                  <div key={item} className="cnp-panel px-5 py-5 text-foreground/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="cnp-section">
            <div className="cnp-container">
              <div className="rounded-[30px] border border-[#e6cfbe] bg-[linear-gradient(135deg,#234b92,#11284d)] p-8 text-white md:p-10">
                <p className="text-sm uppercase tracking-[0.22em] text-primary">Prendre contact</p>
                <h2 className="mt-4 font-display text-5xl uppercase text-white">
                  Recevoir la grille complete
                </h2>
                <p className="mt-5 max-w-3xl text-white/72">
                  Ecrivez a l'equipe CNP pour recevoir le dossier de sponsoring detaille, les
                  activations disponibles et les conditions de presence correspondant a votre besoin.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={`mailto:${siteContent.partnershipEmail}`}>
                    <Button className="rounded-full px-6 uppercase">Ecrire a l'equipe partenariat</Button>
                  </a>
                  <Link href="/partenaires">
                    <Button variant="outline" className="rounded-full border-white/20 bg-white/5 px-6 uppercase text-white">
                      Voir les partenaires officiels
                    </Button>
                  </Link>
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

import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import SpeakerCard from "@/components/SpeakerCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { speakers } from "@/lib/siteContent";

export default function Intervenants() {
  return (
    <PageAccessGate pageKey="intervenants">
      <div className="cnp-shell">
        <Header />
        <main>
        <PageHeader
          title="Intervenants"
          subtitle="Des voix choisies pour leur credibilite, leur capacite a inspirer et leur impact dans les ecosystemes congolais."
        />

        <section className="cnp-section">
          <div className="cnp-container">
            <div className="mb-8 cnp-card p-8">
              <p className="cnp-eyebrow">Voix invitees</p>
              <h2 className="mt-5 cnp-title text-foreground">Des parcours qui incarnent l'ambition collective</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {speakers.map((speaker) => (
                <SpeakerCard key={speaker.name} {...speaker} />
              ))}
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

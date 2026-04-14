import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/siteContent";

export default function Programme() {
  return (
    <div className="cnp-shell">
      <Header />
      <main>
        <PageHeader
          title="Programme"
          subtitle="Le programme detaille du salon Tonga Mboka est en cours de finalisation. Cette page provisoire permet de garder un point d'entree clair en attendant la publication complete."
        />

        <section className="cnp-section">
          <div className="cnp-container grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[30px] border border-[#d8e3fb] bg-[linear-gradient(180deg,#f6f9ff,#edf4ff)] p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-[#234b92]">
                Page provisoire
              </p>
              <h2 className="mt-4 cnp-title text-foreground">
                Le salon se tiendra les {siteContent.dates}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/74">
                Le detail des horaires, conferences, master classes, activations, exposition et
                temps forts culturels sera publie ici tres prochainement. Pour l'instant, retenez
                la date et reservez votre place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://my.weezevent.com/congo-na-paris-construire-la-paix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="rounded-full px-6 uppercase">Reserver</Button>
                </a>
                <a href={`mailto:${siteContent.email}`}>
                  <Button variant="outline" className="rounded-full px-6 uppercase">
                    Contacter l'equipe
                  </Button>
                </a>
              </div>
            </div>

            <div className="cnp-card p-8 md:p-10">
              <p className="cnp-eyebrow">Infos pratiques</p>
              <div className="mt-6 space-y-4 text-foreground/78">
                <div className="cnp-panel px-5 py-4">
                  <span className="font-semibold text-foreground">Dates:</span> {siteContent.dates}
                </div>
                <div className="cnp-panel px-5 py-4">
                  <span className="font-semibold text-foreground">Horaires:</span> {siteContent.hours}
                </div>
                <div className="cnp-panel px-5 py-4">
                  <span className="font-semibold text-foreground">Lieu:</span> {siteContent.venueSummary}
                </div>
                <div className="cnp-panel px-5 py-4">
                  <span className="font-semibold text-foreground">Acces:</span> {siteContent.venueDetails[0]}
                </div>
                <div className="cnp-panel px-5 py-4">
                  <span className="font-semibold text-foreground">Dimanche:</span> {siteContent.venueDetails[1]}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

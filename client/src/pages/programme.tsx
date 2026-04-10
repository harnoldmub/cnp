import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programmeDays } from "@/lib/siteContent";

export default function Programme() {
  return (
    <PageAccessGate pageKey="programme">
      <div className="cnp-shell">
        <Header />
        <main>
        <PageHeader
          title="Programme"
          subtitle="Deux jours pour connecter, debattre, celebrer les talents congolais et faire naitre des opportunites."
        />

        <section className="cnp-section">
          <div className="cnp-container">
            <div className="mb-8 cnp-card p-8">
              <p className="cnp-eyebrow">Telechargement</p>
              <p className="mt-5 max-w-3xl text-lg text-foreground/70">
                Les visuels definitifs du 23 et du 24 pourront remplacer ces affiches a tout moment.
              </p>
            </div>

            <div className="grid gap-8 xl:grid-cols-2">
              {programmeDays.map((day) => (
                <section key={day.date} className="cnp-card overflow-hidden p-4 md:p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="cnp-eyebrow">{day.date}</p>
                      <p className="mt-4 text-foreground/70">{day.intro}</p>
                    </div>
                  </div>

                  <img
                    src="/hero.png"
                    alt={`Programme ${day.date}`}
                    className="w-full rounded-[24px] border border-[#ead9cc] object-cover shadow-[0_18px_45px_rgba(75,42,22,0.12)]"
                  />

                  <div className="mt-5">
                    <a href="/hero.png" download>
                      <Button className="rounded-full px-6 uppercase">
                        Telecharger
                        <Download className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </section>
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

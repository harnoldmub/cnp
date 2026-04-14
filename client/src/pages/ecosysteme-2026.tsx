import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ecosystemInitiatives } from "@/lib/siteContent";

const toneClasses = {
  blue: "border-[#dbe5fb] bg-[linear-gradient(180deg,#f6f9ff,#eef4ff)]",
  brown: "border-[#ead5c8] bg-[linear-gradient(180deg,#fff8f4,#f7ece5)]",
  green: "border-[#d4e9dd] bg-[linear-gradient(180deg,#f4fbf7,#ebf7f0)]",
};

export default function Ecosysteme2026() {
  return (
    <PageAccessGate pageKey="ecosysteme-2026">
      <div className="cnp-shell">
        <Header />
        <main>
          <PageHeader
            title="Ecosysteme 2026"
            subtitle="Le salon Tonga Mboka reste le coeur visible de CNP 2026, prolonge par DARAJA et Voyage Congo comme initiatives associees."
          />

          <section className="cnp-section">
            <div className="cnp-container">
              <div className="cnp-card p-8 md:p-10">
                <p className="cnp-eyebrow">Vision d'ensemble</p>
                <h2 className="mt-5 cnp-title text-foreground">
                  Une dynamique en trois temps, avec le salon en premier plan
                </h2>
                <p className="mt-5 max-w-4xl text-lg leading-8 text-foreground/74">
                  CNP 2026 articule un salon socio-economique et culturel a Paris, un programme
                  d'investissement pour relier les projets a impact et une immersion terrain au
                  Congo. Le site, comme l'experience, donne la priorite au salon Tonga Mboka.
                </p>
              </div>

              <div className="mt-8 grid gap-6">
                {ecosystemInitiatives.map((initiative, index) => (
                  <article
                    key={initiative.title}
                    className={`rounded-[28px] border p-8 shadow-[0_18px_45px_rgba(75,42,22,0.08)] ${toneClasses[initiative.tone as keyof typeof toneClasses]}`}
                  >
                    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-primary">
                          {initiative.label}
                        </p>
                        <h2 className="mt-4 font-display text-5xl uppercase text-foreground">
                          {initiative.title}
                        </h2>
                        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/55">
                          {initiative.dates}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg leading-8 text-foreground/74">{initiative.summary}</p>
                        <div className="mt-5 grid gap-3 md:grid-cols-3">
                          {initiative.bullets.map((bullet) => (
                            <div key={bullet} className="cnp-panel px-4 py-4 text-foreground/76">
                              {bullet}
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                          {index === 0 ? (
                            <>
                              <Link href="/programme">
                                <Button className="rounded-full px-6 uppercase">Voir le programme</Button>
                              </Link>
                              <Link href="/participer">
                                <Button variant="outline" className="rounded-full px-6 uppercase">
                                  Participer
                                </Button>
                              </Link>
                            </>
                          ) : (
                            <Link href="/contact">
                              <Button variant="outline" className="rounded-full px-6 uppercase">
                                En parler avec l'equipe
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
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

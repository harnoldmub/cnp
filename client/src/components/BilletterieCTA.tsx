import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const ticketOptions = [
  { label: "Ticket VIP Wolo", detail: "23 & 24 mai • acces complet", price: "135,00 EUR" },
  { label: "Ticket VIP Elikya", detail: "23 mai uniquement", price: "70,00 EUR" },
  { label: "Ticket Mbote", detail: "23 mai uniquement", price: "30,00 EUR" },
];

export default function BilletterieCTA() {
  return (
    <section id="billetterie" className="cnp-section cnp-section-theme">
      <div className="cnp-container">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="cnp-card-dark p-8">
            <p className="cnp-eyebrow">Billetterie</p>
            <h2 className="mt-5 cnp-title text-white">
              Une experience premium, lisible et ouverte
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70 md:text-lg">
              La nouvelle charte s'aligne sur une promesse simple: une billetterie claire,
              une experience haut de gamme et des parcours adaptes au rythme de l'evenement.
            </p>
            <Link href="/participer">
              <Button size="lg" className="mt-8 rounded-full px-8 uppercase">
                Voir comment participer
              </Button>
            </Link>
            <a
              href="https://my.weezevent.com/congo-na-paris-construire-la-paix"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="mt-4 rounded-full border-white/15 bg-white/5 px-8 uppercase text-white"
              >
                Ouvrir la billetterie
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="cnp-card-dark p-5 md:p-6">
            <div className="rounded-[24px] border border-[#ead9cc] bg-[linear-gradient(180deg,#fffdfb,#fbf2ea)] p-4 text-foreground md:p-6">
              <div className="mb-6 flex flex-col gap-4 border-b border-[#ead9cc] pb-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary/80">Billetterie officielle</p>
                  <h3 className="text-3xl font-bold text-foreground">Reservation Weezevent</h3>
                </div>
                <p className="text-sm text-foreground/55">23 & 24 mai 2026 • Paris</p>
              </div>
              <div className="rounded-[22px] border border-[#ead9cc] bg-white p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-primary/80">Acces externe</p>
                <h4 className="mt-3 text-2xl font-semibold text-foreground">La reservation s'ouvre dans un nouvel onglet</h4>
                <p className="mt-3 max-w-2xl text-foreground/65">
                  Pour une experience plus fluide, la billetterie n'est plus embarquee dans la page.
                  Vous serez redirige vers Weezevent pour finaliser votre reservation.
                </p>
                <a
                  href="https://my.weezevent.com/congo-na-paris-construire-la-paix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg" className="mt-6 rounded-full px-8 uppercase">
                    Reserver sur Weezevent
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {ticketOptions.map((ticket) => (
                  <div
                    key={ticket.label}
                    className="rounded-2xl border border-[#ead9cc] bg-white p-4"
                  >
                    <p className="text-lg font-semibold text-foreground">{ticket.label}</p>
                    <p className="mt-1 text-sm text-foreground/55">{ticket.detail}</p>
                    <p className="mt-3 text-2xl font-semibold text-primary">{ticket.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

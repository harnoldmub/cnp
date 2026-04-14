import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ecosystemInitiatives } from "@/lib/siteContent";

const toneClasses = {
  blue: "border-[#234b92]/15 bg-[linear-gradient(180deg,#2f5aa6,#1b3463)] text-white",
  brown: "border-[#63311d] bg-[linear-gradient(180deg,#5d2715,#2c120b)] text-white",
  green: "border-[#295341] bg-[linear-gradient(180deg,#2e6d53,#17372b)] text-white",
};

export default function InitiativesOverview() {
  return (
    <section className="cnp-section cnp-section-alt">
      <div className="cnp-container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="cnp-eyebrow">Ecosysteme 2026</p>
            <h2 className="mt-4 cnp-title text-foreground">Trois initiatives, un meme cap</h2>
          </div>
          <p className="max-w-2xl text-foreground/65">
            Le salon Tonga Mboka est au premier plan. DARAJA et Voyage Congo prolongent cette
            dynamique par l'investissement, l'immersion et la transformation concrete.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          {ecosystemInitiatives.map((initiative) => (
            <article
              key={initiative.title}
              className={`rounded-[28px] border p-7 shadow-[0_18px_50px_rgba(0,0,0,0.16)] ${toneClasses[initiative.tone as keyof typeof toneClasses]}`}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/72">{initiative.label}</p>
              <h3 className="mt-4 font-display text-5xl uppercase leading-none">
                {initiative.title}
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-primary">{initiative.dates}</p>
              <p className="mt-5 text-white/78">{initiative.summary}</p>
              <div className="mt-6 space-y-3">
                {initiative.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78">
                    {bullet}
                  </div>
                ))}
              </div>
              <Link href={initiative.href}>
                <Button
                  variant={initiative.primary ? "secondary" : "outline"}
                  className={`mt-7 rounded-full px-6 uppercase ${
                    initiative.primary
                      ? "bg-white text-[#1b3463] hover:bg-white/90"
                      : "border-white/20 bg-white/5 text-white"
                  }`}
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

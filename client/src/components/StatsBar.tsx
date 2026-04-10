import { homeStats, siteContent } from "@/lib/siteContent";

export default function StatsBar() {
  return (
    <section className="cnp-section bg-[linear-gradient(180deg,rgba(255,194,122,0.12),rgba(255,194,122,0.02))]">
      <div className="cnp-container">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-[28px] border border-[#3a2118] bg-[linear-gradient(180deg,#301711,#1a0d09)] p-8 shadow-[0_22px_50px_rgba(0,0,0,0.18)]">
            <p className="cnp-eyebrow">Theme 2026</p>
            <h2 className="mt-5 font-display text-5xl uppercase leading-none text-white md:text-6xl">
              {siteContent.theme}
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Une edition pensee pour relier ambition collective, paix durable et prosperite partagee.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {homeStats.map((stat) => (
              <div key={stat.label} className="cnp-panel p-6 text-center">
                <div className="font-display text-5xl uppercase text-primary">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { homeStats } from "@/lib/siteContent";

export default function StatsBar() {
  return (
    <section className="bg-[#d9a64d] py-10 md:py-12">
      <div className="cnp-container">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {homeStats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="font-display text-6xl uppercase leading-none md:text-7xl">{stat.value}</div>
              <div className="mt-4 text-sm uppercase tracking-[0.35em] text-white/85 md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "+18500", label: "VISITEURS" },
  { value: "237", label: "STANDS" },
  { value: "+130", label: "INTERVENANTS" },
  { value: "6", label: "ÉDITIONS PRÉCÉDENTES" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary py-10 md:py-14" data-testid="stats-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                data-testid={`stat-value-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {stat.value}
              </div>
              <div
                className="text-sm md:text-base font-medium tracking-wider opacity-90"
                data-testid={`stat-label-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

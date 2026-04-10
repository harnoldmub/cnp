interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(125,43,20,0.78),rgba(12,5,5,0.98))]" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative cnp-container text-center">
        <p className="cnp-eyebrow">CNP 8</p>
        <h1 className="mt-6 font-display text-6xl uppercase leading-none text-white md:text-8xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/70 md:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

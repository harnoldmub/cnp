interface ProgrammeItemProps {
  time: string;
  title: string;
  description: string;
  image?: string;
  imagePosition?: "left" | "right";
}

export default function ProgrammeItem({
  time,
  title,
  description,
  image,
  imagePosition = "left",
}: ProgrammeItemProps) {
  return (
    <article className="grid items-center gap-6 lg:grid-cols-2">
      {image && imagePosition === "left" && (
        <img src={image} alt={title} className="h-72 w-full rounded-[28px] border border-[#ead9cc] object-cover" />
      )}
      <div className="cnp-card p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">{time}</p>
        <h3 className="mt-3 font-display text-4xl uppercase text-foreground">{title}</h3>
        <p className="mt-4 text-foreground/70">{description}</p>
      </div>
      {image && imagePosition === "right" && (
        <img src={image} alt={title} className="h-72 w-full rounded-[28px] border border-[#ead9cc] object-cover" />
      )}
    </article>
  );
}

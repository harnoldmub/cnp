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
    <div
      className={`grid md:grid-cols-2 gap-6 items-center ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
      data-testid={`programme-${title.toLowerCase().replace(/\s/g, "-").slice(0, 30)}`}
    >
      {image && imagePosition === "left" && (
        <div className="rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-56 object-cover"
          />
        </div>
      )}
      <div className={imagePosition === "right" ? "md:order-first" : ""}>
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
          {time}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {image && imagePosition === "right" && (
        <div className="rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-56 object-cover"
          />
        </div>
      )}
    </div>
  );
}

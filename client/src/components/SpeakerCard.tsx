import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SpeakerCardProps {
  name: string;
  role: string;
  image?: string;
}

export default function SpeakerCard({ name, role, image }: SpeakerCardProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="cnp-card p-6 text-center">
      <Avatar className="mx-auto h-28 w-28 border-4 border-primary/30">
        <AvatarImage src={image} alt={name} className="object-cover" />
        <AvatarFallback className="bg-primary/15 text-2xl font-bold text-primary">
          {initials}
        </AvatarFallback>
      </Avatar>
      <h3 className="mt-5 font-display text-4xl uppercase text-foreground">{name}</h3>
      <p className="mt-2 text-foreground/65">{role}</p>
    </div>
  );
}

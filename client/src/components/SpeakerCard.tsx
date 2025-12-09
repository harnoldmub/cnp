import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SpeakerCardProps {
  name: string;
  role: string;
  image?: string;
}

export default function SpeakerCard({ name, role, image }: SpeakerCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className="group text-center p-6 rounded-lg bg-card transition-transform hover:scale-[1.02]"
      data-testid={`speaker-${name.toLowerCase().replace(/\s/g, "-")}`}
    >
      <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/20">
        <AvatarImage src={image} alt={name} className="object-cover" />
        <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
          {initials}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{role}</p>
    </div>
  );
}

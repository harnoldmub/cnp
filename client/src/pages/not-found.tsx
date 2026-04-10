import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="cnp-shell flex min-h-screen items-center justify-center px-4">
      <div className="cnp-card max-w-xl p-10 text-center">
        <p className="cnp-eyebrow">404</p>
        <h1 className="mt-6 font-display text-6xl uppercase text-white">Cette page n'existe pas</h1>
        <p className="mt-4 text-white/65">
          Revenons vers les espaces principaux de Congo Na Paris pour continuer la visite.
        </p>
        <Link href="/">
          <Button className="mt-8 rounded-full px-8 uppercase">Retour a l'accueil</Button>
        </Link>
      </div>
    </div>
  );
}

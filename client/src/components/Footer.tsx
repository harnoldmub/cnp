import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoWhite from "@assets/LOGOS-CNP_1765307996147.png";
import patternBg from "@assets/bggreyFlip_1765307996147.jpg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe triggered:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#050816]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/">
              <img
                src={logoWhite}
                alt="Congo Na Paris"
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-white/60 text-sm">
              Connecter la diaspora aux Congo
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Édition 2025
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/programme"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-programme"
                >
                  Programme
                </Link>
              </li>
              <li>
                <Link
                  href="/intervenants"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-intervenants"
                >
                  Intervenants
                </Link>
              </li>
              <li>
                <Link
                  href="/partenaires"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-partenaires"
                >
                  Partenaires
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Participer
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/participer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-stands"
                >
                  Stands
                </Link>
              </li>
              <li>
                <a
                  href="#billetterie"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-billetterie"
                >
                  Billetterie
                </a>
              </li>
              <li>
                <Link
                  href="/participer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-partenariat"
                >
                  Partenariat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                className="w-full rounded-full uppercase font-semibold"
                data-testid="button-newsletter-subscribe"
              >
                S'abonner
              </Button>
              <p className="text-white/30 text-xs">
                Laissez ce champ vide si vous êtes humain :
                <input
                  type="text"
                  className="w-0 h-0 opacity-0 absolute"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </p>
            </form>
          </div>
        </div>
      </div>

      <div
        className="h-12 bg-repeat-x opacity-20"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: "auto 100%",
        }}
      />

      <div className="bg-[#030508] py-6">
        <p className="text-center text-white/40 text-sm">
          Copyright © 2025 Congo Na Paris. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

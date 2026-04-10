import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Mail, Instagram, ArrowUpRight } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import logoWhite from "@assets/LOGOS-CNP_1765307996147.png";
import { siteContent } from "@/lib/siteContent";
import { useVisiblePages } from "@/lib/pageSettings";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { footerPages } = useVisiblePages();

  const newsletterMutation = useMutation({
    mutationFn: async (value: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email: value });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inscription enregistree",
        description: "Vous recevrez les prochaines actualites de CNP 8.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Envoi impossible",
        description: "Une erreur est survenue, merci de reessayer.",
        variant: "destructive",
      });
    },
  });

  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#160906,#0d0403)] text-white">
      <div className="cnp-container py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_1fr]">
          <section className="space-y-5">
            <img src={logoWhite} alt="Congo Na Paris" className="h-14 w-auto" />
            <p className="max-w-xl text-base leading-8 text-white/68">
              Le rendez-vous incontournable de la diaspora congolaise a Paris.
              Depuis 2015, Congo Na Paris connecte, inspire et cree des opportunites concretes.
            </p>

            <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-primary">Adresse</p>
              <p className="mt-3 text-2xl font-semibold text-white">{siteContent.venue}</p>
              <p className="mt-2 max-w-xl text-white/65">{siteContent.address.join(", ")}</p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={`mailto:${siteContent.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white/72 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" />
                {siteContent.email}
              </a>
              <a
                href="https://instagram.com/congonaparis"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white/72 transition hover:text-white"
              >
                <Instagram className="h-4 w-4 text-primary" />
                @{siteContent.instagram}
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white/72">
                <MapPin className="h-4 w-4 text-primary" />
                Paris
              </span>
            </div>
          </section>

          <section className="space-y-4">
            <p className="font-display text-4xl uppercase text-white">Navigation</p>
            <div className="grid gap-3 text-white/72">
              {footerPages.map((page) => (
                <Link key={page.key} href={page.href} className="transition hover:text-white">
                  {page.label === "Presentation" ? "A propos" : page.label}
                </Link>
              ))}
              <Link href="/admin" className="transition hover:text-white">Admin</Link>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 md:p-7">
            <p className="cnp-eyebrow">Newsletter</p>
            <h3 className="mt-4 font-display text-4xl uppercase leading-none text-white">
              Restez dans le rythme de CNP 8
            </h3>
            <p className="mt-4 text-white/62">
              Recevez les annonces, les informations pratiques et les temps forts de l'evenement.
            </p>

            <form
              className="mt-6 space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                if (!email) {
                  toast({
                    title: "Email requis",
                    description: "Merci de renseigner votre adresse email.",
                    variant: "destructive",
                  });
                  return;
                }
                newsletterMutation.mutate(email);
              }}
            >
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Votre adresse email"
                className="h-12 rounded-full border-white/15 bg-[#2a1913] text-white placeholder:text-white/35"
              />
              <Button className="w-full rounded-full uppercase" disabled={newsletterMutation.isPending}>
                {newsletterMutation.isPending ? "Inscription..." : "Recevoir les actualites"}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </form>
          </section>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/38">
        Congo Na Paris 8e edition • 23 & 24 mai 2026 • Espace Saint Martin, Paris
      </div>
    </footer>
  );
}

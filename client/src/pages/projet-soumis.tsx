import { motion } from "framer-motion";
import { CheckCircle, Mail, Clock3, Handshake } from "lucide-react";
import logoPng from "@assets/LOGOS-CNP_1765307996147.png";
import { siteContent } from "@/lib/siteContent";
import PageAccessGate from "@/components/PageAccessGate";

const steps = [
  {
    icon: Mail,
    title: "Confirmation envoyee",
    description: "Un email de confirmation a ete transmis a l'adresse indiquee.",
  },
  {
    icon: Clock3,
    title: "Analyse en cours",
    description: "L'equipe CNP etudiera votre projet avec attention dans les prochains jours.",
  },
  {
    icon: Handshake,
    title: "Prise de contact",
    description: "Nous reviendrons vers vous si votre proposition correspond au cadre de l'edition 8.",
  },
];

export default function ProjetSoumis() {
  return (
    <PageAccessGate pageKey="projet-soumis">
      <div className="cnp-shell relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,187,107,0.2),transparent_30%),linear-gradient(180deg,rgba(65,21,10,0.98),rgba(10,4,4,1))]" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="py-8">
            <div className="cnp-container flex justify-center">
              <img src={logoPng} alt="Congo Na Paris" className="h-16 w-auto" />
            </div>
          </header>

          <main className="flex flex-1 items-center justify-center px-4 py-12">
            <div className="w-full max-w-3xl text-center">
              <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}>
                <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/15">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                <p className="cnp-eyebrow mt-8">Projet recu</p>
                <h1 className="mt-6 font-display text-6xl uppercase text-white md:text-8xl">
                  Merci pour votre candidature
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
                  Votre projet entre maintenant dans notre parcours de revue. L'equipe vous recontactera si une suite doit etre engagee.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 cnp-card p-6 md:p-8"
              >
                <div className="grid gap-4">
                  {steps.map((step) => (
                    <div key={step.title} className="cnp-panel flex items-start gap-4 p-5 text-left">
                      <step.icon className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <h2 className="font-semibold text-white">{step.title}</h2>
                        <p className="mt-1 text-sm text-white/60">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </main>

          <footer className="border-t border-white/10 py-8 text-center text-sm text-white/45">
            Congo Na Paris 8e edition • {siteContent.dates} • {siteContent.venueSummary}
          </footer>
        </div>
      </div>
    </PageAccessGate>
  );
}

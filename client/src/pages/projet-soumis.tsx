import { motion } from "framer-motion";
import { CheckCircle, Mail, Clock, MessageCircle, Sparkles } from "lucide-react";

import logoPng from "@assets/LOGOS-CNP_1765307996147.png";

const steps = [
  {
    icon: Mail,
    title: "Confirmation envoyée",
    description: "Un email de confirmation a été envoyé à l'adresse indiquée.",
  },
  {
    icon: Clock,
    title: "Examen en cours",
    description: "Notre équipe examinera votre candidature sous 10 jours ouvrés.",
  },
  {
    icon: MessageCircle,
    title: "Prise de contact",
    description: "Nous vous contacterons pour la suite de votre projet.",
  },
];

export default function ProjetSoumis() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-6 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex justify-center">
            <img
              src={logoPng}
              alt="Congo Na Paris"
              className="h-16 md:h-20"
              data-testid="img-logo"
            />
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 mb-6">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Candidature reçue
              </span>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                data-testid="text-success-title"
              >
                Projet soumis avec{" "}
                <span className="text-green-400">succès</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mx-auto mb-12">
                Merci pour votre candidature ! Notre équipe l'examinera avec attention
                et vous contactera prochainement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-xl font-semibold text-white mb-6">
                Prochaines étapes
              </h2>

              <div className="grid gap-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/5 text-left"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </span>
                    <div>
                      <h3 className="font-medium text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <footer className="py-8 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              Congo Na Paris 2025 - 27 & 28 Septembre - Paris
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Pour toute question : financement@congonaparis.fr
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

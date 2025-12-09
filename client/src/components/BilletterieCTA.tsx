import { Button } from "@/components/ui/button";
import speakerImage from "@assets/stock_images/professional_african_d9482444.jpg";

export default function BilletterieCTA() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="billetterie-cta"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${speakerImage})` }}
      />
      <div className="absolute inset-0 bg-[#050816]/85" />

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-white/5 uppercase tracking-widest whitespace-nowrap">
          BILLETTERIE
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Une 7ème édition exceptionnelle
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Réservez dès maintenant votre place pour vivre une expérience unique
          au cœur de la culture congolaise. Conférences, expositions, networking
          et moments de célébration vous attendent.
        </p>
        <Button
          size="lg"
          className="rounded-full px-10 py-6 text-lg uppercase font-semibold"
          data-testid="button-billetterie-cta"
        >
          Billetterie
        </Button>
      </div>
    </section>
  );
}

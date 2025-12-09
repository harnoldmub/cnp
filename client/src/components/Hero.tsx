import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/Slider-CNP-1-scaled_1765307996148.png";
import bannerBg from "@assets/bannerBG-2_1765307996147.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" data-testid="hero-section">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
      />
      <div className="absolute inset-0 bg-[#050816]/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-0">
          <div className="text-white space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full uppercase tracking-wide">
              7ème Édition
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Premier salon
              <br />
              socio-culturel
              <br />
              congolais en
              <br />
              Europe, de
              <br />
              <span className="text-primary">retour !</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-md">
              7ème édition à Paris, Kinshasa et Kolwezi
              <br />
              27 & 28 Septembre 2025
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 text-base uppercase font-semibold"
                data-testid="button-billetterie"
              >
                Billetterie
              </Button>
              <Link href="/programme">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base uppercase font-semibold border-white/30 text-white bg-white/10 backdrop-blur-sm"
                  data-testid="button-programme"
                >
                  Programme
                </Button>
              </Link>
            </div>
            <div className="flex gap-2 pt-4">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="w-3 h-3 rounded-full bg-white/30" />
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Congo Na Paris 2025"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-repeat-x opacity-30"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "auto 100%",
        }}
      />
    </section>
  );
}

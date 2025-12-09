import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import eventPoster from "@assets/IMG_2265_1765309764526.jpg";
import tongaMbokaLogo from "@assets/Logo-PNG-01_1765309862074.png";
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
            <div className="flex items-center gap-4 mb-2">
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full uppercase tracking-wide">
                7ème Édition
              </span>
              <span className="text-white/60 text-sm uppercase tracking-wide">
                Salon Socio-Économique & Culturel Congolais
              </span>
            </div>
            <img 
              src={tongaMbokaLogo} 
              alt="Tonga Mboka - Construire le Pays" 
              className="h-20 md:h-28 w-auto"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Le Congo
              <br />
              de <span className="text-primary">Demain</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-md">
              1ère plateforme socio-économique & culturelle congolaise en Europe
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <div>
                <span className="text-primary font-semibold">DATE</span>
                <p className="text-white font-bold text-lg">27-28 Sept. 2025</p>
              </div>
              <div>
                <span className="text-primary font-semibold">HEURE</span>
                <p className="text-white font-bold text-lg">10H00 - 20H00</p>
              </div>
              <div>
                <span className="text-primary font-semibold">LIEU</span>
                <p className="text-white font-bold">Espace Charenton</p>
                <p className="text-white/60 text-xs">327 rue de Charenton, 75012 Paris</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
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
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={eventPoster}
                alt="Congo Na Paris 2025 - Tonga Mboka"
                className="w-full h-auto object-cover"
              />
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

import { useState } from "react";
import { siteContent } from "@/lib/siteContent";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-white/10 lg:min-h-[88vh]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#3f1c12,#150705)]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[120vh] w-[220vw] -translate-x-1/2 -translate-y-1/2 lg:h-[140vh] lg:w-[140vw]">
          <iframe
            className={`h-full w-full transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
            src="https://www.youtube.com/embed/IkX5dpqm_dc?autoplay=1&mute=1&controls=0&loop=1&playlist=IkX5dpqm_dc&playsinline=1&modestbranding=1&rel=0"
            title="Congo Na Paris video background"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => setVideoReady(true)}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,6,5,0.76)_0%,rgba(13,6,5,0.58)_38%,rgba(13,6,5,0.48)_64%,rgba(13,6,5,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,178,83,0.14),transparent_28%)]" />

      <div className="relative cnp-container flex min-h-[78vh] items-center py-14 md:py-20 lg:min-h-[88vh] lg:py-24">
        <div className="max-w-5xl">
          <div>
            <span className="cnp-eyebrow">{siteContent.edition}</span>
            <h1 className="mt-6 max-w-6xl font-display text-6xl uppercase leading-[0.92] text-white md:text-8xl xl:text-[8.5rem]">
              Le rendez-vous
              <span className="block">de la <span className="text-primary">diaspora congolaise</span></span>
            </h1>
            <p className="mt-8 text-sm uppercase tracking-[0.28em] text-white/58 md:text-base">
              {siteContent.dates} &nbsp; • &nbsp; {siteContent.venueSummary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

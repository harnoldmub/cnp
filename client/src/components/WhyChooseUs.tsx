import { Check, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import audienceImage from "@assets/Photo-01_1765309862074.png";
import { audiences, movementParagraphs, siteContent, whyAttend } from "@/lib/siteContent";

export default function WhyChooseUs() {
  return (
    <section className="cnp-section">
      <div className="cnp-container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <div className="absolute -inset-5 rounded-[32px] bg-primary/10 blur-3xl" />
          <img
            src={audienceImage}
            alt="Public Congo Na Paris"
            className="relative w-full rounded-[30px] border border-[#ead9cc] object-cover shadow-2xl"
          />
        </div>

        <div>
          <p className="cnp-eyebrow">Mouvement</p>
          <h2 className="mt-5 cnp-title text-foreground">
            {siteContent.movementTitle}
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-lg leading-8 text-foreground/74">
            {movementParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whyAttend.map((item) => (
              <div key={item} className="cnp-panel flex gap-3 px-4 py-4">
                <Check className="mt-0.5 h-5 w-5 text-primary" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 cnp-card p-6">
            <div className="flex items-center gap-3 text-primary">
              <Sparkles className="h-5 w-5" />
              <p className="font-semibold uppercase tracking-[0.18em]">Pour qui ?</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm text-foreground/75"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>

          <Link href="/presentation">
            <Button className="mt-8 rounded-full px-8 uppercase">Comprendre la vision 2026</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { audienceInsights, audienceProfiles } from "@/lib/siteContent";

const toneClasses = {
  blue: "border-[#dbe5fb] bg-[#f5f8ff] text-[#234b92]",
  green: "border-[#cfe5d8] bg-[#edf7f1] text-[#1e5c43]",
  bronze: "border-[#ead7be] bg-[#fff7ee] text-[#a5611d]",
};

export default function AudienceInsights() {
  return (
    <section className="cnp-section">
      <div className="cnp-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="cnp-card p-8 md:p-10">
          <p className="cnp-eyebrow">Profils & impact</p>
          <h2 className="mt-5 cnp-title text-foreground">Un salon qui rassemble et convertit</h2>
          <p className="mt-5 cnp-subtitle">
            Le dossier de presse de CNP montre un public engage, une forte satisfaction et un
            vrai potentiel de business, de visibilite et de reconnexion avec les Congo.
          </p>
          <div className="mt-8 space-y-4">
            {audienceProfiles.map((profile) => (
              <div key={profile} className="cnp-panel px-5 py-4 text-foreground/78">
                {profile}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {audienceInsights.map((item) => (
            <article
              key={item.label}
              className={`rounded-[28px] border p-6 shadow-[0_18px_45px_rgba(75,42,22,0.08)] ${toneClasses[item.tone as keyof typeof toneClasses]}`}
            >
              <p className="font-display text-6xl uppercase leading-none">{item.value}</p>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em]">
                {item.label}
              </h3>
              <p className="mt-3 text-sm opacity-80">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

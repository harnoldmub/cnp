import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { magazineArticles, getMagazineArticle } from "@/lib/siteContent";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Article = (typeof magazineArticles)[number];

function MagazineList() {
  return (
    <>
      <PageHeader
        title="CNP Mag"
        subtitle="Le recit, les temps forts et les angles editoriaux qui accompagnent la nouvelle edition."
      />

      <section className="cnp-section">
        <div className="cnp-container grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {magazineArticles.map((article) => (
              <Link key={article.id} href={`/magazine/${article.id}`} className="group">
                <article className="cnp-card overflow-hidden">
                  <img src={article.image} alt={article.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">{article.category}</p>
                    <h2 className="mt-3 text-2xl font-bold text-foreground group-hover:text-primary">{article.title}</h2>
                    <p className="mt-3 text-foreground/65">{article.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-foreground/35">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="cnp-card p-6">
              <p className="cnp-eyebrow">Angles editoriaux</p>
              <div className="mt-5 space-y-3 text-foreground/75">
                <p>Edition 8</p>
                <p>Theme Tonga Mboka</p>
                <p>Culture et diaspora</p>
                <p>Networking et opportunites</p>
              </div>
            </div>
            <div className="cnp-panel p-6">
              <p className="font-display text-4xl uppercase text-foreground">Trois rythmes editoriaux</p>
              <p className="mt-4 text-foreground/70">
                Certains articles prennent la forme d'un insight, d'autres d'une feature visuelle ou d'un reportage plus narratif.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function ArticleHeader({ article }: { article: Article }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,#3c1b12,#140706)] py-20 text-white">
      <div className="cnp-container">
        <Link href="/magazine" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Retour au magazine
        </Link>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="cnp-eyebrow">{article.heroLabel}</p>
            <h1 className="mt-5 font-display text-6xl uppercase leading-none text-white md:text-8xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-white/72 md:text-xl">{article.intro}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span>{article.category}</span>
              <span>{article.date}</span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {article.readTime}
              </span>
              <span>{article.author}</span>
            </div>
          </div>
          <img
            src={article.image}
            alt={article.title}
            className="w-full rounded-[30px] border border-white/10 object-cover shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
          />
        </div>
      </div>
    </section>
  );
}

function InsightTemplate({ article }: { article: Article }) {
  return (
    <section className="cnp-section">
      <div className="cnp-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="cnp-card p-8">
          <p className="cnp-eyebrow">Points cles</p>
          <div className="mt-6 space-y-4">
            {article.keyPoints?.map((point) => (
              <div key={point} className="rounded-2xl border border-[#ead9cc] bg-[#fcf7f3] px-4 py-4 text-foreground/75">
                {point}
              </div>
            ))}
          </div>
        </aside>

        <article className="cnp-card p-8 md:p-10">
          <div className="space-y-6 text-lg leading-8 text-foreground/78">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {article.pullQuote && (
            <blockquote className="mt-10 rounded-[28px] border border-primary/20 bg-primary/10 p-6 font-display text-4xl uppercase leading-tight text-foreground">
              {article.pullQuote}
            </blockquote>
          )}
        </article>
      </div>
    </section>
  );
}

function FeatureTemplate({ article }: { article: Article }) {
  return (
    <section className="cnp-section">
      <div className="cnp-container space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {article.highlights?.map((item) => (
            <div key={item.label} className="cnp-card p-8 text-center">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">{item.label}</p>
              <p className="mt-4 font-display text-5xl uppercase text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="cnp-card p-8 md:p-10">
            <div className="space-y-6 text-lg leading-8 text-foreground/78">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <div className="grid gap-4">
            {article.gallery?.map((image, index) => (
              <img
                key={`${article.id}-${index}`}
                src={image}
                alt={`${article.title} visuel ${index + 1}`}
                className="h-full min-h-[180px] w-full rounded-[28px] border border-[#ead9cc] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportageTemplate({ article }: { article: Article }) {
  return (
    <section className="cnp-section">
      <div className="cnp-container grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <article className="cnp-card p-8 md:p-10">
          <div className="space-y-6 text-lg leading-8 text-foreground/78">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
        <aside className="cnp-card-dark p-8 text-white">
          <p className="cnp-eyebrow">Sequence</p>
          <div className="mt-6 space-y-5">
            {article.timeline?.map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {index + 1}
                </div>
                <div>
                  <h2 className="font-display text-3xl uppercase text-white">{item.title}</h2>
                  <p className="mt-2 text-white/68">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function RelatedArticles({ article }: { article: Article }) {
  const related = magazineArticles.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <section className="cnp-section cnp-section-alt">
      <div className="cnp-container">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="cnp-eyebrow">A lire aussi</p>
            <h2 className="mt-4 cnp-title text-foreground">Continuer la lecture</h2>
          </div>
          <Link href="/magazine">
            <Button variant="outline" className="rounded-full px-6">
              Tous les articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.id} href={`/magazine/${item.id}`} className="group">
              <article className="cnp-card overflow-hidden">
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{item.category}</p>
                  <h3 className="mt-3 text-xl font-bold text-foreground group-hover:text-primary">{item.title}</h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function MagazineDetail({ article }: { article: Article }) {
  return (
    <>
      <ArticleHeader article={article} />
      {article.template === "insight" && <InsightTemplate article={article} />}
      {article.template === "feature" && <FeatureTemplate article={article} />}
      {article.template === "reportage" && <ReportageTemplate article={article} />}
      <RelatedArticles article={article} />
    </>
  );
}

export default function Magazine() {
  const [match, params] = useRoute("/magazine/:id");
  const article = params?.id ? getMagazineArticle(params.id) : undefined;

  return (
    <PageAccessGate pageKey="magazine">
      <div className="cnp-shell">
        <Header />
        <main>{match && article ? <MagazineDetail article={article} /> : <MagazineList />}</main>
        <Footer />
        <BackToTop />
      </div>
    </PageAccessGate>
  );
}

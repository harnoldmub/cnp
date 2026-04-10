import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { magazineArticles } from "@/lib/siteContent";

export default function MagazineSection() {
  return (
    <section className="cnp-section cnp-section-theme">
      <div className="cnp-container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="cnp-eyebrow">CNP MAG</p>
            <h2 className="mt-4 cnp-title text-white">Le recit de l'edition 8</h2>
          </div>
          <Link href="/magazine">
            <Button variant="outline" className="rounded-full border-white/15 bg-white/5 text-white">
              Voir tous les articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {magazineArticles.map((article) => (
            <Link key={article.id} href={`/magazine/${article.id}`} className="group">
              <article className="cnp-card-dark overflow-hidden">
                <img src={article.image} alt={article.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">{article.category}</p>
                  <h3 className="mt-3 text-xl font-bold text-white transition group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm text-white/65">{article.excerpt}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/40">{article.date}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { partnerCategories, siteContent } from "@/lib/siteContent";

export default function Partenaires() {
  return (
    <PageAccessGate pageKey="partenaires">
      <div className="cnp-shell">
        <Header />
        <main>
        <PageHeader
          title="Partenaires"
          subtitle="Les structures qui accompagnent le rayonnement de Congo Na Paris et la mise en relation de la diaspora."
        />

        <section className="cnp-section">
          <div className="cnp-container space-y-14">
            {partnerCategories.map((category) => (
              <section key={category.title}>
                <div className="mb-6">
                  <p className="cnp-eyebrow">{category.title}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {category.partners.map((partner) => (
                    <article key={partner.name} className="cnp-card flex min-h-[220px] items-center justify-center p-8">
                      <img src={partner.logo} alt={partner.name} className="max-h-28 w-full object-contain" />
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <div className="cnp-panel p-8 text-center text-foreground/75">
              Interesses par un partenariat ou une activation de marque ? Ecrivez a{" "}
              <a className="text-primary" href={`mailto:${siteContent.partnershipEmail}`}>
                {siteContent.partnershipEmail}
              </a>
            </div>
          </div>
        </section>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageAccessGate>
  );
}

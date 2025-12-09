import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// todo: remove mock functionality
const partnerCategories = [
  {
    title: "Partenaires Institutionnels",
    partners: [
      "Ambassade de la RDC en France",
      "Région Île-de-France",
      "Ville de Paris",
    ],
  },
  {
    title: "Partenaires Médias",
    partners: [
      "RFI",
      "France 24",
      "Africa 24",
      "Radio Okapi",
    ],
  },
  {
    title: "Partenaires Entreprises",
    partners: [
      "Orange Congo",
      "Rawbank",
      "Vodacom",
      "Air France",
    ],
  },
];

export default function Partenaires() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Partenaires"
          subtitle="Ils nous font confiance"
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="space-y-16">
              {partnerCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                    {category.title}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner) => (
                      <div
                        key={partner}
                        className="bg-card rounded-lg p-8 text-center flex items-center justify-center min-h-[120px]"
                      >
                        <span className="text-lg font-semibold text-muted-foreground">
                          {partner}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Intéressé par un partenariat ? Contactez-nous à{" "}
                <a
                  href="mailto:partenariat@congonaparis.fr"
                  className="text-primary hover:underline"
                >
                  partenariat@congonaparis.fr
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

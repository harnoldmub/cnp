import Header from "@/components/Header";
import PageAccessGate from "@/components/PageAccessGate";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Mail, MapPin, CalendarDays } from "lucide-react";
import { siteContent } from "@/lib/siteContent";

export default function Contact() {
  return (
    <PageAccessGate pageKey="contact">
      <div className="cnp-shell">
        <Header />
        <main>
        <PageHeader
          title="Contact"
          subtitle="Une question, une demande de partenariat ou un besoin logistique ? L'equipe CNP est a votre ecoute."
        />

        <section className="cnp-section">
          <div className="cnp-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="cnp-card p-8">
                <p className="cnp-eyebrow">Infos pratiques</p>
                <div className="mt-6 space-y-5 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{siteContent.dates}</p>
                      <p>{siteContent.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{siteContent.venueSummary}</p>
                      <p>{siteContent.venueDetails[0]}</p>
                      <p>{siteContent.venueDetails[1]}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{siteContent.email}</p>
                      <p>{siteContent.partnershipEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cnp-card p-8">
              <p className="cnp-eyebrow">Nous ecrire</p>
              <h2 className="mt-5 font-display text-5xl uppercase text-foreground">Parlons de votre besoin</h2>
              <p className="mt-4 text-foreground/65">
                Remplissez le formulaire et nous reviendrons vers vous rapidement.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
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

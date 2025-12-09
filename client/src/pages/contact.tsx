import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { MapPin, Calendar, Mail, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Calendar,
    label: "Dates",
    value: "27 & 28 Septembre 2025",
  },
  {
    icon: MapPin,
    label: "Lieu",
    value: "Paris - Adresse à venir",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@congonaparis.fr",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 1 23 45 67 89",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader title="Contact" subtitle="Nous sommes à votre écoute" />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Infos Pratiques
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      className="flex items-start gap-4 p-5 bg-card rounded-lg"
                    >
                      <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="text-lg font-medium text-foreground">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Envoyez-nous un message
                </h2>
                <div className="bg-card rounded-lg p-6 md:p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

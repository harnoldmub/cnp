import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import BilletterieCTA from "@/components/BilletterieCTA";
import ActionCards from "@/components/ActionCards";
import MagazineSection from "@/components/MagazineSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageAccessGate from "@/components/PageAccessGate";

export default function Home() {
  return (
    <PageAccessGate pageKey="home">
      <div className="cnp-shell">
        <Header />
        <main>
          <Hero />
          <StatsBar />
          <WhyChooseUs />
          <BilletterieCTA />
          <ActionCards />
          <MagazineSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageAccessGate>
  );
}

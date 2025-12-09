import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import BilletterieCTA from "@/components/BilletterieCTA";
import ActionCards from "@/components/ActionCards";
import MagazineSection from "@/components/MagazineSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header variant="dark" />
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
  );
}

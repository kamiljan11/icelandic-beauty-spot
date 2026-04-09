import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import BeforeAfter from "@/components/BeforeAfter";
import GiftCards from "@/components/GiftCards";
import SocialProof from "@/components/SocialProof";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <BeforeAfter />
        <Pricing />
        <GiftCards />
        <Testimonials />
        <SocialProof />
        <Booking />
        <Contact />
        <CtaBanner />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

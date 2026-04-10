import { LanguageProvider } from "@/i18n/LanguageContext";
import { DemoProvider, useDemo } from "@/hooks/useDemo";
import DemoDialog from "@/components/DemoDialog";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Ingredients from "@/components/Ingredients";
import About from "@/components/About";
import Team from "@/components/Team";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import GiftCards from "@/components/GiftCards";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const AppContent = () => {
  const { open, setOpen } = useDemo();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Ingredients />
      <About />
      <Team />
      <BeforeAfter />
      <Pricing />
      <GiftCards />
      <Testimonials />
      <SocialProof />
      <FAQ />
      <Booking />
      <Contact />
      <CtaBanner />
      <Footer />
      <DemoDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <DemoProvider>
        <AppContent />
      </DemoProvider>
    </LanguageProvider>
  );
};

export default Index;

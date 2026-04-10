import { LanguageProvider } from "@/i18n/LanguageContext";
import { DemoProvider, useDemo } from "@/hooks/useDemo";
import { BookingProvider } from "@/hooks/useBooking";
import DemoDialog from "@/components/DemoDialog";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import GiftCards from "@/components/GiftCards";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";

const AppContent = () => {
  const { open, setOpen } = useDemo();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <BeforeAfter />
      <Pricing />
      <GiftCards />
      <SocialProof />
      <FAQ />
      <Booking />
      <Contact />
      <Footer />
      <DemoDialog open={open} onOpenChange={setOpen} />
      <FloatingPhone />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <DemoProvider>
        <BookingProvider>
          <AppContent />
        </BookingProvider>
      </DemoProvider>
    </LanguageProvider>
  );
};

export default Index;

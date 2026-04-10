import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <a
      href="tel:+3545551234"
      aria-label="Call us"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold text-volcanic flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingPhone;

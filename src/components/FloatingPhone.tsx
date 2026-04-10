import { Phone } from "lucide-react";
import { useDemo } from "@/hooks/useDemo";

const FloatingPhone = () => {
  const { showDemo } = useDemo();

  return (
    <button
      onClick={showDemo}
      aria-label="Call us"
      className="fixed bottom-5 right-5 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold text-volcanic flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <Phone className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export default FloatingPhone;

import { Phone } from "lucide-react";
import { useDemo } from "@/hooks/useDemo";

const FloatingPhone = () => {
  const { showDemo } = useDemo();

  return (
    <button
      onClick={showDemo}
      aria-label="Call us"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold text-volcanic flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
};

export default FloatingPhone;

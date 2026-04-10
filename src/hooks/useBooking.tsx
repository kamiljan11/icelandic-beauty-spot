import { useState, useCallback, createContext, useContext } from "react";

interface BookingContextType {
  selectedService: string;
  bookService: (serviceName: string) => void;
  clearService: () => void;
}

const BookingContext = createContext<BookingContextType>({
  selectedService: "",
  bookService: () => {},
  clearService: () => {},
});

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedService, setSelectedService] = useState("");

  const bookService = useCallback((serviceName: string) => {
    setSelectedService(serviceName);
    // Smooth scroll to booking section
    setTimeout(() => {
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }, []);

  const clearService = useCallback(() => setSelectedService(""), []);

  return (
    <BookingContext.Provider value={{ selectedService, bookService, clearService }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);

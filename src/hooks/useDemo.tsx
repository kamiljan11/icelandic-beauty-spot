import { useState, useCallback, createContext, useContext } from "react";

const DemoContext = createContext<{
  open: boolean;
  showDemo: () => void;
  setOpen: (v: boolean) => void;
}>({ open: false, showDemo: () => {}, setOpen: () => {} });

export const DemoProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const showDemo = useCallback(() => setOpen(true), []);
  return (
    <DemoContext.Provider value={{ open, showDemo, setOpen }}>
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => useContext(DemoContext);

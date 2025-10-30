"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface TidycalModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const TidycalModalContext = createContext<TidycalModalContextType | null>(null);

export const TidycalModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <TidycalModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </TidycalModalContext.Provider>
  );
};

export const useTidycalModal = () => {
  const ctx = useContext(TidycalModalContext);
  if (!ctx)
    throw new Error("useTidycalModal must be used within TidycalModalProvider");
  return ctx;
};

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

interface TidycalModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  modalRef: React.RefObject<HTMLDivElement | null>;
  backdropRef: React.RefObject<HTMLDivElement | null>;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  activeStage: number;
  setActiveStage: (stage: number) => void;
  fromDate: Date;
  toDate: Date;
  handleCloseModal: () => void;
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
  const modalRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [activeStage, setActiveStage] = useState(0);
  const fromDate = new Date();
  const toDate = new Date(fromDate);
  toDate.setMonth(toDate.getMonth() + 3);

  const handleCloseModal = () => {
    close();
    setActiveStage(0);
    setSelectedDate(undefined);
  };

  return (
    <TidycalModalContext.Provider
      value={{
        isOpen,
        open,
        close,
        modalRef,
        backdropRef,
        selectedDate,
        setSelectedDate,
        activeStage,
        setActiveStage,
        fromDate,
        toDate,
        handleCloseModal,
      }}
    >
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

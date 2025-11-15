"use client";

import { dateToISO, getDateRangeFromTimezone } from "@/services";
import timezones from "@/services/data/timezones.json";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

interface TidycalModalContextType {
  isOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement | null>;
  backdropRef: React.RefObject<HTMLDivElement | null>;
  activeStage: number;
  fromDate: Date;
  toDate: Date;
  state: TidycalModalState;
  open: () => void;
  close: () => void;
  handleCloseModal: () => void;
  setActiveStage: (stage: number) => void;
  dispatch: React.Dispatch<{ type: string; payload?: any }>;
  getTidySlots: (date: Date) => Promise<any>;
}

interface TidycalModalState {
  timezone: string;
  date: Date | undefined;
  dates: {
    from: Date | undefined;
    to: Date | undefined;
  };
  name: string;
  email: string;
  start_at: string;
  end_at: string;
  slot: string;
  slots: {
    starts_at: string;
    ends_at: string;
    available_bookings: number;
  }[];
  states: {
    isLoading: boolean;
    isError: boolean;
    error: any;
  };
}

const initialState: TidycalModalState = {
  timezone: "",
  date: undefined,
  dates: {
    from: undefined,
    to: undefined,
  },
  name: "",
  email: "",
  start_at: "",
  end_at: "",
  slot: "",
  slots: [],
  states: {
    isLoading: false,
    isError: false,
    error: "",
  },
};

function reducer(
  state: TidycalModalState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "timezone":
      return { ...state, timezone: action.payload };
    case "date":
      const start_at = dateToISO({ date: action.payload });
      const end_at = dateToISO({
        date: action.payload,
        hour: 23,
        minute: 59,
        second: 59,
      });
      return {
        ...state,
        date: action.payload,
        start_at,
        end_at,
      };
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "slot":
      return { ...state, slot: action.payload };
    case "slots":
      return { ...state, slots: action.payload };
    case "states":
      return { ...state, states: { ...state.states, ...action.payload } };
    case "reset":
      return initialState;
    default:
      return state;
  }
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const [activeStage, setActiveStage] = useState(0);
  const fromDate = new Date();
  const toDate = new Date(fromDate);
  toDate.setMonth(toDate.getMonth() + 3);

  const handleCloseModal = () => {
    close();
    setActiveStage(0);
    dispatch({ type: "reset" });
  };

  const getTidySlots = async (date: Date | undefined) => {
    try {
      if (!date) return;
      const start_at = dateToISO({ date });
      const end_at = dateToISO({ date, hour: 23, minute: 59, second: 59 });
      dispatch({ type: "date", payload: date });
      dispatch({
        type: "states",
        payload: { isLoading: true, isError: false, error: null },
      });
      setActiveStage(1);
      const res = await fetch(
        `/api/tidycal/timeslots?bookingTypeId=699029&starts_at=${start_at}&ends_at=${end_at}`
      );
      const data = await res.json();
      dispatch({ type: "slots", payload: data?.data || [] });
      dispatch({
        type: "states",
        payload: { isLoading: false, isError: false, error: null },
      });
    } catch (error) {
      dispatch({
        type: "states",
        payload: { isLoading: false, isError: true, error: error },
      });
    }
  };

  const handleTimezone = (timezone: string) => {
    dispatch({ type: "timezone", payload: timezone });
    // After setting timezone, fetch slots for the selected date if available
    const { fromDate, toDate } = getDateRangeFromTimezone(timezone);
  };

  useEffect(() => {
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const currentLabel = (timezones as Record<string, string>)[
      currentTimezone || ""
    ];
    dispatch({ type: "timezone", payload: currentLabel || "" });
  }, []);

  return (
    <TidycalModalContext.Provider
      value={{
        isOpen,
        open,
        close,
        modalRef,
        backdropRef,
        activeStage,
        setActiveStage,
        fromDate,
        toDate,
        handleCloseModal,
        state,
        dispatch,
        getTidySlots,
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

"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
// import classNames from "react-day-picker/style.module.css";
import gsap from "gsap";
import { useTidycalModal } from "@/contexts/TidycalModalContext";
import { CrossIcon, PublicGlobeIcon } from "@/services/assets/svgs";
import colors from "@/lib/colors";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const TidycalModal: React.FC = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const { close, isOpen } = useTidycalModal();

  const [selected, setSelected] = useState<Date | undefined>();

  // Define your date range - dates outside this range will be disabled
  const fromDate = new Date(2021, 8, 1); // September 1, 2021
  const toDate = new Date(2021, 8, 30); // September 30, 2021

  useEffect(() => {
    if (isOpen) {
      // Enter animation
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power1.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { scale: 0.95, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 p-0 md:p-3 lg:p-6 flex items-center md:items-end justify-center md:justify-end bg-black/50 backdrop-blur-sm"
      onClick={close}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-[430px] h-full min-h-[528px] max-h-[580px] rounded-2xl bg-natural-900 p-6 shadow-lg"
      >
        {/* TITLE & CLOSE */}
        <div className="flex items-start justify-between">
          <p className="font-inter text-2xl font-bold !leading-[1.4] text-white">
            Schedule a meeting
          </p>
          <button
            className="bg-transparent border-none outline-none ring-0 hover:ring-2 ring-natural-800"
            onClick={close}
          >
            <CrossIcon className="h-6 w-6" color={colors.natural[50]} />
          </button>
        </div>

        {/* TIMEZONE SELECTOR */}
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-base font-normal !leading-normal text-text-200">
            Your Timezone
          </p>
          <Select>
            <SelectTrigger
              className="w-full rounded-none border border-natural-700 text-white-100 min-h-[46px]"
              iconClassName="text-white"
            >
              <div className="flex justify-start items-center gap-[10px]">
                <PublicGlobeIcon className="!h-6 !w-6 shrink-0 text-main-600" />
                <SelectValue placeholder="Theme" className="text-start" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white rounded-none max-h-[300px]">
              {Array(15)
                .fill("ok")
                .map((_, i) => (
                  <SelectItem
                    value={`Theme ${i + 1}`}
                    className="hover:bg-natural-300"
                  >
                    <Fragment>Theme {i + 1}</Fragment>
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {/* DATE SELECTOR */}
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-base font-normal !leading-normal text-text-200">
            Select a Date
          </p>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            disabled={{ before: fromDate, after: toDate }}
            defaultMonth={new Date(2021, 8)}
            showOutsideDays={false}
            classNames={{
              months: "flex flex-col items-center justify-center", // center align
              month: "space-y-4 relative", // relative for absolute children
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-base font-medium text-white",
              nav: "flex items-center justify-between w-full px-2",
              nav_button:
                "h-7 w-7 bg-pink-500 text-white rounded-md flex items-center justify-center hover:bg-pink-600 transition-colors duration-200",
              nav_button_previous: "",
              nav_button_next: "",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell:
                "text-gray-500 rounded-md w-10 font-medium text-xs uppercase",
              row: "flex w-full mt-2",
              cell: "text-end bg-pink-500 text-sm p-0 relative focus-within:relative focus-within:z-20",
              day: "h-10 w-10 p-0 font-normal text-white hover:bg-gray-800 rounded-lg transition-colors",
              day_selected:
                "bg-white text-black hover:bg-white hover:text-black focus:bg-white focus:text-black font-semibold",
              day_today: "font-semibold",
              day_outside: "text-gray-600 opacity-50",
              day_disabled:
                "text-gray-700 opacity-50 cursor-not-allowed hover:bg-transparent",
              day_hidden: "invisible",
            }}
            modifiersClassNames={{
              selected: "bg-white text-black",
            }}
            className="bg-black min-h-full rounded-none py-2 shadow-2xl border border-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

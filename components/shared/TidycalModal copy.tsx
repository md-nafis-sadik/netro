"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
// import classNames from "react-day-picker/style.module.css";
import { useTidycalModal } from "@/contexts/TidycalModalContext";
import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import {
  ArrowLongTailIcon,
  CalendarSecondaryIcon,
  CrossIcon,
  PublicGlobeIcon,
} from "@/services/assets/svgs";
import gsap from "gsap";
import { Button } from "../ui/button";
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

  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [activeStage, setActiveStage] = useState(0);

  // Define your date range - dates outside this range will be disabled
  const fromDate = new Date(2025, 10, 25); // October 15, 2025
  const toDate = new Date(2025, 11, 15); // October 25, 2025

  // handle close modal
  const handleCloseModal = () => {
    close();
    setActiveStage(0);
    setSelectedDate(undefined);
  };

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

    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || "0"));
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY); // restore scroll position
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 p-0 md:p-3 lg:p-6 flex items-center md:items-end justify-center md:justify-end bg-black/50 backdrop-blur-sm font-inter"
      onClick={handleCloseModal}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-full md:w-[90%] h-full md:h-fit max-w-[430px] max-h-full md:max-h-[580px] rounded-none bg-natural-900 p-6 shadow-lg flex flex-col overflow-y-auto",
          activeStage >= 2 ? "min-h-[518px]" : "min-h-fit"
        )}
      >
        {/* TITLE & CLOSE */}
        <div className="flex items-start justify-between">
          <p className="font-inter text-2xl font-bold !leading-[1.4] text-white">
            Schedule a meeting
          </p>
          <button
            className="bg-transparent border-none outline-none ring-0 hover:ring-2 ring-natural-800"
            onClick={handleCloseModal}
          >
            <CrossIcon className="h-6 w-6" color={colors.natural[50]} />
          </button>
        </div>

        {/* TIMEZONE SELECTOR */}
        {(activeStage === 0 || activeStage === 1) && (
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
                      key={i}
                      value={`Theme ${i + 1}`}
                      className="hover:bg-natural-300"
                    >
                      <Fragment>Theme {i + 1}</Fragment>
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* DATE SELECTOR */}
        {activeStage === 0 && (
          <div className="flex flex-col gap-2 mt-4 stroke-white">
            <p className="text-base font-normal !leading-normal text-text-200">
              Select a Date
            </p>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(value) => {
                setSelectedDate(value);
                setActiveStage(1);
              }}
              disabled={{ before: fromDate, after: toDate }}
              defaultMonth={new Date(2025, 10, 15)}
              showOutsideDays={false}
              classNames={{
                months: "flex flex-col items-center justify-center", // center align
                month: "space-y-4 relative", // relative for absolute children
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-base font-medium text-white",
                nav: "flex items-center justify-between w-full px-2 mb-4 mx-auto max-w-[300px]",
                nav_button:
                  "h-7 w-7 bg-pink-500 text-white rounded-md flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 [&>svg]:!stroke-white [&>svg]:w-4 [&>svg]:h-4",
                nav_button_previous: "!stroke-white !fill-white",
                nav_button_next: "!stroke-white !fill-white",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell:
                  "text-gray-500 rounded-md w-10 font-medium text-xs uppercase",
                row: "flex w-full mt-2",
                cell: "text-end bg-pink-500 text-sm p-0 relative focus-within:relative focus-within:z-20",
                weekday: "!text-gray-500",
                day: "h-10 w-10 p-0 font-normal text-white hover:bg-gray-800 rounded-lg transition-colors !rounded-full",
                day_button:
                  "h-full w-full flex items-center justify-center !rounded-full",
                day_selected:
                  "bg-main-600 text-black hover:bg-main-500 hover:text-black focus:bg-white focus:text-black font-semibold",
                day_today: "font-semibold",
                day_outside: "text-gray-600 opacity-50",
                day_disabled:
                  "text-gray-700 opacity-50 cursor-not-allowed hover:bg-transparent",
                day_hidden: "invisible",
                disabled: "!opacity-25 pointer-events-none !cursor-not-allowed",
              }}
              modifiersClassNames={{
                selected: "bg-main-600 text-black !rounded-full",
              }}
              className="bg-black min-h-full rounded-none py-6 shadow-2xl border border-gray-800"
            />
          </div>
        )}

        {/* DATE SELECTOR */}
        {activeStage === 1 && (
          <div className="flex flex-col gap-2 mt-4 stroke-white">
            <p className="text-base font-normal !leading-normal text-text-200">
              Select a Time
            </p>
            <div className="h-full max-h-[400px] flex flex-col gap-2 overflow-auto">
              {Array(20)
                .fill("ok")
                .map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveStage(2);
                    }}
                    className="text-white font-inter text-base !leading-normal min-h-[46px] w-full bgnatural bg-natural-black hover:bg-main-600 transition_common"
                  >
                    12:20 am
                  </button>
                ))}
            </div>
          </div>
        )}

        {activeStage === 2 && (
          <div className="flex flex-col gap-4 mt-4 flex-grow">
            <p className="flex flex-row gap-2 items-center justify-start">
              <PublicGlobeIcon className="!h-6 !w-6 shrink-0 text-main-600" />
              <span className="text-text-200 text-base !leading-normal font-normal">
                (+06:00) Dhaka
              </span>
            </p>
            <p className="flex flex-row gap-2 items-center justify-start">
              <CalendarSecondaryIcon className="!h-6 !w-6 shrink-0 text-main-600" />
              <span className="text-text-200 text-base !leading-normal font-normal">
                Wednesday, October 29, 2025 at 12:00PM
              </span>
            </p>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-neutral-300">
                Your Name*
              </label>
              <input
                type="text"
                name="name"
                className="inputDark h-[46px]"
                placeholder="John Doe"
                required
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-neutral-300">
                Your Email (No Spam, Guaranteed)*
              </label>
              <input
                type="text"
                name="email"
                className="inputDark h-[46px]"
                placeholder="myemail@domain.com"
                required
              />
            </div>

            <div className="flex flex-row gap-4 mt-auto">
              <Button
                variant={"outlined"}
                className="w-full text-text-600 border-text-700 hover:bg-main-500 hover:text-white hover:border-main-500"
                onClick={() => {
                  setActiveStage(activeStage - 1);
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setActiveStage(3);
                }}
                className="bg-main-600 hover:bg-main-500"
              >
                <span>Confirm Booking</span>
                <ArrowLongTailIcon className="!h-6 !w-6 shrink-0" />
              </Button>
            </div>
          </div>
        )}

        {activeStage === 3 && (
          <div className="flex flex-col flex-1">
            <div className="flex-grow flex_center flex-col">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#483BDC] via-[#FFA8A9] to-[#82D3A4] w-fit text-center text-4xl !leading-[1.1] font-bold uppercase">
                Confirmed!
              </p>
              <p className="flex flex-row gap-2 items-center justify-start w-full text-text-200 text-base !leading-normal font-normal text-center max-w-[70%] mt-1">
                Meeting has been scheduled with Netro Systems Limited!
              </p>

              <p className="flex flex-row gap-2 items-center justify-start w-full mt-8">
                <PublicGlobeIcon className="!h-6 !w-6 shrink-0 text-main-600" />
                <span className="text-text-200 text-base !leading-normal font-normal">
                  (+06:00) Dhaka
                </span>
              </p>
              <p className="flex flex-row gap-2 items-center justify-start w-full mt-4">
                <CalendarSecondaryIcon className="!h-6 !w-6 shrink-0 text-main-600" />
                <span className="text-text-200 text-base !leading-normal font-normal">
                  Wednesday, October 29, 2025 at 12:00PM
                </span>
              </p>
            </div>
            <Button
              variant={"outlined"}
              className="w-full text-text-600 border-text-700 hover:bg-main-500 hover:text-white hover:border-main-500"
              onClick={() => {
                setActiveStage(activeStage - 1);
              }}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

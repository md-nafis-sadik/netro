"use client";

import { useTidycalModal } from "@/contexts/TidycalModalContext";
import { cn } from "@/lib/utils";
import TidyTimeSlots from "./TidyTimeSlots";
import TidycalConfirmation from "./TidycalConfirmation";
import TidycalDatePicker from "./TidycalDatePicker";
import TidycalForm from "./TidycalForm";
import TidycalTimezone from "./TidycalTimezone";
import TidycalTitle from "./TidycalTitle";

export const TidycalModal: React.FC = () => {
  const { isOpen, modalRef, backdropRef, activeStage, handleCloseModal } =
    useTidycalModal();

  return (
    <div
      ref={backdropRef}
      className={cn(
        "fixed inset-0 z-50 p-0 md:p-3 lg:p-6 flex items-center md:items-end justify-center md:justify-end bg-black/50 backdrop-blur-sm font-inter duration-200",
        isOpen
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none"
      )}
      onClick={handleCloseModal}
      data-lenis-prevent
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-full max-w-[382px] h-full max-h-[518px] rounded-none bg-natural-900 py-6 px-2 shadow-lg flex flex-col overflow-hidden duration-200 origin-bottom-right",
          isOpen ? "scale-100" : "scale-95 delay-200"
        )}
      >
        {/* TITLE & CLOSE */}
        {activeStage !== 3 && <TidycalTitle />}

        {/* TIMEZONE SELECTOR */}
        {(activeStage === 0 || activeStage === 1) && <TidycalTimezone />}
        <div className="flex-1 flex flex-col overflow-auto custom_scroller pl-3 pr-2">
          {/* DATE SELECTOR */}
          {activeStage === 0 && <TidycalDatePicker />}

          {/* DATE SELECTOR */}
          {activeStage === 1 && <TidyTimeSlots />}

          {/* form */}
          {activeStage === 2 && <TidycalForm />}

          {/* confirmation */}
          {activeStage === 3 && <TidycalConfirmation />}
        </div>
      </div>
    </div>
  );
};

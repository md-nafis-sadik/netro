import { useTidycalModal } from "@/contexts/TidycalModalContext";
import {
  ArrowLongTailIcon,
  CalendarSecondaryIcon,
  PublicGlobeIcon,
} from "@/services/assets/svgs";
import { Button } from "../ui/button";

function TidycalForm() {
  const { activeStage, setActiveStage } = useTidycalModal();
  return (
    <div className="flex-1 flex flex-col gap-4 mt-4 flex-grow">
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
  );
}

export default TidycalForm;

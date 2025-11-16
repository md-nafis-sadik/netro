import { useTidycalModal } from "@/contexts/TidycalModalContext";
import { formatFullDateTimeTZ, ISOToTime } from "@/services";
import {
  ArrowLongTailIcon,
  CalendarSecondaryIcon,
  PublicGlobeIcon,
} from "@/services/assets/svgs";
import { Button } from "../ui/button";

function TidycalForm() {
  const { activeStage, setActiveStage, state, dispatch, handleAppointment } =
    useTidycalModal();

  return (
    <div className="flex-1 flex flex-col gap-4 mt-4 flex-grow">
      <p className="flex flex-row gap-2 items-center justify-start">
        <PublicGlobeIcon className="!h-6 !w-6 shrink-0 text-main-600" />
        <span className="text-text-200 text-base !leading-normal font-normal">
          {state.timezone.label}
        </span>
      </p>
      <p className="flex flex-row gap-2 items-center justify-start">
        <CalendarSecondaryIcon className="!h-6 !w-6 shrink-0 text-main-600" />
        <span className="text-text-200 text-base !leading-normal font-normal">
          {formatFullDateTimeTZ(state.date, state.timezone.key)} at&nbsp;
          {ISOToTime(state.slot, state.timezone.key)}
        </span>
      </p>

      <form
        action=""
        onSubmit={handleAppointment}
        className="flex-1 flex flex-col gap-4"
      >
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
            value={state.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "name", payload: e.target.value })
            }
            required
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-neutral-300">
            Your Email (No Spam, Guaranteed)*
          </label>
          <input
            type="email"
            name="email"
            className="inputDark h-[46px]"
            placeholder="myemail@domain.com"
            value={state.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            required
          />
        </div>

        <div className="flex flex-row gap-4 mt-auto">
          <Button
            type="button"
            variant={"outlined"}
            className="w-full text-text-600 border-text-700 hover:bg-main-500 hover:text-white hover:border-main-500"
            onClick={() => {
              setActiveStage(activeStage - 1);
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-main-600 min-w-[212px] hover:bg-main-500"
            disabled={state.bookingStates.isLoading}
          >
            <span>
              {state.bookingStates.isLoading ? "Booking..." : "Confirm Booking"}
            </span>
            <ArrowLongTailIcon className="!h-6 !w-6 shrink-0" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TidycalForm;

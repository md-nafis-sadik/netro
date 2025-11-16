import { useTidycalModal } from "@/contexts/TidycalModalContext";
import { ISOToTime } from "@/services";

function TidyTimeSlots() {
  const { state, setActiveStage, dispatch } = useTidycalModal();
  const { slots, states } = state || {};
  const { isLoading = false, isError = false } = states || {};

  const handleSlotClick = (slot: string) => {
    setActiveStage(2);
    dispatch({ type: "slot", payload: slot });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="h-[46px] w-full bg-natural-800 animate-pulse rounded-md"
            ></div>
          ))}
      </div>
    );
  } else if (isError) {
    return (
      <div className="h-[46px] flex items-center justify-center w-full border border-status-error text-status-error rounded-md">
        Something went wrong!
      </div>
    );
  } else if (slots.length === 0) {
    return (
      <div className="h-[46px] flex items-center justify-center w-full border border-natural-700 text-text-200 rounded-md">
        No available slots
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-2">
        {slots.map((item, i) => (
          <button
            key={i}
            onClick={() => handleSlotClick(item?.starts_at)}
            className="text-white font-inter text-base min-h-[46px] w-full bg-natural-black hover:bg-main-600 transition-colors rounded-md"
          >
            {ISOToTime(item.starts_at, state.timezone?.key)}
          </button>
        ))}
      </div>
    );
  }
}

export default TidyTimeSlots;

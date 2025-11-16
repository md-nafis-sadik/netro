import { useTidycalModal } from "@/contexts/TidycalModalContext";
import { formatFullDateTimeTZ, ISOToTime } from "@/services";
import { CalendarSecondaryIcon, PublicGlobeIcon } from "@/services/assets/svgs";
import { Button } from "../ui/button";

function TidycalConfirmation() {
  const { handleCloseModal, state } = useTidycalModal();
  return (
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
            {state.timezone?.label}
          </span>
        </p>
        <p className="flex flex-row gap-2 items-center justify-start w-full mt-4">
          <CalendarSecondaryIcon className="!h-6 !w-6 shrink-0 text-main-600" />
          <span className="text-text-200 text-base !leading-normal font-normal">
            {formatFullDateTimeTZ(state.date, state.timezone?.key)} at&nbsp;
            {ISOToTime(state.slot, state.timezone?.key)}
          </span>
        </p>
      </div>
      <Button
        variant={"outlined"}
        className="w-full text-text-600 border-text-700 hover:bg-main-500 hover:text-white hover:border-main-500"
        onClick={handleCloseModal}
      >
        Cancel
      </Button>
    </div>
  );
}

export default TidycalConfirmation;

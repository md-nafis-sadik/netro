import { useTidycalModal } from "@/contexts/TidycalModalContext";
import { PublicGlobeIcon } from "@/services/assets/svgs";
import timezonesData from "@/services/data/timezones.json";
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { List } from "react-window";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function TidycalTimezone() {
  const { activeStage, state, dispatch } = useTidycalModal();
  const timezones = useMemo(() => Object.values(timezonesData), []);

  // Virtualized row renderer
  const VirtualizedRow = ({
    index,
    style,
    timezones,
  }: {
    index?: number;
    style?: React.CSSProperties;
    timezones: string[];
  }) => {
    const timezone = timezones[index || 0] || "";
    return (
      <div style={style}>
        <DropdownMenuItem
          key={timezone}
          className="hover:bg-natural-black text-white"
          onClick={() => dispatch({ type: "timezone", payload: timezone })}
        >
          {timezone}
        </DropdownMenuItem>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 mt-4 px-4 relative">
      <p className="text-base font-normal !leading-normal text-text-200">
        Your Timezone
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full rounded-none border border-natural-700 text-white-100 min-h-[46px] px-3">
          <div className="flex justify-start items-center gap-[10px]">
            <PublicGlobeIcon className="!h-6 !w-6 shrink-0 text-main-600" />
            {state?.timezone || "Timezone"}
            <ChevronDown className="!w-4 !h-4 ml-auto text-text-400" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[332px] h-[300px] rounded-none border border-natural-700 bg-natural-900"
          data-lenis-prevent
        >
          <List
            rowComponent={VirtualizedRow}
            rowCount={timezones.length}
            rowHeight={25}
            rowProps={{ timezones }}
          />
          {/* <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>

      <p className="text-base font-normal !leading-normal text-text-200 my-2">
        {activeStage === 0 ? "Select a Date" : "Select a Time"}
      </p>
    </div>
  );
}

export default TidycalTimezone;

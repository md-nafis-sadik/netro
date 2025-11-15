import { useTidycalModal } from "@/contexts/TidycalModalContext";
import { PublicGlobeIcon } from "@/services/assets/svgs";
import { Fragment } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function TidycalTimezone() {
  const { activeStage } = useTidycalModal();
  return (
    <div className="flex flex-col gap-2 mt-4 px-4">
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
        <SelectContent
          className="bg-white rounded-none max-h-[300px]"
          data-lenis-prevent
        >
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

      <p className="text-base font-normal !leading-normal text-text-200 my-2">
        {activeStage === 0 ? "Select a Date" : "Select a Time"}
      </p>
    </div>
  );
}

export default TidycalTimezone;

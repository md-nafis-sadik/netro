import { FC } from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { GradientButton } from "../ui/gradient-button";
import { cn } from "@/lib/utils";
import { CallMissedIcon, CrossIcon } from "@/services/assets/svgs";
import colors from "@/lib/colors";
import { socialsData } from "@/services/data/shared.data";

interface IFNavigationSheetProps {
  isSheetOpen: boolean;
  closeSheet: () => void;
}

const NavigationSheet: FC<IFNavigationSheetProps> = ({
  isSheetOpen,
  closeSheet,
}) => {
  console.log("isSheetOpen", isSheetOpen, "closeSheet", closeSheet);

  return (
    <Sheet open={isSheetOpen} onOpenChange={closeSheet}>
      <SheetContent showCrossIcon={false} className="bg-black select-none">
        <SheetHeader className="hidden" />

        <div className="flex_center justify-end py-3 px-6 border-b border-dashed border-[#303030]">
          <GradientButton
            className={cn("bg-black flex_center gap-2 group")}
            containerClassName="block min-[1160px]:hidden w-fit"
            nonGradient
            onClick={closeSheet}
          >
            <CrossIcon color={colors.white} className="!h-5 !w-5 !shrink-0" />
            <span
              className={cn(
                "text-white font-scout-cond text-lg font-bold uppercase !leading-[0.9] group-hover:text-white transition_common"
              )}
            >
              Close
            </span>
          </GradientButton>
        </div>

        {/* CONNECT & SOCIALS */}
        <div className="flex flex-col items-center gap-6 mt-8 md:mt-[60px]">
          <GradientButton>
            <span className="text-white">Schedule a call</span>
            <CallMissedIcon className="!h-6 !w-6 !shrink-0" />
          </GradientButton>

          <div className="flex flex-row items-center gap-3">
            {socialsData.map(({ link, icon }, index) => (
              <a
                className="h-12 w-12 rounded-full transition_common bg-natural-900 hover:bg-main-400 flex_center"
                href={link}
                key={index}
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationSheet;

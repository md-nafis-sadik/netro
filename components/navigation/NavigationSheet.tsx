import { FC, Fragment } from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { GradientButton } from "../ui/gradient-button";
import { cn } from "@/lib/utils";
import {
  CallMissedIcon,
  CrossIcon,
  DividerFadingDashes,
  PlusRoundedSecondaryIcon,
} from "@/services/assets/svgs";
import colors from "@/lib/colors";
import { navbarData, routes, socialsData } from "@/services/data/shared.data";
import Link from "next/link";

interface IFNavigationSheetProps {
  isSheetOpen: boolean;
  closeSheet: () => void;
  pathname: string;
}

const NavigationSheet: FC<IFNavigationSheetProps> = ({
  isSheetOpen,
  closeSheet,
  pathname,
}) => {
  return (
    <Sheet open={isSheetOpen} onOpenChange={closeSheet}>
      <SheetContent showCrossIcon={false} className="bg-black select-none">
        <SheetHeader className="hidden" />

        <div className="flex_center justify-end py-3 px-6 border-b border-dashed border-[#303030]">
          <GradientButton
            className={cn("bg-black flex_center gap-2 group")}
            containerClassName="block w-fit"
            nonGradient
            onClick={closeSheet}
          >
            <CrossIcon color={colors.white} className="!h-5 !w-5 !shrink-0" />
            <span
              className={cn(
                "text-white font-scoutcond text-lg font-bold uppercase !leading-[0.9] group-hover:text-white transition_common"
              )}
            >
              Close
            </span>
          </GradientButton>
        </div>

        <div className="flex flex-col items-center w-full mt-6 mb-10">
          {navbarData.map(({ link, name, megaMenu }, index) => (
            <Fragment key={index}>
              <Link
                href={link}
                className="h-[34px] py-3 px-2 outline-none group flex items-center justify-center gap-1 relative min-h-[58px] w-[70%] border-b border-dashed border-[#2c2c2c] transition_common"
                onClick={closeSheet}
              >
                <span
                  className={cn(
                    pathname === link &&
                      (pathname === routes.homepage.link
                        ? "navbar-btn-gradient-dark"
                        : "navbar-btn-gradient-lite"),
                    "block navbar-btn-gradient absolute w-full h-1/2 bottom-0 left-1/2 -translate-x-1/2 z-[1]"
                  )}
                />

                <span
                  className={cn(
                    pathname === routes.homepage.link
                      ? "font-bold"
                      : "font-normal",
                    "text-white text-[28px] !leading-[1.2] relative z-[2] font-scoutcond uppercase"
                  )}
                >
                  {name}
                </span>
                {megaMenu && (
                  <PlusRoundedSecondaryIcon
                    className="!h-5 !w-5 !shrink-0 transition_common group-hover:rotate-180 relative z-[3]"
                    color={colors.white}
                  />
                )}
              </Link>
            </Fragment>
          ))}
        </div>

        {/* CONNECT & SOCIALS */}
        <div className="flex flex-col items-center gap-6 mt-8 md:mt-[60px]">
          <GradientButton className="px-5">
            <span className="text-white text-xs">Schedule a call</span>
            <CallMissedIcon className="!h-6 !w-6 !shrink-0" />
          </GradientButton>

          <div className="flex flex-row items-center gap-3">
            {socialsData.map(({ link, icon }, index) => (
              <a
                className="h-10 w-10 rounded-full transition_common bg-natural-900 hover:bg-main-400 flex_center"
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

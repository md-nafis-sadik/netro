import { FC } from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { GradientButton } from "../ui/gradient-button";
import { cn } from "@/lib/utils";
import {
  PlusRoundedSecondaryIcon,
  CrossIcon,
  CallMissedIcon,
} from "@/services/assets/svgs";
import colors from "@/lib/colors";
import {
  navbarData,
  routes,
  socialsData,
  servicesMenu,
} from "@/services/data/shared.data";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IFNavigationSheetProps {
  isSheetOpen: boolean;
  isHomapage: boolean;
  closeSheet: () => void;
  pathname: string;
  mobileMegaIndex: number | null;
  setMobileMegaIndex: (index: number | null) => void;
}

const NavigationSheet: FC<IFNavigationSheetProps> = ({
  isSheetOpen,
  isHomapage,
  closeSheet,
  pathname,
  mobileMegaIndex,
  setMobileMegaIndex,
}) => {
  const router = useRouter();

  return (
    <Sheet open={isSheetOpen} onOpenChange={closeSheet}>
      <SheetContent
        showCrossIcon={false}
        className={`select-none ${isHomapage ? "bg-black" : "bg-neutral-300"}`}
      >
        <SheetHeader className="hidden" />

        {/* Close Button */}
        <div className="flex_center justify-end py-3 px-6 border-b border-dashed border-[#303030]">
          <GradientButton
            className={cn(
              "flex_center gap-2 group",
              isHomapage ? "bg-black" : "bg-neutral-300"
            )}
            containerClassName="block w-fit"
            nonGradient
            onClick={closeSheet}
          >
            <CrossIcon color={colors.white} className="!h-5 !w-5 !shrink-0" />
            <span className="text-white font-scoutcond text-lg font-bold uppercase !leading-[0.9] transition_common">
              Close
            </span>
          </GradientButton>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col items-center w-full mt-6 mb-10">
          {navbarData.map(({ link, name, megaMenu }, index) => (
            <div key={index} className="w-full flex flex-col items-center">
              <button
                className="h-[34px] py-3 px-2 outline-none group flex items-center justify-center gap-1 relative min-h-[58px] w-[70%] border-b border-dashed border-[#2c2c2c] transition_common"
                onClick={() => {
                  if (megaMenu) {
                    setMobileMegaIndex(
                      mobileMegaIndex === index ? null : index
                    );
                  } else {
                    closeSheet();
                    router.push(link);
                  }
                }}
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
                      ? "font-bold text-white"
                      : "font-normal text-black",
                    " text-[28px] !leading-[1.2] relative z-[2] font-scoutcond uppercase"
                  )}
                >
                  {name}
                </span>

                {megaMenu && (
                  <PlusRoundedSecondaryIcon
                    className={cn(
                      "!h-5 !w-5 !shrink-0 transition_common group-hover:rotate-180 relative z-[3]"
                    )}
                    color={
                      pathname === routes.homepage.link
                        ? colors.white
                        : colors.black
                    }
                  />
                )}
              </button>

              {/* Render Services Menu if this is the Services megamenu */}
              {megaMenu && (
                <div
                  className={cn(
                    "flex flex-col items-center w-full mt-2 overflow-hidden transition-all duration-300",
                    mobileMegaIndex === index
                      ? "max-h-[1000px] mt-2"
                      : "max-h-0"
                  )}
                >
                  {/* Main Services link */}
                  <Link
                    href={link} // the main /services route
                    onClick={closeSheet}
                    className={cn(
                      "py-2 text-lg w-full text-center transition",
                      pathname === routes.homepage.link
                        ? "font-bold text-white"
                        : "font-normal text-black"
                    )}
                  >
                    All Services
                  </Link>
                  {servicesMenu.map((item, i) => (
                    <Link
                      key={i}
                      href={item.link}
                      onClick={closeSheet}
                      className={cn(
                        "py-2 text-lg w-full text-center transition",
                        pathname === routes.homepage.link
                          ? "font-bold text-white"
                          : "font-normal text-black"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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

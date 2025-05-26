"use client";
import { GradientButton } from "@/components/ui/gradient-button";
import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import {
  AppLogoIcon,
  Dividericon,
  GraphicIcon,
  MenuIcon,
  PlusRoundedSecondaryIcon,
} from "@/services/assets/svgs";
import { navbarData, routes } from "@/services/data/shared.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import NavigationSheet from "./NavigationSheet";
import DropupNavigationMenu from "./DropUpNavigationMenu";
import IntroAudioPlayer from "./IntroAudioPlayer";

const Navbar: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [megamenuOpening, setMegamenuOpening] = useState(false);

  const pathname = usePathname();

  return (
    <nav
      className={cn(
        pathname === routes.homepage.link
          ? "bg-black border-[#393939]"
          : "bg-transparent border-natural-300",
        "border-b border-dashed"
      )}
    >
      <div className="containerX flex flex-row items-center justify-between gap-4 py-3">
        <Link href={routes.homepage.link} className="h-fit">
          <AppLogoIcon
            color={
              pathname === routes.homepage.link
                ? colors.white
                : colors.natural[900]
            }
            className="h-5 w-auto"
          />
        </Link>

        <div className="hidden min-[1160px]:flex flex-row items-center">
          {navbarData.map(({ link, name, megaMenu }, index) => {
            // console.log(index);
            return (
              <div
                onMouseEnter={() => megaMenu && setMegamenuOpening(true)}
                onMouseLeave={() => megaMenu && setMegamenuOpening(false)}
                className="flex flex-row items-center relative"
                key={index}
              >
                <Link
                  href={link}
                  className="h-[34px] w-fit py-2 px-4 border-none outline-none group flex items-center gap-1 relative"
                >
                  <span
                    className={cn(
                      pathname === link &&
                        (pathname === routes.homepage.link
                          ? "navbar-btn-gradient-dark"
                          : "navbar-btn-gradient-lite"),
                      "block navbar-btn-gradient absolute w-full h-1/2 bottom-0 left-0 z-[1]"
                    )}
                  />

                  <span
                    className={cn(
                      pathname === routes.homepage.link
                        ? "text-white"
                        : "text-text-900",
                      "text-sm font-normal !leading-[1.4] relative z-[2] font-inter"
                    )}
                  >
                    {name}
                  </span>
                  {megaMenu && (
                    <PlusRoundedSecondaryIcon
                      className="!h-5 !w-5 !shrink-0 transition_common group-hover:rotate-180 relative z-[3]"
                      color={
                        pathname === routes.homepage.link
                          ? colors.white
                          : colors.natural[900]
                      }
                    />
                  )}
                </Link>
                {index < navbarData.length - 1 && (
                  <Dividericon
                    className="w-[7px] h-7"
                    color={
                      pathname === routes.homepage.link
                        ? colors.natural[900]
                        : colors.natural[200]
                    }
                  />
                )}

                {megaMenu && <DropupNavigationMenu show={megamenuOpening} />}
              </div>
            );
          })}
        </div>

        <div className="flex flex-row items-center gap-2 md:gap-3">
          {/* ON/OFF MUSIC */}
          <IntroAudioPlayer pathname={pathname} />

          {/* GET IN TOUCH */}
          <GradientButton
            className={cn(
              pathname === routes.homepage.link ? "bg-black" : "!bg-white",
              "hidden min-[1160px]:flex_center gap-2 text-white text-sm font-normal !leading-[1.4] group"
            )}
            containerClassName="hidden min-[1160px]:block"
          >
            <span
              className={cn(
                pathname === routes.homepage.link
                  ? "text-white"
                  : "!text-text-900",
                "text-white text-sm font-normal !leading-[1.4] group-hover:!text-white transition_common"
              )}
            >
              Get in touch
            </span>
          </GradientButton>

          {/* MOBILE MENU */}
          <GradientButton
            className={cn("bg-black flex_center gap-2 group ps-[10px] md:px-3")}
            containerClassName="block min-[1160px]:hidden"
            onClick={() => setIsSheetOpen(true)}
          >
            <MenuIcon className="!h-5 !w-5 !shrink-0" />
            <span
              className={cn(
                pathname === routes.homepage.link
                  ? "text-white"
                  : "text-text-900",
                "font-scoutcond text-lg font-bold text-white uppercase !leading-[0.9] group-hover:text-white transition_common"
              )}
            >
              Menu
            </span>
          </GradientButton>
        </div>
      </div>

      <NavigationSheet
        isSheetOpen={isSheetOpen}
        closeSheet={() => setIsSheetOpen(false)}
        pathname={pathname}
      />
    </nav>
  );
};

export default Navbar;

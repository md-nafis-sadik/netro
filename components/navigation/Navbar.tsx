"use client";
import { GradientButton } from "@/components/ui/gradient-button";
import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import {
  AppLogoIcon,
  Dividericon,
  MenuIcon,
  PlusRoundedSecondaryIcon,
} from "@/services/assets/svgs";
import { navbarData, routes } from "@/services/data/shared.data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, useState } from "react";
import NavigationSheet from "./NavigationSheet";
import DropupNavigationMenu from "./DropUpNavigationMenu";

const Navbar: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [megamenuOpening, setMegamenuOpening] = useState(false);
  const [mobileMegaIndex, setMobileMegaIndex] = useState<number | null>(null);

  return (
    <nav
      className={cn(
        pathname === routes.homepage.link
          ? "border-[#393939] bg-black/20"
          : "bg-neutral-300",
        "fixed top-0 w-full z-50"
      )}
    >
      <div className="containerX flex flex-row items-center justify-between gap-4 py-3">
        <Link href={routes.homepage.link} className="h-fit">
          <AppLogoIcon
            className={cn(
              "h-5 lg:h-7 w-auto",
              pathname === routes.homepage.link ? "text-white" : "text-black"
            )}
          />
        </Link>

        <div className="hidden lg:flex flex-row items-center">
          {navbarData.map(({ link, name, megaMenu }, index) => {
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
                          : ""),
                      "block navbar-btn-gradient absolute w-full h-1/2 bottom-0 left-0 z-[1]"
                    )}
                  />

                  <span
                    className={cn(
                      "text-sm font-normal !leading-[1.4] relative z-[2] font-inter",
                      pathname === routes.homepage.link
                        ? "text-white"
                        : "text-black",
                      pathname === link &&
                        (pathname === routes.homepage.link
                          ? ""
                          : "font-semibold")
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
                          : colors.black
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

        {/* <div className="flex flex-row items-center gap-2 md:gap-3"> */}
        {/* ON/OFF MUSIC */}
        {/* <IntroAudioPlayer pathname={pathname} /> */}

        {/* GET IN TOUCH */}
        {/* <GradientButton
            className={cn(
              pathname === routes.homepage.link ? "bg-black" : "!bg-white",
              "hidden min-[1160px]:flex_center gap-2 text-white text-sm font-normal !leading-[1.4] group"
            )}
            containerClassName="hidden min-[1160px]:block"
            onClick={() =>
              window.open(
                "https://tidycal.com/netrosystems/discussion",
                "_blank"
              )
            }
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
          </GradientButton> */}

        {/* MOBILE MENU */}
        <GradientButton
          className={cn(
            " flex_center gap-2 group ps-[10px] md:px-3",
            pathname === routes.homepage.link
              ? "bg-black"
              : "!bg-neutral-300 !text-black"
          )}
          containerClassName="block lg:hidden"
          onClick={() => setIsSheetOpen(true)}
        >
          <MenuIcon
            className={cn(
              "!h-5 !w-5 !shrink-0 transition-colors",
              pathname === routes.homepage.link ? "text-white" : "text-black",
              "group-hover:text-white"
            )}
          />
          <span
            className={cn(
              pathname === routes.homepage.link
                ? "text-white"
                : "text-text-900",
              "font-scoutcond text-lg font-bold uppercase !leading-[0.9] group-hover:text-white transition_common"
            )}
          >
            Menu
          </span>
        </GradientButton>
        {/* </div> */}
      </div>

      <NavigationSheet
        isHomapage={pathname === routes.homepage.link}
        isSheetOpen={isSheetOpen}
        closeSheet={() => setIsSheetOpen(false)}
        pathname={pathname}
        mobileMegaIndex={mobileMegaIndex}
        setMobileMegaIndex={setMobileMegaIndex}
      />
    </nav>
  );
};

export default Navbar;

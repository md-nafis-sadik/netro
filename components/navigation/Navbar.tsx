"use client";
import { GradientButton } from "@/components/ui/gradient-button";
import { useNavbarColorDetection } from "@/hooks/useNavbarColorDetection";
import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import {
  ArrowLongTailIcon,
  LogoIcon,
  MenuIcon,
  PlusRoundedSecondaryIcon,
} from "@/services/assets/svgs";
import { navbarData, routes } from "@/services/data/shared.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import DropupNavigationMenu from "./DropUpNavigationMenu";
import NavbarExplore from "./NavbarExplore";
import NavigationSheet from "./NavigationSheet";

type NavbarProps = {
  show?: boolean;
  services: any[];
};

const Navbar: FC<NavbarProps> = ({ show, services }) => {
  const pathname = usePathname();
  const { isDarkBackground, isScrolled } = useNavbarColorDetection(pathname);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [megamenuOpening, setMegamenuOpening] = useState(false);
  const [mobileMegaIndex, setMobileMegaIndex] = useState<number | null>(null);
  const isLightText = isDarkBackground;
  return (
    <nav
      className={cn(
        !isDarkBackground
          ? "bg-white/20 backdrop-blur-[20px]"
          : "bg-black/20 backdrop-blur-[20px]",
        pathname === routes.homepage.link
          ? "border-[#393939]"
          : "border-b border-dashed border-neutral-300 bg-white/70 backdrop-blur-[20px]",
        "fixed top-0 w-full z-[999]",
      )}
    >
      <NavbarExplore show={!isScrolled} />
      <div className="container2X 2xl:px-28 flex flex-row items-center justify-between lg:justify-start gap-4 md:gap-10 py-3">
        <Link href={routes.homepage.link} className="h-fit">
          <LogoIcon
            className={cn(
              "h-5 lg:h-7 w-auto transition-colors duration-100",
              isLightText && pathname === routes.homepage.link
                ? "text-white"
                : "text-black",
            )}
          />
        </Link>

        <div className="hidden flex-1 lg:flex flex-row items-center">
          {navbarData.map(({ link, name, megaMenu }, index) => {
            const isLastIndex = index === navbarData.length - 1;
            return (
              <div
                onMouseEnter={() => megaMenu && setMegamenuOpening(true)}
                onMouseLeave={() => megaMenu && setMegamenuOpening(false)}
                className={cn(
                  "flex flex-row items-center relative",
                  isLastIndex ? "flex lg:hidden" : "",
                )}
                key={index}
              >
                <Link
                  href={link}
                  className="h-[34px] w-fit py-2 px-4 border-none outline-none group flex items-center gap-1 relative"
                >
                  <span
                    className={cn(
                      pathname === link &&
                        (isLightText && pathname === routes.homepage.link
                          ? "navbar-btn-gradient-dark"
                          : "navbar-btn-gradient"),
                      "block absolute w-full h-1/2 bottom-0 left-0 z-[1] transition-opacity duration-100",
                    )}
                  />

                  <span
                    className={cn(
                      "text-sm font-normal !leading-[1.4] relative z-[2] font-inter transition-colors duration-100",
                      isLightText && pathname === routes.homepage.link
                        ? "text-white"
                        : "text-black",
                      pathname.startsWith(link) &&
                        (pathname === routes.homepage.link
                          ? ""
                          : "font-semibold"),
                    )}
                  >
                    {name}
                  </span>
                  {megaMenu && (
                    <PlusRoundedSecondaryIcon
                      className="!h-5 !w-5 !shrink-0 transition-all duration-100 group-hover:rotate-180 relative z-[3]"
                      color={
                        isLightText && pathname === routes.homepage.link
                          ? colors.white
                          : colors.black
                      }
                    />
                  )}
                </Link>
                {/* {index < navbarData.length - 1 && (
                  <Dividericon
                    className="w-[7px] h-7"
                    color={
                      pathname === routes.homepage.link
                        ? colors.natural[900]
                        : colors.natural[200]
                    }
                  />
                )} */}

                {megaMenu && (
                  <DropupNavigationMenu
                    servicesMenu={services}
                    show={megamenuOpening}
                  />
                )}
              </div>
            );
          })}
        </div>
        <Link
          href={routes.contact.link}
          className="bg-main-400 hover:bg-main-500  hidden lg:flex items-center gap-2 p-[12px_20px_12px_24px] py-2 rounded-full w-fit text-white font-inter text-sm md:text-base font-bold !leading-[1.1]"
        >
          <span>Contact</span>
          <ArrowLongTailIcon className="text-white-100" />
        </Link>

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
                tidycalMettingUrl,
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
            "bg-black",
          )}
          containerClassName="block lg:hidden"
          onClick={() => setIsSheetOpen(true)}
        >
          <MenuIcon
            className={cn(
              "!h-5 !w-5 !shrink-0 transition-colors text-white group-hover:text-white",
            )}
          />
          <span
            className={cn(
              "text-white font-scoutcond text-lg font-bold uppercase !leading-[0.9] group-hover:text-white transition_common",
            )}
          >
            Menu
          </span>
        </GradientButton>
        {/* </div> */}
      </div>

      <NavigationSheet
        servicesMenu={services}
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

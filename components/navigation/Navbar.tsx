"use client";
import { useNavbarColorDetection } from "@/hooks/useNavbarColorDetection";
import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import {
  AppLogoIcon,
  ArrowLongTailIcon,
  ChevronBottomIcon,
  DashboardIcon,
} from "@/services/assets/svgs";
import { servicesData } from "@/services/data";
import { navbarData, routes } from "@/services/data/shared.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import DropupNavigationMenu from "./DropUpNavigationMenu";
import NavigationSheet from "./NavigationSheet";

type NavbarProps = {
  show?: boolean;
  services: any[];
};

const Navbar: FC<NavbarProps> = ({ show = true, services }) => {
  const pathname = usePathname();
  const { isDarkBackground, isScrolled } = useNavbarColorDetection(pathname);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [megamenuOpening, setMegamenuOpening] = useState(false);
  const [mobileMegaIndex, setMobileMegaIndex] = useState<number | null>(null);
  const isLightText = isDarkBackground;
  
  return (
    <nav className="main-tool-bar fixed lg:top-6 left-1/2 -translate-x-1/2 shadow-nav w-full lg:max-w-[787px] lg:bg-blue-900 lg:border border-blue-950 lg:rounded-full z-[999] p-3 pl-6 bg-blue-900/40 backdrop-blur-[20px]">
      <div className="w-full flex flex-row items-center justify-between lg:justify-start gap-4 md:gap-10">
        <Link href={routes.homepage.link} className="h-fit">
          <AppLogoIcon className="w-24 sm:w-[138px] shrink-0" color="#BEDAFF" />
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
                      "text-sm font-normal !leading-[1.4] relative z-[2] font-inter transition-colors duration-100 text-white",

                      pathname.startsWith(link) &&
                        (pathname === routes.homepage.link
                          ? ""
                          : "font-semibold"),
                    )}
                  >
                    {name}
                  </span>
                  {megaMenu && (
                    <ChevronBottomIcon className="!shrink-0 transition-all duration-300 group-hover:rotate-180 relative z-[3]" />
                  )}
                </Link>

                {megaMenu && (
                  <DropupNavigationMenu
                    servicesMenu={servicesData}
                    show={megamenuOpening}
                  />
                )}
              </div>
            );
          })}
        </div>
        <Link
          href={routes.contact.link}
          className="bg-white hidden lg:flex items-center gap-2 p-[12px_20px_12px_24px] py-2 rounded-full w-fit text-black font-inter text-sm md:text-base font-bold !leading-[1.1] group overflow-hidden"
        >
          <span>Contact</span>
          <ArrowLongTailIcon
            color={colors.black}
            className="group-hover:translate-x-1 duration-300"
          />
        </Link>

        {/* MOBILE MENU */}
        <button
          type="button"
          onClick={() => setIsSheetOpen(true)}
          className="border-none outline-none lg:hidden"
        >
          <DashboardIcon />
          {/* <MenuIcon
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
          </span> */}
        </button>
        {/* </div> */}
      </div>

      <NavigationSheet
        servicesMenu={servicesData}
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

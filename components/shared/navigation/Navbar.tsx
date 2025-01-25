"use client";
import { GradientButton } from "@/components/ui/gradient-button";
import colors from "@/lib/colors";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  AppLogoIcon,
  Dividericon,
  GraphicIcon,
  PlusRoundedSecondaryIcon,
} from "@/services/assets/svgs";
import { navbarData, routes } from "@/services/data/shared.data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        pathname === routes.homepage.link ? "bg-black" : "bg-transparent"
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

        <div className="flex flex-row items-center">
          {navbarData.map(({ link, name, megaMenu }, index) => (
            <div className="flex flex-row items-center" key={index}>
              <Link
                href={link}
                className="h-[34px] w-fit py-2 px-4 border-none outline-none group flex items-center gap-1 relative"
              >
                <span
                  className={cn(
                    pathname === link &&
                      "block navbar-btn-gradient absolute w-full h-1/2 bottom-0 left-0 z-[1]"
                  )}
                />

                <span
                  className={cn(
                    inter.className,
                    pathname === routes.homepage.link
                      ? "text-white"
                      : "text-text-900",
                    "text-sm font-normal !leading-[1.4] relative z-[2]"
                  )}
                >
                  {name}
                </span>
                {megaMenu && (
                  <PlusRoundedSecondaryIcon
                    className="!h-5 !w-5 !shrink-0 transition_common group-hover:rotate-180 px-3 relative z-[2]"
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
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-3">
          <GradientButton className="flex_center gap-2">
            <GraphicIcon className="!h-5 !w-5 !shrink-0" />
            <span className="text-white text-sm font-normal !leading-[1.4]">
              OFF
            </span>
          </GradientButton>
          <GradientButton className="flex_center gap-2 text-white text-sm font-normal !leading-[1.4]">
            <span className="text-white text-sm font-normal !leading-[1.4]">
              Get in touch
            </span>
          </GradientButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

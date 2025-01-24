"use client";
import { GradientButton } from "@/components/ui/gradient-button";
import colors from "@/lib/colors";
import {
  AppLogoIcon,
  Dividericon,
  GraphicIcon,
  PlusRoundedIcon,
} from "@/services/assets/svgs";
import { navbarData } from "@/services/data/shared.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-black">
      <div className="containerX flex flex-row items-center justify-between gap-4 py-3">
        <AppLogoIcon
          color={pathname === "/" ? colors.white : colors.natural[900]}
          className="h-5 w-auto"
        />

        <div className="flex flex-row items-center">
          {navbarData.map(({ link, name, megaMenu }, index) => (
            <div className="flex flex-row items-center" key={index}>
              <Link
                href={link}
                className="h-[34px] w-fit py-2 px-4 border-none outline-none group flex items-center gap-1"
              >
                <span className="text-white text-sm font-normal !leading-[1.4]">
                  {name}
                </span>
                {megaMenu && (
                  <PlusRoundedIcon
                    className="!h-8 !w-8 !shrink-0 transition_common group-hover:rotate-180"
                    color={colors.white}
                  />
                )}
              </Link>
              {index < navbarData.length - 1 && (
                <Dividericon className="w-[7px] h-7" />
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

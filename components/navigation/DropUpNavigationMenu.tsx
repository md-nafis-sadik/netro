import { useRef, useEffect, JSX, Fragment } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { servicesMenu, socialsData } from "@/services/data/shared.data";
import { GradientButton } from "../ui/gradient-button";
import { CallMissedIcon } from "@/services/assets/svgs";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

type DropupNavigationMenuProps = {
  show: boolean;
};

export default function DropupNavigationMenu({
  show,
}: DropupNavigationMenuProps): JSX.Element {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!menuRef.current) return;

    tl.current = gsap.timeline({ paused: true });
    tl.current.fromTo(
      menuRef.current,
      { y: 10, autoAlpha: 0, display: "none" },
      {
        y: -10,
        autoAlpha: 1,
        display: "block",
        duration: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  useEffect(() => {
    if (!tl.current) return;
    if (show) tl.current.play();
    else tl.current.reverse();
  }, [show]);

  return (
    <div
      ref={menuRef}
      className={clsx(
        "absolute -bottom-[560px] mb-2 left-0 min-w-[474px] min-h-[60px] bg-[#1C1C1C] shadow-md p-10 z-50 services-dropdown"
      )}
      style={{ display: "none" }}
    >
      <ul className="flex flex-col">
        {servicesMenu.map((service, serviceIndex) => (
          <Fragment>
            <Link
              href={""}
              key={service.name}
              className="pt-6 pb-3 flex flex-row justify-between items-center hover:scale-105 transition_common hover:bg-black px-2"
            >
              <span className="text-2xl font-medium tracking-[0.48px] text-white">
                {service.name}
              </span>
              <span className="font-scoutcond text-[32px] font-bold text-text-750 hover:text-main-500">
                {service.serialNo}
              </span>
            </Link>

            <div className="h-[1px] w-[calc(100%-40px)] mx-auto bg-gradient-to-tr from-[#000000] to-[#454545]" />
          </Fragment>
        ))}
      </ul>

      {/* CONNECT & SOCIALS */}
      <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-6 mt-8 md:mt-[60px]">
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

        <GradientButton containerClassName="!shrink-0">
          <span className="text-white">Schedule a call</span>
          <CallMissedIcon className="!h-6 !w-6 !shrink-0" />
        </GradientButton>
      </div>
    </div>
  );
}

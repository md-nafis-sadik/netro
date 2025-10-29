import { useRef, useEffect, JSX, Fragment } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import {
  routes,
  socialsData,
  tidycalMettingUrl,
} from "@/services/data/shared.data";
import { GradientButton } from "../ui/gradient-button";
import { CalendarIcon } from "@/services/assets/svgs";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

type DropupNavigationMenuProps = {
  show: boolean;
  servicesMenu: any[];
};

export default function DropupNavigationMenu({
  show,
  servicesMenu,
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
        "absolute -bottom-[560px] mb-2 left-0 min-w-[474px] min-h-[60px] bg-[#1C1C1C] shadow-md py-10 z-50 services-dropdown"
      )}
      style={{ display: "none" }}
    >
      <ul className="flex flex-col overflow-hidden">
        {servicesMenu.map((service, serviceIndex) => (
          <Fragment key={`${service.name}_${serviceIndex}`}>
            <Link
              href={`${routes.services.childLink}/${service?.title}`}
              className="pt-6 pb-3 flex flex-row justify-between items-center hover:scale-105 transition_common hover:bg-black px-10 group"
            >
              <span className="text-2xl font-medium tracking-[0.48px] text-white">
                {service?.title}
              </span>
              <span className="font-scoutcond text-[32px] font-bold text-text-750 group-hover:text-main-500 group-hover:scale-150 transition_common">
                {serviceIndex > 9 ? serviceIndex + 1 : `0${serviceIndex + 1}`}
              </span>
            </Link>

            <div className="h-[1px] w-[calc(100%-80px)] mx-auto bg-gradient-to-tr from-[#000000] to-[#454545]" />
          </Fragment>
        ))}
      </ul>

      {/* CONNECT & SOCIALS */}
      <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-6 mt-8 md:mt-12 px-10 mx-auto">
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

        <GradientButton
          containerClassName="!shrink-0"
          onClick={() => window.open(tidycalMettingUrl, "_blank")}
        >
          <span className="text-white">Schedule a call</span>
          <CalendarIcon className="!h-6 !w-6 !shrink-0" />
        </GradientButton>
      </div>
    </div>
  );
}

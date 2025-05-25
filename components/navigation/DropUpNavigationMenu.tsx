import { useRef, useEffect, JSX } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { servicesMenu } from "@/services/data/shared.data";

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
        "absolute -bottom-[380px] mb-2 left-0 min-w-[474px] min-h-[60px] bg-[#1C1C1C] shadow-md p-10 z-50 services-dropdown"
      )}
      style={{ display: "none" }}
    >
      <ul className="flex flex-col">
        {servicesMenu.map((service) => (
          <li
            key={service.name}
            className="pt-6 pb-3 flex flex-row justify-between items-center"
          >
            <p className="text-2xl font-medium tracking-[0.48px] text-white">
              {service.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

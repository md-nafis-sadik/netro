import { useRef, useEffect, JSX } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";

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
        "absolute bottom-full mb-2 left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-md p-2 z-50"
      )}
      style={{ display: "none" }}
    >
      <ul className="space-y-2">
        <li className="hover:bg-gray-100 rounded-md px-3 py-1 cursor-pointer">
          Option 1
        </li>
        <li className="hover:bg-gray-100 rounded-md px-3 py-1 cursor-pointer">
          Option 2
        </li>
        <li className="hover:bg-gray-100 rounded-md px-3 py-1 cursor-pointer">
          Option 3
        </li>
      </ul>
    </div>
  );
}

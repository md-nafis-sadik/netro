import { IService } from "@/services";
import { ArrowLongTailIcon, CalendarIcon } from "@/services/assets/svgs";
import {
  routes,
  socialsData,
  tidycalMettingUrl,
} from "@/services/data/shared.data";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { gsap } from "gsap";
import Link from "next/link";
import {
  cloneElement,
  Fragment,
  isValidElement,
  JSX,
  useEffect,
  useRef,
  useState,
} from "react";
import { GradientButton } from "../ui/gradient-button";
import { cn } from "@/lib/utils";
import colors from "@/lib/colors";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

type DropupNavigationMenuProps = {
  show: boolean;
  servicesMenu: readonly IService[];
};

function ServiceMenuItem({
  service,
  index,
  isActive,
  onHover,
}: {
  service: IService;
  index: number;
  isActive: boolean;
  onHover: (index: number) => void;
}) {
  return (
    <Link
      href={`${service.link}`}
      className={clsx(
        "flex items-start gap-[10px] transition_common px-[9px] pt-[9px] pb-3 group rounded-[8px]",
        isActive
          ? "bg-main-600 scale-105"
          : "hover:scale-105 hover:bg-main-600"
      )}
      onMouseEnter={() => onHover(index)}
    >
      {service.icon &&
        isValidElement(service.icon) &&
        cloneElement(service.icon as React.ReactElement<any>, {
          color: isActive
            ? "#ffffff"
            : (service.icon as React.ReactElement<any>).props.color,
        })}
      <div className="flex flex-col gap-[1px]">
        <div className="text-base font-semibold leading-[120%] text-white">
          {service?.title}
        </div>
        <div
          className={clsx(
            "text-xs leading-[120%] transition_common",
            isActive ? "text-white" : "text-text-200 group-hover:text-white"
          )}
        >
          {service?.subtitle}
        </div>
      </div>
    </Link>
  );
}

export default function DropupNavigationMenu({
  show,
  servicesMenu,
}: DropupNavigationMenuProps): JSX.Element {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const transitionTl = useRef<gsap.core.Timeline | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);       // drives left-panel highlight
  const [displayedIndex, setDisplayedIndex] = useState(0); // drives right-panel content

  const displayedService = servicesMenu[displayedIndex] ?? servicesMenu[0];

  useGSAP(() => {
    if (!menuRef.current) return;

    tl.current = gsap.timeline({ paused: true });
    tl.current.fromTo(
      menuRef.current,
      { y: 70, autoAlpha: 0, display: "none" },
      {
        y: 60,
        autoAlpha: 1,
        display: "block",
        duration: 0.3,
        ease: "power2.out",
      },
    );
  }, []);

  useEffect(() => {
    if (!tl.current) return;
    if (show) tl.current.play();
    else tl.current.reverse();
  }, [show]);

  // Reset both indices whenever the menu is shown
  useEffect(() => {
    if (show) {
      setActiveIndex(0);
      setDisplayedIndex(0);
    }
  }, [show]);

  // Animate right panel: fade out → swap content → fade in
  useEffect(() => {
    if (activeIndex === displayedIndex) return;
    if (!contentRef.current || !imageRef.current) return;

    // Kill any running transition so rapid hovering never stacks
    if (transitionTl.current) transitionTl.current.kill();

    // Capture the target index in a local so the closure is never stale
    const targetIndex = activeIndex;
    const targets = [contentRef.current, imageRef.current];

    transitionTl.current = gsap.timeline();

    // Phase 1: fade out + slide down
    transitionTl.current.to(targets, {
      autoAlpha: 0,
      y: 6,
      duration: 0.18,
      ease: "power2.in",
      stagger: 0.04,
    });

    // Tick boundary: swap content while invisible, then give React a frame to flush
    transitionTl.current.call(() => setDisplayedIndex(targetIndex));
    transitionTl.current.delay(0.05);

    // Phase 2: fade in + slide up
    transitionTl.current.to(targets, {
      autoAlpha: 1,
      y: 0,
      duration: 0.22,
      ease: "power2.out",
      stagger: 0.04,
    });
  }, [activeIndex, displayedIndex]);

  return (
    <div
      ref={menuRef}
      className={clsx(
        "absolute -bottom-[494px] mb-2 min-w-[652px] min-h-[60px] z-50 services-dropdown bg-navyblue-600 rounded-3xl overflow-hidden",
        "left-1/4 -translate-x-1/4",
      )}
      style={{ display: "none" }}
    >
      <div className="flex w-full">
        {/* Left Panel — Menu Items */}
        <div className="bg-navyblue-600 w-1/2 p-6">
          <div className="flex flex-col">
            <div className="px-[9px] text-text-600 mb-2">Software Engineering</div>
            {servicesMenu.slice(0, 5).map((service, serviceIndex) => (
              <ServiceMenuItem
                key={`${service.title}_${serviceIndex}`}
                service={service}
                index={serviceIndex}
                isActive={activeIndex === serviceIndex}
                onHover={setActiveIndex}
              />
            ))}
          </div>

          <div className="flex flex-col mt-6">
            <div className="px-[9px] text-text-600 mb-2">Design & Branding</div>
            {servicesMenu.slice(5, 7).map((service, serviceIndex) => {
              const realIndex = serviceIndex + 5;
              return (
                <ServiceMenuItem
                  key={`${service.title}_${realIndex}`}
                  service={service}
                  index={realIndex}
                  isActive={activeIndex === realIndex}
                  onHover={setActiveIndex}
                />
              );
            })}
          </div>
        </div>

        {/* Right Panel — Active Service Details */}
        <div className="bg-navyblue-400 w-1/2 p-6">
          <div className="flex flex-col h-full justify-between">
            <div ref={contentRef}>
              <div className="text-white text-sm">
                {displayedService.description}
              </div>
              <Link
                href={`${displayedService.link}`}
                className={cn(
                  "flex-1 flex_center gap-2 py-2 pl-4 pr-3 w-max rounded-full text-xs font-semibold sm:font-bold leading-[110%] whitespace-nowrap mt-4 hover:scale-105 transition_common",
                  "bg-white text-black",
                )}
              >
                See Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.6118 3.61183L10.8991 4.32455L14.0706 7.49604H0V8.50399H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99999L11.6118 3.61183Z"
                    fill="#3654FF"
                  />
                </svg>
              </Link>
            </div>
            <div ref={imageRef}>
              <Image
                src={displayedService.image}
                alt={`${displayedService.title} preview`}
                width={556}
                height={240}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
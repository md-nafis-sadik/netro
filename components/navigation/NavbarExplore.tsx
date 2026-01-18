import { cn } from "@/lib/utils";
import { ArrowLongTailIcon } from "@/services/assets/svgs";

function NavbarExplore({ show }: { show?: boolean }) {
  return (
    <div
      className={cn(
        "explore-bg flex_center gap-4 overflow-hidden duration-300",
        show ? "h-8" : "h-0",
      )}
    >
      <p className="text-sm text-white leading-[120%]">
        Introducing our brand new portfolio section. Explore it today!
      </p>
      <ArrowLongTailIcon className="text-white-100 size-6" />
    </div>
  );
}

export default NavbarExplore;

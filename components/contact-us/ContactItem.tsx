import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function ContactItem({
  title = "",
  link = "#",
  linkText = "",
  icon = "",
  isBordered = true,
}: {
  title?: string;
  link?: string;
  linkText?: string;
  icon?: ReactNode;
  isBordered?: boolean;
}) {
  return (
    <div className="flex lg:items-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-7">
      <div className="w-12 sm:w-16 md:w-[4.5rem] h-12 sm:h-16 md:h-[4.5rem] rounded-full bg-natural-100 flex items-center justify-center">
        {icon}
      </div>
      <div className={cn(isBordered && "border-b border-black pb-1")}>
        <h4 className="text-xs sm:text-base md:text-xl text-text-600 leading-[22px] mb-2 sm:mb-3.5 md:mb-5">
          {title}
        </h4>
        <a
          href={link}
          className={cn(
            "text-sm sm:text-lg md:text-2xl text-text-900 leading-[22px] font-semibold break-all"
          )}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}

export default ContactItem;

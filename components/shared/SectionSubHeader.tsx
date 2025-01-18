import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface IFSubHeader {
  text: string;
  dark?: boolean;
  className?: string;
}

const SectionSubHeader = ({ text, dark, className }: IFSubHeader) => {
  return (
    <p
      className={cn(
        inter.className,
        "px-6 py-2 bg-[#F0F0F0] rounded-full text-xl font-normal uppercase !leading-normal tracking-[0.8px] border",
        dark
          ? "border-dashed border-natural-800 text-text-600 bg-natural-1000"
          : "text-text-700",
        className
      )}
    >
      {text}
    </p>
  );
};

export default SectionSubHeader;

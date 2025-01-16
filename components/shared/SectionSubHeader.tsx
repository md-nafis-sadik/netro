import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface IFSubHeader {
  text: string;
  className?: string;
}

const SectionSubHeader = ({ text, className }: IFSubHeader) => {
  return (
    <p
      className={cn(
        inter.className,
        "px-6 py-2 bg-[#F0F0F0] rounded-full text-xl font-normal uppercase !leading-normal tracking-[0.8px]",
        className
      )}
    >
      {text}
    </p>
  );
};

export default SectionSubHeader;

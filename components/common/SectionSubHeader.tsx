import { cn } from "@/lib/utils";

interface IFSubHeader {
  text: string;
  dark?: boolean;
  blue?: boolean;
  className?: string;
}

const SectionSubHeader = ({ text, dark, blue, className }: IFSubHeader) => {
  const variantClass = dark
    ? "border-dashed border-natural-800 text-text-600 bg-[#101010]"
    : blue
    ? "text-white bg-new-main-950 border-none"
    : "border-transparent text-text-700 bg-[#F0F0F0]";

  return (
    <p
      className={cn(
        "px-6 py-1.5 rounded-full text-xs md:text-xl font-normal uppercase !leading-normal tracking-[0.8px] border font-inter",
        variantClass,
        className,
      )}
    >
      {text}
    </p>
  );
};


export default SectionSubHeader;

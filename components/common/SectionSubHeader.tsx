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
        "px-6 py-2 rounded-full text-xs md:text-xl font-normal uppercase !leading-normal tracking-[0.8px] border font-inter",
        dark
          ? "border-dashed border-natural-800 text-text-600 bg-[#101010]"
          : "border-transparent text-text-700 bg-[#F0F0F0]",
        className,
      )}
    >
      {text}
    </p>
  );
};

export default SectionSubHeader;

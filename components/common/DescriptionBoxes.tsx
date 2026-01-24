import { cn } from "@/lib/utils";

interface DescriptionBoxesProps {
  detailPoints: any[];
  variant?: "white" | "dark" | "blue" | "gradient"; // Named variants
  title?: string;
  className?: string;
}

const variantStyles = {
  white: {
    border: "border-[#97C0FF] bg-[#EBF5FF]",
    title: "text-[#888]",
    subpoint: "text-black font-normal",
  },
  dark: {
    border: "border-gray-700",
    title: "text-gray-300",
    subpoint: "text-gray-100",
  },
  blue: {
    border: "border-[#20338F]",
    title: "text-[#3654FF]",
    subpoint: "text-white",
  },
  gradient: {
    border: "border-transparent",
    title: "text-white",
    subpoint: "text-white",
  },
};

const DescriptionBoxes = ({
  variant = "white",
  title = "",
  className = "",
  detailPoints = [],
}: DescriptionBoxesProps) => {
  const currentVariant = variantStyles[variant];

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-9 mt-6 md:mt-8 lg:mt-10 text-center",
        className,
      )}
    >
      {detailPoints.map((point: any, index: number) => (
        <div
          key={index}
          className={cn(
            "border border-dashed px-2.5 py-6",
            currentVariant.border,
          )}
        >
          <p
            className={cn(
              "text-xs md:text-sm uppercase mb-2",
              currentVariant.title,
            )}
          >
            {point?.title || title}
          </p>
          {point?.points?.map((subPoint: string, subIndex: number) => (
            <p
              key={subIndex}
              className={cn(
                "text-base md:text-lg lg:text-xl font-bold leading-[140%]",
                currentVariant.subpoint,
              )}
            >
              {subPoint}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DescriptionBoxes;

import { cn } from "@/lib/utils";

interface DescriptionHeaderProps {
  text?: string;
  variant?: "default" | "dark" | "blue" | "gradient";
  className?: string;
  title?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const DescriptionHeader = ({
  text = "",
  variant = "default",
  className = "",
  title = "",
  titleClassName = "",
  descriptionClassName = "",
}: DescriptionHeaderProps) => {
  const variantClasses = {
    default: {
      title: "text-white",
      description: "text-text-600",
    },
    dark: {
      title: "text-black",
      description: "text-text-600",
    },
    blue: {
      title: "text-white",
      description: "text-white",
    },
    gradient: {
      title: "text-white",
      description: "text-white",
    },
  };

  return (
    <div className={cn("flex flex-col items-center gap-4 md:gap-6", className)}>
      {title && (
        <div className="flex-shrink-0">
          <div
            className={cn(
              "text-5xl md:text-[56px] leading-[90%] font-scoutcond font-bold uppercase",
              titleClassName,
              variantClasses[variant].title,
            )}
          >
            {title}
          </div>
        </div>
      )}
      {text && (
        <div
          className={cn(
            "!text-lg sm:!text-2xl md:!text-4xl !leading-[110%] text-center max-w-[874px]" ,
            descriptionClassName,
            variantClasses[variant].description,
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default DescriptionHeader;

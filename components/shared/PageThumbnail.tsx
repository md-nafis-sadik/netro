import { cn } from "@/lib/utils";

function PageThumbnail({
  title,
  description,
  titleClassName = "blackGradient",
  className = "",
}: {
  title?: string;
  description?: string;
  titleClassName?: string;
  className?: string;
}) {
  return (
    <div className={cn("containerX", className)}>
      <div className="pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-16 md:pb-20">
        <h1 className={cn("title", titleClassName)}>{title}</h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-text-600 font-inter font-normal md:font-light uppercase leading-[140%] mt-6 md:mt-5">
          {description}
        </p>
      </div>
    </div>
  );
}

export default PageThumbnail;

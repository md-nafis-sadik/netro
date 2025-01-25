import { GradientButton } from "@/components/ui/gradient-button";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { CheckedCircleIcon } from "@/services/assets/svgs";

interface IFCardProps {
  title?: string;
  subtitle?: string;
  price?: number;
  period?: string;
  popular?: boolean;
  features?: string[];
  buttonText?: string;
}

const PricingCard = ({
  title,
  subtitle,
  price,
  //   popular,
  features,
}: IFCardProps) => {
  return (
    <div className="border border-[#494949] px-4 py-6 md:px-10 md:py-10 w-full h-full max-w-[410px]">
      <p
        className={cn(
          inter.className,
          "text-xl font-bold !leading-[1.1] text-white"
        )}
      >
        {title}
      </p>

      <p
        className={cn(
          inter.className,
          "text-sm md:text-base font-normal !leading-[1.1] mt-2 md:mt-3 text-text-600"
        )}
      >
        {subtitle}
      </p>

      <p
        className={cn(
          inter.className,
          "text-sm font-normal !leading-[1.1] mt-8"
        )}
      >
        <span className="text-text-50 text-4xl md:text-5xl font-bold !leading-[1.1]">
          ${price}
        </span>{" "}
        <sup className="text-text-200 text-sm md:text-xl font-normal !leading-[1.4]">
          /per hour
        </sup>
      </p>

      <div className="mt-6 md:mt-10">
        <GradientButton className="!px-8">
          <span className="text-white">Start Project</span>
        </GradientButton>
      </div>

      <div className="border border-text-750 h-0 w-full my-6 md:my-10" />

      <ul className="flex flex-col gap-4 md:gap-5">
        {features?.map((feature, index) => (
          <li key={index} className="flex flex-row gap-3 items-center">
            <CheckedCircleIcon className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm md:text-base font-normal !leading-[1.1] text-white">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;

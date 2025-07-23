import { GradientButton } from "@/components/ui/gradient-button";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { CheckedCircleIcon } from "@/services/assets/svgs";
import CardTransitionUpWithDelay from "../animations/CardTransitionUpWithDelay";
import { routes } from "@/services/data/shared.data";

interface IFCardProps {
  title?: string;
  index: number;
  subtitle?: string;
  className?: string;
  price?: number;
  period?: string;
  popular?: boolean;
  features?: string[];
  buttonText?: string;
}

const PricingHomeCard = ({
  title,
  index,
  subtitle,
  price,
  //   popular,
  className,
  features,
}: IFCardProps) => {
  return (
    <CardTransitionUpWithDelay
      index={index}
      className={cn(
        "pricing-card w-full 2xl:w-[410px] h-full max-w-full md:max-w-[410px] p-[2px] transition_common"
      )}
    >
      <div className="px-4 py-6 md:px-10 md:py-10 h-full">
        <p
          className={cn(
            "text-xl font-bold !leading-[1.1] text-white font-inter"
          )}
        >
          {title}
        </p>

        <p
          className={cn(
            "text-sm md:text-base font-normal !leading-[1.1] mt-2 md:mt-3 text-text-600 font-inter"
          )}
        >
          {subtitle}
        </p>

        <p className={cn("text-sm font-normal !leading-[1.1] mt-8 font-inter")}>
          <span className="text-text-50 text-4xl md:text-5xl font-bold !leading-[1.1]">
            ${price}
          </span>{" "}
          <sup className="text-text-200 text-sm md:text-xl font-normal !leading-[1.4]">
            /per hour
          </sup>
        </p>

        <div className="mt-6 md:mt-10 flex justify-start">
          <GradientButton href={routes.contact.link} className="!px-8">
            <span className="text-white">Start Project</span>
          </GradientButton>
        </div>

        <div className="border-t border-text-750 h-0 w-full my-6 md:my-10" />

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
    </CardTransitionUpWithDelay>
  );
};

export default PricingHomeCard;

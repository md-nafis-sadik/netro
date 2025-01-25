import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import React from "react";
import PricingCard from "./PricingCard";
import { cn } from "@/lib/utils";
import { inter } from "@/lib/fonts";
import { pricingData } from "@/services/data";

const Pricing = () => {
  return (
    <section className="bg-black flex_center flex-col w-full py-20 overflow-hidden">
      <SectionSubHeader dark text="Our Pricing" />
      <SectionHeader
        lite
        text="Built to scale with"
        className="mt-5 md:mt-10"
      />
      <SectionHeader lite text="your ambitions." />

      <div className="containerX grid grid-cols-3 gap-6 my-10 md:my-20 max-w-fit">
        {pricingData.map(
          ({ title, subtitle, price, popular, features }, index) => (
            <PricingCard
              key={index}
              title={title}
              subtitle={subtitle}
              price={price}
              popular={popular}
              features={features}
            />
          )
        )}
      </div>

      <p
        className={cn(
          inter.className,
          "text-xs md:text-base font-normal !leading-[1.8] md:!leading-[1.4] text-text-200"
        )}
      >
        Complete the form by clicking “Start Project” to send us a message. Our
        support team will promptly respond to your request.
      </p>
    </section>
  );
};

export default Pricing;

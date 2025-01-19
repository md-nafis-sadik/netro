import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import React from "react";
import PricingCard from "./PricingCard";
import { pricingData } from "@/lib/data";

const Pricing = () => {
  return (
    <section className="bg-black flex_center flex-col my-20 w-full py-20 overflow-hidden">
      <SectionSubHeader dark text="Our Pricing" />
      <SectionHeader
        lite
        text="Built to scale with"
        className="mt-5 md:mt-10"
      />
      <SectionHeader lite text="your ambitions." />

      <div className="containerX grid grid-cols-3 gap-6 my-10 md:my-20">
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
    </section>
  );
};

export default Pricing;

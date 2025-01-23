import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import { productsData } from "@/services/data";
import React from "react";
import ProductCard from "./ProductCard";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";

const Products = () => {
  return (
    <section className="containerX bg-black flex_center flex-col w-full py-20 overflow-hidden">
      <SectionSubHeader dark text="Our Products" />
      <SectionHeader lite text="Our Innovative" className="mt-5 md:mt-10" />
      <SectionHeader lite text="Global Products" />

      <div className="max-w-[952px] w-fit mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-[60px] my-10 md:my-20">
        {productsData.map(({ name, description }, index) => (
          <ProductCard name={name} description={description} key={index} />
        ))}
      </div>

      <ArrowLineupButton
        lineColor={colors.secondary[300]}
        textClassName="text-white"
        className="mt-10 md:mt-20"
      >
        See all products
      </ArrowLineupButton>
    </section>
  );
};

export default Products;

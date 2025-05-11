import SectionSubHeader from "@/components/common/SectionSubHeader";
import { productsData } from "@/services/data";
import React from "react";
import ProductCard from "./ProductCard";
import ArrowLineupButton from "@/components/ui/arrow-lineup-button";
import colors from "@/lib/colors";
import SectionHeader from "../common/SectionHeader";

const Products = () => {
  return (
    <section className="bg-black w-full py-20 overflow-hidden">
      <div className="containerX flex_center flex-col">
        <SectionSubHeader dark text="Our Products" />
        <SectionHeader className="home_products_header">
          Our Innovative <br /> Global Products
        </SectionHeader>

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
      </div>
    </section>
  );
};

export default Products;

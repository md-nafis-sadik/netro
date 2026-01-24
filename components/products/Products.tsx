"use client";

import { useProductAnimation } from "@/hooks/useProducts";
import colors from "@/lib/colors";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import { productsData } from "@/services/data";
import { routes } from "@/services/data/shared.data";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";
import ArrowLineupButton from "../ui/arrow-lineup-button";

function Products() {
  const { sectionRef } = useProductAnimation();

  return (
    <section
      ref={sectionRef}
      data-bg-theme="dark"
      className="bg-darkPurplebg pb-8 pt-8 md:pt-16 lg:pt-20 overflow-hidden"
    >
      <div className="container flex_center flex-col">
        <SectionSubHeader
          dark
          text="Made for business, by us"
          className="products-sub border-0 bg-main-950 text-white"
        />
        <SectionHeader className="products-title home_projects_header mt-2">
          OUR Products
        </SectionHeader>

        <ul className="w-full flex flex-col gap-12 md:gap-6 lg:gap-3 my-6 sm:my-10 md:my-16">
          {productsData.map((product) => (
            <li
              key={product.id}
              className="product-item flex flex-col md:flex-row md:items-center md:even:flex-row-reverse md:gap-[105px] max-w-96 mx-auto md:max-w-none gap-4"
            >
              <div className="relative w-full md:max-w-[605px] product-image">
                <Image
                  src={product.image}
                  alt="product image"
                  width={700}
                  height={500}
                  className="w-full xl:h-[492px] object-contain"
                />
                {/* <Image
                  src={images.dotBg}
                  alt="product background"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                /> */}
              </div>

              <div className="product-text font-inter w-full md:max-w-[481px]">
                <p className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-main-950 text-white max-w-max text-xs sm:text-sm sm:font-medium leading-[140%]">
                  {product.tag}
                </p>
                <h2 className="text-base sm:text-xl lg:text-3xl text-white font-bold leading-[110%] mt-3 mb-1">
                  {product.title}
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-text-600 leading-[120%]">
                  {product.description}
                </p>

                <Link
                  href={routes.contact.link}
                  className="bg-main-400 hover:bg-main-500 flex items-center gap-2 p-[8px_16px_8px_20px] sm:p-[12px_20px_12px_24px] rounded-full w-fit text-white font-inter text-sm md:text-base font-bold mt-6 sm:mt-7"
                >
                  <span>View Details</span>
                  <ArrowLongTailIcon className="text-white-100" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <ArrowLineupButton
          lineColor={colors.secondary[300]}
          textClassName="text-white"
        >
          See More
        </ArrowLineupButton>
      </div>
    </section>
  );
}

export default Products;

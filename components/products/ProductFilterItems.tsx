"use client";
import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import { Dividericon } from "@/services/assets/svgs";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import SliderContainer from "../shared/SlideContainer";

function ProductFilterItems({ query = "All" }: { query: string }) {
  const productLists = [
    "All",
    "UX/UI Design",
    "Software Development",
    "Web Development",
    "App Development",
    "SaaS Development",
  ];
  const router = useRouter();

  const handleTabClick = (tabName: string) => {
    const query = new URLSearchParams();
    query.set("filtered_by", tabName);
    const newPath = `?${query.toString()}`;
    router.push(newPath);
  };
  return (
    <div className="sm:border-t border-dashed border-natural-300 sm:pt-6 md:pt-10">
      <div className="w-full max-w-[1920px] mx-auto sm:px-8 xl:px-16 2xl:px-28">
        <div className="p-3 border-x-0 sm:border-x border-y border-dashed border-natural-300 ">
          <SliderContainer className="relative overflow-hidden">
            <ul className="flex items-center gap-2">
              {productLists.map((item, index) => (
                <Fragment key={index}>
                  <li
                    className={cn(
                      "px-6 sm:px-7 md:px-8 py-2 sm:py-3 text-sm text-text-900 font-semibold cursor-pointer font-inter whitespace-nowrap",
                      query === item ? "bg-main-400 text-white" : ""
                    )}
                    onClick={() => handleTabClick(item)}
                  >
                    {item}
                  </li>
                  <li>
                    {index !== productLists?.length - 1 && (
                      <Dividericon
                        className="w-[7px] h-7"
                        color={colors.natural[200]}
                      />
                    )}
                  </li>
                </Fragment>
              ))}
            </ul>
          </SliderContainer>
        </div>
      </div>
    </div>
  );
}

export default ProductFilterItems;

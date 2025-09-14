"use client";
import colors from "@/lib/colors";
import { cn } from "@/lib/utils";
import { Dividericon } from "@/services/assets/svgs";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import SliderContainer from "../shared/SlideContainer";

interface IProjectFilterItems {
  query?: string;
  categoryData?: any;
}

function ProjectFilterItems({
  query = "All",
  categoryData,
}: IProjectFilterItems) {
  const productLists = [
    {
      category: "All",
    },
    ...categoryData,
  ];
  const router = useRouter();

  const handleTabClick = (tabName: string) => {
    const query = new URLSearchParams();
    query.set("filtered_by", tabName);
    const newPath = `?${query.toString()}`;
    router.push(tabName === "All" ? "/portfolio" : newPath); // Navigate to the new path based on the tabName. If "All" is clicked, it navigates to "/portfolio", otherwise it appends the query string.
  };

  return (
    <div className="w-full">
      <div className="p-3">
        <SliderContainer className="relative overflow-hidden">
          <ul className="flex items-center gap-2">
            {productLists.map((item, index) => (
              <Fragment key={index}>
                <li
                  className={cn(
                    "px-6 sm:px-7 md:px-8 py-2 sm:py-3 text-sm text-text-900 font-semibold cursor-pointer font-inter whitespace-nowrap rounded-[40px]",
                    query === item?.category ? "bg-main-400 text-white" : ""
                  )}
                  onClick={() => handleTabClick(item?.category)}
                >
                  {item?.category}
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
  );
}

export default ProjectFilterItems;

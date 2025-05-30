"use client";
import { Fragment } from "react";
import ProductFilterItems from "@/components/products/ProductFilterItems";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import ProjectCard from "./ProjectCard";

interface IFProps {
  query?: string;
  data?: any;
}

const ProjectsGallery = ({ data = [] }: IFProps) => {
  const searchParams = useSearchParams();
  const filtered_by = searchParams.get("filtered_by");

  const newData = data?.filter((item: any) => {
    if (filtered_by?.toLowerCase() === undefined) {
      return item;
    } else {
      console.log("item?.category?.toLowerCase()", item?.category);
      return item?.category?.toLowerCase() === filtered_by?.toLowerCase();
    }
  });

  return (
    <section className="pt-10 pb-10 sm:pb-16 md:pb-20 lg:pb-30">
      {newData?.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 lg:gap-20">
          {newData?.map((item: any, index: number) => (
            <ProjectCard
              key={index}
              item={item}
              className={cn(
                "relative bg-transparent",
                (index + 1) % 3 === 0 ? "md:col-span-2" : ""
              )}
            />
          ))}
        </div>
      ) : (
        <div className="py-40">
          <p className="font-inter text-center text-2xl font-semibold">
            No work available for this segment.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsGallery;

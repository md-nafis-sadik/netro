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

const ProjectsGallery = ({ query, data = [] }: IFProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const newData = data?.filter((item: any) => {
    if (category?.toLowerCase() === undefined) {
      return item;
    } else {
      return item?.category?.toLowerCase() === category?.toLowerCase();
    }
  });

  return (
    <Fragment>
      <ProductFilterItems query={query as string} />
      <section className="pt-10 pb-10 sm:pb-16 md:pb-20 lg:pb-30">
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
      </section>
    </Fragment>
  );
};

export default ProjectsGallery;

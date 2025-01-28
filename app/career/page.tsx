import TextFadeIn from "@/components/animations/TextFadeIn";
import CareerTeams from "@/components/career/CareerTeams";
import JobPosts from "@/components/career/JobPosts";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { cn } from "@/lib/utils";
import { aboutViewData } from "@/services/data";
import Image from "next/image";
import Link from "next/link";

function Career() {
  return (
    <>
      <PageThumbnail
        title="Current openings"
        description="Available Opportunities"
      />
      <JobPosts />
      <CareerTeams />
      <section className="pt-15 md:pt-20 pb-15 sm:pb-20 md:pb-30 font-inter">
        <div className="containerX">
          <TextFadeIn
            text="Netro Systems fosters innovation, collaboration, diversity, and growth,
        creating impactful software solutions in a vibrant, inclusive culture."
            className="w-full text-2xl md:text-5xl font-bold !leading-[1.4] text-text-900"
          />
        </div>
      </section>
      <section className="py-10 sm:py-16 md:py-20">
        <div className="containerX">
          <div className="mx-auto min-h-[704px]">
            <div className="flex gap-4 sm:gap-6">
              {aboutViewData.map(({ image, title, description }, index) => (
                <div
                  className={cn(
                    index === 1
                      ? "h-[234px] md:h-[544px] -translate-y-[11%]"
                      : "h-[186px] md:h-[434px]",
                    "min-w-[33%] relative overflow-hidden transition_common"
                  )}
                  key={index}
                >
                  <Image
                    src={image}
                    alt={title}
                    aria-label={description}
                    width={1280}
                    height={1280}
                    className="min-w-full min-h-full absolute_center !w-[700px]"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 group mt-6 font-inter"
            >
              <div className="bg-gradientGreen w-9 h-[1px] rounded-full"></div>
              <span className="text-text-900 text-base font-bold group-hover:translate-x-1 duration-300">
                See map
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;

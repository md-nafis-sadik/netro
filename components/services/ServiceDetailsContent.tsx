import { findServiceBySlug } from "@/services/data/services.data";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { tidycalMettingUrl } from "@/services/data/shared.data";
import { notFound } from "next/navigation";
import ExpandableButtonList from "../hero/partials/ExpandableButtonList";
import { cn } from "@/lib/utils";
import DescriptionHeader from "../common/DescriptionHeader";
import ServiceDeliverables from "./ServiceDeliverables";
import { images } from "@/services";

const ServiceDetailsContent = async ({ slug }: { slug: string }) => {
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const data = [
    {
      title: "AI Consulting",
      desc: "Automate work and reduce cost",
      link: "/services/ai-consulting",
      featuredImage: images.serviceFrame1,
    },
    {
      title: "AI Consulting",
      desc: "Build AI-driven products and features",
      link: "/services/ai-consulting",
      featuredImage: images.serviceFrame2,
    },
    {
      title: "AI Consulting",
      desc: "Extend legacy systems with intelligence",
      link: "/services/ai-consulting",
      featuredImage: images.serviceFrame3,
    },
  ];

  return (
    <section className="bg-darkPurplebg relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.ellipseBg}
          alt="background ellipse"
          className="absolute top-[2%] sm:top-[7%] 2xl:top-[3%] left-0 w-full h-auto object-contain"
          width={1920}
          height={1080}
          sizes="100vw"
          priority
        />
      </div>
      <section className="relative z-10">
        <div className="container py-10 md:py-[100px]">
          <div className="flex gap-6 mt-24">
            <div className="w-[68%] max-w-[780px]">
              <h2
                className="portfolio_details_header text-[28px] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-start tracking-wide"
                style={{ lineHeight: "120%" }}
              >
                {service.descTitle}
              </h2>
              <p className="font-inter text-sm md:text-lg lg:text-xl xl:text-2xl font-normal md:font-light !leading-[140%] text-start text-white mt-4">
                {service?.description}
              </p>
              <ExpandableButtonList className="justify-start" blue={true} />
            </div>
            <div className="w-[32%] flex items-end">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-white text-sm md:text-base">
                  <span className="bg-[#212121] w-8 h-8 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6666 5L7.49992 14.1667L3.33325 10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Automate work and reduce cost</span>
                </div>
                <div className="flex items-center gap-3 text-white text-sm md:text-base">
                  <span className="bg-[#212121] w-8 h-8 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6666 5L7.49992 14.1667L3.33325 10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Build AI-driven products and features</span>
                </div>
                <div className="flex items-center gap-3 text-white text-sm md:text-base">
                  <span className="bg-[#212121] w-8 h-8 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6666 5L7.49992 14.1667L3.33325 10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Extend legacy systems</span>
                </div>
              </div>
            </div>
          </div>

          <Image
            src={service.featuredImage}
            alt={`service image ${service.title}`}
            className="min-h-auto min-w-full object-contain mt-[50px] rounded-3xl md:rounded-[32px]"
            height={1280}
            width={1920}
          />
        </div>

        <div className="container w-full overflow-hidden pb-20">
          <div className="w-full pb-4 pt-10">
            <DescriptionHeader
              title="What we offer"
              text={
                "Unified engineering for the AI era. From strategy and prototyping to production-grade rollouts, we help organizations:"
              }
              descriptionClassName="max-w-full"
            />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mt-10">
              {data?.map((item: any, index: number) => (
                <div
                  className={cn(
                    "w-full min-w-[90%] 2xl:min-w-[376px] aspect-[328/418] xl:aspect-[376/460] last:aspect-[328/418] md:last:aspect-[376/240] xl:last:aspect-[376/460] last:col-span-1 md:last:col-span-2 xl:last:col-span-1 overflow-hidden bg-neutral-50 group relative animate-item3 rounded-2xl md:rounded-3xl",
                  )}
                  key={index}
                >
                  <Image
                    src={item?.featuredImage}
                    alt={item?.title || "Project"}
                    className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
                    width={1920}
                    height={1280}
                  />

                  {(item?.desc || item?.title) && (
                    <div
                      className={cn(
                        "absolute left-0 bottom-0 w-full h-[45%] xl:h-[40%] md:max-w-full project-home-blur transition_common ",
                      )}
                    >
                      <div className="pr-6 pl-4 pb-4 pt-5 md:pr-14 md:pl-6 md:pt-12 md:pb-6 h-full flex flex-col justify-between gap-4 md:gap-6">
                        <div className="flex flex-col mt-auto">
                          <p className="text-base md:text-lg 2xl:text-2xl font-bold !leading-[1.1] text-white mt-3 font-inter line-clamp-2">
                            {item?.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {service.deliverables && service.deliverables.length > 0 && (
          <ServiceDeliverables
            title={service.deliverablesTitle}
            description={service.deliverablesDescription}
            deliverables={service.deliverables}
          />
        )}
      </section>
    </section>
  );
};

export default ServiceDetailsContent;

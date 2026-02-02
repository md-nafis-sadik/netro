import { findServiceBySlug } from "@/services/data/services.data";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { tidycalMettingUrl } from "@/services/data/shared.data";
import { notFound } from "next/navigation";

const ServiceDetailsContent = async ({ slug }: { slug: string }) => {
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="">
      <div className="containerX py-10 md:py-[100px]">
        <SectionHeader className="service_details_header w-fit text-start">
          {service.title}
        </SectionHeader>

        <p className="font-inter text-sm md:text-2xl font-normal md:font-light !leading-[1.4] uppercase text-text-600 mt-6">
          {service.tags.map((tag: string, index: number) => (
            <span key={index} className="mr-2 last:mr-0">
              {tag}
              {index < service.tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>

      <div className="containerX relative overflow-hidden w-full">
        <Image
          src={service.featuredImage}
          alt={`service image ${service.title}`}
          className="min-h-auto min-w-full object-cover"
          height={1280}
          width={1920}
        />
      </div>

      <div className="containerX max-w-[952px] px-4 sm:px-8 lg:px-0 py-10">
        <div
          className="content font-inter !pt-0"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />

        <a
          href={tidycalMettingUrl}
          target="_blank"
          rel="noreferrer"
          className="btn_primary transition-colors duration-500 min-w-[180px] max-w-max sm:min-w-0 text-xs sm:text-base group flex flex-row items-center gap-2 mt-10"
        >
          <span>Reach us</span>
          <ArrowLongTailIcon className="group-hover:fill-black-900 fill-white duration-300" />
        </a>
      </div>
    </section>
  );
};

export default ServiceDetailsContent;

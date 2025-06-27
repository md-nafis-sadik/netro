import { fetchWithDelay } from "@/lib/apiHandler";
import { ArrowLongTailIcon } from "@/services/assets/svgs";
import Image from "next/image";

const ServiceDetailsContent = async ({ slug }: { slug: string }) => {
  let service = (await fetchWithDelay(
    `/services/find-by-title/${slug}`
  )) as any;

  return (
    <section className="">
      <div className="w-full aspect-[20/9] relative overflow-hidden">
        <Image
          src={service?.data?.featuredImage}
          alt={`service image ${service?.data?.title}`}
          className="absolute_center min-h-full min-w-full"
          height={1280}
          width={1920}
        />
      </div>

      <div className="containerX flex flex-col gap-10 py-10 md:py-20">
        <div
          className="content font-inter !pt-0"
          dangerouslySetInnerHTML={{ __html: service?.data?.content || "" }}
        />

        <a
          href="https://tidycal.com/netrosystems/discussion"
          target="_blank"
          rel="noreferrer"
          className="btn_primary transition-colors duration-500 min-w-[180px] max-w-max sm:min-w-0 text-xs sm:text-base group flex flex-row items-center gap-2 mt-20"
        >
          <span>Reach us</span>
          <ArrowLongTailIcon className="group-hover:fill-black-900 fill-white duration-300 " />
        </a>
      </div>
    </section>
  );
};

export default ServiceDetailsContent;

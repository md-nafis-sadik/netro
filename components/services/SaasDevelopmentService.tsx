import { images } from "@/services";
import Image from "next/image";
import ArrowLineupButton from "../ui/arrow-lineup-button";
import colors from "@/lib/colors";
import { saasDevelopmentServiceData, uxUiServicesData } from "@/services/data";

const SaasDevelopmentService = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse gap-6 md:gap-20 border-t border-dashed border-natural-300 py-10 md:py-20 font-inter">
      <div className="w-full md:w-2/5 !aspect-[0.87/1] md:h-fit !shrink-0 relative md:sticky md:top-10 overflow-hidden">
        <Image
          src={images.blog1}
          alt="Software development related image"
          className="min-h-full min-w-full max-h-[636px] absolute_center !shrink-0"
        />
      </div>

      <div className="w-full md:w-3/5 flex-col gap-4 md:gap-6">
        <p className="font-scout-cond text-[48px] lg:text-[96px] font-bold !leading-none text-text-900 uppercase">
          SaaS <br /> Development & SQA
        </p>

        <p className="text-sm lg:text-2xl font-normal !leading-[1.4] text-text-700 mt-4 md:mt-6">
          We specialize in SaaS development, delivering scalable, secure, and
          efficient software solutions tailored to your business needs. Coupled
          with robust Software Quality Assurance (SQA), we ensure seamless
          performance, reliability, and user satisfaction at every stage.
        </p>

        <div className="flex flex-col mt-4 md:mt-6">
          {saasDevelopmentServiceData.map(({ serial, title }, index) => (
            <div
              className="flex flex-row items-center gap-6 lg:gap-12 py-4 lg:py-8"
              key={index}
            >
              <p className="text-text-200 text-lg font-semibold lg:font-bold !leading-[1.4]">
                {serial}
              </p>

              <p className="text-sm lg:text-lg !leading-[1.6] lg:!leading-[1.4] font-normal text-text-900">
                {title}
              </p>
            </div>
          ))}
        </div>

        <ArrowLineupButton color={colors.main[400]} className="mt-6 md:mt-10">
          See full details
        </ArrowLineupButton>
      </div>
    </section>
  );
};

export default SaasDevelopmentService;

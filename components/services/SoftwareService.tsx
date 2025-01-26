import { images } from "@/services";
import { softwareServicesData } from "@/services/data";
import Image from "next/image";

const SoftwareService = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 md:gap-20 border-t border-dashed border-natural-300 py-10 md:py-20 font-inter">
      <div className="w-full md:w-2/5 max-h-[636px] relative overflow-hidden">
        <Image
          src={images.blog1}
          alt="Software development related image"
          className="min-h-full min-w-full absolute_center !shrink-0"
        />
      </div>

      <div className="w-full md:w-3/5 flex-col gap-4 md:gap-6">
        <p className="font-scout-cond text-[48px] md:text-[96px] font-bold !leading-none text-text-900 uppercase">
          Software <br /> Development
        </p>

        <p className="text-sm md:text-2xl font-normal !leading-[1.4] text-text-700 mt-4 md:mt-6">
          We specialize in creating scalable, reliable, and cutting-edge
          software solutions designed to address modern challenges. Our
          expertise ensures innovative, efficient, and tailored systems that
          drive growth and empower businesses to succeed.
        </p>

        <div className="flex flex-col mt-4 md:mt-6">
          {softwareServicesData.map(({ serial, title }, index) => (
            <div
              className="flex flex-row items-center gap-6 md:gap-12 py-4 md:py-8"
              key={index}
            >
              <p className="text-text-200 text-lg font-semibold md:font-bold !leading-[1.4]">
                {serial}
              </p>

              <p className="text-sm md:text-lg !leading-[1.6] md:!leading-[1.4] font-normal text-text-900">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareService;

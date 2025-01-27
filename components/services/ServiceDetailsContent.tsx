import { images } from "@/services";
import { customSoftwareDevelopmentServiceData } from "@/services/data";
import Image from "next/image";
import { FC, Fragment } from "react";

interface IFServiceListRendererProps {
  data?: { serial: string; title: string }[];
  title?: string;
  text?: string;
}

const ServiceListRenderer: FC<IFServiceListRendererProps> = ({
  data,
  title,
  text,
}) => {
  return (
    <div>
      <p className="text-2xl md:text-5xl !leading-none font-bold font-scoutcond uppercase text-text-900">
        {title}
      </p>
      <p className="text-sm md:text-lg font-normal !leading-[1.6] mt-4 md:mt-6 text-text-600">
        {text}
      </p>
      <div className="flex flex-col mt-4 md:mt-6">
        {data?.map(({ serial, title }, index) => (
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
    </div>
  );
};

const ServiceDetailsContent = () => {
  return (
    <section className="containerX flex py-10 md:py-20 lg:py-[120px]">
      <div className="w-full md:w-1/2 flex_center items-start">
        <Image
          src={images.cylindricalHalfStar}
          alt="cylindrical half star"
          className="max-w-[331px] md:max-w-[200px] h-auto !shrink-0 md:sticky md:top-[60px]"
          height={600}
          width={600}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-10 md:gap-20">
        <ServiceListRenderer
          data={customSoftwareDevelopmentServiceData}
          title="Custom Software Development"
          text={
            "Custom software development creates tailored solutions to meet specific business needs, improving efficiency, scalability, and competitiveness."
          }
        />
        <ServiceListRenderer
          data={customSoftwareDevelopmentServiceData}
          title="Web Application Development"
          text={
            "Web application development focuses on building tailored, interactive web-based solutions to streamline processes, enhance user experience, and drive business growth."
          }
        />
        <ServiceListRenderer
          data={customSoftwareDevelopmentServiceData}
          title="Mobile Application Development"
          text={
            "Mobile application development creates customized, user-friendly apps for smartphones and tablets, enhancing functionality and reaching a wider audience."
          }
        />
        <ServiceListRenderer
          data={customSoftwareDevelopmentServiceData}
          title="Enterprise Software Solutions"
          text={
            "Enterprise software solutions provide scalable and specialized applications designed to meet the complex needs of large organizations, improving efficiency and collaboration across the business."
          }
        />
        <ServiceListRenderer
          data={customSoftwareDevelopmentServiceData}
          title="SaaS Development"
          text={
            "SaaS development delivers cloud-based software solutions that offer scalability, accessibility, and cost efficiency, enabling businesses to streamline operations and enhance productivity."
          }
        />
      </div>
    </section>
  );
};

export default ServiceDetailsContent;

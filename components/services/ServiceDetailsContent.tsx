"use client";

import Image from "next/image";
import ServiceDeliverables from "./ServiceDeliverables";
import { images } from "@/services";
import ServicesDetails from "../projects/ServicesDetails";
import ServicesOffer from "../projects/ServicesOffer";
import { IService } from "@/services/types";

const ServiceDetailsContent = ({ service }: { service: IService }) => {

  return (
    <section className="bg-darkPurplebg relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 flex justify-center md:justify-start">
        <Image
          src={images.ellipseBg}
          alt="background ellipse"
          className="absolute top-[2%] sm:top-[7%] 2xl:top-[3%] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 min-w-[1110px] md:w-full h-auto object-cover md:object-contain"
          width={1920}
          height={1080}
          sizes="(max-width: 768px) 1110px, 100vw"
          priority
        />
      </div>
      <section className="relative z-10">
        <ServicesDetails service={service} />

        {service.servicesOffer && service.servicesOffer.data.length > 0 && (
          <ServicesOffer
            title={service.servicesOffer.title}
            description={service.servicesOffer.description}
            data={service.servicesOffer.data}
          />
        )}

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

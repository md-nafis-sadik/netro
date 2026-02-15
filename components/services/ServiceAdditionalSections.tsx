"use client";

import { IService } from "@/services/types";
import ServiceAtGlance from "./ServiceAtGlance";
import ServiceTechStacks from "./ServiceTechStacks";

interface ServiceAdditionalSectionsProps {
  service: IService;
}

const ServiceAdditionalSections = ({ service }: ServiceAdditionalSectionsProps) => {
  return (
    <>
      {service.atGlance && service.atGlance.length > 0 && (
        <ServiceAtGlance 
          items={service.atGlance} 
          title={service.atGlanceTitle} 
          description={service.atGlanceDescription} 
        />
      )}
      {service.techStacks && service.techStacks.length > 0 && (
        <ServiceTechStacks stacks={service.techStacks} />
      )}
    </>
  );
};

export default ServiceAdditionalSections;

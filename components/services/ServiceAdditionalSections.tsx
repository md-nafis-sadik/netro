import { findServiceBySlug } from "@/services/data/services.data";
import ServiceAtGlance from "./ServiceAtGlance";
import ServiceTechStacks from "./ServiceTechStacks";

interface ServiceAdditionalSectionsProps {
  slug: string;
}

const ServiceAdditionalSections = ({ slug }: ServiceAdditionalSectionsProps) => {
  const service = findServiceBySlug(slug);

  if (!service) {
    return null;
  }

  return (
    <>
      {service.atGlance && service.atGlance.length > 0 && (
        <ServiceAtGlance items={service.atGlance} />
      )}
      {service.techStacks && service.techStacks.length > 0 && (
        <ServiceTechStacks stacks={service.techStacks} />
      )}
    </>
  );
};

export default ServiceAdditionalSections;

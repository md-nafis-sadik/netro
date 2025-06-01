import SectionHeaderAnimated from "@/components/common/SectionHeaderAnimated";
import ClientServiceList from "@/components/services/ClientServiceList";
import ProductAnimationService from "@/components/services/ProductAnimationService";
import SaasDevelopmentService from "@/components/services/SaasDevelopmentService";
import ServiceStrengthAreas from "@/components/services/ServiceStrengthAreas";
import SoftwareService from "@/components/services/SoftwareService";
import UXUIService from "@/components/services/UXUIService";
import PageThumbnail from "@/components/shared/PageThumbnail";

const ServicePage = () => {
  return (
    <main className="relative">
      <PageThumbnail
        title="What We Do"
        description="Know our strengths"
        titleClassName="services_header w-fit"
      />

      <SoftwareService />
      <UXUIService />
      <ProductAnimationService />
      <SaasDevelopmentService />
      <ServiceStrengthAreas />
      <ClientServiceList />
    </main>
  );
};

export default ServicePage;

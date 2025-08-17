import ClientServiceList from "@/components/services/ClientServiceList";
import ServiceStrengthAreas from "@/components/services/ServiceStrengthAreas";
import ServicesWrapper from "@/components/services/ServicesWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { Suspense } from "react";

const ServicePage = () => {
  return (
    <main className="relative mt-20">
      <PageThumbnail
        title="What We Do"
        description="Know our strengths"
        titleClassName="services_header w-fit"
      />

      <Suspense fallback={<div className="containerX">Loading...</div>}>
        <ServicesWrapper />
      </Suspense>
      <ServiceStrengthAreas />
      <ClientServiceList />
    </main>
  );
};

export default ServicePage;

import ClientServiceList from "@/components/services/ClientServiceList";
import ServiceStrengthAreas from "@/components/services/ServiceStrengthAreas";
import ServicesWrapper from "@/components/services/ServicesWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { Suspense } from "react";
import { Metadata } from "next";

// Fixed metadata for the services page
export const metadata: Metadata = {
  title: "Our Services - What We Do",
  description: "Know our strengths and discover what we can do for you",
};

const ServicePage = () => {
  return (
    <main className="relative mt-[60px]">
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

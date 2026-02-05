import SectionHeader from "@/components/common/SectionHeader";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ProjectsPreviewServicesSkeleton from "@/components/projects/ProjectsPreviewServicesSkeleton";
import ProjectsPreviewServicesWrapper from "@/components/projects/ProjectsPreviewServicesWrapper";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ServiceDetailsSkeleton from "@/components/services/ServiceDetailsSkeleton";
import ServiceChallengesSolution from "@/components/services/ServiceChallengesSolution";
import ServiceAdditionalSections from "@/components/services/ServiceAdditionalSections";
import ServiceCommitment from "@/components/services/ServiceCommitment";
import TestimonialSkeleton from "@/components/testimonial/TestimonialSkeleton";
import TestimonialWrapper from "@/components/testimonial/TestimonialWrapper";
import { purifyUrl } from "@/services";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Import the main services page components
import ClientServiceList from "@/components/services/ClientServiceList";
import ServiceStrengthAreas from "@/components/services/ServiceStrengthAreas";
import ServicesWrapper from "@/components/services/ServicesWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { findServiceBySlug } from "@/services/data/services.data";
import ProcessFollowed from "@/components/view/ProcessFollowed";
import ContactUsFormHome from "@/components/contact-us/ContactUsFormHome";
import DiscoverMoreProjects from "@/components/projects/DiscoverMoreProjects";
import { fetchWithDelay } from "@/lib/apiHandler";
import DescriptionHeader from "@/components/common/DescriptionHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  let { slug } = await params;
  slug = Array.isArray(slug) ? slug.join("/") : slug;
  slug = purifyUrl({ urlString: slug });

  const service = findServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Netro Systems",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.metaTitle || `${service.title} | Netro Systems`,
    description: service.metaDescription || service.description,
  };
}

const ServiceDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  let { slug } = await params;
  if (slug === "all") {
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
  }

  // Handle individual service pages
  slug = Array.isArray(slug) ? slug.join("/") : slug;
  slug = purifyUrl({ urlString: slug });

  return (
    <main className="relative">
      <Suspense fallback={<ServiceDetailsSkeleton />}>
        <ServiceDetailsContent slug={slug} />
      </Suspense>

      <ServiceChallengesSolution />

      <ProcessFollowed />

      <ServiceAdditionalSections slug={slug} />

      <ContactUsFormHome />

      <section className="bg-darkPurplebg flex_center flex-col w-full py-20">
        <div className="container">
          <DescriptionHeader
            title="Releted Works"
            className="mb-6 md:mb-8 lg:mb-10"
          />

          <Suspense fallback={<ProjectsPreviewServicesSkeleton />}>
            <ProjectsPreviewServicesWrapper />
          </Suspense>
        </div>
      </section>

      <ServiceCommitment />
    </main>
  );
};

export default ServiceDetailsPage;

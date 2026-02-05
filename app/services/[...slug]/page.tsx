import ProjectsPreviewServicesSkeleton from "@/components/projects/ProjectsPreviewServicesSkeleton";
import ProjectsPreviewServicesWrapper from "@/components/projects/ProjectsPreviewServicesWrapper";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ServiceDetailsSkeleton from "@/components/services/ServiceDetailsSkeleton";
import ServiceChallengesSolution from "@/components/services/ServiceChallengesSolution";
import ServiceAdditionalSections from "@/components/services/ServiceAdditionalSections";
import ServiceCommitment from "@/components/services/ServiceCommitment";
import { purifyUrl } from "@/services";
import { Suspense } from "react";
import { Metadata } from "next";

// Import the main services page components
import ClientServiceList from "@/components/services/ClientServiceList";
import ServiceStrengthAreas from "@/components/services/ServiceStrengthAreas";
import ServicesWrapper from "@/components/services/ServicesWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { findServiceBySlug, servicesPageContent } from "@/services/data/services.data";
import ProcessFollowed from "@/components/view/ProcessFollowed";
import ContactUsFormHome from "@/components/contact-us/ContactUsFormHome";
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
    const content = servicesPageContent.all;
    return (
      <main className="relative mt-20">
        <PageThumbnail
          title={content.title}
          description={content.description}
          titleClassName={content.titleClassName}
        />
        <Suspense fallback={<div className="containerX">Loading...</div>}>
          <ServicesWrapper />
        </Suspense>
        <Suspense fallback={<div className="containerX py-20">Loading...</div>}>
          <ServiceStrengthAreas />
        </Suspense>
        <Suspense fallback={<div className="containerX py-20">Loading...</div>}>
          <ClientServiceList />
        </Suspense>
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

      <Suspense fallback={<div className="containerX py-20">Loading...</div>}>
        <ServiceChallengesSolution />
      </Suspense>

      <Suspense fallback={<div className="containerX py-20">Loading...</div>}>
        <ProcessFollowed />
      </Suspense>

      <Suspense fallback={<div className="containerX py-20">Loading...</div>}>
        <ServiceAdditionalSections slug={slug} />
      </Suspense>

      <Suspense fallback={<div className="containerX py-20">Loading...</div>}>
        <ContactUsFormHome />
      </Suspense>

      <section className="bg-darkPurplebg flex_center flex-col w-full py-20">
        <div className="container">
          <DescriptionHeader
            title={servicesPageContent.relatedWorks.title}
            className="mb-6 md:mb-8 lg:mb-10"
          />

          <Suspense fallback={<ProjectsPreviewServicesSkeleton />}>
            <ProjectsPreviewServicesWrapper />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<div className="containerX py-20">Loading...</div>}>
        <ServiceCommitment />
      </Suspense>
    </main>
  );
};

export default ServiceDetailsPage;

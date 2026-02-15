import dynamic from "next/dynamic";
import { purifyUrl } from "@/services";
import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { findServiceBySlug } from "@/services/data/services.data";
import DescriptionHeader from "@/components/common/DescriptionHeader";
import ProjectsPreviewServicesSkeleton from "@/components/projects/ProjectsPreviewServicesSkeleton";
import ProjectsPreviewServicesWrapper from "@/components/projects/ProjectsPreviewServicesWrapper";
import ServiceAdditionalSections from "@/components/services/ServiceAdditionalSections";
import ServicePageWrapper from "@/components/services/ServicePageWrapper";
import InlineLoader from "@/components/common/InlineLoader";

// Shared loader factory
const createLoader = (h: string) => {
  const LoaderComponent = () => <InlineLoader h={h} />;
  LoaderComponent.displayName = `InlineLoader(${h})`;
  return LoaderComponent;
};

// Dynamic imports with shared loaders
const ServiceDetailsContent = dynamic(() => import("@/components/services/ServiceDetailsContent"), { loading: createLoader("400px") });
const ServiceChallengesSolution = dynamic(() => import("@/components/services/ServiceChallengesSolution"), { loading: createLoader("400px") });
const ProcessFollowed = dynamic(() => import("@/components/view/ProcessFollowed"), { loading: createLoader("400px") });
const ContactUsFormHome = dynamic(() => import("@/components/contact-us/ContactUsFormHome"), { loading: createLoader("420px") });
const ServiceCommitment = dynamic(() => import("@/components/services/ServiceCommitment"), { loading: createLoader("300px") });

const getSlug = (slug: string | string[]) =>
  purifyUrl({ urlString: Array.isArray(slug) ? slug.join("/") : slug });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const service = findServiceBySlug(getSlug((await params).slug));
  
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
  const { slug } = await params;
  const service = findServiceBySlug(getSlug(slug));

  if (!service) notFound();

  const { challengesSolution, commitment, relatedWorks } = service;

  return (
    <ServicePageWrapper service={service}>
      <main className="relative">
        <ServiceDetailsContent service={service} />
        {challengesSolution && (
          <ServiceChallengesSolution {...challengesSolution} />
        )}
        <ProcessFollowed />
        <ServiceAdditionalSections service={service} />
        <ContactUsFormHome />
        <section className="bg-darkPurplebg flex_center flex-col w-full py-20 overflow-hidden">
          <div className="container">
            <DescriptionHeader
              title={relatedWorks?.title || "Related Works"}
              className="mb-6 md:mb-8 lg:mb-10"
            />
            <Suspense fallback={<ProjectsPreviewServicesSkeleton />}>
              <ProjectsPreviewServicesWrapper />
            </Suspense>
          </div>
        </section>
        {commitment && <ServiceCommitment {...commitment} />}
      </main>
    </ServicePageWrapper>
  );
};

export default ServiceDetailsPage;

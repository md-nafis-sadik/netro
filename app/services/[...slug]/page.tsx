import dynamic from "next/dynamic";
import { purifyUrl } from "@/services";
import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { findServiceBySlug } from "@/services/data/services.data";
import DescriptionHeader from "@/components/common/DescriptionHeader";
import ServiceDetailsSkeleton from "@/components/services/ServiceDetailsSkeleton";
import ProjectsPreviewServicesSkeleton from "@/components/projects/ProjectsPreviewServicesSkeleton";
import ProjectsPreviewServicesWrapper from "@/components/projects/ProjectsPreviewServicesWrapper";
import ServiceAdditionalSections from "@/components/services/ServiceAdditionalSections";

const Pulse = ({ h = "180px" }: { h?: string }) => (
  <div
    className={`w-full animate-pulse bg-neutral-900/10`}
    style={{ minHeight: h }}
  />
);

const ServiceDetailsContent = dynamic(
  () => import("@/components/services/ServiceDetailsContent"),
  { loading: () => <ServiceDetailsSkeleton /> },
);
const ServiceChallengesSolution = dynamic(
  () => import("@/components/services/ServiceChallengesSolution"),
  { loading: () => <Pulse h="400px" /> },
);
const ProcessFollowed = dynamic(
  () => import("@/components/view/ProcessFollowed"),
  { loading: () => <Pulse h="400px" /> },
);
const ContactUsFormHome = dynamic(
  () => import("@/components/contact-us/ContactUsFormHome"),
  { loading: () => <Pulse h="420px" /> },
);
const ServiceCommitment = dynamic(
  () => import("@/components/services/ServiceCommitment"),
  { loading: () => <Pulse h="300px" /> },
);

const getSlug = (slug: string | string[]) =>
  purifyUrl({ urlString: Array.isArray(slug) ? slug.join("/") : slug });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(getSlug(slug));
  return service
    ? {
        title: service.metaTitle || `${service.title} | Netro Systems`,
        description: service.metaDescription || service.description,
      }
    : {
        title: "Service Not Found | Netro Systems",
        description: "The requested service could not be found.",
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

  return (
    <main className="relative">
      <ServiceDetailsContent service={service} />
      {service.challengesSolution && (
        <ServiceChallengesSolution
          title={service.challengesSolution.title}
          description={service.challengesSolution.description}
          challenges={service.challengesSolution.challenges}
        />
      )}
      <ProcessFollowed />
      <Suspense fallback={<Pulse />}>
        <ServiceAdditionalSections slug={getSlug(slug)} />
      </Suspense>
      <ContactUsFormHome />
      <section className="bg-darkPurplebg flex_center flex-col w-full py-20 overflow-hidden">
        <div className="container">
          <DescriptionHeader
            title={service.relatedWorks?.title || "Related Works"}
            className="mb-6 md:mb-8 lg:mb-10"
          />
          <Suspense fallback={<ProjectsPreviewServicesSkeleton />}>
            <ProjectsPreviewServicesWrapper />
          </Suspense>
        </div>
      </section>
      {service.commitment && (
        <ServiceCommitment
          title={service.commitment.title}
          description={service.commitment.description}
          cards={service.commitment.cards}
        />
      )}
    </main>
  );
};

export default ServiceDetailsPage;

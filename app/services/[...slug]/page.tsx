import SectionHeader from "@/components/common/SectionHeader";
import SectionSubHeader from "@/components/common/SectionSubHeader";
import ProjectsPreviewServicesSkeleton from "@/components/projects/ProjectsPreviewServicesSkeleton";
import ProjectsPreviewServicesWrapper from "@/components/projects/ProjectsPreviewServicesWrapper";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ServiceDetailsSkeleton from "@/components/services/ServiceDetailsSkeleton";
import TestimonialSkeleton from "@/components/testimonial/TestimonialSkeleton";
import TestimonialWrapper from "@/components/testimonial/TestimonialWrapper";
import { getGeneratedMetadata } from "@/lib/metadata";
import { purifyUrl } from "@/services";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let { slug } = await params;
  slug = Array.isArray(slug) ? slug.join("/") : slug;
  slug = purifyUrl({ urlString: slug });
  const id = purifyUrl({ urlString: slug });
  const url = `/blogs/find-by-title/${id}`;
  return await getGeneratedMetadata({ apiUrl: url, metaTitle: id });
}

const ServiceDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  let { slug } = await params;
  slug = Array.isArray(slug) ? slug.join("/") : slug;
  slug = purifyUrl({ urlString: slug });

  return (
    <main className="relative">
      <Suspense fallback={<ServiceDetailsSkeleton />}>
        <ServiceDetailsContent slug={slug} />
      </Suspense>

      {/* <FAQ /> */}
      <section className="bg-black flex_center flex-col w-full py-20">
        <div className="containerX mt-10 md:mt-20">
          <SectionSubHeader
            dark
            text="Project previews"
            className="w-fit mx-auto"
          />
          <SectionHeader className="home_faq_header w-full mt-6">
            Some prime previews from our memory lane
          </SectionHeader>
          <Suspense fallback={<ProjectsPreviewServicesSkeleton />}>
            <ProjectsPreviewServicesWrapper />
          </Suspense>
        </div>
      </section>
      <Suspense fallback={<TestimonialSkeleton />}>
        <TestimonialWrapper />
      </Suspense>
    </main>
  );
};

export default ServiceDetailsPage;

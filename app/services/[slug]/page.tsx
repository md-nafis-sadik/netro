import SectionHeaderAnimated from "@/components/common/SectionHeaderAnimated";
import FAQ from "@/components/faq/FAQ";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ServiceDetailsSkeleton from "@/components/services/ServiceDetailsSkeleton";
import Testimonial from "@/components/testimonial/Testimonial";
import { getGeneratedMetadata } from "@/lib/metadata";
import { purifyUrl } from "@/services";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let slug = (await params).slug;
  const id = purifyUrl({ urlString: slug });
  const url = `/blogs/find-by-title/${id}`;
  return await getGeneratedMetadata({ apiUrl: url, metaTitle: id });
}

const ServiceDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  let slug = (await params).slug;
  slug = purifyUrl({ urlString: slug });

  return (
    <main className="relative">
      <div className="containerX py-10 md:py-[100px]">
        <SectionHeaderAnimated
          dark
          text="Software Development"
          className="text-center md:text-start"
        />
        <p className="font-inter text-sm md:text-2xl font-normal md:font-light !leading-[1.4] uppercase text-center md:text-start text-text-600 mt-6">
          Know our strengths
        </p>
      </div>

      <Suspense fallback={<ServiceDetailsSkeleton />}>
        <ServiceDetailsContent slug={slug} />
      </Suspense>

      <FAQ />
      <Testimonial />
    </main>
  );
};

export default ServiceDetailsPage;

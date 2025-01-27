import SectionHeader from "@/components/common/SectionHeader";
import ClientServiceList from "@/components/services/ClientServiceList";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import { images } from "@/services";
import Image from "next/image";

const ServiceDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  return (
    <main className="relative">
      <div className="containerX py-10 md:py-[100px]">
        <SectionHeader
          dark
          text="Software Development"
          className="text-center md:text-start"
        />
        <p className="font-inter text-sm md:text-2xl font-normal md:font-light !leading-[1.4] uppercase text-center md:text-start text-text-600 mt-6">
          Know our strengths
        </p>
      </div>
      <div className="h-[200px] md:h-[600px] w-full relative overflow-hidden">
        <Image
          src={images.blog1}
          alt="topic image 1"
          className="absolute_center min-h-full min-w-full"
          height={1280}
          width={1920}
        />
      </div>

      <ServiceDetailsContent />
      <ClientServiceList />
    </main>
  );
};

export default ServiceDetailsPage;

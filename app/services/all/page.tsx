import ClientServiceList from "@/components/services/ClientServiceList";
import ServiceStrengthAreas from "@/components/services/ServiceStrengthAreas";
import ServicesWrapper from "@/components/services/ServicesWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { Suspense } from "react";
import { Metadata } from "next";


const OG_IMAGE_URL = "https://netrosystems.com/images/og-image.jpg";

export const metadata: Metadata = {
  title: "Software Development, 3D Animation, UI/UX & SaaS | Netro Systems",
  description: "Explore Netro Systems’ services - Software Development, 3D Product Animation, UI/UX Design, and SaaS Development with SQA for startups and enterprises.",
  keywords: "software development, 3D product animation, UI/UX design, SaaS development, SQA services, software company Bangladesh, digital product solutions",
  
  openGraph: {
    title: "Software Development, 3D Animation, UI/UX & SaaS | Netro Systems",
    description: "Explore Netro Systems’ services - Software Development, 3D Product Animation, UI/UX Design, and SaaS Development with SQA for startups and enterprises.",
    url: "https://netrosystems.com/services/all",
    siteName: "Netro Systems",
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Netro Systems Services" }],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Software Development, 3D Animation, UI/UX & SaaS | Netro Systems",
    description: "Explore Netro Systems’ services - Software Development, 3D Product Animation, UI/UX Design, and SaaS Development with SQA for startups and enterprises.",
    images: [OG_IMAGE_URL],
    creator: "@netrosystems",
  },
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

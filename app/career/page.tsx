import CareerTeams from "@/components/career/CareerTeams";
import JobPostsSkeleton from "@/components/career/JobPostsSkeleton";
import JobPostsWrapper from "@/components/career/JobPostsWrapper";
import PageThumbnail from "@/components/shared/PageThumbnail";
import ViewAbout from "@/components/view/ViewAbout";
import { Metadata } from "next";
import { Suspense } from "react";

const OG_IMAGE_URL = "https://netrosystems.com/images/og-image.jpg";

export const metadata: Metadata = {
  title: "Join Netro Systems | Build Your Career in Tech",
  description: "Join Netro Systems’ growing team of developers and designers. Work on global software projects and build your career in an inspiring environment.",
  keywords: "careers, software jobs, developer jobs, UI/UX designer jobs, join software company",

  openGraph: {
    title: "Join Netro Systems | Build Your Career in Tech",
    description: "Join Netro Systems’ growing team of developers and designers. Work on global software projects and build your career in an inspiring environment.",
    url: "https://netrosystems.com/career",
    siteName: "Netro Systems",
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Join Netro Systems" }],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Join Netro Systems | Build Your Career in Tech",
    description: "Join Netro Systems’ growing team of developers and designers. Work on global software projects and build your career in an inspiring environment.",
    images: [OG_IMAGE_URL],
    creator: "@netrosystems",
  },
};


function Career() {
  return (
    <main className="mt-[60px]">
      <PageThumbnail
        title="Current openings"
        description="Available Opportunities"
      />
      <Suspense fallback={<JobPostsSkeleton />}>
        <JobPostsWrapper />
      </Suspense>
      <CareerTeams />
      <ViewAbout />
    </main>
  );
}

export default Career;

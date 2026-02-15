import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroHome from "@/components/hero/HeroHome";
import IntroHome from "@/components/intro/IntroHome";
import JournalHomeSkeleton from "@/components/journal/JournalHomeSkeleton";
import InlineLoader from "@/components/common/InlineLoader";
import HomePageWrapper from "@/components/home/HomePageWrapper";

// Shared loader factory
const createLoader = (h: string) => {
  const LoaderComponent = () => <InlineLoader h={h} />;
  LoaderComponent.displayName = `InlineLoader(${h})`;
  return LoaderComponent;
};

// Dynamic imports with shared loaders
const ProjectsHome = dynamic(() => import("@/components/projects/ProjectsHome"), { loading: createLoader("360px") });
const ServicesHome = dynamic(() => import("@/components/services/ServicesHome"), { loading: createLoader("260px") });
const Revoluation = dynamic(() => import("@/components/services/Revoluation"), { loading: createLoader("260px") });
const Testimonial = dynamic(() => import("@/components/testimonial/Testimonial"), { loading: createLoader("260px") });
const Products = dynamic(() => import("@/components/products/Products"), { loading: createLoader("260px") });
const MarqueeHome = dynamic(() => import("@/components/marquee/MarqueeHome"), { loading: createLoader("140px") });
const ProcessFollowed = dynamic(() => import("@/components/view/ProcessFollowed"), { loading: createLoader("260px") });
const Team = dynamic(() => import("@/components/team/Team"), { loading: createLoader("260px") });
const AwardsRecognition = dynamic(() => import("@/components/awards/AwardsRecognition"), { loading: createLoader("260px") });
const ContactUsFormHome = dynamic(() => import("@/components/contact-us/ContactUsFormHome"), { loading: createLoader("420px") });
const StatisticsHome = dynamic(() => import("@/components/statistics/StatisticsHome"), { loading: createLoader("260px") });
const JournalHomeWrapper = dynamic(() => import("@/components/journal/JournalHomeWrapper"), { loading: () => <JournalHomeSkeleton /> });

const HomePage = () => {
  return (
    <HomePageWrapper>
      <main className="relative">
        <HeroHome />
        <IntroHome />
        <ProjectsHome />
        <ServicesHome />
        <Revoluation />
        <Testimonial />
        <Products />
        <MarqueeHome />
        <ProcessFollowed />
        <Team />
        <AwardsRecognition />
        <Suspense fallback={<InlineLoader h="420px" />}>
          <ContactUsFormHome />
        </Suspense>
        <StatisticsHome />
        <JournalHomeWrapper />
      </main>
    </HomePageWrapper>
  );
};

export default HomePage;

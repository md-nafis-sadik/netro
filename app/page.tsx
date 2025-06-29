import { Suspense } from "react";
import FAQ from "@/components/faq/FAQ";
import Team from "@/components/team/Team";
import Products from "@/components/products/Products";
import HeroHome from "@/components/hero/HeroHome";
import ServicesHome from "@/components/services/ServicesHome";
import WorkCultureHome from "@/components/workCulture/WorkCultureHome";
import PricingHome from "@/components/pricing/PricingHome";
import StatisticsHome from "@/components/statistics/StatisticsHome";
import IntroHome from "@/components/intro/IntroHome";
import HeroMarquee from "@/components/hero/HeroMarquee";
import ProjectsHomeWrapper from "@/components/projects/ProjectsHomeWrapper";
import JournalHomeSkeleton from "@/components/journal/JournalHomeSkeleton";
import JournalHomeWrapper from "@/components/journal/JournalHomeWrapper";
import TestimonialWrapper from "@/components/testimonial/TestimonialWrapper";
import TestimonialSkeleton from "@/components/testimonial/TestimonialSkeleton";
import IntroWithMarqueeHome from "@/components/intro/IntroWithMarqueeHome";

const HomePage = () => {
  return (
    <main className="relative">
      <div className=" relative">
        <HeroHome />
        {/* <HeroMarquee /> */}
        {/* <IntroHome /> */}
        <IntroWithMarqueeHome />
      </div>
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading projects...
          </div>
        }
      >
        <ProjectsHomeWrapper />
      </Suspense>
      <ServicesHome />
      <Products />
      <WorkCultureHome />
      <PricingHome />
      <Suspense fallback={<TestimonialSkeleton />}>
        <TestimonialWrapper />
      </Suspense>
      <StatisticsHome />
      <Team />
      <FAQ />
      <Suspense fallback={<JournalHomeSkeleton />}>
        <JournalHomeWrapper />
      </Suspense>
    </main>
  );
};

export default HomePage;

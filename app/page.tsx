import { Suspense } from "react";
import FAQ from "@/components/faq/FAQ";
import Products from "@/components/products/Products";
import HeroHome from "@/components/hero/HeroHome";
import ServicesHome from "@/components/services/ServicesHome";
import WorkCultureHome from "@/components/workCulture/WorkCultureHome";
import PricingHome from "@/components/pricing/PricingHome";
import StatisticsHome from "@/components/statistics/StatisticsHome";
import ProjectsHomeWrapper from "@/components/projects/ProjectsHomeWrapper";
import JournalHomeSkeleton from "@/components/journal/JournalHomeSkeleton";
import JournalHomeWrapper from "@/components/journal/JournalHomeWrapper";
import TestimonialWrapper from "@/components/testimonial/TestimonialWrapper";
import TestimonialSkeleton from "@/components/testimonial/TestimonialSkeleton";
import IntroWithMarqueeHome from "@/components/intro/IntroWithMarqueeHome";
import TeamHomeWrapper from "@/components/team/TeamHomeWrapper";

const HomePage = () => {
  return (
    <main className="relative">
      <div className="relative">
        <HeroHome />
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
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading projects...
          </div>
        }
      >
        <TeamHomeWrapper />
      </Suspense>
      <FAQ />
      <Suspense fallback={<JournalHomeSkeleton />}>
        <JournalHomeWrapper />
      </Suspense>
    </main>
  );
};

export default HomePage;

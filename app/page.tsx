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
        <section
          data-bg-theme="dark" >
          <HeroHome />
        </section>
        <section
          data-bg-theme="light" >
          <IntroWithMarqueeHome />
        </section>
      </div>
      <section
        data-bg-theme="dark" >
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading projects...
            </div>
          }
        >
          <ProjectsHomeWrapper />
        </Suspense>
      </section>
      <section
        data-bg-theme="light" >
        <ServicesHome />
      </section>
      <section
        data-bg-theme="dark" >
        <Products />
      </section>
      <section
        data-bg-theme="light" >
        <WorkCultureHome />
      </section>
      <section
        data-bg-theme="dark" >
        <PricingHome />
      </section>
      <section
        data-bg-theme="light" >
        <Suspense fallback={<TestimonialSkeleton />}>
          <TestimonialWrapper />
        </Suspense>
      </section>
      <section
        data-bg-theme="dark" >
        <StatisticsHome />
      </section>
      <section
        data-bg-theme="light" >
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading projects...
            </div>
          }
        >
          <TeamHomeWrapper />
        </Suspense>
      </section>
      <section
        data-bg-theme="dark" >
        <FAQ />
      </section>
      <section
        data-bg-theme="light" >
        <Suspense fallback={<JournalHomeSkeleton />}>
          <JournalHomeWrapper />
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;

import FAQ from "@/components/faq/FAQ";
import HeroHome from "@/components/hero/HeroHome";
import IntroHome from "@/components/intro/IntroHome";
import JournalHomeSkeleton from "@/components/journal/JournalHomeSkeleton";
import JournalHomeWrapper from "@/components/journal/JournalHomeWrapper";
import PricingHome from "@/components/pricing/PricingHome";
import Products from "@/components/products/Products";
import ProjectsHome from "@/components/projects/ProjectsHome";
import ServicesHome from "@/components/services/ServicesHome";
import StatisticsHome from "@/components/statistics/StatisticsHome";
import TeamHomeWrapper from "@/components/team/TeamHomeWrapper";
import TestimonialSkeleton from "@/components/testimonial/TestimonialSkeleton";
import TestimonialWrapper from "@/components/testimonial/TestimonialWrapper";
import WorkCultureHome from "@/components/workCulture/WorkCultureHome";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <main className="relative">
      <div className="relative">
        <section data-bg-theme="dark">
          <HeroHome />
        </section>

        {/* <section className="overflow-hidden">
          <MarqueeHome dark={false} className="" />
        </section> */}

        <IntroHome />
      </div>
      <ProjectsHome />
      {/* <section data-bg-theme="dark">
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading projects...
            </div>
          }
        >
          <ProjectsHomeWrapper />
        </Suspense>
      </section> */}
      <section data-bg-theme="light">
        <ServicesHome />
      </section>
      <section data-bg-theme="dark">
        <Products />
      </section>
      <section data-bg-theme="light">
        <WorkCultureHome />
      </section>
      <section data-bg-theme="dark">
        <PricingHome />
      </section>
      <section data-bg-theme="light">
        <Suspense fallback={<TestimonialSkeleton />}>
          <TestimonialWrapper />
        </Suspense>
      </section>
      <section data-bg-theme="dark">
        <StatisticsHome />
      </section>
      <section data-bg-theme="light">
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
      <section data-bg-theme="dark">
        <FAQ />
      </section>
      <section data-bg-theme="light">
        <Suspense fallback={<JournalHomeSkeleton />}>
          <JournalHomeWrapper />
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;

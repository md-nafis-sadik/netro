import { Suspense } from "react";
import FAQ from "@/components/faq/FAQ";
import Testimonial from "@/components/testimonial/Testimonial";
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

const HomePage = () => {
  return (
    <main className="relative">
      <div className=" overflow-hidden">
        <HeroHome />
        <HeroMarquee />
      </div>
      <IntroHome />
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
      <Testimonial />
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

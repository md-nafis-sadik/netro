import AwardsRecognition from "@/components/awards/AwardsRecognition";
import ContactUsFormV2 from "@/components/contact-us/ContactUsFormV2";
import FAQ from "@/components/faq/FAQ";
import HeroHome from "@/components/hero/HeroHome";
import IntroHome from "@/components/intro/IntroHome";
import JournalHomeSkeleton from "@/components/journal/JournalHomeSkeleton";
import JournalHomeWrapper from "@/components/journal/JournalHomeWrapper";
import PricingHome from "@/components/pricing/PricingHome";
import Products from "@/components/products/Products";
import ProjectsHome from "@/components/projects/ProjectsHome";
import Revoluation from "@/components/services/Revoluation";
import ServicesHome from "@/components/services/ServicesHome";
import StatisticsHome from "@/components/statistics/StatisticsHome";
import TeamV2 from "@/components/team/TeamV2";
import Testimonial from "@/components/testimonial/Testimonial";
import WorkCultureHome from "@/components/workCulture/WorkCultureHome";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <main className="relative">
      <HeroHome />
      <IntroHome />
      <ProjectsHome />
      <ServicesHome />
      <Revoluation />
      <Testimonial />
      <section data-bg-theme="dark">
        <Products />
      </section>
      <section data-bg-theme="light">
        <WorkCultureHome />
      </section>
      <section data-bg-theme="dark">
        <PricingHome />
      </section>
      {/* <section data-bg-theme="light">
        <Suspense fallback={<TestimonialSkeleton />}>
          <TestimonialWrapper />
        </Suspense>
      </section> */}
      <section data-bg-theme="dark">
        <FAQ />
      </section>
      <section data-bg-theme="dark">
        <TeamV2 />
      </section>
      <section data-bg-theme="light">
        <AwardsRecognition />
      </section>
      <section data-bg-theme="dark">
        <ContactUsFormV2 />
      </section>
      <section data-bg-theme="dark">
        <StatisticsHome />
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

import AwardsRecognition from "@/components/awards/AwardsRecognition";
import ContactUsFormHome from "@/components/contact-us/ContactUsFormHome";
import HeroHome from "@/components/hero/HeroHome";
import IntroHome from "@/components/intro/IntroHome";
import JournalHomeSkeleton from "@/components/journal/JournalHomeSkeleton";
import JournalHomeWrapper from "@/components/journal/JournalHomeWrapper";
import MarqueeHome from "@/components/marquee/MarqueeHome";
import Products from "@/components/products/Products";
import ProjectsHome from "@/components/projects/ProjectsHome";
import Revoluation from "@/components/services/Revoluation";
import ServicesHome from "@/components/services/ServicesHome";
import StatisticsHome from "@/components/statistics/StatisticsHome";
import Team from "@/components/team/Team";
import Testimonial from "@/components/testimonial/Testimonial";
import ProcessFollowed from "@/components/view/ProcessFollowed";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense } from "react";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  return (
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
      <section data-bg-theme="dark">
        <Team />
      </section>
      <section data-bg-theme="light">
        <AwardsRecognition />
      </section>
      <section data-bg-theme="dark">
        <ContactUsFormHome />
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

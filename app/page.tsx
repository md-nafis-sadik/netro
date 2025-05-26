import FAQ from "@/components/faq/FAQ";
import Testimonial from "@/components/testimonial/Testimonial";
import Team from "@/components/team/Team";
import OurJournal from "@/components/journal/JournalHome";
import Products from "@/components/products/Products";
import HeroHome from "@/components/hero/HeroHome";
import ProjectsHome from "@/components/projects/ProjectsHome";
import ServicesHome from "@/components/services/ServicesHome";
import WorkCultureHome from "@/components/workCulture/WorkCultureHome";
import PricingHome from "@/components/pricing/PricingHome";
import StatisticsHome from "@/components/statistics/StatisticsHome";
import IntroHome from "@/components/intro/IntroHome";
import MarqueeHome from "@/components/marquee/MarqueeHome";
import HeroMarquee from "@/components/hero/HeroMarquee";

const HomePage = () => {
  return (
    <main className="relative">
      <div className=" overflow-hidden">
        <HeroHome />
        <HeroMarquee />
      </div>
      <IntroHome />
      <ProjectsHome />
      <ServicesHome />
      <Products />
      <WorkCultureHome />
      <PricingHome />
      <Testimonial />
      <StatisticsHome />
      <Team />
      <FAQ />
      <OurJournal />
    </main>
  );
};

export default HomePage;

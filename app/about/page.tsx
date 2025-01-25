import AboutHero from "@/components/about/hero/AboutHero";
import AboutStats from "@/components/about/stats/AboutStats";
import AboutView from "@/components/about/view/AboutView";
import Testimonial from "@/components/shared/testimonial/Testimonial";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <AboutView />
      <Testimonial />
    </main>
  );
};

export default AboutPage;

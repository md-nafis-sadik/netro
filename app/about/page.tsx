import AboutHero from "@/components/about/hero/AboutHero";
import AboutStats from "@/components/about/stats/AboutStats";
import AboutView from "@/components/about/view/AboutView";
import WhatMakesDifferent from "@/components/about/whatMakesDifferent/WhatMakesDifferent";
import Testimonial from "@/components/shared/testimonial/Testimonial";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <AboutView />
      <WhatMakesDifferent />
      <Testimonial />
    </main>
  );
};

export default AboutPage;

import HeroAbout from "@/components/hero/HeroAbout";
import Testimonial from "@/components/testimonial/Testimonial";
import StatisticsAbout from "@/components/statistics/StatisticsAbout";
import WhatMakesDifferent from "@/components/whatMakesDifferent/WhatMakesDifferent";
import ViewAbout from "@/components/view/ViewAbout";

const AboutPage = () => {
  return (
    <main>
      <HeroAbout />
      <StatisticsAbout />
      <ViewAbout />
      <WhatMakesDifferent />
      <Testimonial />
    </main>
  );
};

export default AboutPage;

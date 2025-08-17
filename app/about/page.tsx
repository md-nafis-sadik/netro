import HeroAbout from "@/components/hero/HeroAbout";
import StatisticsAbout from "@/components/statistics/StatisticsAbout";
import WhatMakesDifferent from "@/components/whatMakesDifferent/WhatMakesDifferent";
import ViewAbout from "@/components/view/ViewAbout";
import WhatWeAreGreatAt from "@/components/specialities/WhatWeAreGreatAt";
import TestimonialWrapper from "@/components/testimonial/TestimonialWrapper";
import { Suspense } from "react";
import TestimonialSkeleton from "@/components/testimonial/TestimonialSkeleton";

const AboutPage = () => {
  return (
    <main className="mt-20">
      <HeroAbout />
      <StatisticsAbout />
      <ViewAbout />
      <WhatWeAreGreatAt />
      <WhatMakesDifferent />
      <Suspense fallback={<TestimonialSkeleton />}>
        <TestimonialWrapper />
      </Suspense>
    </main>
  );
};

export default AboutPage;

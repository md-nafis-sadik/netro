import Hero from "@/components/home/hero/Hero";
import Services from "@/components/home/services/Services";
import OurJournal from "@/components/home/ourJournal/OurJournal";
import FAQ from "@/components/home/faq/FAQ";
import Pricing from "@/components/home/pricing/Pricing";
import Testimonial from "@/components/home/testimonial/Testimonial";
import Team from "@/components/home/team/Team";

function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Pricing />
      <Testimonial />
      <Team />
      <FAQ />
      <OurJournal />
    </main>
  );
}

export default Home;

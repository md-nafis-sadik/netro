import Hero from "@/components/home/hero/Hero";
import Services from "@/components/home/services/Services";
import OurJournal from "@/components/home/ourJournal/OurJournal";
import FAQ from "@/components/home/faq/FAQ";
import Pricing from "@/components/home/pricing/Pricing";
import Testimonial from "@/components/home/testimonial/Testimonial";
import Team from "@/components/home/team/Team";
import SuccessShowcase from "@/components/home/successShowcase/SuccessShowcase";
import WorkCulture from "@/components/home/workCulture/WorkCulture";
import Products from "@/components/home/products/Products";

function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Products />
      <WorkCulture />
      <Pricing />
      <Testimonial />
      <SuccessShowcase />
      <Team />
      <FAQ />
      <OurJournal />
    </main>
  );
}

export default Home;

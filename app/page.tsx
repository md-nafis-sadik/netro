import Hero from "@/components/home/hero/Hero";
import Services from "@/components/home/services/Services";
import OurJournal from "@/components/home/ourJournal/OurJournal";
import FAQ from "@/components/home/faq/FAQ";
import Pricing from "@/components/home/pricing/Pricing";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
      <OurJournal />
    </main>
  );
}

export default Home;

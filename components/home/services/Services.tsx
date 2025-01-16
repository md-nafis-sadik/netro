import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="flex_center flex-col mt-20 mb-[120px]">
      <SectionSubHeader text="Services" />
      <SectionHeader dark text="Solutions for You" />

      <div className="w-full">
        <ServiceCard />
      </div>
    </section>
  );
};

export default Services;

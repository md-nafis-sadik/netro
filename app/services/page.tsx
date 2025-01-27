import SectionHeader from "@/components/common/SectionHeader";
import ProductAnimationService from "@/components/services/ProductAnimationService";
import SaasDevelopmentService from "@/components/services/SaasDevelopmentService";
import SoftwareService from "@/components/services/SoftwareService";
import UXUIService from "@/components/services/UXUIService";

const ServicePage = () => {
  return (
    <main className="containerX py-10 md:py-[100px]">
      <SectionHeader
        dark
        text="What We Do"
        className="text-center md:text-start"
      />
      <p className="font-inter text-sm md:text-2xl font-normal md:font-light !leading-[1.4] uppercase text-center md:text-start text-text-600 mt-6 mb-10 md:mb-20">
        Know our strengths
      </p>
      <SoftwareService />
      <UXUIService />
      <ProductAnimationService />
      <SaasDevelopmentService />
    </main>
  );
};

export default ServicePage;

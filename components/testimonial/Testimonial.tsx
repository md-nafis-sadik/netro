import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";
import TestimonialDesktop from "./TestimonialDesktop";
import TestimonialMobile from "./TestimonialMobile";

function Testimonial() {
  return (
    <section
      data-bg-theme="light"
      className="bg-orange-500 pb-10 pt-10 md:pt-16 lg:pt-20 overflow-hidden"
    >
      <div className="container flex_center flex-col">
        <SectionSubHeader text="client reviews" />
        <SectionHeader className="mt-5 text-black">
          Client recommends
        </SectionHeader>
        <TestimonialDesktop />
      </div>
      <TestimonialMobile />
    </section>
  );
}

export default Testimonial;

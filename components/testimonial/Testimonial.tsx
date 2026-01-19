import { images } from "@/services";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";

function Testimonial() {
  return (
    <section
      data-bg-theme="light"
      className="bg-orange-500 py-10 md:py-16 lg:py-20 font-inter"
    >
      <div className="container flex_center flex-col">
        <SectionSubHeader text="Services" className="services-sub" />

        <SectionHeader className="services-title mt-5 text-black">
          Solutions for You
        </SectionHeader>

        <div className="w-full grid grid-cols-3 grid-rows-3 gap-4 mt-10 md:mt-16 lg:mt-20">
          <div className="bg-white p-6">
            <q className="text-lg leading-[150%] text-black-800">
              Working with Layzo felt like unlocking a new level of creativity.
              They understood our vision instantly and brought it to life with
              precision and bold design choices. The result? A brand presence
              we&apos;re truly proud of.
            </q>
            <div className="flex items-center gap-3 mt-5">
              <Image
                src={images.avatar}
                alt="Avatar"
                className="size-11 rounded-full object-cover"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-base leading-[150%] font-semibold text-black-800">
                  Kevin Arnold
                </h3>
                <p className="text-sm leading-[150%] text-black-700">
                  Co-Founder & CEO
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-start-1 row-start-2 border">2</div>
          <div className="row-span-2 col-start-2 row-start-1 border">3</div>
          <div className="col-start-2 row-start-3 border">4</div>
          <div className="col-start-3 row-start-1 border">5</div>
          <div className="row-span-2 col-start-3 row-start-2 border">6</div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

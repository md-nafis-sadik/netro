import SectionHeader from "@/components/common/SectionHeader";
import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import Image from "next/image";

const HeroAbout = () => {
  return (
    <section className="">
      <div className="containerX my-20">
        <SectionHeader
          dark
          text="The Story"
          className="text-center md:text-start"
        />
        <p
          className={cn(
            "text-sm md:text-2xl mt-6 uppercase text-text-600 font-inter"
          )}
        >
          our success
        </p>
      </div>

      <div className="w-full h-[200px] md:h-[400px] lg:h-[600px] relative overflow-hidden flex_center">
        <Image
          src={images.officeImage2}
          alt="office image 2"
          className="absolute_center min-h-full min-w-full"
          height={1280}
          width={1920}
        />

        <div className="relative h-[120px] w-[120px] flex_center">
          <Image
            src={images.bubble}
            alt="Bubble image"
            className="h-full w-full object-cover"
            height={400}
            width={400}
          />

          <p
            className={cn(
              scoutCond.className,
              "text-[8px] md:text-[32px] font-bold !leading-[1.2] tracking-[0.26px] md:tracking-[0.5px] text-white absolute_center"
            )}
          >
            Play <br /> Reel
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;

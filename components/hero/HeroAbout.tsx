import SectionHeaderAnimated from "@/components/common/SectionHeaderAnimated";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import Image from "next/image";
import PageThumbnail from "../shared/PageThumbnail";

const HeroAbout = () => {
  return (
    <section className="">
      <PageThumbnail
        title="The Story"
        description="our success"
        titleClassName="about_us_othe_story w-fit"
      />

      <div className="w-full h-[200px] md:h-[400px] lg:h-[600px] relative overflow-hidden flex_center">
        <Image
          src={images.officeImage2}
          alt="office image 2"
          className="absolute_center min-h-full min-w-full"
          height={1280}
          width={1920}
        />

        {/* <div className="relative h-[120px] w-[120px] flex_center">
          <Image
            src={images.bubble}
            alt="Bubble image"
            className="h-full w-full object-cover"
            height={400}
            width={400}
          />

          <p
            className={cn(
              "text-[8px] md:text-[32px] font-bold !leading-[1.2] tracking-[0.26px] md:tracking-[0.5px] text-white absolute_center font-scoutcond"
            )}
          >
            Play <br /> Reel
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default HeroAbout;

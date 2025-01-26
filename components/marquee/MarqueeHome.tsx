import { cn } from "@/lib/utils";
import { marqueeData } from "@/services/data";
import Image from "next/image";
import { FC } from "react";
import Marquee from "react-fast-marquee";

interface IFMarqueeHomeProps {
  dark?: boolean;
  className?: string;
}

const MarqueeHome: FC<IFMarqueeHomeProps> = ({ dark, className }) => {
  return (
    <Marquee
      pauseOnHover
      gradient={false}
      direction={dark ? "right" : "left"}
      speed={30}
      className={cn(
        dark
          ? "!rotate-[-5.2deg] bg-[#1D1D1D] z-[3] border-[#525252]"
          : "!rotate-[4.5deg] bg-[#DFE5FF] z-[2] border-[#C2CED7]",
        "flex items-center justify-between py-4 md:py-8 !w-[120vw] border border-dashed",
        className
      )}
    >
      {marqueeData.map(({ image, darkImage }, index) => (
        <Image
          key={index}
          src={dark ? image.src : darkImage.src}
          alt={`Marquee image ${index + 1}`}
          className="w-auto h-12 mx-4 md:mx-10 lg:mx-20 xl:mx-24"
          height={image.height}
          width={image.width}
        />
      ))}
    </Marquee>
  );
};

export default MarqueeHome;

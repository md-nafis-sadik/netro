import { cn } from "@/lib/utils";
import { marqueeData } from "@/services/data";
import { FC } from "react";
import Marquee from "react-fast-marquee";

interface IFMarqueeHomeProps {
  dark?: boolean;
}

const MarqueeHome: FC<IFMarqueeHomeProps> = ({ dark }) => {
  return (
    <Marquee
      pauseOnHover
      gradient={false}
      direction={dark ? "right" : "left"}
      speed={30}
      className={cn(
        dark
          ? "!rotate-[5deg] bg-[#1D1D1D] z-[3]"
          : "!rotate-[-5deg] bg-[#DFE5FF] z-[2]",
        " flex items-center justify-between py-4 md:py-8 w-[120vw] relative -mt-10"
      )}
    >
      {marqueeData.map(({ image, darkImage }, index) => (
        <img
          key={index}
          src={dark ? image.src : darkImage.src}
          alt={`Marquee image ${index + 1}`}
          className="w-auto h-[48px] mx-4"
        />
      ))}
    </Marquee>
  );
};

export default MarqueeHome;

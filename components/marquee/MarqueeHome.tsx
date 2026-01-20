import { cn } from "@/lib/utils";
import { clientCompanyData } from "@/services/data/shared.data";
import Image from "next/image";
import { FC } from "react";
import Marquee from "react-fast-marquee";
import SectionHeader from "../common/SectionHeader";

interface IFMarqueeHomeProps {
  dark?: boolean;
  className?: string;
}

const MarqueeHome: FC<IFMarqueeHomeProps> = ({ dark, className }) => {
  return (
    <section data-bg-theme="light" className="overflow-hidden py-30">
      <SectionHeader className="mt-0 mb-16 text-black">
        Brands we have served
      </SectionHeader>
      <Marquee
        pauseOnHover
        gradient={false}
        direction={dark ? "right" : "left"}
        speed={30}
        className={cn("flex items-center justify-between", className)}
      >
        {clientCompanyData.map((image, index) => (
          <div
            key={index}
            className="mx-0.5 size-40 flex_center bg-natural-100 p-9"
          >
            <Image
              src={image.src}
              alt={`Marquee image ${index + 1}`}
              className="w-auto h-auto object-contain"
              height={image.height}
              width={image.width}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeHome;

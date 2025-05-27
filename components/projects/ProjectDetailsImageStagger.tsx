"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState } from "react";

interface IFProps {
  data: any;
}

const ProjectDetailsImageStagger = ({ data }: IFProps) => {
  const options = { align: "start", loop: false } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  return (
    <div className="select-none">
      {/* LARGE IMAGE CONTAINER */}
      <div className="relative w-full !aspect-video bg-neutral-100 overflow-hidden">
        <Image
          src={activeUrl || data?.projectImages?.[0]}
          alt={data?.title}
          className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
          width={1920}
          height={1280}
        />
      </div>

      <div className="w-full overflow-x-hidden overflow-y-visible mt-2 md:mt-6">
        <div className="w-full" ref={emblaRef}>
          <div className="w-full min-h-fit flex flex-row gap-2 md:gap-6">
            {data?.projectImages?.map((url: string, index: number) => (
              <div
                className="min-w-[60px] md:min-w-[100px] lg:min-w-[166px] relative !aspect-video bg-neutral-100 cursor-pointer active:cursor-grab transition_common hover:opacity-75"
                onClick={() => setActiveUrl(url)}
                key={index}
              >
                <Image
                  src={url}
                  alt={`${data?.title}_${index} image`}
                  className="min-h-full h-full min-w-full w-auto object-cover absolute_center"
                  width={1920}
                  height={1280}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsImageStagger;

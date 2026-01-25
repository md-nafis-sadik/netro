"use client";

import { DotButton } from "@/hooks/useCarouselDotButton";
import { useTestimonialMobile } from "@/hooks/useTestimonial";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import { PlayIcon } from "@/services/assets/svgs";
import Image from "next/image";

function TestimonialMobile() {
  const {
    emblaRef,
    videoRefs,
    selectedIndex,
    scrollSnaps,
    handleVideoClick,
    currentPlay,
    onDotButtonClick,
  } = useTestimonialMobile();

  return (
    <div className="w-full lg:hidden gap-8 mt-10 md:mt-16 lg:mt-20">
      <div className="w-full overflow-x-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="flex w-full">
            {[1, 2, 3].map((item) => (
              <div className="w-80 shrink-0 px-2" key={item}>
                <div className="bg-white px-4 py-5 flex flex-col justify-between mb-3">
                  <q className="text-sm leading-[150%] text-black-800">
                    Working with Layzo felt like unlocking a new level of
                    creativity. They understood our vision instantly and brought
                    it to life with precision and bold design choices. The
                    result? A brand presence we&apos;re truly proud of.
                  </q>
                  <div className="flex items-center gap-2 mt-3">
                    <Image
                      src={images.avatar}
                      alt="Avatar"
                      className="size-9 rounded-full object-cover"
                      width={100}
                      height={100}
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-black-800">
                        Kevin Arnold
                      </h3>
                      <p className="text-xs text-black-700">Co-Founder & CEO</p>
                    </div>
                  </div>
                </div>
                <div className="relative cursor-pointer">
                  <video
                    ref={(el) => {
                      videoRefs.current[item] = el;
                    }}
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                    onClick={() => handleVideoClick(item)}
                  >
                    <source
                      src="https://www.pexels.com/download/video/10340768/"
                      type="video/mp4"
                    />
                  </video>

                  {currentPlay !== item && (
                    <div
                      className="video_bg absolute inset-0 flex_center"
                      onClick={() => handleVideoClick(item)}
                    >
                      <button type="button">
                        <PlayIcon className="size-16" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex_center gap-1">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "h-2.5 duration-300 bg-white rounded-full transition-all mt-3",
              index === selectedIndex ? "w-6" : "w-2.5",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialMobile;

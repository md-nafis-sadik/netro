"use client";

import { images } from "@/services";
import { PlayIcon } from "@/services/assets/svgs";
import Image from "next/image";
import { useRef, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import SectionSubHeader from "../common/SectionSubHeader";

function Testimonial() {
  const [currentPlay, setCurrentPlay] = useState<number | null>(null);
  const [hasClickedOnce, setHasClickedOnce] = useState(false);

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const stopAllVideos = () => {
    Object.values(videoRefs.current).forEach((video) => {
      video?.pause();
    });
  };

  const playVideo = async (id: number) => {
    if (!hasClickedOnce) return;

    stopAllVideos();

    const video = videoRefs.current[id];
    if (video) {
      await video.play();
      setCurrentPlay(id);
    }
  };

  const pauseVideo = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
    }
    setCurrentPlay(null);
  };

  const handleFirstClick = async (id: number) => {
    setHasClickedOnce(true);

    stopAllVideos();

    const video = videoRefs.current[id];
    if (video) {
      await video.play();
      setCurrentPlay(id);
    }
  };

  return (
    <section
      data-bg-theme="light"
      className="bg-orange-500 pb-10 pt-10 md:pt-16 lg:pt-20"
    >
      <div className="container flex_center flex-col">
        <SectionSubHeader text="Services" />
        <SectionHeader className="mt-5 text-black">
          Solutions for You
        </SectionHeader>

        <div className="w-full grid grid-cols-3 grid-rows-3 gap-8 mt-10 md:mt-16 lg:mt-20">
          {/* TEXT CARD */}
          <div className="bg-white p-6 flex flex-col justify-between">
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
                <h3 className="text-base font-semibold text-black-800">
                  Kevin Arnold
                </h3>
                <p className="text-sm text-black-700">Co-Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* VIDEO 1 */}
          <div
            className="row-span-2 col-start-1 row-start-2 relative"
            onMouseEnter={() => playVideo(1)}
            onMouseLeave={() => pauseVideo(1)}
          >
            <video
              ref={(el) => {
                videoRefs.current[1] = el;
              }}
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://www.pexels.com/download/video/10340768/"
                type="video/mp4"
              />
            </video>

            {currentPlay !== 1 && (
              <div className="video_bg absolute inset-0 flex_center">
                <button type="button" onClick={() => handleFirstClick(1)}>
                  <PlayIcon className="size-16" />
                </button>
              </div>
            )}
          </div>

          {/* VIDEO 2 */}
          <div
            className="row-span-2 col-start-2 row-start-1 relative"
            onMouseEnter={() => playVideo(2)}
            onMouseLeave={() => pauseVideo(2)}
          >
            <video
              ref={(el) => {
                videoRefs.current[2] = el;
              }}
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://www.pexels.com/download/video/10340768/"
                type="video/mp4"
              />
            </video>

            {currentPlay !== 2 && (
              <div className="video_bg absolute inset-0 flex_center">
                <button type="button" onClick={() => handleFirstClick(2)}>
                  <PlayIcon className="size-16" />
                </button>
              </div>
            )}
          </div>

          {/* TEXT CARD */}
          <div className="col-start-2 row-start-3 bg-white p-6 flex flex-col justify-between">
            <q className="text-lg leading-[150%] text-black-800">
              Layzo delivered far beyond our expectations. From strategy to
              execution, their team worked like an extension of ours.
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
                <h3 className="text-base font-semibold text-black-800">
                  Kevin Arnold
                </h3>
                <p className="text-sm text-black-700">Co-Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* TEXT CARD */}
          <div className="col-start-3 row-start-1 bg-white p-6 flex flex-col justify-between">
            <q className="text-lg leading-[150%] text-black-800">
              We’ve worked with many agencies before, but none matched Layzo’s
              attention to detail and genuine care for our brand.
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
                <h3 className="text-base font-semibold text-black-800">
                  Kevin Arnold
                </h3>
                <p className="text-sm text-black-700">Co-Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* VIDEO 3 */}
          <div
            className="row-span-2 col-start-3 row-start-2 relative"
            onMouseEnter={() => playVideo(3)}
            onMouseLeave={() => pauseVideo(3)}
          >
            <video
              ref={(el) => {
                videoRefs.current[3] = el;
              }}
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://www.pexels.com/download/video/10340768/"
                type="video/mp4"
              />
            </video>

            {currentPlay !== 3 && (
              <div className="video_bg absolute inset-0 flex_center">
                <button type="button" onClick={() => handleFirstClick(3)}>
                  <PlayIcon className="size-16" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

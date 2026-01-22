"use client";

import { images } from "@/services";
import { PlayIcon } from "@/services/assets/svgs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function TestimonialDesktop() {
  const [currentPlay, setCurrentPlay] = useState<number | null>(null);
  const [hasClickedOnce, setHasClickedOnce] = useState(false);

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  /* ---------- ANIMATIONS ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text cards animation - staggered fade and slide up
      gsap.fromTo(
        ".testimonial-text-card",
        {
          autoAlpha: 0,
          y: 60,
          scale: 0.95,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // Video cards animation - scale and fade in
      gsap.fromTo(
        ".testimonial-video-card",
        {
          autoAlpha: 0,
          scale: 0.85,
          rotateY: -15,
        },
        {
          autoAlpha: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );

      // Play button pulse animation
      gsap.to(".play-button", {
        scale: 1.1,
        duration: 0.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full hidden lg:grid grid-cols-3 grid-rows-3 gap-8 mt-10 md:mt-16 lg:mt-20"
      style={{ perspective: "1000px" }}
    >
      {/* TEXT CARD 1 */}
      <div className="testimonial-text-card bg-white p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
        <q className="text-base xl:text-lg leading-[150%] text-black-800">
          Working with Layzo felt like unlocking a new level of creativity. They
          understood our vision instantly and brought it to life with precision
          and bold design choices. The result? A brand presence we&apos;re truly
          proud of.
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
        className="testimonial-video-card row-span-2 col-start-1 row-start-2 relative overflow-hidden rounded-lg hover:scale-[1.02] transition-transform duration-500"
        onMouseEnter={() => playVideo(1)}
        onMouseLeave={() => pauseVideo(1)}
      >
        <video
          ref={(el) => {
            videoRefs.current[1] = el;
          }}
          loop
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
            <button
              type="button"
              onClick={() => handleFirstClick(1)}
              className="play-button"
            >
              <PlayIcon className="size-16" />
            </button>
          </div>
        )}
      </div>

      {/* VIDEO 2 */}
      <div
        className="testimonial-video-card row-span-2 col-start-2 row-start-1 relative overflow-hidden rounded-lg hover:scale-[1.02] transition-transform duration-500"
        onMouseEnter={() => playVideo(2)}
        onMouseLeave={() => pauseVideo(2)}
      >
        <video
          ref={(el) => {
            videoRefs.current[2] = el;
          }}
          loop
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
            <button
              type="button"
              onClick={() => handleFirstClick(2)}
              className="play-button"
            >
              <PlayIcon className="size-16" />
            </button>
          </div>
        )}
      </div>

      {/* TEXT CARD 2 */}
      <div className="testimonial-text-card col-start-2 row-start-3 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
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

      {/* TEXT CARD 3 */}
      <div className="testimonial-text-card col-start-3 row-start-1 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
        <q className="text-lg leading-[150%] text-black-800">
          We&apos;ve worked with many agencies before, but none matched
          Layzo&apos;s attention to detail and genuine care for our brand.
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
        className="testimonial-video-card row-span-2 col-start-3 row-start-2 relative overflow-hidden rounded-lg hover:scale-[1.02] transition-transform duration-500"
        onMouseEnter={() => playVideo(3)}
        onMouseLeave={() => pauseVideo(3)}
      >
        <video
          ref={(el) => {
            videoRefs.current[3] = el;
          }}
          loop
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
            <button
              type="button"
              onClick={() => handleFirstClick(3)}
              className="play-button"
            >
              <PlayIcon className="size-16" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestimonialDesktop;

import { useGSAP } from "@gsap/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useDotButton } from "./useCarouselDotButton";

export const useTestimonialAnimation = () => {
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
  useGSAP(() => {
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
          immediateRender: false,
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
          immediateRender: false,
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

  return {
    videoRefs,
    containerRef,
    currentPlay,
    playVideo,
    pauseVideo,
    handleFirstClick,
  };
};

export const useTestimonialMobile = () => {
  // embla with autoplay plugin
  const autoplayPlugin = useRef(Autoplay({ delay: 3000 }));
  const options = { align: "start", loop: true } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    autoplayPlugin.current,
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // Video play state
  const [currentPlay, setCurrentPlay] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  // Stop all videos
  const stopAllVideos = () => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    setCurrentPlay(null);
  };

  // Handle video click to play/pause
  const handleVideoClick = async (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    // If this video is already playing, pause it
    if (currentPlay === id) {
      video.pause();
      setCurrentPlay(null);
      // Resume autoplay when video is paused
      autoplayPlugin.current.play();
    } else {
      // Stop any other playing video
      stopAllVideos();

      // Play the clicked video
      try {
        await video.play();
        setCurrentPlay(id);
        // Stop autoplay when video starts playing
        autoplayPlugin.current.stop();
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };

  // Stop video when slide changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      stopAllVideos();
      // Resume autoplay when slide changes
      autoplayPlugin.current.play();
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return {
    emblaRef,
    videoRefs,
    selectedIndex,
    scrollSnaps,
    handleVideoClick,
      currentPlay,
    onDotButtonClick,
  };
};

"use client";
import { useState, useRef, useEffect } from "react";
import { GradientButton } from "../ui/gradient-button";
import { cn } from "@/lib/utils";
import { routes } from "@/services/data/shared.data";
import { GraphicAnimatedIcon, GraphicIcon } from "@/services/assets/svgs";

interface IFProps {
  pathname: string;
}

const IntroAudioPlayer = ({ pathname }: IFProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let loadingTimer: NodeJS.Timeout;

    const checkAutoplaySupport = async () => {
      try {
        // Test if autoplay is supported
        const testAudio = new Audio();
        testAudio.muted = true;
        await testAudio.play();
        testAudio.pause();
        setCanAutoplay(true);
        console.log("Autoplay is supported");

        // If autoplay is supported, try to start our audio
        attemptAutoplay();
      } catch (error) {
        console.log("Autoplay not supported, waiting for user interaction");
        setCanAutoplay(false);
        setIsLoading(false);
      }
    };

    const attemptAutoplay = async () => {
      try {
        // Already muted by default
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
        console.log("Autoplay successful");
      } catch (error) {
        console.log("Autoplay failed:", error);
        setIsLoading(false);
      }
    };

    const handleLoadedData = () => {
      console.log("Audio loaded");
      setIsLoading(false);

      // Clear any existing timer
      if (loadingTimer) clearTimeout(loadingTimer);

      // Check autoplay support once audio is loaded
      checkAutoplaySupport();
    };

    const handleError = () => {
      console.error("Audio loading error");
      setHasError(true);
      setIsLoading(false);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    // Fallback timer to stop loading after 3 seconds
    loadingTimer = setTimeout(() => {
      console.log("Loading timeout reached");
      setIsLoading(false);
      if (!userInteracted && canAutoplay) {
        attemptAutoplay();
      }
    }, 3000);

    // Add event listeners
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("canplaythrough", handleLoadedData);
    audio.addEventListener("error", handleError);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      if (loadingTimer) clearTimeout(loadingTimer);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("canplaythrough", handleLoadedData);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [canAutoplay, userInteracted]);

  // Listen for scroll interaction to enable autoplay
  useEffect(() => {
    const handleUserGesture = async () => {
      if (!userInteracted && !isPlaying && audioRef.current) {
        try {
          const audio = audioRef.current;
          setUserInteracted(true);

          audio.muted = true;
          await audio.play();
          setTimeout(() => {
            audio.muted = false;
          }, 300);

          setIsPlaying(true);
          console.log("Audio autoplayed after user gesture");
        } catch (error) {
          console.error("User gesture-triggered autoplay failed:", error);
        }
      }
    };

    // Use pointerdown to catch mouse/touch/pen
    window.addEventListener("pointerdown", handleUserGesture, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleUserGesture);
    };
  }, [userInteracted, isPlaying]);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setUserInteracted(true);

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        // Unmute on first manual play
        audio.muted = false;
        await audio.play();
        setIsPlaying(true);
        console.log("Manual play successful");
      }
    } catch (error) {
      console.error("Playback error:", error);
      setHasError(true);
    }
  };
  return (
    <GradientButton
      className={cn(
        pathname === routes.homepage.link ? "bg-black" : "!bg-white",
        "flex_center gap-2 group ps-3 md:px-5 cursor-pointer min-w-[96px]"
      )}
      disabled={isLoading || hasError}
      onClick={togglePlayPause}
    >
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        muted={false}
        preload="auto"
        loop
        playsInline
        className="hidden"
      >
        <source src="/audio/music.mp3" type="audio/mpeg" />
        <source src="/audio/music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {isLoading ? (
        <div
          className={cn(
            "!h-5 !w-5 !shrink-0 animate-spin rounded-full border-2 border-t-transparent",
            pathname === routes.homepage.link ? "border-white" : "border-black"
          )}
        />
      ) : isPlaying ? (
        <GraphicAnimatedIcon className="!h-5 !w-5 !shrink-0" />
      ) : (
        <GraphicIcon className="!h-5 !w-5 !shrink-0" />
      )}

      <span
        className={cn(
          pathname === routes.homepage.link ? "text-white" : "text-text-900",
          " text-sm font-normal !leading-[1.4] group-hover:text-white transition_common"
        )}
      >
        {isPlaying ? "OFF" : "ON"}
      </span>
    </GradientButton>
  );
};

export default IntroAudioPlayer;

"use client";
import { useRef, useState, useCallback, MouseEvent, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@/services/assets/svgs";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
  className?: string;
  dividerColor?: string;
  circleColor?: string;
  arrowColor?: string;
}

const ImageComparisonSlider = ({
  beforeImage,
  afterImage,
  alt = "Comparison",
  className,
  dividerColor = "#099A8C",
  circleColor = "#099A8C",
  arrowColor = "white",
}: ImageComparisonSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0); // Start at 0 (full before image)
  const [isInitialAnimating, setIsInitialAnimating] = useState(false);
  const tweenRef = useRef<any>(null);
  const currentMousePosRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const getMousePercentage = useCallback((e: MouseEvent<HTMLDivElement>): number => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    return Math.max(0, Math.min(100, percentage));
  }, []);

  // Smooth interpolation for mouse tracking
  const smoothFollow = useCallback(() => {
    setSliderPosition(prev => {
      const diff = currentMousePosRef.current - prev;
      const speed = 0.12; // Lower = slower follow
      return prev + diff * speed;
    });
    
    rafRef.current = requestAnimationFrame(smoothFollow);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (isInitialAnimating) return;
    
    const percentage = getMousePercentage(e);
    currentMousePosRef.current = percentage;
  }, [isInitialAnimating, getMousePercentage]);

  const handleMouseEnter = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    setIsHovering(true);
    setIsInitialAnimating(true);

    // Calculate target position from mouse
    const percentage = getMousePercentage(e);
    currentMousePosRef.current = percentage;

    // Animate from 0 to mouse position with GSAP
    if (tweenRef.current) {
      tweenRef.current.kill();
    }
    tweenRef.current = gsap.to({ value: 0 }, {
      value: percentage,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: function() {
        setSliderPosition(this.targets()[0].value);
      },
      onComplete: () => {
        setIsInitialAnimating(false);
        // Start smooth RAF-based following after initial animation
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(smoothFollow);
      }
    });
  }, [getMousePercentage, smoothFollow]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setIsInitialAnimating(true);
    
    // Cancel RAF loop
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    
    // Animate back to 0 (full before image)
    if (tweenRef.current) {
      tweenRef.current.kill();
    }
    tweenRef.current = gsap.to({ value: sliderPosition }, {
      value: 0,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: function() {
        setSliderPosition(this.targets()[0].value);
      },
      onComplete: () => {
        setIsInitialAnimating(false);
        currentMousePosRef.current = 0;
      }
    });
  }, [sliderPosition]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden cursor-col-resize select-none rounded-2xl md:rounded-3xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Before Image (Bottom Layer) */}
      <div className="relative w-full h-full">
        <Image
          src={beforeImage}
          alt={`${alt} - Before`}
          width={2352}
          height={1296}
          className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
          draggable={false}
        />
      </div>

      {/* After Image (Top Layer with Clip) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={afterImage}
          alt={`${alt} - After`}
          width={2352}
          height={1296}
          className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
          draggable={false}
        />
      </div>

      {/* Divider with Circle and Arrows - Fades in on hover */}
      <div
        className={cn(
          "absolute top-0 bottom-0 z-20 transition-opacity duration-500",
          isHovering ? "opacity-100" : "opacity-0"
        )}
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      >
          {/* Vertical Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px]"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: dividerColor,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          />

          {/* Circle with Arrows in Center */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: circleColor,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <ArrowLeft color={arrowColor} />
              <ArrowRight color={arrowColor}  />
            </div>
          </div>

   
        </div>
    </div>
  );
};

export default ImageComparisonSlider;

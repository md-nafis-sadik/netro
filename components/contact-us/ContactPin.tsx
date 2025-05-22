"use client";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

const ContactPin = ({ className }: { className?: string }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [textColor, setTextColor] = useState("#ffffff");

  const text = "contact - contact - contact - contact - ";
  const chars = text.split("");
  const deg = 360 / chars.length;

  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  // Get luminance from RGB values
  const getLuminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  // Parse any CSS color to RGB
  const parseColor = (colorStr: string) => {
    // Handle hex colors
    if (colorStr.startsWith("#")) {
      return hexToRgb(colorStr);
    }

    // Handle rgb/rgba colors
    const rgbMatch = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
      return {
        r: parseInt(rgbMatch[1]),
        g: parseInt(rgbMatch[2]),
        b: parseInt(rgbMatch[3]),
      };
    }

    // Handle named colors by creating a temporary element
    const tempDiv = document.createElement("div");
    tempDiv.style.color = colorStr;
    document.body.appendChild(tempDiv);
    const computedColor = window.getComputedStyle(tempDiv).color;
    document.body.removeChild(tempDiv);

    const namedRgbMatch = computedColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (namedRgbMatch) {
      return {
        r: parseInt(namedRgbMatch[1]),
        g: parseInt(namedRgbMatch[2]),
        b: parseInt(namedRgbMatch[3]),
      };
    }

    return null;
  };

  // Get the contrasting color
  const getContrastColor = useCallback(() => {
    if (!containerRef.current) return "#ffffff";

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Temporarily hide the component
    const originalDisplay = containerRef.current.style.display;
    containerRef.current.style.display = "none";

    // Get element behind
    const elementBehind = document.elementFromPoint(centerX, centerY);

    // Restore display
    containerRef.current.style.display = originalDisplay;

    if (!elementBehind) return "#ffffff";

    // Find the background color by traversing up the DOM
    let currentElement = elementBehind;
    let backgroundColor = null;

    while (currentElement && currentElement !== document.body) {
      const styles = window.getComputedStyle(currentElement);
      const bgColor = styles.backgroundColor;
      const bgImage = styles.backgroundImage;

      // Check for solid background color
      if (
        bgColor &&
        bgColor !== "rgba(0, 0, 0, 0)" &&
        bgColor !== "transparent"
      ) {
        const rgb = parseColor(bgColor);
        if (rgb) {
          backgroundColor = rgb;
          break;
        }
      }

      // Check for background image
      if (bgImage && bgImage !== "none") {
        // For images, assume it's darker - you can customize this logic
        backgroundColor = { r: 50, g: 50, b: 50 }; // Dark gray assumption
        break;
      }

      // @ts-ignore
      currentElement = currentElement.parentElement;
    }

    // Fallback to body background
    if (!backgroundColor) {
      const bodyStyles = window.getComputedStyle(document.body);
      const bodyBg = bodyStyles.backgroundColor;

      if (bodyBg && bodyBg !== "rgba(0, 0, 0, 0)" && bodyBg !== "transparent") {
        backgroundColor = parseColor(bodyBg);
      }
    }

    // Default to white background if nothing found
    if (!backgroundColor) {
      backgroundColor = { r: 255, g: 255, b: 255 };
    }

    // Calculate luminance and return contrasting color
    const luminance = getLuminance(
      backgroundColor.r,
      backgroundColor.g,
      backgroundColor.b
    );

    // Return opposite color with better contrast
    return luminance > 0.5 ? "#000000" : "#ffffff";
  }, []);

  // Update text color
  const updateTextColor = useCallback(() => {
    const newColor = getContrastColor();
    setTextColor((prevColor) => {
      // Only update if color actually changed
      return prevColor !== newColor ? newColor : prevColor;
    });
  }, [getContrastColor]);

  // Setup event listeners
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Initial update after component mounts
    timeoutId = setTimeout(() => {
      updateTextColor();
    }, 50);

    // Throttled scroll handler
    let isScrolling = false;
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          updateTextColor();
          isScrolling = false;
        });
      }
    };

    // Resize handler
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateTextColor, 100);
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateTextColor]);

  useGSAP(
    () => {
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: circleRef }
  );

  return (
    <div
      className={cn(
        "hidden md:flex items-center justify-center rounded-full bg-transparent overflow-hidden transition_common cursor-pointer",
        className
      )}
      ref={containerRef}
    >
      <div className="relative w-[110px] h-[110px] rounded-full flex items-center justify-center">
        <div className="absolute w-16 h-16 rounded-full bg-cover bg-center">
          <Image
            src={images.avater2}
            alt="contact avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div
          ref={circleRef}
          className="absolute w-full h-full text-black font-mono text-lg"
        >
          {chars.map((char, i) => (
            <span
              key={i}
              className="absolute left-1/2 text-[7px]"
              style={{
                transformOrigin: "0 55px",
                transform: `rotate(${i * deg}deg)`,
                color: textColor,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPin;

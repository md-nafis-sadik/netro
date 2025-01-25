"use client";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const ContactPin = ({ className }: { className?: string }) => {
  const circleRef = useRef(null);
  const text = "contact - contact - contact - contact - ";
  const chars = text.split("");
  const deg = 360 / chars.length;

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
        "flex items-center justify-center rounded-full bg-transparent overflow-hidden transition_common cursor-pointer",
        className
      )}
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
              className="absolute left-1/2 text-white text-[7px]"
              style={{
                transformOrigin: "0 55px",
                transform: `rotate(${i * deg}deg)`,
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

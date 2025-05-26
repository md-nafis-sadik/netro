"use client";
import React, { useEffect, useRef, useState } from "react";
import MarqueeHome from "../marquee/MarqueeHome";

const HeroMarquee = () => {
  return (
    <div className="w-full relative -mt-40 min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
      <MarqueeHome
        dark={true}
        className="absolute -bottom-20 md:bottom-0 left-1/2 -translate-x-1/2"
      />
      <MarqueeHome
        dark={false}
        className="absolute -bottom-16 md:bottom-10 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default HeroMarquee;

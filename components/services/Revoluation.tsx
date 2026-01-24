"use client";
import { AiIcon } from "@/services/assets/svgs";
import Link from "next/link";
import { useReveluation } from "../projects/useReveluation";

function Revolution() {
  const { sectionRef, videoRef } = useReveluation();

  return (
    <section
      ref={sectionRef}
      data-bg-theme="dark"
      className="min-h-[420px] md:min-h-[600px] lg:min-h-[810px] bg-main-900 flex_center md:block py-10 md:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="px-6 w-full max-w-[964px] mx-auto text-center relative z-[99]">
        <h2
          className="home_ai_header text-5xl md:text-6xl lg:text-[94px] leading-[90%] lg:leading-[80.85%] font-scoutcond font-bold mt-0 uppercase"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          AI revolution, <br /> when you are joining?
        </h2>
        <p className="revolution-description text-lg leading-[140%] text-white font-inter mt-2.5 hidden md:block">
          We build AI that reduces operational complexity, improves throughput,
          and unlocks new revenue streams. Whether you&apos;re enhancing an
          existing product or launching a new AI-native platform, we provide the
          architecture, engineering, and deployment expertise required to
          execute at scale.
        </p>
        <Link
          href="/"
          className="revolution-button flex_center gap-3 p-2 pl-4 bg-black text-white text-base leading-[170%] font-semibold max-w-max mx-auto rounded-full mt-14 transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
        >
          <span>Let&apos;s Talk About AI</span>
          <div className="ai-icon-wrapper size-10 shrink-0 bg-status-error text-white flex items-center justify-center rounded-full">
            <AiIcon className="size-6" />
          </div>
        </Link>
      </div>
      {/* background video play  */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/arc.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Revolution;

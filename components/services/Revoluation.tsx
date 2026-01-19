import { RightArrowIcon } from "@/services/assets/svgs";
import Link from "next/link";
function Revoluation() {
  return (
    <section
      data-bg-theme="dark"
      className="min-h-[810px] bg-main-900 py-10 md:py-16 lg:py-20 relative"
    >
      <div className="px-6 w-full max-w-[964px] mx-auto text-center relative z-[99]">
        <h2 className="home_ai_header text-[94px] leading-[80.85%] font-scoutcond font-bold max-w-2xl mx-auto mt-0 uppercase">
          AI revolution, when you are joining?
        </h2>
        <p className="text-lg leading-[140%] text-white font-inter mt-2.5">
          We build AI that reduces operational complexity, improves throughput,
          and unlocks new revenue streams. Whether you&apos;re enhancing an
          existing product or launching a new AI-native platform, we provide the
          architecture, engineering, and deployment expertise required to
          execute at scale.
        </p>
        <Link
          href="/"
          className="flex_center gap-3 p-2 pl-4 bg-black text-white text-base leading-[170%] font-medium max-w-max mx-auto rounded-full mt-14"
        >
          <span>Tech Consultation</span>
          <div className="size-10 shrink-0 bg-main-600 text-white flex items-center justify-center rounded-full">
            <RightArrowIcon className="size-6" />
          </div>
        </Link>
      </div>
      {/* background video play  */}
      <video
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

export default Revoluation;

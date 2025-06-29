import MarqueeHome from "../marquee/MarqueeHome";

const HeroMarquee = () => {
  return (
    <div className="w-full sticky -top-10 z-10 -mt-40 min-h-[240px] md:min-h-[280px] lg:min-h-[420px]">
      <div className="relative w-full overflow-hidden min-h-[240px] md:min-h-[280px] lg:min-h-[420px]">
        <MarqueeHome
          dark={true}
          className="absolute -bottom-20 md:-bottom-[120px] left-1/2 -translate-x-1/2"
        />
        <MarqueeHome
          dark={false}
          className="absolute -bottom-16 md:-bottom-5 left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="bg-black h-1/2 absolute top-0 w-full" />
    </div>
  );
};

export default HeroMarquee;

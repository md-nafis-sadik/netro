import TextFadeIn from "../animations/TextFadeIn";

const IntroHome = () => {
  return (
    <div className="containerX pt-[110px] pb-[60px] md:py-[160px] flex flow-row">
      <div className="hidden md:block w-2/5" />
      <TextFadeIn
        text="Netro Systems fosters innovation, collaboration, diversity, and growth,
        creating impactful software solutions in a vibrant, inclusive culture."
        className="w-full md:w-3/5 text-2xl md:text-5xl font-bold !leading-[1.4] text-text-900"
      />
    </div>
  );
};

export default IntroHome;

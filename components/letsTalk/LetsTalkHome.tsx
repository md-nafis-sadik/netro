import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";
import { ArrowTopRIghtIcon } from "@/services/assets/svgs";
import { footerData } from "@/services/data";
import SectionHeader from "../common/SectionHeader";

const LetsTalkHome = () => {
  return (
    <section className="bg-black">
      <div className="containerX py-[60px] md:py-20 flex flex-col lg:flex-row items-center gap-[42px] justify-between">
        <div>
          <SectionHeader className="home_faq_header">
            Let&apos;s Talk
          </SectionHeader>
          <p
            className={cn(
              "font-normal !leading-[1.2] flex items-center justify-start gap-2 md:gap-4 font-inter"
            )}
          >
            <span className="text-xl md:text-[32px] bg-clip-text bg-gradient-to-r from-[#D3D3D3] via-white to-[#959595] text-transparent ">
              {footerData.inquiries.email}
            </span>
            <a
              href={`mailto:${footerData.inquiries.email}`}
              className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-main-400 transition_common hover:rotate-45 hover:scale-105 flex_center"
            >
              <ArrowTopRIghtIcon className="!h-[10px] !w-[10px] md:!h-[14px] md:!w-[14px] !shrink-0" />
            </a>
          </p>
        </div>

        <form className="border border-[#494949] ps-6 py-3 pe-1 md:pe-3 h-[54px] md:h-[70px] flex items-center gap-4 content-bg-gradient-primary !rounded-[100px]">
          <input
            type="email"
            placeholder="Ex: user@website.com"
            className={cn(
              "text-sm md:text-base font-normal !leading-[1.3] bg-transparent border-none outline-none text-white placeholder:bg-clip-text placeholder:text-transparent placeholder:bg-gradient-to-r placeholder:from-[#959595] placeholder:via-white placeholder:to-[#676767] h-full font-inter max-w-[148px] md:max-w-full"
            )}
          />
          <GradientButton
            type="submit"
            className="py-2 md:py-3 h-[38px] md:h-[46px]"
          >
            <span>Submit</span>
          </GradientButton>
        </form>
      </div>
    </section>
  );
};

export default LetsTalkHome;

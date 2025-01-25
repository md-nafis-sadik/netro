import SectionHeader from "@/components/common/SectionHeader";
import { GradientButton } from "@/components/ui/gradient-button";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowTopRIghtIcon } from "@/services/assets/svgs";
import { footerData } from "@/services/data";

const LetsTalkHome = () => {
  return (
    <section className="bg-black">
      <div className="containerX py-[60px] md:py-20 flex flex-row items-center gap-4 justify-between">
        <div>
          <SectionHeader lite text="Let's Talk" className="text-start" />
          <p
            className={cn(
              inter.className,
              "text-xl md:text-[32px] font-normal !leading-[1.2] flex items-center justify-start gap-2 md:gap-4"
            )}
          >
            <span className="bg-clip-text bg-gradient-to-r from-[#D3D3D3] via-white to-[#959595] text-transparent ">
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

        <form className="rounded-[100px] border border-[#494949] ps-6 py-3 pe-3 h-[54px] md:h-[70px] flex items-center gap-4 content-bg-gradient-primary">
          <input
            type="email"
            placeholder="Ex: user@website.com"
            className={cn(
              inter.className,
              "text-base font-normal !leading-[1.3] bg-transparent border-none outline-none text-white placeholder:bg-clip-text placeholder:text-transparent placeholder:bg-gradient-to-r placeholder:from-[#959595] placeholder:via-white placeholder:to-[#676767] h-full"
            )}
          />
          <GradientButton type="submit">
            <span>Submit</span>
          </GradientButton>
        </form>
      </div>
    </section>
  );
};

export default LetsTalkHome;

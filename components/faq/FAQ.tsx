import SectionSubHeader from "@/components/common/SectionSubHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faqData } from "@/services/data";
import SectionHeader from "../common/SectionHeader";

const FAQ = () => {
  return (
    <section className="bg-black flex_center flex-col w-full py-20">
      <SectionSubHeader dark text="Frequently asked questions" />

      <SectionHeader className="home_faq_header w-full mt-6">
        Common Queries
      </SectionHeader>

      <div className="containerX mt-10 md:mt-20">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full max-w-[844px] mx-auto flex flex-col gap-3"
        >
          {faqData.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                className={cn(
                  "text-sm md:text-xl text-white !leading-[1.4] md:!leading-[1.1] text-start font-inter data-[state=open]:font-bold"
                )}
              >
                {question}
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "text-xs md:text-base text-text-200 font-normal font-inter"
                )}
              >
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

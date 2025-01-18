import SectionHeader from "@/components/shared/SectionHeader";
import SectionSubHeader from "@/components/shared/SectionSubHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/data";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const FAQ = () => {
  return (
    <section className="bg-black flex_center flex-col my-20 w-full py-20">
      <SectionSubHeader dark text="Frequently asked questions" />
      <SectionHeader lite text="Common Queries" />

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
                className={cn(inter.className, "text-xl font-bold text-white")}
              >
                {question}
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  inter.className,
                  "text-xs md:text-base text-white font-normal"
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

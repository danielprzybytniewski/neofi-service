import Typography from "@/components/shared/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants/faq";

export default function FAQAccordion() {
  return (
    <div className="mx-auto w-full">
      <Accordion
        type="single"
        collapsible
        className="space-y-4 lg:space-y-[30px]"
      >
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="border-muted hover:border-secondary data-[state=open]:border-secondary focus-visible:border-secondary flex max-h-18 cursor-pointer items-center rounded-none border px-5 py-4 transition-colors duration-200 hover:no-underline focus:outline-none lg:max-h-13">
              <Typography component="h3" className="text-foreground">
                {faq.question}
              </Typography>
            </AccordionTrigger>
            <AccordionContent className="p-4">
              <Typography className="text-muted-foreground text-sm sm:text-base">
                {faq.answer}
              </Typography>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

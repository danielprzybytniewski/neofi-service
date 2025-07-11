import FAQAccordion from "@/components/faq/FAQAccordion";
import FAQHeader from "@/components/faq/FAQHeader";
import FramerMotionViewportWrapper from "@/components/shared/FramerMotionViewportWrapper";
import {
  faqAccordionVariant,
  faqHeaderVariant,
} from "@/constants/framerMotionVariants";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="mx-auto flex w-full max-w-[1289px] scroll-mt-10 flex-col items-center gap-8 px-5 py-10 lg:scroll-mt-6 lg:gap-18 lg:px-30 lg:py-20 xl:px-[217px]"
    >
      <FramerMotionViewportWrapper variants={faqHeaderVariant}>
        <FAQHeader />
      </FramerMotionViewportWrapper>
      <FramerMotionViewportWrapper
        variants={faqAccordionVariant}
        className="w-full max-w-[792px]"
      >
        <FAQAccordion />
      </FramerMotionViewportWrapper>
    </section>
  );
}

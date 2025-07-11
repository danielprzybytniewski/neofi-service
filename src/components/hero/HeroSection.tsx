import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";
import FramerMotionViewportWrapper from "@/components/shared/FramerMotionViewportWrapper";
import {
  heroContentVariant,
  heroImageVariant,
} from "@/constants/framerMotionVariants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-10 px-5 py-0 lg:scroll-mt-6 lg:px-15 xl:px-30"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-0 py-10 lg:flex-row lg:py-22">
        <FramerMotionViewportWrapper
          variants={heroContentVariant}
          className="flex-1"
        >
          <HeroContent />
        </FramerMotionViewportWrapper>
        <FramerMotionViewportWrapper
          variants={heroImageVariant}
          className="flex-1"
        >
          <HeroImage />
        </FramerMotionViewportWrapper>
      </div>
    </section>
  );
}

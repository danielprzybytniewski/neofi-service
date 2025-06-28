import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-18 px-5 py-0 lg:scroll-mt-20 lg:px-[60px] xl:px-[120px]"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-0 py-10 lg:flex-row lg:py-[88px]">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}

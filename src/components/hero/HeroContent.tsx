import HeroBadge from "@/components/hero/HeroBadge";
import HeroButtons from "@/components/hero/HeroButtons";
import HeroTitle from "@/components/hero/HeroTitle";

export default function HeroContent() {
  return (
    <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:py-0 lg:text-left">
      <HeroBadge />
      <HeroTitle />
      <HeroButtons />
    </div>
  );
}

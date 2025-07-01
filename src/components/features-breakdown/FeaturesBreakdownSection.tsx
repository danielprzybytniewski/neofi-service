import FeaturesBreakdownCard from "@/components/features-breakdown/FeaturesBreakdownCard";
import FeaturesBreakdownHeader from "@/components/features-breakdown/FeaturesBreakdownHeader";
import {
  featuresBreakdown,
  featuresBreakdownSubtitle,
} from "@/constants/featuresBreakdown";

export default function FeaturesBreakdownSection() {
  return (
    <section
      id="features-breakdown"
      className="flex flex-col items-center px-5 py-10 text-center lg:px-15 lg:py-20 xl:px-30"
    >
      <FeaturesBreakdownHeader subtitle={featuresBreakdownSubtitle} />
      <div className="mt-8 grid max-w-[1200px] grid-cols-1 gap-y-4 bg-transparent lg:mt-20 lg:grid-cols-3 lg:gap-x-6">
        {featuresBreakdown.map((feature) => (
          <FeaturesBreakdownCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

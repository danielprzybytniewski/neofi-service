import Typography from "@/components/shared/Typography";
import type { FeaturesBreakdown } from "@/constants/featuresBreakdown";

export default function FeaturesBreakdownCard({
  icon,
  title,
  description,
}: FeaturesBreakdown) {
  return (
    <div className="bg-gradient-1 rounded-[13px] p-px">
      <div className="bg-background hover:border-secondary relative flex h-full flex-col items-center rounded-[12px] border border-transparent px-6 py-[30px] transition-colors duration-200 lg:px-9 lg:py-12">
        <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-[#FFFFFF0A]"></div>
        <div className="mb-9">
          <img src={icon} alt={title} />
        </div>
        <Typography
          component="h3"
          variant="subtitle"
          className="text-foreground mb-4 text-xl"
        >
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </div>
    </div>
  );
}

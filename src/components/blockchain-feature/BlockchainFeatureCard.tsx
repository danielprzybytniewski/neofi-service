import Typography from "@/components/shared/Typography";
import type { BlockchainFeature } from "@/constants/blockchainFeature";

export default function BlockchainFeatureCard({
  icon,
  title,
  description,
}: BlockchainFeature) {
  return (
    <div className="bg-gradient-1 rounded-[21px] p-px text-left">
      <div
        className="bg-primary hover:border-secondary focus:border-secondary flex gap-5 rounded-[20px] border border-transparent px-5 py-6 transition-colors duration-200 focus:outline-none lg:gap-6 lg:py-[30px] 2xl:max-h-[162px]"
        tabIndex={0}
      >
        <div className="flex-shrink-0">
          <img src={icon} alt={title} />
        </div>
        <div className="space-y-2">
          <Typography
            component="h3"
            variant="subtitle"
            className="text-foreground text-xl"
          >
            {title}
          </Typography>
          <Typography variant="text" className="text-sm lg:text-base">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}

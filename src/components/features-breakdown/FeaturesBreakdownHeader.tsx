import CustomBadge from "@/components/shared/CustomBadge";
import Typography from "@/components/shared/Typography";

type FeaturesBreakdownHeaderProps = {
  subtitle: string;
};

export default function FeaturesBreakdownHeader({
  subtitle,
}: FeaturesBreakdownHeaderProps) {
  return (
    <div className="flex max-w-[644px] flex-col items-center">
      <CustomBadge>Features</CustomBadge>
      <Typography component="h2" variant="title" className="my-4 lg:my-5">
        Future Breakdown
      </Typography>
      <Typography variant="subtitle" className="hidden lg:block lg:text-lg">
        {subtitle}
      </Typography>
      <Typography variant="text" className="block lg:hidden">
        {subtitle}
      </Typography>
    </div>
  );
}

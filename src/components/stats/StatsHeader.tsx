import CustomBadge from "@/components/shared/CustomBadge";
import Typography from "@/components/shared/Typography";
import { statsSubtitle } from "@/constants/stats";

export default function StatsHeader() {
  return (
    <>
      <CustomBadge className="mb-4 lg:mb-5">Statistics</CustomBadge>
      <Typography component="h2" variant="title" className="mb-4 lg:mb-5">
        Completely Leverage Product
      </Typography>
      <Typography
        variant="subtitle"
        className="hidden max-w-2xl lg:mb-18 lg:block lg:text-lg"
      >
        {statsSubtitle}
      </Typography>
      <Typography
        variant="smallText"
        className="mb-8 block max-w-2xl lg:hidden"
      >
        {statsSubtitle}
      </Typography>
    </>
  );
}

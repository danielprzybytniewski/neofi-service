import Typography from "@/components/shared/Typography";
import type { Stats } from "@/constants/stats";

export default function StatsItem({ value, label }: Stats) {
  return (
    <div className="flex flex-col items-center">
      <Typography
        component="h3"
        variant="title"
        className="text-secondary mb-3 text-5xl lg:mb-5"
      >
        {value}
      </Typography>
      <Typography variant="subtitle" className="text-xl">
        {label}
      </Typography>
    </div>
  );
}

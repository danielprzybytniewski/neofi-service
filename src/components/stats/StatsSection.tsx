import StatsHeader from "@/components/stats/StatsHeader";
import StatsItem from "@/components/stats/StatsItem";
import { stats } from "@/constants/stats";

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="bg-primary px-5 py-10 lg:px-15 lg:py-30 xl:px-30"
    >
      <div className="flex flex-col items-center text-center">
        <StatsHeader />
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-18">
          {stats.map((stat) => (
            <StatsItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

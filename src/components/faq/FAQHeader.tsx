import CustomBadge from "@/components/shared/CustomBadge";
import Typography from "@/components/shared/Typography";

export default function FAQHeader() {
  return (
    <div className="flex flex-col items-center gap-4 text-center lg:gap-5">
      <CustomBadge>FAQ</CustomBadge>
      <Typography component="h2" variant="title">
        Get Answers To Common Questions
      </Typography>
      <Typography
        variant="subtitle"
        className="max-w-[644px] indent-3 lg:indent-0 lg:text-lg"
      >
        From basics to advanced topics, find everything you need to know right
        here. Let us help you simplify the process and find the clarity you're
        looking
      </Typography>
    </div>
  );
}

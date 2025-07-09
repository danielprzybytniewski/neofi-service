import Typography from "@/components/shared/Typography";
import type { DefaultTestimonial } from "@/constants/testimonials";

type TestimonialsCardProps = DefaultTestimonial & {
  name: string;
};

export default function TestimonialsCard({
  quote,
  role,
  image,
  name,
}: TestimonialsCardProps) {
  return (
    <div className="bg-gradient-1 rounded-[17px] p-px">
      <div className="bg-background flex flex-col justify-between rounded-[16px] px-8 py-8">
        <Typography className="text-[#EDEDF2]">&quot;{quote}&quot;</Typography>
        <div className="mt-6 flex items-center gap-[17px] lg:mt-8 lg:gap-4">
          <img src={image} alt={name} />
          <div className="flex flex-col items-start">
            <Typography
              component="span"
              variant="smallText"
              className="text-white"
            >
              {name}
            </Typography>
            <Typography component="small" variant="caption">
              {role}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

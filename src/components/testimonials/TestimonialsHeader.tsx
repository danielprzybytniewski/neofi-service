import CustomBadge from "@/components/shared/CustomBadge";
import Typography from "@/components/shared/Typography";

export default function TestimonialsHeader() {
  return (
    <div className="flex max-w-[644px] flex-col items-center gap-4 text-center lg:gap-5">
      <CustomBadge>Testimonial</CustomBadge>
      <Typography component="h2" variant="title">
        Trusted By Innovators
      </Typography>
      <Typography variant="subtitle" className="max-w-2xl lg:text-lg">
        Secure your digital assets with the peace of mind that comes from
        knowing you are protected by the best technology in the blockchain
        space.
      </Typography>
    </div>
  );
}

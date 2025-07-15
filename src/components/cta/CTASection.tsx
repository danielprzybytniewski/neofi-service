import CustomBadge from "@/components/shared/CustomBadge";
import RegisterButton from "@/components/shared/RegisterButton";
import Typography from "@/components/shared/Typography";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="bg-primary px-5 py-10 text-center lg:px-15 lg:py-20 xl:px-30"
    >
      <div className="mx-auto flex max-w-[878px] flex-col items-center gap-y-5">
        <CustomBadge>Revolutionary</CustomBadge>
        <Typography component="h2" variant="title" className="max-w-3xl">
          Enhance Your Design Workflow With Seamless Landing Pages
        </Typography>
        <Typography variant="subtitle" className="max-w-2xl lg:text-lg">
          Join a thriving community committed to safeguarding digital assets,
          empowering your financial journey with trust, innovation, and security
        </Typography>
        <RegisterButton variant="square" className="text-lg" />
      </div>
    </section>
  );
}

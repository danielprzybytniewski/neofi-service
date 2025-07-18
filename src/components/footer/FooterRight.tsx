import FooterForm from "@/components/footer/FooterForm";
import Typography from "@/components/shared/Typography";

export default function FooterRight() {
  return (
    <div className="flex w-full flex-col justify-center gap-5 sm:w-auto lg:w-full lg:max-w-90 lg:justify-start xl:max-w-96">
      <Typography
        variant="subtitle"
        className="text-xl text-[#D8D8D8] lg:max-w-48"
      >
        Join our mailing list for updates
      </Typography>
      <FooterForm />
    </div>
  );
}

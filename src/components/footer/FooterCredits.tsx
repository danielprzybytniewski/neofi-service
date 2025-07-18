import FooterCreditLink from "@/components/footer/FooterCreditLink";
import Typography from "@/components/shared/Typography";

export default function FooterCredits() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-1 p-5 text-center lg:px-15 lg:py-10 xl:px-30">
      <FooterCreditLink
        label="Created by"
        href="https://github.com/danielprzybytniewski/neofi-service"
        author="Daniel Przybytniewski"
      />
      <FooterCreditLink
        label="Designed by"
        href="https://www.figma.com/@maliux"
        author="Mohammad Ali"
      />
      <Typography variant="caption" className="text-primary-foreground">
        © 2025. All rights reserved.
      </Typography>
    </div>
  );
}

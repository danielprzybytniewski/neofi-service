import Typography from "@/components/shared/Typography";
import { heroSubtitle } from "@/constants/hero";

export default function HeroTitle() {
  return (
    <>
      <Typography
        component="h1"
        variant="largeTitle"
        className="mt-4 w-full lg:mt-6 lg:max-w-xl lg:pr-5"
      >
        Revolutionizing Web3 Finance
      </Typography>
      <Typography
        variant="subtitle"
        className="hidden w-full lg:mt-6 lg:mb-10 lg:block lg:max-w-xl lg:pr-5"
      >
        {heroSubtitle}
      </Typography>
      <Typography
        variant="text"
        className="mt-4 mb-8 block w-full max-w-2xl lg:hidden"
      >
        {heroSubtitle}
      </Typography>
    </>
  );
}

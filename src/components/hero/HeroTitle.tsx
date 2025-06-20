import Typography from "@/components/shared/Typography";

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
        component="p"
        variant="subtitle"
        className="mt-4 mb-8 w-full lg:mt-6 lg:mb-10 lg:max-w-xl lg:pr-5"
      >
        Secure, scalable, and decentralized solutions for your digital
        assets—experience the future of financial freedom.
      </Typography>
    </>
  );
}

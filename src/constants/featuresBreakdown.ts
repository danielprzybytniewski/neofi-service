import connectivityImg from "@/assets/images/connectivity.svg";
import decentralisationImg from "@/assets/images/decentralisation.svg";
import scalabilityImg from "@/assets/images/scalability.svg";

export type FeaturesBreakdown = {
  icon: string;
  title: string;
  description: string;
};

export const featuresBreakdown: FeaturesBreakdown[] = [
  {
    icon: scalabilityImg,
    title: "Scalability",
    description: "Adapt and grow, no matter the demand on grow",
  },
  {
    icon: decentralisationImg,
    title: "Decentralisation",
    description:
      "Decentralization. Web3 aims to move away from the centralized",
  },
  {
    icon: connectivityImg,
    title: "Connectivity",
    description:
      "Computers will be able to understand information similarly to humans",
  },
];

export const featuresBreakdownSubtitle = `Secure, scalable, and decentralized solutions for your digital
          assets—experience the future of financial freedom.`;

import blockchainImg from "@/assets/images/blockchain.svg";
import securityImg from "@/assets/images/security.svg";
import ubiquityImg from "@/assets/images/ubiquity.svg";

export type BlockchainFeature = {
  icon: string;
  title: string;
  description: string;
};

export const blockchainFeatures: BlockchainFeature[] = [
  {
    icon: ubiquityImg,
    title: "Connectivity and ubiquity",
    description:
      "Connectivity and Ubiquity. The focal points of Web 3.0 emphasize connectivity and ubiquity, ensuring seamless interactions between users and devices within.",
  },
  {
    icon: securityImg,
    title: "Secure Transaction",
    description:
      "Ensuring every transaction is protected with cutting-edge security, giving you the confidence to exchange, invest, and grow in a safe and trusted environment.",
  },
  {
    icon: blockchainImg,
    title: "Blockchain and decentralization",
    description:
      "Most important of all, the assurance of blockchain and decentralization helps in encouraging communication between software and browser plugins.",
  },
];

import BlockchainFeatureCard from "@/components/blockchain-feature/BlockchainFeatureCard";
import BlockchainFeatureHeader from "@/components/blockchain-feature/BlockchainFeatureHeader";
import BlockchainFeatureImage from "@/components/blockchain-feature/BlockchainFeatureImage";
import FramerMotionViewportWrapper from "@/components/shared/FramerMotionViewportWrapper";
import { blockchainFeature } from "@/constants/blockchainFeature";
import {
  blockchainFeatureCardVariant,
  blockchainFeatureHeaderVariant,
  blockchainFeatureImageVariant,
} from "@/constants/framerMotionVariants";

export default function BlockchainFeatureSection() {
  return (
    <section
      id="blockchain-feature"
      className="flex scroll-mt-10 flex-col items-center px-5 py-10 text-center lg:scroll-mt-6 lg:px-15 lg:py-15 xl:px-30"
    >
      <FramerMotionViewportWrapper variants={blockchainFeatureHeaderVariant}>
        <BlockchainFeatureHeader />
      </FramerMotionViewportWrapper>
      <div className="mt-8 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-center lg:gap-18">
        <FramerMotionViewportWrapper variants={blockchainFeatureImageVariant}>
          <BlockchainFeatureImage />
        </FramerMotionViewportWrapper>
        <div className="max-w-2xl space-y-4 lg:flex-1 lg:space-y-10">
          {blockchainFeature.map((feature) => (
            <FramerMotionViewportWrapper
              key={feature.title}
              variants={blockchainFeatureCardVariant}
            >
              <BlockchainFeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </FramerMotionViewportWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

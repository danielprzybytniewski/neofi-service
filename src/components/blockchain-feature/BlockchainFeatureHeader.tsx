import CustomBadge from "@/components/shared/CustomBadge";
import Typography from "@/components/shared/Typography";

export default function BlockchainFeatureHeader() {
  return (
    <div className="max-w-[890px] space-y-4 lg:space-y-5">
      <CustomBadge>Feature</CustomBadge>
      <Typography component="h2" variant="title">
        The Future Of Blockchain Technology
      </Typography>
      <Typography variant="subtitle" className="mx-auto max-w-2xl lg:text-lg">
        Leading the way in blockchain innovation, we are redefining how the
        world connects, secures, and transacts, bringing a new era of
        decentralized technology.
      </Typography>
    </div>
  );
}

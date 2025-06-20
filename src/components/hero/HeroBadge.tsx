import ellipseImg from "@/assets/images/ellipse.svg";
import CustomBadge from "@/components/shared/CustomBadge";

export default function HeroBadge() {
  return (
    <div className="bg-gradient-1 inline-flex rounded-3xl p-px">
      <CustomBadge
        variant="small"
        icon={ellipseImg}
        className="bg-background border-0"
      >
        Decentralised
      </CustomBadge>
    </div>
  );
}

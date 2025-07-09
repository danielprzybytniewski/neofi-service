import BrandsLogo from "@/components/brands/BrandsLogo";
import type { BrandLogo } from "@/constants/brands";

type BrandsRowProps = {
  brandLogos: BrandLogo[];
  gap: number;
};
export default function BrandsRow({ brandLogos, gap }: BrandsRowProps) {
  return (
    <div
      className="flex flex-wrap items-center justify-center"
      style={{ gap: `${gap}px` }}
    >
      {brandLogos.map((logo) => (
        <BrandsLogo
          key={logo.name}
          name={logo.name}
          mobileLogo={logo.mobileLogo}
        />
      ))}
    </div>
  );
}

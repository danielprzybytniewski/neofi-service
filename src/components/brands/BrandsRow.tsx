import BrandsLogo from "@/components/brands/BrandsLogo";
import type { BrandLogos } from "@/constants/brands";

type BrandsRowProps = {
  brandLogos: BrandLogos[];
  gap: number;
};
export default function BrandsRow({ brandLogos, gap }: BrandsRowProps) {
  return (
    <div
      className="flex items-center justify-center"
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

import type { BrandLogos } from "@/constants/brands";

export default function BrandsLogo({
  name,
  desktopLogo,
  mobileLogo,
}: BrandLogos) {
  return (
    <div className="flex items-center justify-center p-0">
      <picture>
        <source srcSet={mobileLogo} media="(max-width: 1024px)" />
        <img
          src={desktopLogo}
          alt={name}
          className="max-w-[97px] lg:max-w-[132px]"
        />
      </picture>
    </div>
  );
}

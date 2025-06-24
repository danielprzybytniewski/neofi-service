export type BrandLogos = {
  name: string;
  desktopLogo?: string;
  mobileLogo?: string;
};

// Using new URL(relativePath, import.meta.url).href ensures that image paths resolve correctly
// in both development and production builds with Vite.

const generateBrandLogos = (brandNumber: number) => ({
  desktopLogo: new URL(
    `/src/assets/images/logoipsum-${brandNumber}.svg`,
    import.meta.url,
  ).href,
  mobileLogo: new URL(
    `/src/assets/images/logoipsum-${brandNumber}-mobile.svg`,
    import.meta.url,
  ).href,
});

export const brandLogos: BrandLogos[] = Array.from(
  { length: 5 },
  (_, index) => {
    const brandNumber = index + 1;
    return {
      name: `Brand ${brandNumber}`,
      ...generateBrandLogos(brandNumber),
    };
  },
);

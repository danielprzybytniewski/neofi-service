"use client";
import Autoplay from "embla-carousel-autoplay";
import BrandsLogo from "@/components/brands/BrandsLogo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { BrandLogo } from "@/constants/brands";

type BrandsCarouselProps = {
  brandLogos: BrandLogo[];
};

export default function BrandsCarousel({ brandLogos }: BrandsCarouselProps) {
  const duplicatedBrands = [...brandLogos, ...brandLogos];

  return (
    <div className="hidden max-w-[940px] lg:block">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 1800,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            stopOnFocusIn: false,
          }),
        ]}
      >
        <CarouselContent className="-ml-[72px]">
          {duplicatedBrands.map((logo, index) => (
            <CarouselItem key={index} className="basis-1/5 pl-[72px]">
              <BrandsLogo name={logo.name} desktopLogo={logo.desktopLogo} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandsLogo from "@/components/brands/BrandsLogo";
import type { BrandLogos } from "@/constants/brands";

type BrandsCarouselProps = {
  brandLogos: BrandLogos[];
};

export default function BrandsCarousel({ brandLogos }: BrandsCarouselProps) {
  const duplicatedBrands = [...brandLogos, ...brandLogos];

  return (
    <div className="hidden max-w-[940px] lg:block">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          disableOnInteraction: false,
          reverseDirection: false,
          stopOnLastSlide: false,
          pauseOnMouseEnter: false,
          delay: 500,
        }}
        spaceBetween={72}
        slidesPerView={5}
        loop={true}
        speed={1500}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.autoplay && swiper.autoplay.start) {
              swiper.autoplay.start();
            }
          }, 100);
        }}
      >
        {duplicatedBrands.map((logo, index) => (
          <SwiperSlide key={index}>
            <BrandsLogo name={logo.name} desktopLogo={logo.desktopLogo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

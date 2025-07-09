"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsCard from "@/components/testimonials/TestimonialsCard";
import type { DefaultTestimonial } from "@/constants/testimonials";
import { defaultTestimonial } from "@/constants/testimonials";

type SwiperBreakpoints = {
  slidesPerView: number;
  slidesOffsetBefore?: number;
  slidesOffsetAfter?: number;
  spaceBetween?: number;
};

type TestimonialsSwiperProps = {
  names: string[];
  testimonial?: DefaultTestimonial;
  slidesPerView: number;
  centeredSlides?: boolean;
  loop?: boolean;
  speed?: number;
  spaceBetween?: number;
  slidesOffsetBefore?: number;
  slidesOffsetAfter?: number;
  allowTouchMove?: boolean;
  autoplayDelay?: number;
  breakpoints?: Record<number, SwiperBreakpoints>;
  className?: string;
};

export default function TestimonialsSwiper({
  names,
  testimonial = defaultTestimonial,
  slidesPerView,
  centeredSlides = true,
  loop = true,
  speed = 500,
  spaceBetween = 20,
  slidesOffsetBefore = 0,
  slidesOffsetAfter = 0,
  allowTouchMove = false,
  autoplayDelay = 2300,
  breakpoints,
  className = "",
}: TestimonialsSwiperProps) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      modules={[Autoplay]}
      centeredSlides={centeredSlides}
      loop={loop}
      speed={speed}
      spaceBetween={spaceBetween}
      slidesOffsetBefore={slidesOffsetBefore}
      slidesOffsetAfter={slidesOffsetAfter}
      allowTouchMove={allowTouchMove}
      breakpoints={breakpoints}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
        reverseDirection: false,
        stopOnLastSlide: false,
        pauseOnMouseEnter: false,
      }}
      className={className}
    >
      {names.map((name) => (
        <SwiperSlide key={name}>
          <TestimonialsCard
            quote={testimonial.quote}
            role={testimonial.role}
            image={testimonial.image}
            name={name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

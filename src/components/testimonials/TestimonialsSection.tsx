import TestimonialsHeader from "@/components/testimonials/TestimonialsHeader";
import TestimonialsSwiper from "@/components/testimonials/TestimonialsSwiper";
import { testimonialNames } from "@/constants/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-primary flex scroll-mt-10 flex-col items-center px-5 py-10 lg:scroll-mt-6 lg:px-0 lg:py-20"
    >
      <TestimonialsHeader />
      <div className="relative mt-8 w-full max-w-2xl lg:mt-[72px] lg:max-w-none">
        {/* Left overlay gradient */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 hidden h-[464px] w-[100px] bg-gradient-to-r from-black to-transparent opacity-90 lg:block" />
        {/* Right overlay gradient */}
        <div className="pointer-events-none absolute top-0 right-0 z-10 hidden h-[464px] w-[100px] bg-gradient-to-l from-black to-transparent opacity-90 lg:block" />
        <TestimonialsSwiper
          names={testimonialNames.slice(0, 6)}
          slidesPerView={1.05}
          breakpoints={{
            768: {
              slidesPerView: 1.1,
            },
            1024: {
              slidesPerView: 3.7,
              slidesOffsetBefore: 197,
              slidesOffsetAfter: 197,
            },
          }}
        />
        <div className="mt-5 hidden lg:block">
          <TestimonialsSwiper
            names={testimonialNames.slice(6)}
            slidesPerView={3.7}
            slidesOffsetBefore={3}
            slidesOffsetAfter={3}
          />
        </div>
      </div>
    </section>
  );
}

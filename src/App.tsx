import BrandsSection from "@/components/brands/BrandsSection";
import FeaturesBreakdownSection from "@/components/features-breakdown/FeaturesBreakdownSection";
import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <Navbar />
      <main className="flex-1 pt-18 lg:pt-20">
        <HeroSection />
        <BrandsSection />
        <FeaturesBreakdownSection />
      </main>
    </div>
  );
}

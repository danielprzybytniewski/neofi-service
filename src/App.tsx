import BrandsSection from "@/components/brands/BrandsSection";
import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BrandsSection />
      </main>
    </div>
  );
}

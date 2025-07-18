import BlockchainFeatureSection from "@/components/blockchain-feature/BlockchainFeatureSection";
import BrandsSection from "@/components/brands/BrandsSection";
import CTASection from "@/components/cta/CTASection";
import FAQSection from "@/components/faq/FAQSection";
import FeaturesBreakdownSection from "@/components/features-breakdown/FeaturesBreakdownSection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import StatsSection from "@/components/stats/StatsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <Navbar />
      <main className="flex-1 pt-18 lg:pt-20">
        <HeroSection />
        <BrandsSection />
        <FeaturesBreakdownSection />
        <StatsSection />
        <BlockchainFeatureSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
      <Toaster />
    </div>
  );
}

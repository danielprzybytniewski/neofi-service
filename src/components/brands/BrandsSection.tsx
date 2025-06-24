import BrandsCarousel from "@/components/brands/BrandsCarousel";
import BrandsRow from "@/components/brands/BrandsRow";
import Typography from "@/components/shared/Typography";
import { brandLogos } from "@/constants/brands";

export default function BrandsSection() {
  return (
    <section id="brands" className="bg-primary px-5 py-10 lg:px-0">
      <div className="flex flex-col items-center gap-8 lg:gap-10">
        <Typography>Satisfied partners</Typography>
        <BrandsCarousel brandLogos={brandLogos} />
        <div className="flex flex-col items-center gap-4 lg:hidden">
          <BrandsRow brandLogos={brandLogos.slice(0, 3)} gap={20} />
          <BrandsRow brandLogos={brandLogos.slice(3, 5)} gap={40} />
        </div>
      </div>
    </section>
  );
}

import FooterCredits from "@/components/footer/FooterCredits";
import FooterLeft from "@/components/footer/FooterLeft";
import FooterRight from "@/components/footer/FooterRight";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center px-5 pt-10 lg:px-15 lg:pt-20 xl:px-30">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:justify-center lg:gap-[126px] lg:py-10">
        <FooterLeft />
        <FooterRight />
      </div>
      <FooterCredits />
    </footer>
  );
}

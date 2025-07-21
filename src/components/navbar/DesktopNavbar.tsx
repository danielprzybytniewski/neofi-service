import logoImg from "@/assets/images/logo.svg";
import NavbarButtons from "@/components/navbar/NavbarButtons";
import NavbarItems from "@/components/navbar/NavbarItems";
import { useScrollDetection } from "@/hooks/useScrollDetection";
import { cn } from "@/lib/utils";

export default function DesktopNavbar() {
  const isScrolled = useScrollDetection();

  return (
    <nav
      className={cn(
        "bg-background fixed top-0 z-50 hidden h-20 w-full max-w-[1440px] px-15 py-5 lg:block xl:px-30",
        isScrolled && "left-0 max-w-full shadow-lg",
      )}
    >
      <div className="container mx-auto flex h-full max-w-[1200px] items-center justify-between">
        <a href="#hero">
          <img src={logoImg} alt="NeoFi Logo" />
        </a>
        <div className="flex items-center space-x-10">
          <NavbarItems />
        </div>
        <div className="flex items-center space-x-4">
          <NavbarButtons />
        </div>
      </div>
    </nav>
  );
}

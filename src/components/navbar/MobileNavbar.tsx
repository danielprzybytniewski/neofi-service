import { useState } from "react";
import logoImg from "@/assets/images/logo.svg";
import mobileMenuImg from "@/assets/images/mobile-menu.svg";
import MobileNavbarItems from "@/components/navbar/MobileNavbarItems";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrollDetection } from "@/hooks/useScrollDetection";
import { cn } from "@/lib/utils";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollDetection();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "bg-background fixed top-0 left-0 z-50 h-18 w-full p-5 lg:hidden",
        isScrolled && "shadow-lg",
      )}
    >
      <div className="flex h-full items-center justify-between">
        <a href="#hero">
          <img src={logoImg} alt="NeoFi Logo" />
        </a>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <img src={mobileMenuImg} alt="Mobile Menu" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-primary border-muted border-l p-6"
          >
            <SheetHeader className="border-muted border-b">
              <SheetTitle className="flex items-center justify-center">
                <a href="#hero">
                  <img src={logoImg} alt="NeoFi Logo" />
                </a>
              </SheetTitle>
              <SheetDescription className="text-secondary mt-10 text-center text-lg">
                Menu
              </SheetDescription>
            </SheetHeader>
            <MobileNavbarItems handleClose={handleClose} />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

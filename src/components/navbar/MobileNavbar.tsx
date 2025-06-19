import { useState } from "react";
import logo from "@/assets/images/logo.svg";
import mobileMenu from "@/assets/images/mobile-menu.svg";
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

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="h-18 p-5 lg:hidden">
      <div className="flex h-full items-center justify-between">
        <img src={logo} alt="NeoFi Logo" />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <img src={mobileMenu} alt="Mobile Menu" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-primary border-muted border-l p-6"
          >
            <SheetHeader className="border-muted border-b">
              <SheetTitle className="flex items-center justify-center">
                <img src={logo} alt="NeoFi Logo" />
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

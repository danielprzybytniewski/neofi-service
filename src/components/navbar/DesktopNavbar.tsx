import logo from "@/assets/images/logo.svg";
import NavbarButtons from "@/components/navbar/NavbarButtons";
import NavbarItems from "@/components/navbar/NavbarItems";

export default function DesktopNavbar() {
  return (
    <nav className="hidden h-20 px-[60px] py-5 lg:block xl:px-[120px]">
      <div className="container mx-auto flex h-full items-center justify-between">
        <img src={logo} alt="NeoFi Logo" />
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

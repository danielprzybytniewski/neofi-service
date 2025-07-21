import { navItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function NavbarItems() {
  return (
    <>
      {navItems.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          className={cn(
            "text-primary-foreground text-base font-normal transition-colors duration-200 hover:text-gray-500 focus:text-gray-500 active:text-gray-500",
            index === 0 &&
              "text-foreground hover:text-gray-400 focus:text-gray-400 active:text-gray-400",
          )}
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

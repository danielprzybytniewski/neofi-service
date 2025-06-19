import { motion } from "framer-motion";
import NavbarButtons from "@/components/navbar/NavbarButtons";
import {
  navbarItemVariants,
  staggerChildren,
} from "@/constants/framerMotionVariants";
import { navItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

type MobileNavbarItemsProps = {
  handleClose: () => void;
};

export default function MobileNavbarItems({
  handleClose,
}: MobileNavbarItemsProps) {
  return (
    <motion.div
      className="flex flex-col space-y-8"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="flex flex-col items-center space-y-4">
        {navItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            className={cn(
              "text-primary-foreground text-base font-normal transition-colors duration-200 hover:text-gray-500",
              index === 0 && "text-foreground hover:text-gray-400",
            )}
            onClick={handleClose}
            variants={navbarItemVariants}
          >
            {item.label}
          </motion.a>
        ))}
      </div>
      <motion.div
        className="border-muted flex flex-col items-center space-y-4 border-t pt-4"
        variants={navbarItemVariants}
      >
        <NavbarButtons handleClose={handleClose} />
      </motion.div>
    </motion.div>
  );
}

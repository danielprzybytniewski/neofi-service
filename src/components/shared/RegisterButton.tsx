import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  registerButtonHover,
  registerButtonOutlineHover,
  registerButtonOutlineTap,
  registerButtonTap,
} from "@/constants/framerMotionVariants";
import { cn } from "@/lib/utils";

const registerButtonVariants = cva(
  "text-background bg-secondary inline-flex cursor-pointer items-center justify-center rounded-[40px] px-6 font-normal transition-colors duration-200 hover:bg-lime-500",
  {
    variants: {
      variant: {
        square: "rounded-none",
        outline:
          "text-foreground bg-transparent hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:text-gray-200",
      },
      size: {
        default: "h-12 lg:h-13 py-4 text-base lg:text-lg",
        sm: "h-10 py-2 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type RegisterButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof registerButtonVariants>;

export default function RegisterButton({
  children = "Get Started",
  variant,
  size,
  className,
  ...props
}: RegisterButtonProps) {
  const hoverAnimation =
    variant === "outline" ? registerButtonOutlineHover : registerButtonHover;

  const tapAnimation =
    variant === "outline" ? registerButtonOutlineTap : registerButtonTap;
  return (
    <motion.div whileHover={hoverAnimation} whileTap={tapAnimation}>
      <Button
        className={cn(registerButtonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}

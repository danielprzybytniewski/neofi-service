import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  largeTitle:
    "text-foreground text-[40px] lg:text-[64px] leading-[110%] font-medium lg:font-bold",
  title: "text-foreground text-[28px] lg:text-5xl leading-[100%] font-normal",
  smallTitle: "text-[40px] leading-[100%] font-normal",
  subtitle:
    "text-primary-foreground font-inter text-base lg:text-xl leading-[140%] font-normal",
  buttonText: "text-background text-lg font-normal",
  text: "text-primary-foreground text-base font-normal",
  smallText: "text-primary-foreground text-sm font-normal",
  caption: "text-secondary-foreground text-xs font-normal",
} as const;

type Variant = keyof typeof variants;

type AllowedTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "small";

type TypographyProps = {
  component?: AllowedTags;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function Typography({
  component = "p",
  variant = "text",
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = component;

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}

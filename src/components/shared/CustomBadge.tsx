import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Typography from "@/components/shared/Typography";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const customBadgeVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-3xl border border-muted bg-transparent",
  {
    variants: {
      variant: {
        base: "py-3 px-5",
        small: "py-2.5 px-3",
      },
    },
    defaultVariants: {
      variant: "base",
    },
  },
);

type CustomBadgeProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof customBadgeVariants> & {
    children: ReactNode;
    icon?: string;
    iconAlt?: string;
  };

export default function CustomBadge({
  children,
  variant,
  className,
  icon,
  iconAlt,
  ...props
}: CustomBadgeProps) {
  return (
    <Badge
      className={cn(customBadgeVariants({ variant }), className)}
      {...props}
    >
      {icon && (
        <img
          src={icon}
          alt={iconAlt || ""}
          className="h-[9px] w-[9px] flex-shrink-0"
        />
      )}
      <Typography variant="smallText" className="text-secondary">
        {children}
      </Typography>
    </Badge>
  );
}

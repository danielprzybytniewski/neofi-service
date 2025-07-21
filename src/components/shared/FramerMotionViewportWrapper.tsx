import type { ReactNode } from "react";
import {
  motion,
  type TargetAndTransition,
  type Variants,
  type ViewportOptions,
} from "framer-motion";

type FramerMotionViewportWrapperProps = {
  variants?: Variants;
  children: ReactNode;
  className?: string;
  initial?: string | boolean | TargetAndTransition;
  whileInView?: string | TargetAndTransition;
  viewport?: ViewportOptions;
};

export default function FramerMotionViewportWrapper({
  variants,
  children,
  className = "",
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true },
}: FramerMotionViewportWrapperProps) {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import type { Variants } from "framer-motion";

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const navbarItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const registerButtonHover = {
  x: [0, -2, 2, -2, 2, 0],
  transition: { duration: 0.4 },
};

export const registerButtonTap = {
  scale: 0.95,
};

export const registerButtonOutlineHover = {
  scale: 1.05,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 },
};

export const registerButtonOutlineTap = {
  scale: 0.98,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

const createVariant = (
  direction: "x" | "y",
  offset: number,
  delay: number = 0.2,
  duration: number = 0.5,
): Variants => {
  return {
    hidden: { opacity: 0, [direction]: offset },
    visible: {
      opacity: 1,
      [direction]: 0,
      transition: { duration, delay },
    },
  } as Variants;
};

export const heroContentVariant = createVariant("y", -50);
export const heroImageVariant = createVariant("y", 50, 0.7);
export const blockchainFeatureHeaderVariant = createVariant("y", -45, 0.2, 0.4);
export const blockchainFeatureImageVariant = createVariant("x", -45, 0.6, 0.4);
export const blockchainFeatureCardVariant = createVariant("x", 45, 1, 0.4);
export const faqHeaderVariant = createVariant("y", -30);
export const faqAccordionVariant = createVariant("y", 30, 0.7);

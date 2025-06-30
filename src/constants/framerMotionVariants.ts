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

export const heroContentVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

export const heroImageVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.7 },
  },
};

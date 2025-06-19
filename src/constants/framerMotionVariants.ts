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

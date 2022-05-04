export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100vw 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 95vw 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const navListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const menuItemsVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const featuresVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const featureList = {
  hidden: { opacity: 0, y: "40px" },
  show: { opacity: 1, y: "0" },
};

export const potentialUserLeft = {
  hidden: { opacity: 0, x: "-100%" },
  show: { opacity: 1, x: "0" },
};

export const potentialUserRight = {
  hidden: { opacity: 0, x: "100%" },
  show: { opacity: 1, x: "0" },
};

export const potentialUserImages = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

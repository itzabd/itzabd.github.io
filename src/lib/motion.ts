export const ease = {
  // Emil Kowalski recommended custom bezier curves
  out: [0.23, 1, 0.32, 1] as const, // fast initial acceleration, smooth deceleration (entrances)
  inOut: [0.77, 0, 0.175, 1] as const, // natural on-screen movement / morphing
  drawer: [0.32, 0.72, 0, 1] as const, // natural slide-in
};

export const spring = {
  // Apple-style subtle spring physics
  subtle: { type: "spring", stiffness: 260, damping: 25 },
  snappy: { type: "spring", stiffness: 380, damping: 30 },
  bouncy: { type: "spring", stiffness: 400, damping: 20 },
} as const;

export const fadeIn = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: ease.out },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const cardHover = {
  whileHover: { y: -3, transition: { duration: 0.2, ease: ease.out } },
  whileTap: { scale: 0.98, transition: { duration: 0.1 } },
};

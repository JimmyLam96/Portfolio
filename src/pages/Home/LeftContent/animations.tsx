export const EmojiVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
    rotate: [0, 15, -15, 15, -15, 0],
  },
};

export const CircleVariants = {
  hidden: { opacity: 0, y: 500 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1.2,
      type: 'spring',
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  scroll: {
    y: 100,
  },
};

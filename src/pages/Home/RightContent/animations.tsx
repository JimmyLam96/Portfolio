import { SpringAnimation } from '../../../config/DefaultVariants';

export const BorderVariants = {
  initial: {
    x: 20,
    y: 20,
  },
  hover: {
    x: 30,
    y: 30,
  },
};

export const IconContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

export const IconVariants = {
  hidden: { opacity: 0, y: 500 },
  show: {
    y: 0,
    ...SpringAnimation,
  },
};

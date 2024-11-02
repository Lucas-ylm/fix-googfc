export const line = {
  initial: {
    pathLength: 0,
  },
  enter: {
    pathLength: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      delay: 0.75,
      ease: "easeIn",
    },
  },
  exit: {
    pathLength: 0,
    transition: {
      type: "tween",
      duration: 0.2,
      delay: 0,
      ease: "easeOut",
    },
  },
};

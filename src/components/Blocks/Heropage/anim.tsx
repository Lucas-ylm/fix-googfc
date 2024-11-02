export const image = {
  initial: {
    x: "100%",
  },
  enter: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0,
      ease: [0, 0.05, -0.01, 0.9],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 1,
      delay: 0,
      ease: "easeInOut",
    },
  },
};

export const line = {
  initial: {
    pathLength: 0,
  },
  enter: {
    pathLength: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.5,
      ease: "easeIn",
    },
  },
  exit: {
    pathLength: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0,
      ease: "easeOut",
    },
  },
};

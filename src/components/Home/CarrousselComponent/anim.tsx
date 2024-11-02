export const drawSecondLine = {
  initial: {
    y1: 0,
    y2: 0,
  },
  enter: {
    y1: 0,
    y2: "100%",
    transition: {
      type: "tween",
      duration: 1,
      delay: 1.2,
      ease: "easeIn",
    },
  },
};

export const imageFromRight = (isFirst: boolean, isToggled: boolean) => {
  return {
    initial: {
      x: "100%",
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: isFirst || isToggled ? 1.2 : 0.5,
        delay: isFirst || isToggled ? 1 : 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      x: 0,
      opacity: 1,
      transition: {
        duration: isFirst || isToggled ? 0.8 : 0.5,
        ease: "easeInOut",
        delay: isFirst || isToggled ? 1.2 : 1,
      },
    },
  };
};

export const animPagination = {
  initial: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
  enter: {
    opacity: 1,
    x: "-50%",
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

// Animation for text transitions
export const sentenceVariants = (isFirst: boolean, isToggled: boolean) => {
  return {
    initial: {
      y: "200%",
    },
    enter: {
      y: 0,
      transition: {
        type: "tween",
        duration: 1,
        delay: isFirst ? 1.8 : 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-200%",
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
        delay: isToggled ? 0 : 2.5,
      },
    },
  };
};

export const animateButton = (isFirst: boolean, isToggled: boolean) => {
  return {
    initial: {
      y: "100%",
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: isFirst ? 1 : 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-200%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
        delay: isToggled ? 0 : 2.5,
      },
    },
  };
};

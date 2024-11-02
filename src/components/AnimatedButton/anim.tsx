export const buttonAnimationBlack = (isHover = false) => {
  return {
    initial: {
      color: "#000",
    },
    enter: {
      color: "#000",
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hover: {
      color: isHover ? "#fff" : "#789654",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
};

export const backgroundAnimationBlack = (isHover = false) => {
  return {
    hover: {
      height: isHover ? 200 : 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
};

export const buttonAnimation = (isHover = false) => {
  return {
    initial: {
      color: "#fff",
    },
    enter: {
      color: "#fff",
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hover: {
      color: isHover ? "#000" : "#fff",
      transition: {
        duration: 0.3,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
};

export const backgroundAnimation = (isHover = false) => {
  return {
    hover: {
      height: isHover ? 200 : 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
};

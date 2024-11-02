export const maskImageOnTop = {
    initial: {
        y: "-200%",
        transition: {
            type: "tween",
            duration: 0.5,
            delay: 0,
            ease: "easeInOut",
        },
    },
    enter: {
        y: "0%",
        transition: {
            duration: 1,
            delay: 0,
            ease: "easeOut",
        },
    },
    exit: {
        y: "-200%",
        transition: {
            duration: 1,
            delay: 1.5,
            ease: "easeOut",
        },
    },
};

export const drawLine = (isScrolled: boolean) => {
    return {
        initial: {
            y1: "2%",
            y2: "2%",
        },
        enter: {
            y1: "2%",
            y2: "100%",
            transition: {
                type: "tween",
                duration: 1,
                delay: isScrolled ? 0 : 0.5,
                ease: "easeIn",
            },
        },
    };
};

export const drawLineDown = {
    initial: {
        y1: "27%",
        y2: "27%",
    },
    enter: {
        y1: "100%",
        y2: "100%",
        transition: {
            type: "tween",
            duration: 1,
            delay: 1,
            ease: "easeIn",
        },
    },
};

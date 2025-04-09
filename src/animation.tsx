import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  zeroEightShow: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  oneAndHalfShow: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 1.5,
    },
  },
  leftToRight: {
    x: "-20%",
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

// export function useInViewAnimation(threshold = 0.5) {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold,
//   });
//   return { ref, inView };
// }

export function useScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0.8, 1], [0, 200]);
  const smoothBgY = useSpring(bgY, { stiffness: 100, damping: 25 });

  return { ref, smoothBgY };
}

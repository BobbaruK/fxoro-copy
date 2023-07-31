const animationDuration = useAnimationDuration();
const animationEase = useAnimationEase();

export const gsapTimelineDefaults = () => {
  return {
    duration: animationDuration,
    ease: animationEase,
  };
};

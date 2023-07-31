/**
 * useAnimationDuration() sets the duration of the
 * animation.
 *
 * if preffered reduce method is "reduce" @returns 0.005
 * else if preffered reduce method is "no-preference" @returns 0.46
 *
 * @returns 0.005 | 0.46
 */

import { usePreferredReducedMotion } from "@vueuse/core";
const preferredMotion = usePreferredReducedMotion();

export const useAnimationDuration = () => {
  // console.log(preferredMotion.value);

  return preferredMotion.value === "reduce" ? 0.005 : .32;
};

/**
 * useMobileOpenTrigger() is used by 2 components
 *  1. MenuBurger
 *  2. MenuNavigation
 * and counts how many times the menu is opened
 * and closed. On every iteration the open or closed
 * animation is triggered.
 *
 * @returns number
 *
 */
export const useMobileOpenTrigger = () =>
  useState<number>("mobileOpenTrigger", () => 0);

export const useLogoFXORO = () =>
  useState<string>(
    "logoFXORO",
    () =>
      "<i style='color: var(--clr-brandPrimaryColor); font-style: inherit; font-weight: bold;'>FX<i style='color: var(--clr-brandSecondaryColor); font-style: inherit;'>ORO</i></i>"
  );

export const useFooterPercent = () =>
  useState<number>("footerPercent", () => 77.58);

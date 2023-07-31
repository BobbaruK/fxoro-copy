export const useCheckIfMobile = (
  viewPortWidth: number,
  menuBreakpoint: number
): boolean => {
  if (viewPortWidth <= menuBreakpoint) {
    return true;
  }
  return false;
};

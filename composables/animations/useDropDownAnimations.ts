// export default (set?: boolean) => {
//   if (set) {
//     return {
//       height: 0,
//       // scaleY: 0,
//       autoAlpha: 0,
//     };
//   }
//   return {
//     height: "auto",
//     // scaleY: 0,
//     autoAlpha: 1,
//   };
// };

class ddAnim {
  set() {
    return {
      height: 0,
      // scaleY: 0,
      autoAlpha: 0,
    };
  }

  open() {
    return {
      height: "auto",
      // scaleY: 1,
      autoAlpha: 1,
    };
  }
}

export const useDropDownAnimations = new ddAnim();

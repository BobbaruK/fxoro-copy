const loaderPropValidation = () => {
  const values = [
    "audio",
    "ball-triangle",
    "bars",
    "circles",
    "grid",
    "hearts",
    "oval",
    "puff",
    "rings",
    "spinning-circles",
    "tail-spin",
    "three-dots",
  ];
  const def = "rings";

  return {
    default: def,
    validator(value: string) {
      // The value must match one of these strings
      return values.includes(value);
    },
  };
};

export default loaderPropValidation;

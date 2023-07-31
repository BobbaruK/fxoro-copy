const caretPropValidation = () => {
  const values = ["caret-down", "caret-down-bold"];
  const def: "caret-down" | "caret-down-bold" = "caret-down";

  return {
    default: def,
    validator(value: string): boolean {
      // The value must match one of these strings
      return values.includes(value);
    },
  };
};

export default caretPropValidation;

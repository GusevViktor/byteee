export const scrollTo = (ref: any = {}) => {
  ref?.current?.scrollIntoView({ behavior: "smooth" });
};

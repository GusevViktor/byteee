export const getStringNotBreakingSpace = (strings: string[], lineBreak = false) => (
  strings.map(str => (
    str.replaceAll(" ", "\u00A0")
  )).join(lineBreak ? "\n" : " ")
);

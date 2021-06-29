export let colors = {
  color: "#797979",
  black: "#000",
  activeColor: "#01c68e",
  transparentActiveColor: "#01c68e47",
  lightGray: "#efefef",
  white: "#fff",
  transparentWhite: "rgba(255, 255, 255, 0.5)",
  borderColor: "#ccc",
  darkColor: "#202033",
  danger: "#ff7373",
  transparentDark: "rgba(0, 0, 0, 0.7)",
  disabled: "#086a4e78",
  red: "#c31d28",
  transparentRed: "#c31d285c",
  lightBlue: "rgb(232, 244, 253)",
  blue: "#2196f3",
  lightOrange: "rgb(255, 244, 229)",
  orange: "#ff9800",
};

export let displayFlex = `
    display: flex;
    display: -webkit-flex;
    align-items: center;
`;
export let displayGrid = `
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
`;

const breakpoints = {
  xs: 400,
  sm: 600,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

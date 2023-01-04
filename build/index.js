const { generateIcons } = require("./generator");

generateIcons({
  template: "./build/template.ejs",
  destination: "./lib/icons",
  source: "./source/icons/**.svg",
  performExtraAttributeOperations: (attribute, element) => {
    if (element.attr(attribute) === "none") return;
    if (!["fill", "stroke", "strokeWidth"].includes(attribute)) return;

    element.attr(attribute, "placeholder");
  },
  addExtraReplacements: (svgString) =>
    svgString
      .replace('stroke="placeholder"', "g", "stroke={color}")
      .replace('strokeWidth="placeholder"', "strokeWidth={strokeWidth}")
      .replace('fill="placeholder"', "g", "fill={color}"),
  getExportString: (componentName) =>
    `export * from "./icons/${componentName}";\r\n`,
  getListString: (iconsList) =>
    `export const iconsList = ${JSON.stringify(iconsList)}`,
});

generateIcons({
  template: "./build/template.ejs",
  destination: "./lib/logos",
  source: "./source/logos/**.svg",
  getExportString: (componentName) =>
    `export * from "./logos/${componentName}";\r\n`,
  getListString: (iconsList) =>
    `export const logosList = ${JSON.stringify(iconsList)}`,
});

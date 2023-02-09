const camelcase = require("camelcase");
const { generateIcons } = require("./generator");

generateIcons({
  template: "./build/icon-template.ejs",
  destination: "./lib/icons",
  source: "./source/icons/**.svg",
  performExtraAttributeOperations: (attribute, element) => {
    if (element.attr(attribute) === "none") return;
    if (["fill", "stroke"].includes(attribute)) {
      element.attr(camelcase(attribute), "placeholder");
    }
  },
  addExtraReplacements: (svgString) =>
    svgString
      .replaceAll('stroke="placeholder"', "stroke={color}")
      .replaceAll('strokeWidth="1.5"', "strokeWidth={strokeWidth}")
      .replaceAll('fill="placeholder"', "fill={color}"),
});

generateIcons({
  template: "./build/logo-template.ejs",
  destination: "./lib/logos",
  source: "./source/logos/**.svg",
});

generateIcons({
  template: "./build/app-icon-template.ejs",
  destination: "./lib/app-icons",
  source: "./source/appIcons/**.svg",
});

generateIcons({
  template: "./build/typeface-logo-template.ejs",
  destination: "./lib/typeface-logos",
  source: "./source/typefaceLogos/**.svg",
  addExtraReplacements: (svgString) => svgString.replace("width={size}", "width={width}").replace("height={size}", "height={height}"),
});

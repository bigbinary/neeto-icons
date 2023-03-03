const camelcase = require("camelcase");
const { generateIcons } = require("./generator");

generateIcons({
  template: "./build/icon-template.ejs",
  destination: "./src/icons",
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
  destination: "./src/logos",
  source: "./source/logos/**.svg",
});

generateIcons({
  template: "./build/app-icon-template.ejs",
  destination: "./src/app-icons",
  source: "./source/appIcons/**.svg",
});

generateIcons({
  template: "./build/typeface-logo-template.ejs",
  destination: "./src/typeface-logos",
  source: "./source/typefaceLogos/**.svg",
  addExtraReplacements: (svgString) => svgString.replace("width={size}", "width={width}").replace("height={size}", "height={height}"),
});

generateIcons({
  template: "./build/misc-template.ejs",
  destination: "./src/misc",
  source: "./source/misc/**.svg",
});

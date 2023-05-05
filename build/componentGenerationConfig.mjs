import iconTemplate from "./templates/icon-template.mjs";
import logoTemplate from "./templates/logo-template.mjs";
import appIconTemplate from "./templates/app-icon-template.mjs";
import typefaceLogoTemplate from "./templates/typeface-logo-template.mjs";
import miscTemplate from "./templates/misc-template.mjs";

const plugins = [
  "@svgr/plugin-svgo",
  "@svgr/plugin-jsx",
  "@svgr/plugin-prettier",
];

const componentGenerationConfig = [
  {
    options: {
      icon: true,
      template: iconTemplate,
      plugins,
      replaceAttrValues: {
        "placeholder": "{color}",
        "strokeWidthPlaceholder": "{strokeWidth}",
      },
      svgProps: { width: "{size}", height: "{size}" },
    },
    additionalTransformations: (attribute, element) => {
    if (element.attr(attribute) === "none") return;
    if (element.attr(attribute) === "stroke-width") {
      element.attr(attribute, "strokeWidthPlaceholder")
    };
    if (["fill", "stroke"].includes(attribute)) {
      element.attr(attribute, "placeholder");
    }},
    destination: "./generate/icons",
    source: "./source/icons/**.svg",
  },
  {
    options: {
      icon: true,
      template: logoTemplate,
      plugins,
      svgProps: { width: "{size}", height: "{size}" },
    },
    destination: "./generate/logos",
    source: "./source/logos/**.svg",
  },
  {
    options: {
      icon: true,
      template: appIconTemplate,
      plugins,
      svgProps: { width: "{size}", height: "{size}" },
    },
    destination: "./generate/app-icons",
    source: "./source/appIcons/**.svg",
  },
  {
    options: {
      icon: true,
      template: typefaceLogoTemplate,
      plugins,
      svgProps: { width: "{width}", height: "{height}" },
    },
    destination: "./generate/typeface-logos",
    source: "./source/typefaceLogos/**.svg",
  },
  {
    options: {
      icon: true,
      template: miscTemplate,
      plugins,
      svgProps: { width: "{size}", height: "{size}" },
    },
    destination: "./generate/misc",
    source: "./source/misc/**.svg",
  },
];

export default componentGenerationConfig;

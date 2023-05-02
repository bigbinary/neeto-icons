import iconTemplate from "./build/icon-template.mjs";
import logoTemplate from "./build/logo-template.mjs";
import appIconTemplate from "./build/app-icon-template.mjs";
import typefaceLogoTemplate from "./build/typeface-logo-template.mjs";
import miscTemplate from "./build/misc-template.mjs";

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
        "#68737D": "{color}",
        "#fff": "{color}",
        "#C2C8CC": "{color}",
        "#F8F9F9": "{color}",
        "#F3CD82": "{color}",
        "#49545C": "{color}",
        "#323232": "{color}",
        "#276EF1": "{color}",
        "#2F3941": "{color}",
        "#00BA88": "{color}",
        "#87929D": "{color}",
        "#F56A58": "{color}",
        "#4B2876": "{color}",
      },
      svgProps: { width: "{size}", height: "{size}" },
    },
    additionalTransformation: (string) =>
      string.replaceAll("strokeWidth={1.5}", "strokeWidth={strokeWidth}"),
    destination: "./src/icons",
    source: "./source/icons/**.svg",
  },
  {
    options: {
      icon: true,
      template: logoTemplate,
      plugins,
      svgProps: { width: "{size}", height: "{size}" },
    },
    destination: "./src/logos",
    source: "./source/logos/**.svg",
  },
  {
    options: {
      icon: true,
      template: appIconTemplate,
      plugins,
      svgProps: { width: "{size}", height: "{size}" },
    },
    destination: "./src/app-icons",
    source: "./source/appIcons/**.svg",
  },
  {
    options: {
      icon: true,
      template: typefaceLogoTemplate,
      plugins,
      svgProps: { width: "{width}", height: "{height}" },
    },
    destination: "./src/typeface-logos",
    source: "./source/typefaceLogos/**.svg",
  },
  {
    options: {
      icon: true,
      template: miscTemplate,
      plugins,
      svgProps: { width: "{size}", height: "{size}" },
    },
    destination: "./src/misc",
    source: "./source/misc/**.svg",
  },
];

export default componentGenerationConfig;

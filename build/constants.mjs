import iconTemplate from "./templates/icon-template.mjs";
import logoTemplate from "./templates/logo-template.mjs";
import appIconTemplate from "./templates/app-icon-template.mjs";
import typefaceLogoTemplate from "./templates/typeface-logo-template.mjs";
import miscTemplate from "./templates/misc-template.mjs";
import elementsTemplate from "./templates/elements-template.mjs";

const plugins = [
  "@svgr/plugin-svgo",
  "@svgr/plugin-jsx",
  "@svgr/plugin-prettier",
];

const commonProps = {
  svgoConfig: {
    plugins: [
      {
        name: "prefixIds",
        active: true,
      }
    ]
  },
}

const ICON_TYPE ="type IconProps = {\r\n\tsize?: string | number;\r\n\tstrokeWidth?: string | number;\r\n\tcolor?: string;\r\n} & React.SVGProps<SVGSVGElement>;\r\n"
const TYPEFACE_ICON_TYPE = "type IconProps = { width?: string | number, height?: string | number } & React.SVGProps<SVGSVGElement>;\r\n";
const OTHER_ICON_TYPE = "type IconProps = { size?: string | number } & React.SVGProps<SVGSVGElement>;\r\n";
const ELEMENTS_ICON_TYPE = "type IconProps = { width?: string | number, height?: string | number } & React.SVGProps<SVGSVGElement>;\r\n";

export const ENCODING_STANDARD = "utf-8";

export const COMPONENT_GENERATION_CONFIG = [
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
      ...commonProps,
    },
    additionalTransformations: (attribute, element) => {
    if (element.attr(attribute) === "none") return;
    if (attribute === "stroke-width") {
      element.attr(attribute, "strokeWidthPlaceholder")
    };
    if (["fill", "stroke"].includes(attribute)) {
      element.attr(attribute, "placeholder");
    }},
    destination: "./generate/icons",
    source: "./source/icons/**.svg",
    iconType: ICON_TYPE,
  },
  {
    options: {
      icon: true,
      template: logoTemplate,
      plugins,
      svgProps: { width: "{size}", height: "{size}" },
      ...commonProps,
    },
    destination: "./generate/logos",
    source: "./source/logos/**.svg",
    iconType: OTHER_ICON_TYPE,
  },
  {
    options: {
      icon: true,
      template: appIconTemplate,
      plugins,
      svgProps: { width: "{size}", height: "{size}" },
      ...commonProps,
    },
    destination: "./generate/app-icons",
    source: "./source/appIcons/**.svg",
    iconType: OTHER_ICON_TYPE,
  },
  {
    options: {
      icon: true,
      template: typefaceLogoTemplate,
      plugins,
      svgProps: { width: "{width}", height: "{height}" },
      ...commonProps,
    },
    destination: "./generate/typeface-logos",
    source: "./source/typefaceLogos/**.svg",
    iconType: TYPEFACE_ICON_TYPE,
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
    iconType: OTHER_ICON_TYPE,
  },
  {
    options: {
      icon: true,
      template: elementsTemplate,
      plugins,
      svgProps: { width: "{width}", height: "{height}" },
    },
    destination: "./generate/elements",
    source: "./source/elements/**.svg",
    iconType: ELEMENTS_ICON_TYPE,
  },
];

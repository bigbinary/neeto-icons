import { generateIcons } from "./generator.mjs";

export const generateComponents = (options = {}) => {
  return {
    name: "generate-components",
    buildStart: async () => {
      await options.forEach((option) => generateIcons(option));
    },
  };
};

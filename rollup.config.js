import path from "path";
import glob from "glob";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import analyze from "rollup-plugin-analyzer";
import babel from "rollup-plugin-babel";
import { generateComponents } from "./build/index.mjs";
import componentGenerationConfig from "./build/componentGenerationConfig.mjs";

const DIST_PATH = path.resolve(__dirname, "dist");
export const extensions = [".js", ".jsx"];

// Compile index & compile separately every elements exported by it.
const input = Object.fromEntries([
  ["neeto-icons", "./src/icons/index.js"],
  ["neeto-logos", "./src/logos/index.js"],
  ["app-icons", "./src/app-icons/index.js"],
  ["typeface-logos", "./src/typeface-logos/index.js"],
  ["misc", "./src/misc/index.js"],
  ...glob.sync("./src/icons/*").map((componentPath) => {
    const componentName = path.basename(componentPath);
    return [componentName, componentPath];
  }),
]);

// Export non index chunks in `esm/_internal` (enables tree shaking but detracts user from importing them directly).
const renameFile = (info, format) => {
  let name = info.name;
  if (
    ![
      "neeto-icons",
      "neeto-logos",
      "app-icons",
      "typeface-logos",
      "misc",
    ].includes(name)
  ) {
    name = `_internal/${name}`;
  }
  if (name.includes("internal")) {
    const nameWithoutExtension = name.includes(".")
      ? name.substr(0, name.lastIndexOf("."))
      : name;
    return format === "esm"
      ? `${nameWithoutExtension}.js`
      : `${nameWithoutExtension}.cjs.js`;
  }
  return format === "esm" ? `${name}.js` : `${name}.cjs.js`;
};

const formats = ["esm", "cjs"];

const output = formats.map((format) => ({
  format,
  sourcemap: true,
  dir: path.join(DIST_PATH),
  chunkFileNames: (info) => renameFile(info, format),
  entryFileNames: (info) => renameFile(info, format),
}));

export default {
  input,
  output,
  plugins: [
    // generate components
    generateComponents(componentGenerationConfig),
    // Analyze created bundle.
    analyze(),
    // Resolve source files.
    resolve({ browser: true, extensions }),
    // Resolve commonjs dependencies.
    commonjs({ include: /node_modules/ }),
    babel({
      extensions,
      exclude: /node_modules/,
      presets: [
        ["@babel/preset-env", { targets: "defaults" }],
        "@babel/preset-react",
      ],
    }),
  ],
};

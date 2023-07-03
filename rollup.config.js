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
const input = [
  ["neeto-icons", "./generate/icons/index.js"],
  ["neeto-logos", "./generate/logos/index.js"],
  ["app-icons", "./generate/app-icons/index.js"],
  ["typeface-logos", "./generate/typeface-logos/index.js"],
  ["misc", "./generate/misc/index.js"],
  ...glob.sync("./generate/icons/*").map((componentPath) => {
    const componentName = path.basename(componentPath);
    return [componentName, componentPath];
  }),
];


const formats = ["esm", "cjs"];

const plugins = [
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
];

const getOutputFilename = (name, format) =>
 format === "esm" ? `dist/${name}.js` : `dist/${name}.cjs.js`

export default input.map(([filename, pathname]) => ({
  input: pathname,
  plugins,
  output: formats.map((format) => ({
    assetFileNames: "[name][extname]",
    file: getOutputFilename(filename, format),
    format,
    sourcemap: true,
  }))
}));

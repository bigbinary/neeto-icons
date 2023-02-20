import path from "path";
import glob from "glob";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import analyze from "rollup-plugin-analyzer";
import babel from "rollup-plugin-babel";
import cleaner from "rollup-plugin-cleaner";
import { terser } from "rollup-plugin-terser";

const DIST_PATH = path.resolve(__dirname, "dist");
export const extensions = [".js", ".jsx"];

// Compile index & compile separately every elements exported by it.
const input = Object.fromEntries([
  ["neeto-icons", "./lib/icons/index.js"],
  ["neeto-logos", "./lib/logos/index.js"],
  ["app-icons", "./lib/app-icons/index.js"],
  ["typeface-logos", "./lib/typeface-logos/index.js"],
  ["misc", "./lib/misc/index.js"],
  ...glob.sync("./lib/icons/*").map((componentPath) => {
    const componentName = path.basename(componentPath);
    return [componentName, componentPath];
  }),
]);

// Export non index chunks in `esm/_internal` (enables tree shaking but detracts user from importing them directly).
const renameFile = (info) => {
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
  return `${name}.js`;
};

export default {
  input,
  output: {
    format: "esm",
    sourcemap: true,
    dir: path.join(DIST_PATH),
    chunkFileNames: renameFile,
    entryFileNames: renameFile,
  },
  plugins: [
    // Clean dist dir
    cleaner({ targets: [DIST_PATH] }),
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
    terser(),
  ],
};

import fs from "fs";
import glob from "glob";
import uppercamelcase from "uppercamelcase";
import path from "path";
import mkdirp from "mkdirp";
import { transform } from "@svgr/core";

export const generateIcons = async ({
  options = {},
  source = "./source/icons/**.svg",
  additionalTransformation = (string) => string,
  destination = "./src/icons",
}) => {
  try {
    const indexFilePath = path.join(destination, "index.js");

    // make the directory
    const directory = path.parse(indexFilePath).dir;
    await mkdirp(directory);

    // make the index file
    fs.writeFileSync(indexFilePath, "", "utf-8");

    // make the icon folder
    await mkdirp(destination);

    // read the icon source
    glob(source, (err, icons) => {
      if (err) {
        throw err;
      }

      if (icons.length === 0) {
        throw Error(
          "Unable to find any icons. Make sure you use a glob format. [path/**.svg]",
        );
      }

      icons.forEach((iconPath) => {
        const svg = fs.readFileSync(iconPath, "utf-8");
        const iconName = path.basename(iconPath, path.extname(iconPath));
        const componentName = uppercamelcase(iconName);

        const iconDestination = path.join(destination, componentName + ".js");

        const jsCode = additionalTransformation(transform.sync(
          svg,
          options,
          { componentName, filePath: iconDestination },
        ));

        fs.writeFileSync(iconDestination, jsCode, "utf8");

        fs.appendFileSync(
          path.join(destination, "index.js"),
          `export * from "./${componentName}";\r\n`,
          "utf-8",
        );
      });
    });
  } catch (err) {
    console.log(err);
  }
};

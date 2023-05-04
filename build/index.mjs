import fs from "fs";
import glob from "glob";
import uppercamelcase from "uppercamelcase";
import path from "path";
import mkdirp from "mkdirp";
import { transform } from "@svgr/core";
import * as cheerio from "cheerio"

export const generateComponents = (config = {}) => {
  return {
    name: "generate-components",
    buildStart: async () => {
      await config.forEach(({
        options = {},
        source = "./source/icons/**.svg",
        additionalTransformations = (string) => string,
        destination = "./generate/icons",
      }) => {
        try {
          const encodingStandard = "utf-8"
          const indexFilePath = path.join(destination, "index.js");
          const directory = path.parse(indexFilePath).dir;

          // make the directory
          mkdirp.sync(directory);

          // make the index file
          fs.writeFileSync(indexFilePath, "", encodingStandard);

          // make the icon folder
          mkdirp.sync(destination);

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
              let svg = cheerio.load(fs.readFileSync(iconPath, encodingStandard), { xmlMode: true });
              const iconName = path.basename(iconPath, path.extname(iconPath));
              const componentName = uppercamelcase(iconName);
              const importStatement = `export * from "./${componentName}";\r\n`
              const iconDestination = path.join(
                destination,
                componentName + ".js", );

              // perform some santization and specific transformations besides
              // the ones provided to us by svgr
              svg("*").each((_, el) => {
                const element = svg(el)
                if (el.name === "svg") {
                  element.removeAttr("class")
                         .removeAttr("xmlns")
                }
                additionalTransformations(element)
              });

              // generate component code
              const reactComponent = transform.sync(
                svg("svg").toString(),
                options,
                { componentName, filePath: iconDestination },
              );

              // write component to file
              fs.writeFileSync(iconDestination, reactComponent, encodingStandard);
              // append component import statement to the index file
              fs.appendFileSync( indexFilePath, importStatement, encodingStandard );
            });
          });
        } catch (err) {
          console.log(err);
        }
      });
    },
  };
};

import fs from "fs";
import glob from "glob";
import uppercamelcase from "uppercamelcase";
import path from "path";
import mkdirp from "mkdirp";
import { transform } from "@svgr/core";
import * as cheerio from "cheerio";
import { COMPONENT_GENERATION_CONFIG, ENCODING_STANDARD } from "./constants.mjs";

const generateComponents = () => {
  // make the dist folder
  mkdirp.sync("dist");

  COMPONENT_GENERATION_CONFIG.forEach(
    ({
      options = {},
      source = "./source/icons/**.svg",
      additionalTransformations = (string) => string,
      destination = "./generate/icons",
      iconType,
    }) => {
      try {
        const indexFilePath = path.join(destination, "index.js");
        const typeFilePath = path.join("dist", `${destination.split("/").at(-1)}.d.ts`);
        const directory = path.parse(indexFilePath).dir;

        // make the directory
        mkdirp.sync(directory);

        // make the index file
        fs.writeFileSync(indexFilePath, "", ENCODING_STANDARD);

        // make the type file
        fs.writeFileSync(typeFilePath, `import React from "react";\n\n${iconType}\r\n`, ENCODING_STANDARD);

        // make the icon folder
        mkdirp.sync(destination);

        // read the icon source
        glob(source, (err, icons) => {
          if (err) {
            throw err;
          }

          if (icons.length === 0) {
            throw Error(
              "Unable to find any icons. Make sure you use a glob format. [path/**.svg]"
            );
          }

          const components = [];
          icons.forEach((iconPath) => {
            const svg = cheerio.load(
              fs.readFileSync(iconPath, ENCODING_STANDARD),
              { xmlMode: true }
            );
            const iconName = path.basename(iconPath, path.extname(iconPath));
            const componentName = uppercamelcase(iconName);
            const importStatement = `import ${componentName} from "./${componentName}";\r\n`;
            const typeDefinition = `export const ${componentName}: React.FC<IconProps>;\r\n`
            const iconDestination = path.join(
              destination,
              componentName + ".js"
            );
            components.push(componentName);

            // perform some santization and specific transformations besides
            // the ones provided to us by svgr
            svg("*").each((_, el) => {
              const element = svg(el);
              Object.keys(el.attribs).forEach((attribute) => {
                additionalTransformations(attribute, svg(el));
              });
              if (el.name === "svg") {
                element.removeAttr("class").removeAttr("xmlns");
              }
            });

            // generate component code
            const reactComponent = transform.sync(
              svg("svg").toString(),
              options,
              { componentName, filePath: iconDestination }
            );

            // write component to file
            fs.writeFileSync(iconDestination, reactComponent, ENCODING_STANDARD);
            // append component import statement to the index file
            fs.appendFileSync(indexFilePath, importStatement, ENCODING_STANDARD);
            // append type definition
            fs.appendFileSync(typeFilePath, typeDefinition, ENCODING_STANDARD);
          });

          const exportStatement = `export { \r\n\t${components.join(
            ",\r\n\t"
          )}\r\n};`;
          // append export statement to the index file
          fs.appendFileSync(indexFilePath, exportStatement, ENCODING_STANDARD);
        });
      } catch (err) {
        console.log(err);
      }
    }
  );
};

generateComponents();

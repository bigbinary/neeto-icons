const fs = require("fs");
const glob = require("glob");
const uppercamelcase = require("uppercamelcase");
const camelcase = require("camelcase");
const path = require("path");
const cheerio = require("cheerio");
const prettier = require("prettier");
const mkdirp = require("mkdirp");
const ejs = require("ejs");

module.exports.generateIcons = async ({
  template,
  source = "./source/icons/**.svg",
  destination = "./lib/icons",
  performExtraAttributeOperations = () => {},
  addExtraReplacements = (string) => string,
  getExportString,
  getListString,
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
          "Unable to find any icons. Make sure you use a glob format. [path/**.svg]"
        );
      }

      const ejsTemplate = fs.readFileSync(template, "utf8");
      let iconsList = [];
      icons.forEach((iconPath) => {
        const svg = fs.readFileSync(iconPath, "utf-8");
        const iconName = path.basename(iconPath, path.extname(iconPath));
        const componentName = uppercamelcase(iconName);
        iconsList.push(componentName);

        const $ = cheerio.load(svg, { xmlMode: true });

        const iconDestination = path.join(destination, componentName + ".js");

        // normalize the icon. This code is based on code found in react-icons
        // and react-feather.

        $("*").each((_, el) => {
          Object.keys(el.attribs).forEach((attribute) => {
            if (attribute.includes("-")) {
              $(el)
                .attr(camelcase(attribute), el.attribs[attribute])
                .removeAttr(attribute);
            }

            if (attribute.includes(":")) {
              $(el).removeAttr(attribute);
            }

            if (attribute === "style") {
              const val = $(el).attr(attribute);
              // https://stackoverflow.com/a/38137700
              // Build camelCase JS object from style string.
              if (val !== "none") {
                const regexRule = /(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g;
                const cssObject = {};
                val.replace(
                  regexRule,
                  (match, cssProperty, cssValue) =>
                    (cssObject[camelcase(cssProperty)] = cssValue)
                );
                $(el).attr(attribute, cssObject);
              }
            }

            performExtraAttributeOperations(attribute, $(el));
          });

          if (el.name === "svg") {
            $(el)
              .removeAttr("class")
              .removeAttr("xmlns")
              .attr("height", "placeholder")
              .attr("width", "placeholder")
              .attr("other", "...");
          }
        });

        let svgString = $("svg")
          .toString()
          .replace(/<!--[\s\S]*?-->/g, "")
          .replace('width="placeholder"', "width={size}")
          .replace('height="placeholder"', "height={size}")
          .replace('other="..."', "{...other}");
        svgString = addExtraReplacements(svgString);

        const generatedFile = prettier.format(
          ejs.render(ejsTemplate, { svg: svgString, componentName }),
          { parser: "babel" }
        );

        fs.writeFileSync(iconDestination, generatedFile, "utf8");

        fs.appendFileSync(
          path.join(destination, "index.js"),
          getExportString(componentName),
          "utf-8"
        );
      });

      fs.appendFileSync(
        path.join(destination, "index.js"),
        getListString(iconsList),
        "utf-8"
      );
    });
  } catch (err) {
    console.log(err);
  }
};

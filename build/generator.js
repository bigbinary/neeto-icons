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
  source = "./source/**.svg",
  destination = "./lib",
}) => {
  try {
    const indexFilePath = path.join(destination, "index.js");

    // make the directory
    const directory = path.parse(indexFilePath).dir;
    await mkdirp(directory);

    // make the index file
    fs.writeFileSync(indexFilePath, "", "utf-8");

    // make the icon folder
    await mkdirp(path.join(destination, "icons"));

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
      let iconList = [];
      icons.forEach((iconPath) => {
        const svg = fs.readFileSync(iconPath, "utf-8");
        const iconName = path.basename(iconPath, path.extname(iconPath));
        const componentName = uppercamelcase(iconName);
        iconList.push(iconName);

        const $ = cheerio.load(svg, { xmlMode: true });

        const iconDestination = path.join(
          destination,
          "icons",
          componentName + ".js"
        );

        // normalize the icon. This code is based on code found in react-icons
        // and react-feather.

        $("*").each((_, el) => {
          Object.keys(el.attribs).forEach((x) => {
            if (x.includes("-")) {
              $(el).attr(camelcase(x), el.attribs[x]).removeAttr(x);
            }

            if (x.includes(":")) {
              $(el).removeAttr(x);
            }

            if (x === "class") {
              $(el).removeAttr("class");
            }

            if (x === "fill") {
              const val = $(el).attr(x);
              if (val !== "none") {
                $(el).attr(x, "currentColor");
              }
            }

            if (x === "stroke") {
              const val = $(el).attr(x);
              if (val !== "none") {
                $(el).attr(x, "currentColor");
              }
            }

            if (x === "style") {
              const val = $(el).attr(x);
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
                $(el).attr(x, cssObject);
              }
            }
          });

          if (el.name === "svg") {
            $(el)
              .removeAttr("width")
              .removeAttr("height")
              .removeAttr("xmlns")
              .attr("height", 24)
              .attr("width", 24)
              .attr("other", "...");
          }
        });

        const svgString = $("svg")
          .toString()
          .replace(/<!--[\s\S]*?-->/g, "")
          .replace(new RegExp('stroke="currentColor"', "g"), "stroke={color}")
          .replace(new RegExp('fill="currentColor"', "g"), "fill={color}")
          .replace('width="24"', "width={size}")
          .replace('height="24"', "height={size}")
          .replace('other="..."', "{...other}");

        const generatedFile = prettier.format(
          ejs.render(ejsTemplate, {
            svg: svgString,
            componentName,
          }),
          {
            parser: "babel",
          }
        );

        fs.writeFileSync(iconDestination, generatedFile, "utf8");

        // append the export statement to the index file
        const exportString = `export * from "./icons/${componentName}";\r\n`;

        fs.appendFileSync(
          path.join(destination, "index.js"),
          exportString,
          "utf-8"
        );
      });
      
      const iconListString = `export const iconList = ${JSON.stringify(iconList)}`;

      fs.appendFileSync(
        path.join(destination, "index.js"),
        iconListString,
        "utf-8"
      );

    });
  } catch (err) {
    console.log(err);
  }
};

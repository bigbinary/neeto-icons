// index-template.js
const path = require("path");

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(
      filePath.originalPath,
      path.extname(filePath.originalPath)
    );
    const exportName = /^\d/.test(basename)
      ? convertToCamelCase(`Svg${basename}`)
      : convertToCamelCase(basename);
    return `export { default as ${exportName} } from './${basename}'`;
  });
  return exportEntries.join("\n");
}

function convertToCamelCase(input) {
  const words = input.split("-");
  const camelCaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return camelCaseWords.join("");
}

module.exports = defaultIndexTemplate;

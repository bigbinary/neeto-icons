// index-template.js
const path = require("path");

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(
      filePath.originalPath,
      path.extname(filePath.originalPath)
    );
    const exportName = /^\d/.test(basename)
      ? convertToPascalCase(`Svg${basename}`)
      : convertToPascalCase(basename);
    return `export { default as ${exportName} } from './${basename}'`;
  });
  return exportEntries.join("\n");
}

function convertToPascalCase(input) {
  const words = input.split("-");
  const pascalCaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return pascalCaseWords.join("");
}

module.exports = defaultIndexTemplate;

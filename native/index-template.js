const path = require("path");
const fs = require("fs");

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName} } from './${basename}'`;
  });
  const distPath = path.join(__dirname, "dist");
  const folderNames = fs
    .readdirSync(distPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const indexPath = path.join(distPath, "index.js");
  const importStatements = folderNames.map(
    (folderName) =>
      `import * as ${folderName.replace(
        /^./,
        folderName[0].toUpperCase()
      )} from './${folderName}';`
  );
  let indexContent = importStatements;
  const exportStatement = `export { ${folderNames
    .map((folderName) => folderName.replace(/^./, folderName[0].toUpperCase()))
    .join(", ")} }`;
  indexContent.push(exportStatement);
  fs.writeFileSync(indexPath, indexContent.join("\n"));

  return exportEntries.join("\n");
}

module.exports = defaultIndexTemplate;

const path = require("path");
const fs = require("fs");

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(
      filePath.originalPath,
      path.extname(filePath.originalPath)
    );
    const exportName = /^\d/.test(basename)
      ? pascalCase(`Svg${basename}`, { pascalCase: true })
      : pascalCase(basename, { pascalCase: true });

    return `export { default as ${exportName} } from './${pascalCase(basename, {
      pascalCase: true,
    })}'`;
  });
  const distPath = path.join(__dirname, "dist");
  const folderNames = fs
    .readdirSync(distPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const indexPath = path.join(distPath, "index.js");
  const importStatements = folderNames.map(
    (folderName) =>
      `import * as ${pascalCase(folderName, {
        pascalCase: true,
      })} from './${folderName}';`
  );
  let indexContent = importStatements;
  const exportStatements = folderNames.map(
    (folderName) => `${pascalCase(folderName, { pascalCase: true })}`
  );

  const exportStatement = `export { ${exportStatements.join(", ")} };`;
  indexContent.push(exportStatement);
  fs.writeFileSync(indexPath, indexContent.join("\n"));

  return exportEntries.join("\n");
}

const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(
  SEPARATORS.source + IDENTIFIER.source,
  "gu"
);
const NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");

const preservepascalCase = (
  string,
  toLowerCase,
  toUpperCase,
) => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;
  let isLastLastCharPreserved = false;

  for (let index = 0; index < string.length; index++) {
    const character = string[index];
    isLastLastCharPreserved = index > 2 ? string[index - 3] === "-" : true;

    if (isLastCharLower && UPPERCASE.test(character)) {
      string = string.slice(0, index) + "-" + string.slice(index);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      index++;
    } else if (
      isLastCharUpper &&
      isLastLastCharUpper &&
      LOWERCASE.test(character) &&
      (!isLastLastCharPreserved)
    ) {
      string = string.slice(0, index - 1) + "-" + string.slice(index - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower =
        toLowerCase(character) === character &&
        toUpperCase(character) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper =
        toUpperCase(character) === character &&
        toLowerCase(character) !== character;
    }
  }

  return string;
};


const postProcess = (input, toUpperCase) => {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  NUMBERS_AND_IDENTIFIER.lastIndex = 0;

  return input
    .replaceAll(NUMBERS_AND_IDENTIFIER, (match, pattern, offset) =>
      ["_", "-"].includes(input.charAt(offset + match.length))
        ? match
        : toUpperCase(match)
    )
    .replaceAll(SEPARATORS_AND_IDENTIFIER, (_, identifier) =>
      toUpperCase(identifier)
    );
};

function pascalCase(input) {
  if (!(typeof input === "string" || Array.isArray(input))) {
    throw new TypeError("Expected the input to be `string | string[]`");
  }

  if (Array.isArray(input)) {
    input = input
      .map((x) => x.trim())
      .filter((x) => x.length)
      .join("-");
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return "";
  }

  const toLowerCase = (string) => string.toLowerCase();

  const toUpperCase = (string) => string.toUpperCase();

  if (input.length === 1) {
    if (SEPARATORS.test(input)) {
      return "";
    }

    return toUpperCase(input);
  }

  const hasUpperCase = input !== toLowerCase(input);

  if (hasUpperCase) {
    input = preservepascalCase(
      input,
      toLowerCase,
      toUpperCase,
    );
  }

  input = input.replace(LEADING_SEPARATORS, "");
  input = toLowerCase(input);
  input = toUpperCase(input.charAt(0)) + input.slice(1);
  return postProcess(input, toUpperCase);
}

module.exports = defaultIndexTemplate;

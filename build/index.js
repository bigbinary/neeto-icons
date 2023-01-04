const { generateIcons } = require("./generator");

generateIcons({
  template: "./build/template.ejs",
  destination: "./lib/icons",
  source: "./source/icons/**.svg",
});

generateIcons({
  template: "./build/template.ejs",
  destination: "./lib/logos",
  source: "./source/logos/**.svg",
});

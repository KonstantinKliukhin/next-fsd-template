const { toPascalCase } = require("../../utils");

module.exports = (slice) =>
  `export { ${toPascalCase(slice)}Page } from "./ui/${toPascalCase(slice)}";`;

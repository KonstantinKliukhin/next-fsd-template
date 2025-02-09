const { toPascalCase } = require("../../utils");

module.exports = (slice) =>
  `export { ${toPascalCase(slice)} } from "./ui/${toPascalCase(slice)}";`;

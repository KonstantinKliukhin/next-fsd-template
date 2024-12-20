const { toPascalCase } = require("../../utils");

module.exports = (slice) =>
  `export { ${toPascalCase(slice)}Form } from "./ui/${toPascalCase(slice)}Form"`;

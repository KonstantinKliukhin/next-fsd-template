const { toPascalCase } = require("../../utils");

module.exports = (slice) =>
  `export type { ${toPascalCase(slice)} } from "./model/types";`;

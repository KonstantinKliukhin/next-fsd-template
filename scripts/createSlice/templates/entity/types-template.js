const { toPascalCase } = require("../../utils");

module.exports = (sliceName) => `export type ${toPascalCase(sliceName)} = {}`;

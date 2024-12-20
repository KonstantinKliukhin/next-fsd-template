const firstCharUppercase = require("./first-char-upper-case");
const toCamelCase = require("./to-camel-case");

module.exports = (value) => firstCharUppercase(toCamelCase(value));

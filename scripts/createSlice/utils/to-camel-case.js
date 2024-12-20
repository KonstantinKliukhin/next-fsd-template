const firstCharUpperCase = require("./first-char-upper-case");
module.exports = (value) => {
  const [firstPart, ...restParts] = value.split("-");

  return [firstPart, ...restParts.map(firstCharUpperCase)].join("");
};

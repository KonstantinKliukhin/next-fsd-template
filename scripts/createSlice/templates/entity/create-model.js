const fs = require("fs/promises");

const createTypesTemplate = require("./types-template");
const { resolveRoot } = require("../../utils");

module.exports = async (sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot("src", "entities", sliceName, "model", ...segments);

  try {
    await fs.mkdir(resolveModelPath());
    await fs.writeFile(resolveModelPath("types.ts"), createTypesTemplate(sliceName));
  } catch (error) {
    console.log(`Couldn't create model folder for slice ${sliceName}`, error);
  }
};

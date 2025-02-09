const fs = require("fs/promises");

const createModel = require("./create-model");
const createFeatureFormIndexTemplate = require("./index-template");
const { resolveRoot } = require("../../utils");

module.exports = async (sliceName) => {
  try {
    await fs.mkdir(resolveRoot("src", "entities", sliceName));
  } catch (error) {
    console.log(`Couldn't find directory for ${sliceName}`, error);
  }

  await createModel(sliceName);
  await fs.writeFile(
    resolveRoot("src", "entities", sliceName, "index.ts"),
    createFeatureFormIndexTemplate(sliceName)
  );
};

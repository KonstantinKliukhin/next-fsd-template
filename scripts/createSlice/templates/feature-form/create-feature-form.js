const fs = require("fs/promises");

const createFeatureFormModel = require("./create-model");
const createFeatureFormUI = require("./create-ui");
const createFeatureFormIndexTemplate = require("./index-template");
const { resolveRoot } = require("../../utils");

module.exports = async (sliceName) => {
  try {
    await fs.mkdir(resolveRoot("src", "features", sliceName));
  } catch (error) {
    console.log(`Couldn't find directory for ${sliceName}`);
  }

  await createFeatureFormModel(sliceName);
  await createFeatureFormUI(sliceName);
  await fs.writeFile(
    resolveRoot("src", "features", sliceName, "index.ts"),
    createFeatureFormIndexTemplate(sliceName)
  );
};

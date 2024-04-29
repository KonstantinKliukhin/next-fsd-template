const fs = require("fs/promises");
const resolveRoot = require("../../resolveRoot");
const createFeatureFormModel = require("./create-model");
const createFeatureFormUI = require("./create-ui");
const createFeatureFormIndexTemplate = require("./index-template");
const firstCharUpperCase = require("../../firstCharUpperCase");

module.exports = async (sliceName) => {
  try {
    await fs.mkdir(resolveRoot("src", "features", sliceName));
  } catch (e) {
    console.log(`Couldn't find directory for ${sliceName}`);
  }
  const [firstPart, ...restParts] = sliceName.split("-");
  const parsedSliceName = [firstPart, ...restParts.map(firstCharUpperCase)].join("");

  await createFeatureFormModel(parsedSliceName);
  await createFeatureFormUI(parsedSliceName);
  await fs.writeFile(
    resolveRoot("src", "features", parsedSliceName, "index.ts"),
    createFeatureFormIndexTemplate(parsedSliceName)
  );
};

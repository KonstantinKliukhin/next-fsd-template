const fs = require("fs/promises");

const createUi = require("./create-ui");
const createIndexTemplate = require("./index-template");
const { resolveRoot } = require("../../utils");

module.exports = async (sliceName) => {
  try {
    await fs.mkdir(resolveRoot("src", "pages-layer", sliceName));
  } catch (error) {
    console.log(`Couldn't find directory for ${sliceName}`);
  }

  await createUi(sliceName);
  await fs.writeFile(
    resolveRoot("src", "pages-layer", sliceName, "index.ts"),
    createIndexTemplate(sliceName)
  );
};

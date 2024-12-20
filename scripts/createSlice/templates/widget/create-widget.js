const fs = require("fs/promises");

const createUi = require("./create-ui");
const createIndexTemplate = require("./index-template");
const { resolveRoot } = require("../../utils");

module.exports = async (sliceName) => {
  try {
    await fs.mkdir(resolveRoot("src", "widgets", sliceName));
  } catch (error) {
    console.log(`Couldn't find directory for ${sliceName}`, error);
  }

  await createUi(sliceName);
  await fs.writeFile(
    resolveRoot("src", "widgets", sliceName, "index.ts"),
    createIndexTemplate(sliceName)
  );
};

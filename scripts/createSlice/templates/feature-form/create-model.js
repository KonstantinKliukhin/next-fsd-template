const fs = require("fs/promises");

const createFormSchemaTemplate = require("./form-schema-template");
const createFormTypesTemplate = require("./types-template");
const { resolveRoot } = require("../../utils");

module.exports = async (sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot("src", "features", sliceName, "model", ...segments);

  try {
    await fs.mkdir(resolveModelPath());
    await fs.writeFile(resolveModelPath("types.ts"), createFormTypesTemplate(sliceName));
    await fs.writeFile(
      resolveModelPath("form-schema.ts"),
      createFormSchemaTemplate(sliceName)
    );
  } catch (error) {
    console.log(`Couldn't create model folder for slice ${sliceName}`, error);
  }
};

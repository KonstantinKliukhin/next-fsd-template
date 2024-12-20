const fs = require("fs/promises");

const createPageComponentTemplate = require("./page-component-template");
const { resolveRoot, toPascalCase } = require("../../utils");

module.exports = async (sliceName) => {
  const resolveUiPath = (...segments) =>
    resolveRoot("src", "pages-layer", sliceName, "ui", ...segments);

  const componentName = toPascalCase(sliceName);

  try {
    await fs.mkdir(resolveUiPath());
    await fs.writeFile(
      resolveUiPath(`${componentName}.tsx`),
      createPageComponentTemplate(sliceName)
    );
  } catch (error) {
    console.log(`Couldn't create model folder for slice ${sliceName}`, error);
  }
};

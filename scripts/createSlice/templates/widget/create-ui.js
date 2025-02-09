const fs = require("fs/promises");

const createWidgetComponentTemplate = require("./widget-component-template");
const { toPascalCase, resolveRoot } = require("../../utils");

module.exports = async (sliceName) => {
  const resolveUiPath = (...segments) =>
    resolveRoot("src", "widgets", sliceName, "ui", ...segments);
  const componentName = toPascalCase(sliceName);

  try {
    await fs.mkdir(resolveUiPath());
    await fs.writeFile(
      resolveUiPath(`${componentName}.tsx`),
      createWidgetComponentTemplate(sliceName)
    );
  } catch (error) {
    console.log(`Couldn't create ui folder for slice ${sliceName}`, error);
  }
};

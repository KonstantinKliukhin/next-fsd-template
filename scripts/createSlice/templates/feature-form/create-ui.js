const fs = require("fs/promises");

const createFormUITemplate = require("./form-ui-template");
const { toPascalCase, resolveRoot } = require("../../utils");

module.exports = async (sliceName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot("src", "features", sliceName, "ui", ...segments);

  try {
    await fs.mkdir(resolveUIPath());
    const componentName = `${toPascalCase(sliceName)}Form`;
    await fs.writeFile(
      resolveUIPath(`${componentName}.tsx`),
      createFormUITemplate(sliceName, componentName)
    );
  } catch (error) {
    console.log(`Couldn't create UI folder for slice ${sliceName}`, error);
  }
};

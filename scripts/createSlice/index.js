const createEntity = require("./templates/entity/create-entity");
const createFeatureForm = require("./templates/feature-form/create-feature-form");
const createPage = require("./templates/page/create-page");
const createWidget = require("./templates/widget/create-widget");

const templateName = process.argv[2];
const sliceName = process.argv[3];

const TemplateName = {
  entity: "entity",
  featureForm: "feature-form",
  widget: "widget",
  page: "page",
};

const templateNames = Object.values(TemplateName);

if (!templateName || !templateNames.includes(templateName)) {
  throw new Error(`Specify slice ${templateNames.join(" or ")}`);
}

if (!sliceName) {
  throw new Error("Slice name isn't specified");
}

if (templateName === TemplateName.featureForm) {
  createFeatureForm(sliceName);
}

if (templateName === TemplateName.entity) {
  createEntity(sliceName);
}

if (templateName === TemplateName.page) {
  createPage(sliceName);
}

if (templateName === TemplateName.widget) {
  createWidget(sliceName);
}

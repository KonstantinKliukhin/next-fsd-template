const { toCamelCase, toPascalCase } = require("../../utils");

module.exports = (slice) => `import type { z } from "zod";

import type { ${toCamelCase(slice)}Schema } from "./form-schema";

export type ${toPascalCase(slice)}FormType = z.infer<typeof ${toCamelCase(slice)}Schema>;
`;

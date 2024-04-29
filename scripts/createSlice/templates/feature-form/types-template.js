const firstCharUpperCase = require("../../firstCharUpperCase");

module.exports = (slice) => `
import { z } from "zod";
import { ${slice}Schema } from "./form-schema";

export type ${firstCharUpperCase(slice)}FormType = z.infer<typeof ${slice}Schema>;
`;

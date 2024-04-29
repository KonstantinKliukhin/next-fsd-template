module.exports = (slice) => `
import { object } from 'zod';

export const ${slice}Schema = object({})
`;

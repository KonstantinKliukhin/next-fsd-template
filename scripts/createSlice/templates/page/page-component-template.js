const { toPascalCase } = require("../../utils");

module.exports = (slice) => `import type { FC } from "react";

export const ${toPascalCase(slice)}Page: FC = () => {

  return <div></div>
}
`;

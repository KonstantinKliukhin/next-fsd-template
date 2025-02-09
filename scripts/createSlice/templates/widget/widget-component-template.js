const { toPascalCase } = require("../../utils");

module.exports = (slice) => `import type { FC } from "react";

type ${toPascalCase(slice)}Props = {
  
}

export const ${toPascalCase(slice)}: FC = (props) => {
  const {} = props;

  return (
    <div>
      
    </div>
  )
}
`;

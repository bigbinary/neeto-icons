const miscTemplate = ({ componentName, jsx }, { tpl },) => tpl`
import React from "react";

const ${componentName} = ({size=24, height, width, ...props}) => {
  height = height || size;
  width = width || size;
  return ${jsx};
}

export default ${componentName};
`;

export default miscTemplate;

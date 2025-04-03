const miscTemplate = ( { componentName, jsx }, { tpl }, ) => tpl`
import React from "react";

const ${componentName} = ({width=32, height=32, ...props}) => {
  return ${jsx};
}

export default ${componentName};
`;

export default miscTemplate;

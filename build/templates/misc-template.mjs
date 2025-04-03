const miscTemplate = ( { componentName, jsx }, { tpl }, ) => tpl`
import React from "react";

const ${componentName} = ({width=24, height=24, ...props}) => {
  return ${jsx};
}

export default ${componentName};
`;

export default miscTemplate;

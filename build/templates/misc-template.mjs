const miscTemplate = ( { componentName, jsx }, { tpl }, ) => tpl`
import React from "react";

const ${componentName} = ({size=24, ...props}) => {
  return ${jsx};
}

export default ${componentName};
`;

export default miscTemplate;

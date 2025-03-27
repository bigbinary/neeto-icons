const elementsTemplate = ( { componentName, jsx }, { tpl }, ) => tpl`
import React from "react";

const ${componentName} = ({width=80, height=26, ...props}) => {
  return ${jsx};
}

export default ${componentName};
`;

export default elementsTemplate;

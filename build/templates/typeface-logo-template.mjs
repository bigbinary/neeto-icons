const typefaceLogoTemplate = ({ componentName, jsx }, { tpl }) => tpl`
import React from "react";

const ${componentName} = ({width="100%", height=36, ...props}) => {
  return ${jsx};
}

export default ${componentName};
`;

export default typefaceLogoTemplate;

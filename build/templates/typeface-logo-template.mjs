const typefaceLogoTemplate = ( { componentName, jsx }, { tpl }, ) => tpl`
import React from "react";

export const ${componentName} = ({width="auto", height=20, ...props}) => {
  return ${jsx};
}
`;

export default typefaceLogoTemplate;

const iconTemplate = ({ componentName, jsx }, { tpl }) => tpl`
import React from 'react';

export const ${componentName} = ({ size=24, color="currentColor", strokeWidth=1.5, ...props }) => {
  return ${jsx};
}
`;

export default iconTemplate;

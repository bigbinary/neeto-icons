const appIconTemplate = ({ componentName, jsx }, { tpl }) => tpl`
import React from 'react';

export const ${componentName} = ({size=24, ...props}) => {
  return ${jsx};
}
`;

export default appIconTemplate;

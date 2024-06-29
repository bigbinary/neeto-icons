const logoTemplate = ({ componentName, jsx }, { tpl }) => tpl`
import React from 'react';

const ${componentName} = ({size=36, ...props}) => {
  return ${jsx};
}

export default ${componentName};
`;

export default logoTemplate;

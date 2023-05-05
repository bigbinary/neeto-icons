const appIconTemplate = ({ componentName, jsx }, { tpl }) => tpl`
import React from 'react';
import PropTypes from 'prop-types';

export const ${componentName} = ({size, ...props}) => {
  return ${jsx};
}

${componentName}.defaultProps = { size: 24, }

${componentName}.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};
  `;

export default appIconTemplate;

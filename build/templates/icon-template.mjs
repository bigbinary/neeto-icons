const iconTemplate = ({ componentName, jsx }, { tpl }) => {
  return tpl`
import React from 'react';
import PropTypes from 'prop-types';

export const ${componentName} = ({ size, color, strokeWidth, ...props }) => {
  return ${jsx};
}

${componentName}.defaultProps = {
  color: 'currentColor',
  size: 24,
  strokeWidth: "1.5"
}

${componentName}.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  strokeWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};
  `;
};

export default iconTemplate;

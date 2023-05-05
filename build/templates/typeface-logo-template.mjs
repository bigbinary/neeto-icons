const typefaceLogoTemplate = ( { componentName, jsx }, { tpl }, ) => tpl`
import React from "react";
import PropTypes from 'prop-types';

export const ${componentName} = ({width, height, ...props}) => {
  return ${jsx};
}

${componentName}.defaultProps = { height: 20, width: "auto" }

${componentName}.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

};`;

export default typefaceLogoTemplate;

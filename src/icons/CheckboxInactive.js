/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export const CheckboxInactive = ({ size, color, strokeWidth, ...other }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...other}>
    <rect
      x="3.75"
      y="3.75"
      width="16.5"
      height="16.5"
      rx="1.25"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

CheckboxInactive.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

CheckboxInactive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
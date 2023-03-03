/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export const AppSwitcher = ({ size, color, strokeWidth, ...other }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...other}>
    <path
      d="M8 4.5C8 2.567 6.433 1 4.5 1H1V8H8V4.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M8 15.5C8 13.567 6.433 12 4.5 12H1V19H8V15.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M19 4.5C19 2.567 17.433 1 15.5 1H12V8H19V4.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M19 15.5C19 13.567 17.433 12 15.5 12H12V19H19V15.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

AppSwitcher.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

AppSwitcher.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
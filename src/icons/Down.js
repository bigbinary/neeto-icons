/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export const Down = ({ size, color, strokeWidth, ...other }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...other}>
    <path
      d="M6 9L12 15L18 9"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Down.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Down.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
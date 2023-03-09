/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export const Flag = ({ size, color, strokeWidth, ...other }) => (
  <svg width={size} height={size} viewBox="0 0 16 18" fill="none" {...other}>
    <path
      d="M1 10H15L10.5 5.5L15 1H1V17"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Flag.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Flag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export const Computer = ({ size, color, strokeWidth, ...other }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...other}>
    <path
      d="M18.429 17H5.571C4.151 17 3 15.849 3 14.429V5.571C3 4.151 4.151 3 5.571 3H18.428C19.849 3 21 4.151 21 5.571V14.428C21 15.849 19.849 17 18.429 17V17Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M14 17L14.5 21"
      stroke={color}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M10 17L9.5 21"
      stroke={color}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M8.13965 21H15.8596"
      stroke={color}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);

Computer.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Computer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Mobile(props) {
  const { size, color, strokeWidth, ...other } = props;
  return (
    <svg viewBox="0 0 12 18" fill="none" height={size} width={size} {...other}>
      <rect
        x="0.75"
        y="0.75"
        width="10.5"
        height="16.5"
        rx="2.25"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        y1="13.25"
        x2="12"
        y2="13.25"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

Mobile.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Mobile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
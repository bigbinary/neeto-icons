/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Computer(props) {
  const { size, color, strokeWidth, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M18 3H6C4.34315 3 3 3.97683 3 5.18182V12.8182C3 14.0232 4.34315 15 6 15H18C19.6569 15 21 14.0232 21 12.8182V5.18182C21 3.97683 19.6569 3 18 3Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="11.25"
        x2="21"
        y2="11.25"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1="8.75"
        y1="19.25"
        x2="15.25"
        y2="19.25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

Computer.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "2",
};

Computer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
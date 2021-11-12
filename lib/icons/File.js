/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function File(props) {
  const { size, color, strokeWidth, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <rect
        x="4.75"
        y="2.75"
        width="14.5"
        height="18.5"
        rx="3.25"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="14.75"
        y="2.75"
        width="4.5"
        height="5.5"
        rx="1.25"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

File.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

File.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
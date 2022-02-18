/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Column(props) {
  const { size, color, strokeWidth, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <rect
        x="4.75"
        y="20.25"
        width="16.5"
        height="14.5"
        rx="2.25"
        transform="rotate(-90 4.75 20.25)"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M12 4V20.3125" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

Column.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Column.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
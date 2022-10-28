/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Focus(props) {
  const { size, color, strokeWidth, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" height={size} width={size} {...other} fill="none">
      <path
        fill={color}
        strokeWidth={strokeWidth}
        d="M13 1l.001 3.062A8.004 8.004 0 0 1 19.938 11H23v2l-3.062.001a8.004 8.004 0 0 1-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 0 1-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0 1 11 4.062V1h2zm-1 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      />
    </svg>
  );
}

Focus.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Focus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Location(props) {
  const { size, color, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M13.5123 8.75949C14.3477 9.59482 14.3477 10.9492 13.5123 11.7845C12.677 12.6198 11.3227 12.6198 10.4873 11.7845C9.65201 10.9492 9.65201 9.59482 10.4873 8.75949C11.3227 7.92416 12.677 7.92416 13.5123 8.75949Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10C19 11.901 18.156 13.704 16.695 14.921L14.4 16.834C13.485 17.597 12.801 18.599 12.424 19.729L12 21L11.576 19.729C11.199 18.599 10.515 17.596 9.6 16.834L7.304 14.921C5.844 13.704 5 11.901 5 10V10.036C5 5.668 8.617 3.134 12 3.134C15.383 3.134 19 5.668 19 10.036"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Location.defaultProps = {
  color: "currentColor",
  size: 24,
};

Location.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
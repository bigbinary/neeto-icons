/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Invoice(props) {
  const { size, color, strokeWidth, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M18 3H6C4.895 3 4 3.895 4 5V19C4 20.105 4.895 21 6 21H18C19.105 21 20 20.105 20 19V5C20 3.895 19.105 3 18 3Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.8254V7M12 12.7778V13.6032"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5688 12.1884C10.7809 12.5505 11.1678 12.7743 11.5873 12.7778H12.4953C13.1333 12.7937 13.6634 12.2894 13.6794 11.6514C13.6931 11.0996 13.3147 10.615 12.7759 10.4948L11.2291 10.106C10.6078 9.96043 10.2221 9.3387 10.3676 8.71733C10.4911 8.19043 10.9637 7.81978 11.5048 7.82544H12.4128C12.8327 7.82828 13.2201 8.05224 13.4321 8.41477"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17H16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Invoice.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Invoice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
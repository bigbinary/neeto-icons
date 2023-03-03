/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export const UserCircle = ({ size, color, strokeWidth, ...other }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...other}>
    <path
      d="M3 18C3 15.791 4.791 14 7 14H11C13.209 14 15 15.791 15 18"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 4.65137C17.381 4.65137 18.5 5.77037 18.5 7.15137C18.5 8.53237 17.381 9.65137 16 9.65137"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.4049 4.99613C12.7331 6.3243 12.7331 8.4777 11.4049 9.80587C10.0768 11.134 7.92336 11.134 6.59519 9.80587C5.26702 8.4777 5.26702 6.3243 6.59519 4.99613C7.92336 3.66796 10.0768 3.66796 11.4049 4.99613"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 13C19.209 13 21 14.791 21 17"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

UserCircle.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

UserCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
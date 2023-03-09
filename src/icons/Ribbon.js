/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export const Ribbon = ({ size, color, strokeWidth, ...other }) => (
  <svg width={size} height={size} viewBox="0 0 10 14" fill="none" {...other}>
    <path
      d="M2.99996 1.66669H6.99996C7.35358 1.66669 7.69272 1.80716 7.94277 2.05721C8.19282 2.30726 8.33329 2.6464 8.33329 3.00002V12.3334L4.99996 10.3334L1.66663 12.3334V3.00002C1.66663 2.6464 1.8071 2.30726 2.05715 2.05721C2.3072 1.80716 2.64634 1.66669 2.99996 1.66669Z"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Ribbon.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Ribbon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

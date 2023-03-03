/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export const Transaction = ({ size, color, strokeWidth, ...other }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...other}>
    <path
      d="M14.6111 9.71429C14.5005 9.39156 14.2986 9.11027 14.0313 8.90659C13.7639 8.70292 13.4435 8.58619 13.1111 8.57143H10.8889C10.4469 8.57143 10.0229 8.75204 9.71038 9.07353C9.39782 9.39502 9.22222 9.83106 9.22222 10.2857C9.22222 10.7404 9.39782 11.1764 9.71038 11.4979C10.0229 11.8194 10.4469 12 10.8889 12H13.1111C13.5531 12 13.9771 12.1806 14.2896 12.5021C14.6022 12.8236 14.7778 13.2596 14.7778 13.7143C14.7778 14.1689 14.6022 14.605 14.2896 14.9265C13.9771 15.248 13.5531 15.4286 13.1111 15.4286H10.8889C10.5565 15.4138 10.2361 15.2971 9.96874 15.0934C9.70142 14.8897 9.49947 14.6084 9.38889 14.2857M12 6.85714V8.57143M12 15.4286V17.1429M6.44444 13.7143L4.22222 16L2 13.7143M4.22222 15.4286V7.42857C4.22222 5.53502 5.71461 4 7.55556 4H13.6667M17.5556 10.2857L19.7778 8L22 10.2857M19.7778 8.57143V16.5714C19.7778 18.465 18.2854 20 16.4444 20H10.3333"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Transaction.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Transaction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
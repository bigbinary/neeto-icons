/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Volume0(props) {
  const { size, color, strokeWidth, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M12 6.38467C12 5.49798 10.9315 5.04993 10.2991 5.67141L7.66794 8.25696C7.48093 8.44073 7.22923 8.5437 6.96704 8.5437H4C3.44771 8.5437 3 8.99142 3 9.5437V13.3908C3 13.943 3.44772 14.3908 4 14.3908H6.90071C7.16291 14.3908 7.41462 14.4937 7.60163 14.6775L10.2991 17.3284C10.9315 17.9499 12 17.5019 12 16.6152V6.38467Z"
        fill={color}
      />
      <path
        d="M15 10L19 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10L15 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Volume0.defaultProps = {
  color: "currentColor",
  size: 24,
  strokeWidth: "1.5",
};

Volume0.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDesign = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"
    />
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.406 15.21-3.024.756a1.11 1.11 0 0 1-1.348-1.348l.758-3.032a2.974 2.974 0 0 1 2.892-2.253h.008a2.981 2.981 0 0 1 2.342 4.819c-.41.524-.982.896-1.628 1.058v0Z"
    />
    <Path
      stroke="#49545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.88 6.92a32.43 32.43 0 0 1-6.26 4.88M12.2 9.38a33.153 33.153 0 0 1 4.87-6.27"
    />
  </Svg>
);
export default SvgDesign;

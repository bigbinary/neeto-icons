import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMailSend = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.289}
      d="M6.935 17.955h12.659c.776 0 1.406-.63 1.406-1.406V7.407C21 6.63 20.37 6 19.593 6H6.935C6.159 6 5.5 6.63 5.5 7.407"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.289}
      d="m5.5 7.455 6.744 4.16a1.72 1.72 0 0 0 1.998.002L20.5 7.455"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3.75 12.205h3.5M3.75 15.205h5.5"
    />
  </Svg>
);
export default SvgMailSend;

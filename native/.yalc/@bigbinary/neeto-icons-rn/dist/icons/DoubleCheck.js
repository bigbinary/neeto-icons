import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDoubleCheck = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      fillRule="evenodd"
      d="M16.78 8.28a.75.75 0 0 0-1.06-1.06l-5.135 5.134 1.061 1.06L16.78 8.28Zm-7.957 7.957-1.06-1.06-.013.012-3.47-3.47a.75.75 0 0 0-1.06 1.061l4 4a.75.75 0 0 0 1.06 0l.543-.543Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.25 7.75-8.5 8.5-4-4"
    />
  </Svg>
);
export default SvgDoubleCheck;

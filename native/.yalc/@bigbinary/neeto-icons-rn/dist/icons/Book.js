import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBook = (props) => (
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
      strokeWidth={1.5}
      d="M5 18a2 2 0 0 0 2 2h12V4H7a2 2 0 0 0-2 2v12Zm0 0a2 2 0 0 1 2-2h12M9 8h6"
    />
  </Svg>
);
export default SvgBook;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDraft = (props) => (
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
      strokeWidth={1.484}
      d="M21 10.713v8.276C21 20.1 20.129 21 19.054 21H4.946C3.871 21 3 20.1 3 18.99V7.01C3 5.9 3.871 5 4.946 5h5.351"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.43 7 17 4.57m1.062-1.065a1.72 1.72 0 1 1 2.433 2.434l-5.774 5.769a.998.998 0 0 1-.706.292H12V9.985a1 1 0 0 1 .293-.707l5.769-5.773v0ZM8 12H6h2Zm-2 4h12H6Z"
    />
  </Svg>
);
export default SvgDraft;

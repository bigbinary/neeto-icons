import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReport = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      d="M7.5 19.825v-3.46a.175.175 0 0 0-.175-.174h-4.15a.175.175 0 0 0-.175.175v3.459c0 .097.078.175.175.175h4.15a.175.175 0 0 0 .175-.175Zm0 0V7.223c0-.097.078-.175.175-.175h4.15c.097 0 .175.078.175.175v12.602m-4.5 0c0 .097.078.175.175.175h4.15a.175.175 0 0 0 .175-.175m0 0v-8.031c0-.097.078-.175.175-.175h4.15c.097 0 .175.078.175.175v8.031m-4.5 0c0 .097.078.175.175.175h4.15a.175.175 0 0 0 .175-.175m0 0V4.175c0-.097.078-.175.175-.175h4.15c.097 0 .175.078.175.175v15.65a.175.175 0 0 1-.175.175h-4.15a.175.175 0 0 1-.175-.175Z"
    />
  </Svg>
);
export default SvgReport;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVideo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.375 13.097 3.795 3.054c.736.593 1.83.069 1.83-.876v-6.55c0-.945-1.094-1.469-1.83-.876l-3.795 3.054m-2.25 6.847H5.25A2.25 2.25 0 0 1 3 15.5v-7a2.25 2.25 0 0 1 2.25-2.25h7.875a2.25 2.25 0 0 1 2.25 2.25v7a2.25 2.25 0 0 1-2.25 2.25Z"
    />
  </Svg>
);
export default SvgVideo;

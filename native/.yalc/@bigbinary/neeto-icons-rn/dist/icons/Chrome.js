import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChrome = (props) => (
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
      d="M12.243 3.757a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 5.273h5.347m-3.419.798a2.727 2.727 0 1 1-3.857 3.857 2.727 2.727 0 0 1 3.857-3.857v0Zm.434 3.292L7.713 14l2.65-4.637ZM2.954 4.76 5.64 9.366 2.953 4.76Z"
    />
  </Svg>
);
export default SvgChrome;

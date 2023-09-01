import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCamera = (props) => (
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
      d="m14.586 4.586 1.121 1.121a1 1 0 0 0 .707.293H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.586a1 1 0 0 0 .707-.293l1.121-1.121A2 2 0 0 1 10.828 4h2.344a2 2 0 0 1 1.414.586Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18.05 9a.05.05 0 0 1-.03.046.05.05 0 0 1-.069-.036.05.05 0 1 1 .1-.01"
    />
  </Svg>
);
export default SvgCamera;

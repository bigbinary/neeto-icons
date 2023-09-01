import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHamburgerMenu = (props) => (
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
      d="M3 7.25h18M3 11.25h12M3 15.25h8"
    />
  </Svg>
);
export default SvgHamburgerMenu;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLinkedin = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.5 12a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Z"
    />
    <Path
      fill="#68737D"
      d="M9.966 15.825h-1.89V9.681h1.89v6.144Zm-.944-6.932C8.341 8.893 8 8.578 8 7.946c0-.262.098-.486.295-.67.196-.183.439-.276.727-.276.682 0 1.023.317 1.023.946 0 .632-.341.947-1.023.947Zm7.958 6.932h-1.93v-3.427c0-.892-.317-1.34-.947-1.34-.499 0-.826.25-.985.75-.05.078-.078.236-.078.473v3.544h-1.93V11.65c0-.946-.015-1.602-.039-1.968h1.654l.117.827c.435-.658 1.064-.986 1.93-.986.658 0 1.19.23 1.595.688.409.46.613 1.122.613 1.99v3.625Z"
    />
  </Svg>
);
export default SvgLinkedin;

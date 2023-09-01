import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPlusSolid = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
    />
    <Path
      fill="#F8F9F9"
      fillRule="evenodd"
      d="M12.833 6.75a.75.75 0 0 0-1.5 0v4.583H6.75a.75.75 0 0 0 0 1.5h4.583v4.584a.75.75 0 0 0 1.5 0v-4.584h4.584a.75.75 0 0 0 0-1.5h-4.584V6.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlusSolid;

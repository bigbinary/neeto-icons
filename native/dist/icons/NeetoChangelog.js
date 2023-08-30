import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNeetoChangelog = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 7H7.5a.5.5 0 0 0-.5.5V10a.5.5 0 0 0 .5.5H10a.5.5 0 0 0 .5-.5V7.5A.5.5 0 0 0 10 7ZM13.5 7H17M13.5 10.33H17M10 13.5H7.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5H10a.5.5 0 0 0 .5-.5V14a.5.5 0 0 0-.5-.5ZM13.5 13.5H17M13.5 16.83H17"
    />
  </Svg>
);
export default SvgNeetoChangelog;

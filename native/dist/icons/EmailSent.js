import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEmailSent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 18H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.961 6.615-7.427 4.339a3 3 0 0 1-3.027 0L3.041 6.593M18 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.25 16.414-1.562 1.562-.938-.938"
    />
  </Svg>
);
export default SvgEmailSent;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCustomers = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      fillRule="evenodd"
      d="M10.875 6.276a2.651 2.651 0 0 0-3.75 3.75m0 0a2.65 2.65 0 1 0 3.75-3.749m-4.81-1.061a4.15 4.15 0 1 1 0 5.87 4.151 4.151 0 0 1 0-5.87Zm8.185.534A.75.75 0 0 1 15 5h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm1 3.5A.75.75 0 0 1 16 8.5h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm1 3.5A.75.75 0 0 1 17 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM7 15.5a3.25 3.25 0 0 0-3.25 3.25.75.75 0 0 1-1.5 0A4.75 4.75 0 0 1 7 14h4a4.75 4.75 0 0 1 4.75 4.75.75.75 0 0 1-1.5 0A3.25 3.25 0 0 0 11 15.5H7Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCustomers;

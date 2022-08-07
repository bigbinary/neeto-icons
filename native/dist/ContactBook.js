import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgContactBook = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.321 16.541a2.905 2.905 0 0 0-2.865-2.453h-2.912a2.904 2.904 0 0 0-2.865 2.453m5.912-8.882a2.25 2.25 0 1 1-3.18 3.182 2.25 2.25 0 0 1 3.18-3.182Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 21H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4ZM4.521 10H2M4.521 14H2"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgContactBook;

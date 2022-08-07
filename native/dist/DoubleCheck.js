import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDoubleCheck = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.78 8.28a.75.75 0 0 0-1.06-1.06l-5.135 5.134 1.061 1.06L16.78 8.28Zm-7.957 7.957-1.06-1.06-.013.012-3.47-3.47a.75.75 0 0 0-1.06 1.061l4 4a.75.75 0 0 0 1.06 0l.543-.543Z"
      fill="#68737D"
    />
    <Path
      d="m20.25 7.75-8.5 8.5-4-4"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgDoubleCheck;

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUnlink = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m18.5 12 1.141-1.078a4.64 4.64 0 0 0-6.563-6.563l-.887.888"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 4.5 18.5 19"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="m5.5 11-1.14 1.078a4.641 4.641 0 0 0 6.562 6.563l.887-.888"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgUnlink;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSwap = (props) => (
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
      d="M3 8.273 6.273 5l3.272 3.273"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.182 19.727H9.545a3.273 3.273 0 0 1-3.272-3.272V5M21 16.455l-3.273 3.272-3.272-3.272"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.818 5h1.637a3.273 3.273 0 0 1 3.272 3.273v11.454"
    />
  </Svg>
);
export default SvgSwap;

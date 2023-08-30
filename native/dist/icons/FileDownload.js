import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgFileDownload = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect
      width={14.5}
      height={18.5}
      x={4.75}
      y={2.75}
      stroke="#68737D"
      strokeWidth={1.5}
      rx={3.25}
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 13.789 12 17l-3-3.211M12.01 9v7.973V9Z"
    />
    <Rect
      width={4.5}
      height={5.5}
      x={14.75}
      y={2.75}
      fill="#68737D"
      stroke="#68737D"
      strokeWidth={1.5}
      rx={1.25}
    />
  </Svg>
);
export default SvgFileDownload;

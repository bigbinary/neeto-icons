import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEdit = (props) => (
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
      d="m18 10-3-3M6 20h9M16.017 5.683l-6.143 6.143a2.2 2.2 0 0 0-.623 1.245l-.24 1.684a1.09 1.09 0 0 0 1.214 1.237l1.625-.201a2.2 2.2 0 0 0 1.286-.628l6.18-6.178a2.334 2.334 0 0 0 0-3.3l-.002-.002a2.33 2.33 0 0 0-3.297 0Z"
    />
  </Svg>
);
export default SvgEdit;

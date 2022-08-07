import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const SvgColumn = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={4.75}
      y={20.25}
      width={16.5}
      height={14.5}
      rx={2.25}
      transform="rotate(-90 4.75 20.25)"
      stroke="#68737D"
      strokeWidth={1.5}
    />
    <Path d="M12 4v16.313" stroke="#68737D" strokeWidth={1.5} />
  </Svg>
);

export default SvgColumn;

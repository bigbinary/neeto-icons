import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgSubdomain = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={8.25} stroke="#68737D" strokeWidth={1.5} />
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      d="M15.25 12c0 2.405-.435 4.547-1.107 6.06-.336.756-.718 1.323-1.103 1.69-.382.363-.732.5-1.04.5-.308 0-.658-.137-1.04-.5-.385-.367-.767-.934-1.103-1.69C9.185 16.546 8.75 14.405 8.75 12c0-2.405.435-4.547 1.107-6.06.336-.756.718-1.323 1.103-1.69.382-.363.732-.5 1.04-.5.308 0 .658.137 1.04.5.385.367.767.934 1.103 1.69.672 1.513 1.107 3.655 1.107 6.06ZM4 12h16"
    />
  </Svg>
);
export default SvgSubdomain;

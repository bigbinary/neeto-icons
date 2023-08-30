import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTransaction = (props) => (
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
      d="M14.611 9.714a1.712 1.712 0 0 0-.58-.807 1.638 1.638 0 0 0-.92-.336H10.89c-.442 0-.866.181-1.179.503a1.74 1.74 0 0 0-.488 1.212c0 .454.176.89.488 1.212.313.321.737.502 1.179.502h2.222c.442 0 .866.18 1.179.502.312.322.488.758.488 1.212 0 .455-.176.891-.488 1.213a1.643 1.643 0 0 1-1.179.502H10.89a1.638 1.638 0 0 1-.92-.336 1.712 1.712 0 0 1-.58-.807M12 6.857v1.714m0 6.858v1.714m-5.556-3.429L4.222 16 2 13.714m2.222 1.715v-8C4.222 5.535 5.715 4 7.556 4h6.11m3.89 6.286L19.778 8 22 10.286M19.778 8.57v8c0 1.894-1.493 3.429-3.334 3.429h-6.11"
    />
  </Svg>
);
export default SvgTransaction;

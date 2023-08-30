import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNeetoChat = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4c-4.97 0-9 3.359-9 7.497a7.127 7.127 0 0 0 3.63 5.998 6.45 6.45 0 0 1-.893 1.642.87.87 0 0 0 .96 1.326 10.72 10.72 0 0 0 3.343-1.649 10.52 10.52 0 0 0 1.96.18c4.97 0 9-3.358 9-7.497C21 7.36 16.97 4 12 4ZM9 10h6M9 13h3"
    />
  </Svg>
);
export default SvgNeetoChat;

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArchive = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 12.667v-2.333a1 1 0 0 1 1-1h1.253a1 1 0 0 1 .706.292l.651.65c.25.25.589.39.942.39h2.895c.354 0 .694-.14.944-.39l.552-.553c.25-.25.59-.39.942-.39H13a1 1 0 0 1 1 1v2.334c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 12.667Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.333 9.333v-6C3.333 2.597 3.93 2 4.666 2h6.667c.736 0 1.333.597 1.333 1.333v6"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgArchive;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatEmpty = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 20 1.3-3.9c-1.124-1.662-1.53-3.63-1.144-5.538.386-1.908 1.54-3.626 3.244-4.836 1.704-1.209 3.845-1.827 6.024-1.739 2.179.089 4.248.877 5.821 2.22 1.574 1.342 2.546 3.147 2.735 5.078.19 1.931-.417 3.858-1.706 5.422-1.29 1.564-3.173 2.659-5.302 3.08-2.13.422-4.358.142-6.272-.787L3 20Z"
    />
  </Svg>
);
export default SvgChatEmpty;

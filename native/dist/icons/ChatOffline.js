import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatOffline = (props) => (
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
      d="M19.394 14C18.5 16 15.5 18.48 12 18.48c-.5 0-1.114-.054-1.661-.159L7.2 19.867v-2.845A7.011 7.011 0 0 1 4 11.24C4 7.223 7.6 4 12 4s8 3.223 8 7.24a6.794 6.794 0 0 1-.606 2.76Z"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m4 4 16.5 16.5"
    />
  </Svg>
);
export default SvgChatOffline;

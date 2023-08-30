import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserSettings = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2F3941"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 15H7a4 4 0 0 0-4 4v1M11 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM14.88 14.88l-.71-.71m4.951.709a3 3 0 1 1-4.241 4.243 3 3 0 0 1 4.241-4.243ZM17 14v-1 1Zm0 6v1-1Zm3-3h1-1Zm-6 0h-1 1Zm5.12-2.12.71-.71-.71.71Zm-4.24 4.24-.71.71.71-.71Zm4.24 0 .71.71-.71-.71Z"
    />
  </Svg>
);
export default SvgUserSettings;

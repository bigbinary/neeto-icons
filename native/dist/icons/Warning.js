import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgWarning = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F3CD82"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13.12V9.38M11.999 16.125a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5Z"
    />
    <Path
      stroke="#F3CD82"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.826 5.043 6.894 11.862c.8 1.379-.212 3.095-1.826 3.095H5.107c-1.616 0-2.628-1.716-1.826-3.095l6.893-11.862c.807-1.39 2.845-1.39 3.652 0Z"
    />
  </Svg>
);
export default SvgWarning;

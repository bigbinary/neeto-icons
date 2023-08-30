import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgLinear = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={32}
    height={32}
    style={{
      enableBackground: "new 0 0 50 50",
    }}
    viewBox="0 0 50 50"
    {...props}
  >
    <G fill="#5E6AD2">
      <Path d="M41.3 44c.5-.4.9-.8 1.3-1.3 9.8-9.8 9.8-25.6 0-35.4-9.8-9.8-25.6-9.8-35.4 0-.4.5-.8.9-1.2 1.4L41.3 44zM38.3 46.2 3.8 11.7c-.7 1.1-1.3 2.2-1.8 3.4L34.9 48c1.2-.5 2.3-1.1 3.4-1.8zM31.1 49.3.7 18.9c-.4 1.5-.6 3-.7 4.5L26.6 50c1.5-.1 3-.3 4.5-.7zM21.1 49.8.2 28.9c.8 5.1 3.1 9.9 7 13.9 4 3.8 8.9 6.2 13.9 7z" />
    </G>
  </Svg>
);
export default SvgLinear;

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFacebook = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9Zm0 1.501A7.488 7.488 0 0 1 19.499 12a7.486 7.486 0 0 1-6.384 7.41v-5.223h2.137l.334-2.17h-2.472v-1.184c0-.9.296-1.702 1.14-1.702h1.353V7.24c-.239-.032-.742-.102-1.691-.102-1.986 0-3.15 1.048-3.15 3.438v1.442H8.723v2.169h2.043v5.203A7.481 7.481 0 0 1 4.501 12 7.485 7.485 0 0 1 12 4.501Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgFacebook;

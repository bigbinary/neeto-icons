import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSlack = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#36C5F0"
      fillRule="evenodd"
      d="M11.71 0a3.196 3.196 0 0 0-3.194 3.2 3.197 3.197 0 0 0 3.194 3.199h3.195V3.2A3.2 3.2 0 0 0 11.709 0c.002 0 .002 0 0 0Zm0 8.533H3.193A3.197 3.197 0 0 0 0 11.733a3.197 3.197 0 0 0 3.193 3.2h8.516a3.197 3.197 0 0 0 3.194-3.199 3.197 3.197 0 0 0-3.194-3.2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#2EB67D"
      fillRule="evenodd"
      d="M31.935 11.733a3.197 3.197 0 0 0-3.194-3.2 3.197 3.197 0 0 0-3.195 3.2v3.2h3.195a3.197 3.197 0 0 0 3.194-3.2Zm-8.517 0V3.199A3.198 3.198 0 0 0 20.225 0a3.197 3.197 0 0 0-3.194 3.2v8.533a3.197 3.197 0 0 0 3.193 3.2 3.197 3.197 0 0 0 3.194-3.2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#ECB22E"
      fillRule="evenodd"
      d="M20.225 32a3.197 3.197 0 0 0 3.194-3.2 3.197 3.197 0 0 0-3.194-3.199h-3.194v3.2a3.199 3.199 0 0 0 3.194 3.2Zm0-8.535h8.517a3.197 3.197 0 0 0 3.194-3.199 3.197 3.197 0 0 0-3.193-3.2h-8.516a3.197 3.197 0 0 0-3.194 3.199 3.196 3.196 0 0 0 3.192 3.2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#E01E5A"
      fillRule="evenodd"
      d="M0 20.266a3.197 3.197 0 0 0 3.194 3.2 3.197 3.197 0 0 0 3.194-3.2v-3.2H3.194A3.197 3.197 0 0 0 0 20.266Zm8.516 0v8.533A3.197 3.197 0 0 0 11.71 32a3.197 3.197 0 0 0 3.194-3.198v-8.533a3.194 3.194 0 1 0-6.387-.003s0 .002 0 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSlack;

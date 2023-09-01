import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRedo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#2F3941"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6.368h5.526M12 6.368v0a6.316 6.316 0 1 0 6.316 6.316M15.158 4l2.368 2.368M15.158 8.737l2.368-2.369"
    />
  </Svg>
);
export default SvgRedo;

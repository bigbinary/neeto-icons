import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMic = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      d="M12 17.147a5.763 5.763 0 0 1-5.756-5.756.614.614 0 0 1 1.228 0A4.533 4.533 0 0 0 12 15.918a4.533 4.533 0 0 0 4.527-4.527.614.614 0 1 1 1.229 0A5.762 5.762 0 0 1 12 17.147Z"
    />
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      d="M12 14.37a2.967 2.967 0 0 1-2.956-2.957V6.787A2.967 2.967 0 0 1 12 3.831a2.967 2.967 0 0 1 2.956 2.956v4.626A2.967 2.967 0 0 1 12 14.369Z"
    />
    <Path
      fill="#68737D"
      d="M12 20.763a.614.614 0 0 1-.614-.614v-3.46a.614.614 0 0 1 1.228 0v3.46c0 .339-.275.614-.614.614Z"
    />
    <Path
      fill="#68737D"
      d="M14.071 20.919H9.93a.614.614 0 1 1 0-1.229h4.142a.614.614 0 1 1 0 1.229Z"
    />
  </Svg>
);
export default SvgMic;

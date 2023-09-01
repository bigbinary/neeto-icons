import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoChat = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <G clipPath="url(#NeetoChat_svg__a)">
      <Path
        fill="url(#NeetoChat_svg__b)"
        d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
      />
      <G filter="url(#NeetoChat_svg__c)">
        <Path
          fill="#fff"
          d="M18.33 13.165h3.848c2.041 0 3.999.787 5.442 2.19a7.372 7.372 0 0 1 2.254 5.288c0 1.983-.81 3.885-2.254 5.287a7.812 7.812 0 0 1-5.442 2.19v3.272c-4.81-1.87-11.544-4.673-11.544-10.75 0-.981.199-1.954.586-2.861a7.468 7.468 0 0 1 1.668-2.426 7.714 7.714 0 0 1 2.497-1.621 7.892 7.892 0 0 1 2.945-.57Z"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="NeetoChat_svg__b"
        x1={21.308}
        x2={21.122}
        y1={56.075}
        y2={4.673}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A368DC" />
        <Stop offset={1} stopColor="#8886FF" />
      </LinearGradient>
      <ClipPath id="NeetoChat_svg__a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNeetoChat;

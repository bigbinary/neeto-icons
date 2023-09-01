import * as React from "react";
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoCrm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoCRM_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G
      fill="#fff"
      fillRule="evenodd"
      clipPath="url(#NeetoCRM_svg__b)"
      clipRule="evenodd"
      filter="url(#NeetoCRM_svg__c)"
    >
      <Path d="M15.278 20.913a1.942 1.942 0 1 0-2.746 2.746 1.942 1.942 0 0 0 2.746-2.746Zm1.564-1.565a4.154 4.154 0 1 0-5.874 5.875 4.154 4.154 0 0 0 5.874-5.875ZM27.468 14.818a1.942 1.942 0 1 0-2.746 2.746 1.942 1.942 0 0 0 2.746-2.746Zm1.564-1.564a4.154 4.154 0 1 0-5.875 5.874 4.154 4.154 0 0 0 5.875-5.874ZM27.468 27.007a1.942 1.942 0 1 0-2.746 2.747 1.942 1.942 0 0 0 2.746-2.747Zm1.564-1.564a4.154 4.154 0 1 0-5.875 5.875 4.154 4.154 0 0 0 5.875-5.875Z" />
      <Path d="M24.372 17.048c.273.547.052 1.211-.494 1.484l-6.766 3.383a1.106 1.106 0 0 1-.99-1.978l6.767-3.383a1.106 1.106 0 0 1 1.483.494ZM15.628 23.151a1.106 1.106 0 0 1 1.484-.494l6.766 3.383a1.106 1.106 0 0 1-.99 1.978l-6.765-3.383a1.106 1.106 0 0 1-.495-1.484Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoCRM_svg__a"
        x1={40}
        x2={21.122}
        y1={48.143}
        y2={4.673}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#609AF0" />
        <Stop offset={1} stopColor="#6BD1F1" />
      </LinearGradient>
      <ClipPath id="NeetoCRM_svg__b">
        <Path fill="#fff" d="M6.286 8.571h27.429v27.43H6.285z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNeetoCrm;

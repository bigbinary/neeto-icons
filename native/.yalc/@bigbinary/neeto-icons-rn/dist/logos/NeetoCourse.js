import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoCourse = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoCourse_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G fill="#fff" filter="url(#NeetoCourse_svg__b)">
      <Path
        fillRule="evenodd"
        d="M20 8.286c5.365 0 9.714 4.349 9.714 9.714v9.714H10.286V8.286H20Zm4.34 4.274a.971.971 0 0 0-.972.971v11.01a.972.972 0 0 0 1.943 0V13.53a.971.971 0 0 0-.972-.971Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M15.648 26.937c0-.43.348-.777.777-.777H26.8a2.914 2.914 0 0 1 0 5.828H10.286V29.82h1.554v.614H26.8a1.36 1.36 0 0 0 0-2.72H16.425a.777.777 0 0 1-.777-.777Z"
        clipRule="evenodd"
      />
      <Path d="M28.419 26.549h1.295v2.59H28.42v-2.59Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoCourse_svg__a"
        x1={40}
        x2={-6.857}
        y1={48.143}
        y2={-9.714}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#59CBEF" />
        <Stop offset={1} stopColor="#8CD672" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoCourse;

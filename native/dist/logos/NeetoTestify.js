import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoTestify = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoTestify_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G fill="#fff" filter="url(#NeetoTestify_svg__b)">
      <Path d="m31.884 31.144-3.15-3.112c-.317.51-.695.988-1.132 1.423-.44.44-.923.822-1.439 1.142l3.169 3.13a1.814 1.814 0 0 0 2.566-.016 1.81 1.81 0 0 0-.014-2.567Z" />
      <Path
        fillRule="evenodd"
        d="M19.047 29.613c4.818 0 8.698-3.879 8.698-8.632 0-4.752-3.88-8.631-8.698-8.631-4.818 0-8.697 3.879-8.697 8.631 0 4.753 3.88 8.632 8.697 8.632Zm0 2.636c6.26 0 11.333-5.045 11.333-11.268 0-6.222-5.074-11.267-11.333-11.267S7.714 14.76 7.714 20.981c0 6.223 5.074 11.267 11.333 11.267Z"
        clipRule="evenodd"
      />
      <Path d="m22.716 17.07-1.167 1.157 2.16 2.689-2.16 2.69 1.167 1.158 3.052-3.848-3.052-3.845Zm-5.907 1.154-1.167-1.156-3.052 3.848 3.052 3.845 1.167-1.157-2.16-2.688 2.16-2.692Zm.723 6.777h1.647l1.647-8.17H19.18L17.532 25Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoTestify_svg__a"
        x1={40}
        x2={-12.429}
        y1={48.143}
        y2={-17}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9E45" />
        <Stop offset={1} stopColor="#FFF27A" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoTestify;

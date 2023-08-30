import * as React from "react";
import Svg, {
  Rect,
  Mask,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoBugtrap = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoBugtrap_svg__a)" rx={10.773} />
    <Mask
      id="NeetoBugtrap_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect
        width={40}
        height={40}
        fill="url(#NeetoBugtrap_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoBugtrap_svg__c)">
      <Path
        fill="url(#NeetoBugtrap_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoBugtrap_svg__e)">
      <Path d="m30.458 28.143-2.796-2.763a7.01 7.01 0 0 1-1.005 1.263c-.39.391-.82.73-1.277 1.014l2.812 2.778a1.61 1.61 0 0 0 2.271-.008l.007-.006c.63-.63.62-1.653-.012-2.278Z" />
      <Path
        fillRule="evenodd"
        d="M19.064 26.784c4.276 0 7.72-3.443 7.72-7.661s-3.444-7.661-7.72-7.661-7.719 3.443-7.719 7.66c0 4.219 3.443 7.662 7.72 7.662Zm0 2.339c5.555 0 10.059-4.477 10.059-10s-4.504-10-10.059-10-10.058 4.477-10.058 10 4.503 10 10.058 10Z"
        clipRule="evenodd"
      />
      <Path d="M15.629 21.03a3.49 3.49 0 0 1-.034-.491v-.49h-.975v-.983h.975v-.49c0-.167.011-.33.034-.491h-1.01v-.982h1.304a3.441 3.441 0 0 1 1.384-1.508l-.512-.515.69-.694.82.827c.463-.098.94-.098 1.402 0l.82-.827.69.695-.512.515a3.44 3.44 0 0 1 1.384 1.507h1.303v.982h-1.009c.023.16.034.324.034.49v.491h.975v.982h-.975v.491c0 .167-.012.33-.034.49h1.009v.983h-1.303a3.428 3.428 0 0 1-1.259 1.432 3.393 3.393 0 0 1-3.648 0 3.428 3.428 0 0 1-1.259-1.432H14.62v-.982h1.009Zm1.915-2.945v.981h2.924v-.981h-2.924Zm0 1.963v.982h2.924v-.982h-2.924Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoBugtrap_svg__a"
        x1={-27.544}
        x2={76.725}
        y1={-30.175}
        y2={79.298}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.177} stopColor="#8BBAFF" />
        <Stop offset={1} stopColor="#753BF1" />
      </LinearGradient>
      <LinearGradient
        id="NeetoBugtrap_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoBugtrap_svg__d"
        x1={32.249}
        x2={0.43}
        y1={9.638}
        y2={40.86}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.16} />
        <Stop offset={0.531} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoBugtrap;

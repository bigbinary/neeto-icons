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
const SvgNeetoGit = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={342}
    height={342}
    fill="none"
    {...props}
  >
    <Rect width={342} height={342} fill="url(#NeetoGit_svg__a)" rx={92.11} />
    <Mask
      id="NeetoGit_svg__c"
      width={342}
      height={342}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Rect width={342} height={342} fill="url(#NeetoGit_svg__b)" rx={92.11} />
    </Mask>
    <G mask="url(#NeetoGit_svg__c)">
      <Path
        fill="url(#NeetoGit_svg__d)"
        d="M319.936 191.227c0-87.333-70.797-158.13-158.129-158.13H3.677v316.259h316.259V191.227Z"
      />
    </G>
    <G filter="url(#NeetoGit_svg__e)">
      <Path
        fill="#fff"
        d="M96 96h49v37.852c-6.382 2.117-10.977 8.141-10.959 15.231.019 7.061 4.608 13.041 10.959 15.148v28.952c-6.388 2.099-11 8.112-11 15.203 0 8.836 7.163 16 16 16s16-7.164 16-16c0-7.091-4.612-13.104-11-15.203v-28.925a15.96 15.96 0 0 0 5.602-3.197l17.116 9.882a16.091 16.091 0 0 0-.308 3.179c.023 8.837 7.205 15.982 16.042 15.959 8.837-.023 15.981-7.206 15.958-16.042-.023-8.837-7.205-15.981-16.041-15.958-4.13.01-7.89 1.585-10.722 4.161l-16.968-9.797c.24-1.11.365-2.263.362-3.445-.018-7.091-4.647-13.093-11.041-15.175V96h16c41.421 0 75 33.579 75 75v75H96V96Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoGit_svg__a"
        x1={-235.5}
        x2={656}
        y1={-258}
        y2={678}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.177} stopColor="#FF8B8B" />
        <Stop offset={1} stopColor="#FF4E6E" />
      </LinearGradient>
      <LinearGradient
        id="NeetoGit_svg__b"
        x1={-23.954}
        x2={318.389}
        y1={-19.463}
        y2={522.498}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoGit_svg__d"
        x1={275.728}
        x2={3.678}
        y1={82.407}
        y2={349.356}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.16} />
        <Stop offset={0.531} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoGit;

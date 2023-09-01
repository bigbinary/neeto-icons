import * as React from "react";
import Svg, {
  Path,
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoChangelog = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#NeetoChangelog_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G fill="#fff" filter="url(#NeetoChangelog_svg__b)">
      <Rect width={2.43} height={15.749} x={25.208} y={13.429} rx={1.215} />
      <Path
        fillRule="evenodd"
        d="M29.087 23.329a1.514 1.514 0 0 0 2.056-1.413v-1.132a1.514 1.514 0 0 0-2.056-1.414v3.959Z"
        clipRule="evenodd"
      />
      <Path d="M12.219 23.248c-.032-.278.017-.56.142-.811.682-1.375 2.753-.89 2.753.645v6.809a1.062 1.062 0 0 1-2.118.121l-.777-6.764Z" />
      <Path
        fillRule="evenodd"
        d="M9.312 18.061a.935.935 0 0 0-.74.915v5.012c0 .449.318.834.759.918l5.76 1.1v-9.17l-5.779 1.226Zm7.157-1.517v9.726l8.74 1.669V14.69l-8.74 1.854Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoChangelog_svg__a"
        x1={43.143}
        x2={6.286}
        y1={51.857}
        y2={-3.571}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFA768" />
        <Stop offset={0.699} stopColor="#FF8787" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoChangelog;

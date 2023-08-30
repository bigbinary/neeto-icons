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
const SvgNeetoCal = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoCal_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G fill="#fff" filter="url(#NeetoCal_svg__b)">
      <Rect width={2.399} height={2.399} x={14.123} y={22.222} rx={0.24} />
      <Rect width={2.399} height={2.399} x={14.123} y={25.34} rx={0.24} />
      <Rect width={2.399} height={2.399} x={17.242} y={19.104} rx={0.24} />
      <Rect width={2.399} height={2.399} x={17.242} y={22.222} rx={0.24} />
      <Rect width={2.399} height={2.399} x={17.242} y={25.34} rx={0.24} />
      <Rect width={2.399} height={2.399} x={20.36} y={19.104} rx={0.24} />
      <Rect width={2.399} height={2.399} x={23.478} y={19.104} rx={0.24} />
      <Rect width={2.399} height={2.399} x={20.36} y={22.222} rx={0.24} />
      <Rect width={2.399} height={2.399} x={20.36} y={25.34} rx={0.24} />
      <Rect width={2.399} height={2.399} x={23.478} y={22.222} rx={0.24} />
      <Rect width={1.799} height={3.358} x={14.963} y={11.428} rx={0.899} />
      <Rect width={1.799} height={3.358} x={23.238} y={11.428} rx={0.899} />
      <Path
        fillRule="evenodd"
        d="M22.878 12.868h-5.756v1.02a1.26 1.26 0 1 1-2.519 0v-1.02h-1.2a3.118 3.118 0 0 0-3.117 3.118V28.46a3.118 3.118 0 0 0 3.118 3.118h13.192a3.118 3.118 0 0 0 3.118-3.118V15.986a3.118 3.118 0 0 0-3.118-3.118h-1.2v1.02a1.26 1.26 0 1 1-2.518 0v-1.02Zm-9.714 4.797a.48.48 0 0 0-.48.48v10.554c0 .265.215.48.48.48h13.672a.48.48 0 0 0 .48-.48V18.145a.48.48 0 0 0-.48-.48H13.164Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoCal_svg__a"
        x1={40}
        x2={21.122}
        y1={48.143}
        y2={4.673}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EE4D5F" />
        <Stop offset={1} stopColor="#FFCDA5" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoCal;

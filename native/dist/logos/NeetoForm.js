import * as React from "react";
import Svg, {
  G,
  Path,
  Rect,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const SvgNeetoForm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#NeetoForm_svg__a)">
      <Path
        fill="url(#NeetoForm_svg__b)"
        d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
      />
      <Rect
        width={13.788}
        height={3.76}
        x={16.005}
        y={19.68}
        fill="#fff"
        rx={1.88}
      />
      <Rect
        width={10.655}
        height={3.76}
        x={16.005}
        y={25.948}
        fill="#fff"
        rx={1.88}
      />
      <Rect
        width={10.028}
        height={3.76}
        x={16.005}
        y={13.413}
        fill="#fff"
        rx={1.88}
      />
      <Circle cx={12.245} cy={15.293} r={1.88} fill="#fff" />
      <Circle cx={12.245} cy={21.561} r={1.88} fill="#fff" />
      <Circle cx={12.245} cy={27.828} r={1.88} fill="#fff" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoForm_svg__b"
        x1={21.308}
        x2={21.122}
        y1={56.075}
        y2={4.673}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E26682" />
        <Stop offset={1} stopColor="#FE8072" />
      </LinearGradient>
      <ClipPath id="NeetoForm_svg__a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNeetoForm;

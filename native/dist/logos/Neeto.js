import * as React from "react";
import Svg, {
  Path,
  Mask,
  G,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";
const SvgNeeto = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={415}
    height={415}
    fill="none"
    {...props}
  >
    <Path
      fill="#0043AC"
      d="M414.989 207.495C414.989 92.899 322.091 0 207.495 0H0v414.989h414.989V207.495Z"
    />
    <Mask
      id="Neeto_svg__a"
      width={415}
      height={415}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path
        fill="#0043AC"
        d="M414.989 207.495C414.989 92.899 322.091 0 207.495 0H0v414.989h414.989V207.495Z"
      />
    </Mask>
    <G mask="url(#Neeto_svg__a)">
      <Path
        fill="url(#Neeto_svg__b)"
        d="M233.747 348.74c88.579 101.145 172.015 116.411 202.661 111.401v32.491H-8.032V230.487c43.685-2.726 153.2 17.108 241.779 118.253Z"
      />
    </G>
    <Path fill="#fff" d="m74.965 99.783 78.777 78.777v175.062H74.965V99.782Z" />
    <Path
      fill="#fff"
      d="M162.496 169.807h43.765c29.005 0 52.518 23.514 52.518 52.519v131.296h78.778V222.326c0-72.513-58.783-131.296-131.296-131.296H83.718l78.778 78.777Z"
    />
    <Defs>
      <RadialGradient
        id="Neeto_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(47.118 -220.556 214.818) scale(427.964 725.049)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0043AC" />
        <Stop offset={1} stopColor="#3DB1CA" stopOpacity={0.8} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SvgNeeto;

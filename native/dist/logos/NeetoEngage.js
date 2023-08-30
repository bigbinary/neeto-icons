import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoEngage = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoEngage_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      filter="url(#NeetoEngage_svg__b)"
    >
      <Path d="M23.551 10.61a9.905 9.905 0 1 0-3.79 19.056.642.642 0 1 1 0 1.284A11.19 11.19 0 1 1 30.95 19.76a.642.642 0 0 1-1.284 0 9.905 9.905 0 0 0-6.115-9.15Z" />
      <Path d="M9.172 16.245c0-.355.288-.642.642-.642h19.768a.642.642 0 0 1 0 1.284H9.814a.642.642 0 0 1-.642-.642ZM9.173 23.276c0-.354.288-.642.642-.642h9.945a.642.642 0 1 1 0 1.284H9.815a.642.642 0 0 1-.642-.642Z" />
      <Path d="M18.2 8.991a3.12 3.12 0 0 1 4.264 1.14 18.779 18.779 0 0 1 2.627 9.632.642.642 0 1 1-1.284-.004 17.495 17.495 0 0 0-2.45-8.975l-.004-.008a1.834 1.834 0 0 0-3.182 0l-.004.006a17.673 17.673 0 0 0 0 17.959l.003.004a1.849 1.849 0 0 0 1.594.922.642.642 0 1 1-.003 1.284 3.133 3.133 0 0 1-2.701-1.56 18.958 18.958 0 0 1 0-19.258A3.12 3.12 0 0 1 18.2 8.99Z" />
      <Path d="M26.74 31.428a4.688 4.688 0 1 0 0-9.375 4.688 4.688 0 0 0 0 9.375Zm-2.046-3.626a1.478 1.478 0 0 1 1.045-.433h2.174a1.479 1.479 0 0 1 1.478 1.478v.543a.391.391 0 1 1-.782 0v-.543a.696.696 0 0 0-.696-.696h-2.174a.695.695 0 0 0-.696.696v.543a.391.391 0 0 1-.782 0v-.543c0-.392.155-.768.433-1.045Zm1.436-2.369a.696.696 0 1 1 1.391 0 .696.696 0 0 1-1.39 0Zm.696-1.478a1.478 1.478 0 1 0 0 2.956 1.478 1.478 0 0 0 0-2.956Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoEngage_svg__a"
        x1={41.571}
        x2={2.571}
        y1={62.714}
        y2={-8.571}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#96BAFF" />
        <Stop offset={1} stopColor="#10AADB" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoEngage;

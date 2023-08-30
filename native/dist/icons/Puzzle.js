import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPuzzle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 19v-4.687 0a.5.5 0 0 0-.724-.447l-.764.383v0a2.424 2.424 0 0 1-1.084.255h-.004v0A2.424 2.424 0 0 1 16 12.08s0 0 0 0v-.153 0a2.424 2.424 0 0 1 2.431-2.424v0c.374 0 .743.088 1.078.256l.912.456v0A.4.4 0 0 0 21 9.857V5a2 2 0 0 0-2-2h-4.687v0a.5.5 0 0 0-.447.724l.383.764v0c.168.337.255.708.255 1.084v.004A2.424 2.424 0 0 1 12.08 8s0 0 0 0h-.153v0a2.424 2.424 0 0 1-2.424-2.424v-.008 0c0-.373.088-.742.256-1.076l.456-.913v0A.4.4 0 0 0 9.857 3H5h0a2 2 0 0 0-2 2v4.687a.5.5 0 0 0 .724.447l.764-.383v0a2.424 2.424 0 0 1 1.084-.255h.004v0A2.424 2.424 0 0 1 8 11.92s0 0 0 0v.153a2.424 2.424 0 0 1-2.424 2.424h-.008 0a2.425 2.425 0 0 1-1.077-.256l-.912-.456v0a.4.4 0 0 0-.579.358V19a2 2 0 0 0 2 2h4.687v0a.5.5 0 0 0 .447-.724l-.383-.764v0a2.424 2.424 0 0 1-.255-1.084v-.004 0A2.424 2.424 0 0 1 11.92 16s0 0 0 0h.153v0a2.424 2.424 0 0 1 2.424 2.424v.008a2.424 2.424 0 0 1-.256 1.077l-.456.912v0a.4.4 0 0 0 .358.579H19v0a2 2 0 0 0 2-2v0Z"
    />
  </Svg>
);
export default SvgPuzzle;

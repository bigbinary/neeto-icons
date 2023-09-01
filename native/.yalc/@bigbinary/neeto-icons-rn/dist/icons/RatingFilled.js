import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRatingFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      d="M7.733 20.829a1.5 1.5 0 0 1-2.171-1.592l.809-4.637-3.406-3.264a1.5 1.5 0 0 1 .827-2.571l4.729-.676 2.135-4.259a1.5 1.5 0 0 1 2.688 0l2.135 4.259 4.729.676a1.5 1.5 0 0 1 .827 2.571L17.629 14.6l.809 4.638a1.5 1.5 0 0 1-2.171 1.592L12 18.625l-4.267 2.204Z"
    />
  </Svg>
);
export default SvgRatingFilled;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgForm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      fillRule="evenodd"
      d="M18.813 21.163H5.187a.687.687 0 0 1-.687-.687V6.564c0-.178.07-.349.193-.477L8.199 2.46a.687.687 0 0 1 .494-.21h10.12c.38 0 .687.308.687.687v17.54c0 .378-.308.686-.687.686Zm0-20.413C20.021.75 21 1.73 21 2.937v17.54c0 1.207-.98 2.186-2.187 2.186H5.187A2.187 2.187 0 0 1 3 20.476V6.564c0-.567.22-1.111.614-1.52L7.12 1.418C7.532.991 8.1.75 8.693.75h10.12Z"
      clipRule="evenodd"
    />
    <Path
      fill="#68737D"
      fillRule="evenodd"
      d="M7.5 10.957a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM7.5 14.087a.75.75 0 0 1 .75-.75h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM7.5 17.217a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
    <Path
      fill="#68737D"
      d="M9 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM11.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM13.5 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </Svg>
);
export default SvgForm;

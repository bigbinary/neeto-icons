import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSecurity = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.035 14.834v-1.797a2.037 2.037 0 0 0-2.036-2.036v0a2.037 2.037 0 0 0-2.036 2.036v1.797"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.332 14.836h-4.667c-.736 0-1.333.597-1.333 1.333v2.832c0 .736.597 1.334 1.333 1.334h4.667c.736 0 1.333-.598 1.333-1.334V16.17c0-.736-.597-1.333-1.333-1.333Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#68737D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.665 14.99c0 5.824-4.209 11.283-9.973 12.915-.45.128-.936.128-1.387 0-5.764-1.631-9.973-7.091-9.973-12.915V9.62c0-1.083.655-2.06 1.657-2.469l6.486-2.653a6.66 6.66 0 0 1 5.049 0l6.485 2.653a2.666 2.666 0 0 1 1.656 2.468v5.371Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSecurity;

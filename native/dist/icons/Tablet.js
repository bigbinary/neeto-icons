import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTablet = (props) => (
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
      d="M17.895 3H6.105C5.495 3 5 3.495 5 4.105v15.79C5 20.505 5.495 21 6.105 21h11.79c.61 0 1.105-.495 1.105-1.105V4.105C19 3.495 18.505 3 17.895 3ZM9.5 18.5h5"
    />
  </Svg>
);
export default SvgTablet;

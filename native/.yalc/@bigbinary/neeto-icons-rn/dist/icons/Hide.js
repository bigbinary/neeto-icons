import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHide = (props) => (
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
      strokeWidth={1.5}
      d="M20.424 14.134c.04-.076.092-.145.13-.222a4.321 4.321 0 0 0 0-3.824A9.453 9.453 0 0 0 12 5c-.225 0-.443.03-.665.045m3.222 8.512a3.002 3.002 0 1 1-4.113-4.113l4.113 4.113Zm3.437 3.437A9.869 9.869 0 0 1 12 19a9.453 9.453 0 0 1-8.554-5.088 4.322 4.322 0 0 1 0-3.824 8.9 8.9 0 0 1 3.777-3.865l10.771 10.771ZM21 20 4 3"
    />
  </Svg>
);
export default SvgHide;

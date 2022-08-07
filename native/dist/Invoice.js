import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInvoice = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM12 7.825V7m0 5.778v.825"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.569 12.188c.212.362.599.586 1.018.59h.908a1.156 1.156 0 0 0 .28-2.283l-1.546-.389a1.156 1.156 0 0 1 .276-2.28h.908c.42.002.807.226 1.02.589M8 17h8"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgInvoice;

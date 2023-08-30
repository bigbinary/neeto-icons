import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const SvgNeetoInvoice = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#NeetoInvoice_svg__a)">
      <Path
        fill="url(#NeetoInvoice_svg__b)"
        d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M29.266 30.057V13.296a.492.492 0 0 0-.493-.492H11.467a.492.492 0 0 0-.492.492v16.76c0 .143.062.28.17.373l2.556 2.215c.185.16.46.16.645 0l2.403-2.083c.185-.16.46-.16.645 0l2.404 2.083c.185.16.46.16.645 0l2.403-2.083c.185-.16.46-.16.645 0l2.404 2.083c.185.16.46.16.645 0l2.556-2.215a.492.492 0 0 0 .17-.372ZM12.804 17.07c0-.673.546-1.219 1.22-1.219h7.925a1.22 1.22 0 1 1 0 2.439h-7.926a1.22 1.22 0 0 1-1.22-1.22Zm1.22 3.049a1.22 1.22 0 1 0 0 2.439h12.193a1.22 1.22 0 0 0 0-2.44H14.023Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoInvoice_svg__b"
        x1={20.245}
        x2={20.245}
        y1={68.286}
        y2={-7.926}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#46A0D3" />
        <Stop offset={1} stopColor="#72DAE0" />
      </LinearGradient>
      <ClipPath id="NeetoInvoice_svg__a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNeetoInvoice;

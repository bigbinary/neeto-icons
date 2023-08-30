import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoSign = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoSign_svg__a)"
      d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
    />
    <G filter="url(#NeetoSign_svg__b)">
      <Path
        fill="#fff"
        d="m22.314 26.547.251-.002c1.134 0 1.73.47 2.465 1.583l.365.566c.286.422.464.599.688.691.402.166.736.085 1.96-.505l.374-.182c.766-.376 1.288-.591 1.878-.739a.697.697 0 1 1 .338 1.353 6.513 6.513 0 0 0-1.178.435l-1.077.518c-1.457.688-1.95.77-2.826.41-.58-.24-.911-.587-1.395-1.326l-.18-.282c-.56-.881-.841-1.128-1.412-1.128l-.148.003c-.402.025-.663.209-2.399 1.498-1.62 1.201-2.854 1.775-4.424 1.775-1.914 0-3.718-.352-5.406-1.055l2.678-.619c.878.187 1.787.28 2.728.28 1.2 0 2.194-.462 3.593-1.5l1.078-.796c1.182-.859 1.445-.965 2.049-.978Zm5.852-16.524a3.983 3.983 0 0 1 0 5.633l-.962.962c1.07 1.303 1.032 2.683.036 3.681l-2.788 2.79a.697.697 0 1 1-.986-.987l2.787-2.787c.451-.452.503-1.013-.037-1.709l-9.845 9.846a2.09 2.09 0 0 1-1.009.559l-5.65 1.304a.697.697 0 0 1-.836-.836l1.304-5.651a2.09 2.09 0 0 1 .558-1.008l11.796-11.796a3.983 3.983 0 0 1 5.632 0Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoSign_svg__a"
        x1={40}
        x2={-6.857}
        y1={48.143}
        y2={-9.714}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#698EEF" />
        <Stop offset={1} stopColor="#59CBEF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoSign;

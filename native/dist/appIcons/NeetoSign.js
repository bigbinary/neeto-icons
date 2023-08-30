import * as React from "react";
import Svg, {
  Rect,
  Mask,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoSign = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoSign_svg__a)" rx={10.773} />
    <Mask
      id="NeetoSign_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="url(#NeetoSign_svg__b)" rx={10.773} />
    </Mask>
    <G mask="url(#NeetoSign_svg__c)">
      <Path
        fill="url(#NeetoSign_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G filter="url(#NeetoSign_svg__e)">
      <Path
        fill="#fff"
        d="m22.169 25.35.23-.002c1.04 0 1.587.431 2.261 1.453l.336.519c.262.387.425.55.63.634.37.152.675.077 1.798-.463l.344-.168c.702-.344 1.18-.542 1.722-.677a.64.64 0 0 1 .31 1.24 5.971 5.971 0 0 0-1.08.4l-.988.475c-1.337.631-1.79.706-2.593.375-.533-.22-.836-.537-1.279-1.215l-.166-.259c-.513-.808-.771-1.035-1.295-1.035l-.135.003c-.37.023-.608.192-2.201 1.374-1.485 1.102-2.618 1.628-4.059 1.628-1.756 0-3.41-.322-4.959-.967l2.457-.568c.805.171 1.639.257 2.502.257 1.1 0 2.013-.424 3.297-1.377l.989-.73c1.084-.788 1.325-.885 1.879-.897Zm5.368-15.157a3.653 3.653 0 0 1 0 5.167l-.882.882c.982 1.195.946 2.461.033 3.377l-2.558 2.558a.64.64 0 1 1-.904-.904l2.557-2.557c.413-.414.461-.93-.034-1.567l-9.032 9.031a1.918 1.918 0 0 1-.925.513l-5.184 1.196a.64.64 0 0 1-.767-.766l1.197-5.184c.08-.35.258-.671.512-.925l10.82-10.821a3.653 3.653 0 0 1 5.167 0Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoSign_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#59CBEF" />
        <Stop offset={0.609} stopColor="#698EEF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoSign_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoSign_svg__d"
        x1={32.249}
        x2={0.43}
        y1={9.638}
        y2={40.86}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.16} />
        <Stop offset={0.531} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoSign;

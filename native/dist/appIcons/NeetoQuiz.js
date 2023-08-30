import * as React from "react";
import Svg, {
  Path,
  Mask,
  Rect,
  G,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoQuiz = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#NeetoQuiz_svg__a)"
      d="M0 10.773C0 4.823 4.823 0 10.773 0h18.454C35.177 0 40 4.823 40 10.773v18.454C40 35.177 35.177 40 29.227 40H10.773C4.823 40 0 35.177 0 29.227V10.773Z"
    />
    <Mask
      id="NeetoQuiz_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="url(#NeetoQuiz_svg__b)" rx={10.773} />
    </Mask>
    <G mask="url(#NeetoQuiz_svg__c)">
      <Path
        fill="url(#NeetoQuiz_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      filter="url(#NeetoQuiz_svg__e)"
    >
      <Path d="M14.08 10.643h3.064c.804 0 1.6.156 2.344.46a6.132 6.132 0 0 1 1.988 1.309 6.031 6.031 0 0 1 1.689 3.152 6.235 6.235 0 0 0-1.918.442 6.136 6.136 0 0 0-1.988 1.3 5.99 5.99 0 0 0-1.328 1.945 5.886 5.886 0 0 0-.467 2.295c0 .782.138 1.496.386 2.15-1.268.663-2.591 1.2-3.77 1.664v-2.642a6.174 6.174 0 0 1-4.332-1.768 5.993 5.993 0 0 1-1.795-4.27c0-1.6.646-3.136 1.795-4.268a6.173 6.173 0 0 1 4.332-1.769Zm9.014 7.527c-.419 1.707-1.546 3.04-2.967 4.112a3.57 3.57 0 0 1-.075-.736c0-.44.088-.877.262-1.287.173-.41.429-.785.755-1.104a3.55 3.55 0 0 1 1.15-.751c.28-.114.574-.192.875-.233Z" />
      <Path d="M26.548 16.175h-2.777c-.73 0-1.452.14-2.126.412a5.568 5.568 0 0 0-1.802 1.172 5.401 5.401 0 0 0-1.205 1.754 5.285 5.285 0 0 0-.422 2.07c0 4.394 4.86 6.422 8.332 7.774V26.99c1.474 0 2.887-.57 3.928-1.584a5.336 5.336 0 0 0 1.627-3.824c0-1.434-.585-2.81-1.627-3.824a5.633 5.633 0 0 0-3.928-1.584Zm-3.045 3.902c-.151.24-.227.479-.227.715 0 .114.047.22.142.32a.482.482 0 0 0 .354.145c.235 0 .396-.14.48-.42.09-.269.199-.47.328-.607.129-.14.33-.209.603-.209.233 0 .423.068.57.205a.656.656 0 0 1 .223.503.561.561 0 0 1-.074.283 1.033 1.033 0 0 1-.18.238c-.069.07-.183.174-.342.313a5.631 5.631 0 0 0-.432.413 1.343 1.343 0 0 0-.257.402 1.37 1.37 0 0 0-.096.54c0 .167.043.292.13.376a.46.46 0 0 0 .328.127c.248 0 .396-.13.443-.387.027-.122.047-.206.06-.254a.817.817 0 0 1 .17-.305c.053-.06.121-.128.205-.205.306-.273.517-.466.633-.58.12-.117.221-.255.306-.414.087-.159.13-.344.13-.555a1.32 1.32 0 0 0-.227-.745 1.519 1.519 0 0 0-.637-.54 2.153 2.153 0 0 0-.953-.2c-.387 0-.726.079-1.017.238-.29.159-.511.36-.663.603Zm1.192 4.651a.597.597 0 0 0 .786-.004.52.52 0 0 0 .167-.41.536.536 0 0 0-.16-.394.536.536 0 0 0-.394-.16.553.553 0 0 0-.567.555c0 .176.056.314.168.413Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoQuiz_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.204} stopColor="#FE6363" />
        <Stop offset={0.84} stopColor="#FA9E9E" />
      </LinearGradient>
      <LinearGradient
        id="NeetoQuiz_svg__b"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.204} stopColor="#FE6363" />
        <Stop offset={0.84} stopColor="#8588FF" />
      </LinearGradient>
      <LinearGradient
        id="NeetoQuiz_svg__d"
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
export default SvgNeetoQuiz;

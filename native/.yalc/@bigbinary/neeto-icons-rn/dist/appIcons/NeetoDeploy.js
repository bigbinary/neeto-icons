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
const SvgNeetoDeploy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoDeploy_svg__a)" rx={10.773} />
    <Mask
      id="NeetoDeploy_svg__c"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect
        width={40}
        height={40}
        fill="url(#NeetoDeploy_svg__b)"
        rx={10.773}
      />
    </Mask>
    <G mask="url(#NeetoDeploy_svg__c)">
      <Path
        fill="url(#NeetoDeploy_svg__d)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoDeploy_svg__e)">
      <Path d="M11.7 21.274a111.14 111.14 0 0 0 3.164-4.788c-2.586.228-5.064 3.446-5.064 3.446l1.707 1.706c.05-.126.113-.248.193-.364ZM18.363 28.495 20.07 30.2s3.217-2.478 3.446-5.063c-1.075.672-2.53 1.595-4.788 3.164-.114.079-.236.144-.364.194ZM15.77 27.613c-.293.118-.58.244-.88.344-.802.268-1.627.449-2.464.564-.35.049-.705.09-1.06.117l.011-.132c.073-.852.203-1.7.413-2.53.1-.4.23-.79.368-1.18.086-.24.193-.472.301-.704l-.187-.187c-.418.28-.78.634-1.089 1.035a6.792 6.792 0 0 0-1.036 1.974 8.215 8.215 0 0 0-.434 2.37c-.003.112-.011.228.006.34a.79.79 0 0 0 .538.629c.116.037.232.038.352.037a7.918 7.918 0 0 0 2.167-.34c1.277-.38 2.565-1.093 3.32-2.22l-.182-.183a5.225 5.225 0 0 1-.144.066ZM29.968 10.033a.708.708 0 0 0-.5-.208h-.014c-2.278.045-7.9.471-10.884 3.457-1.355 1.355-1.796 2.06-2.761 3.606-.695 1.113-1.647 2.637-3.386 5.14a.708.708 0 0 0 .08.905l4.564 4.564a.707.707 0 0 0 .904.08c2.505-1.739 4.029-2.69 5.141-3.385 1.546-.966 2.252-1.406 3.607-2.762 2.99-2.99 3.413-8.607 3.456-10.883a.708.708 0 0 0-.207-.514Zm-5.284 8.61a2.352 2.352 0 1 1-3.327-3.326 2.352 2.352 0 0 1 3.327 3.327Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoDeploy_svg__a"
        x1={-15.876}
        x2={54.282}
        y1={-21.829}
        y2={58.309}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.245} stopColor="#14D1A4" />
        <Stop offset={1} stopColor="#67BDE2" />
      </LinearGradient>
      <LinearGradient
        id="NeetoDeploy_svg__b"
        x1={-2.802}
        x2={37.239}
        y1={-2.276}
        y2={61.111}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoDeploy_svg__d"
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
export default SvgNeetoDeploy;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMicrosoft = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <Path fill="#F65314" d="M20 20h80v80H20z" />
    <Path fill="#7CBB00" d="M120 20h80v80h-80z" />
    <Path fill="#00A4EF" d="M20 120h80v80H20z" />
    <Path fill="#FB0" d="M120 120h80v80h-80z" />
  </Svg>
);
export default SvgMicrosoft;

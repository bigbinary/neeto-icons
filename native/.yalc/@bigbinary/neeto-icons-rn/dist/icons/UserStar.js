import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserStar = (props) => (
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
      d="M4 18a3.983 3.983 0 0 1 4-4h3.111M11 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18.262 12.459v0a.82.82 0 0 1 1.472 0l.6 1.216v0c.12.242.35.41.618.449l1.343.2v0a.82.82 0 0 1 .454 1.4l-.971.948v0a.817.817 0 0 0-.236.726l.229 1.337v0a.82.82 0 0 1-1.19.865l-1.2-.631v0a.819.819 0 0 0-.764 0l-1.2.63v0a.82.82 0 0 1-1.19-.864l.229-1.337v0a.817.817 0 0 0-.236-.726l-.971-.948v0a.82.82 0 0 1 .454-1.4l1.343-.2v0a.818.818 0 0 0 .618-.45l.598-1.215Z"
    />
  </Svg>
);
export default SvgUserStar;

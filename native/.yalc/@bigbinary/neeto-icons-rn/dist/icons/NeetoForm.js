import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNeetoForm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M2.2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-10a5 5 0 0 1-5-5V7Zm9 0a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-1 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm-5-12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2Zm-1 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2.004-3.747 2.188-2.188a.625.625 0 0 0-.883-.882L6.762 11.93l-.496-.497a.625.625 0 0 0-.884.883l.938.938a.627.627 0 0 0 .883 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgNeetoForm;

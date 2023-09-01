import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgHours = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <G clipPath="url(#hours_svg__a)">
      <Path
        stroke="#68737D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.32 17.634a8 8 0 1 0-2.002-3.4"
      />
      <Path
        stroke="#68737D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.501 12.068-2.51 2.49-2.49-2.511"
      />
      <Path
        fill="#68737D"
        d="M9.928 14h3.05v-.712h-1.864v-.067l.782-.73c.771-.712 1.02-1.11 1.02-1.59v-.01c0-.729-.61-1.227-1.48-1.227-.925 0-1.558.557-1.558 1.368l.003.012h.817v-.015c0-.401.284-.677.697-.677.405 0 .65.252.65.613v.009c0 .296-.16.51-.755 1.086l-1.362 1.345V14Zm5.774 0h.844v-.776h.55v-.71h-.55V9.773h-1.242a51.973 51.973 0 0 0-1.673 2.757v.695h2.071V14Zm-1.274-1.462v-.047a36.5 36.5 0 0 1 1.245-2.048h.047v2.095h-1.292Z"
      />
    </G>
    <Defs>
      <ClipPath id="hours_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgHours;

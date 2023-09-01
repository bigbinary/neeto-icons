import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const SvgNeetoKb = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <G clipPath="url(#NeetoKB_svg__a)">
      <Path
        fill="url(#NeetoKB_svg__b)"
        d="M40 20C40 8.954 31.046 0 20 0H0v40h40V20Z"
      />
      <Path
        fill="#fff"
        d="M14.207 12.05c-.492.103-1.077.526-1.48 1.066a3.52 3.52 0 0 0-.471.968l-.062.227v14.481l.064.202c.272.871 1.094 1.683 2.036 2.013l.21.073 2.956.007 2.956.005 1.094-1.137 1.933-2.01c.46-.477.833-.87.83-.875-.004-.005-.048.013-.096.036a1.882 1.882 0 0 1-.224.09c-.13.038-.316.04-4.14.04-4.37 0-4.11.008-4.405-.134-.21-.101-.448-.341-.556-.563a1.297 1.297 0 0 1 .012-1.144c.144-.297.505-.59.819-.661.068-.016 1.441-.025 4.106-.025 4.404 0 4.114-.01 4.411.14.186.093.444.352.538.537.112.222.149.398.135.65-.01.205-.023.26-.142.56-.012.03-.012.039.004.023.012-.014.32-.332.685-.71.363-.377.967-1.004 1.342-1.39l.68-.705v-6.721l-1.652-.01c-1.585-.006-1.66-.009-1.816-.054-.797-.23-1.339-.89-1.57-1.91-.046-.202-.05-.291-.057-1.662l-.01-1.446-3.984.003c-3.437.002-4.009.007-4.146.036Zm9.723 7.614c.334.087.666.361.82.675a1.24 1.24 0 0 1-.184 1.393c-.155.172-.32.282-.547.362l-.18.064h-8.1l-.162-.06c-.67-.244-1-.92-.784-1.608.117-.377.494-.737.874-.828.094-.023 1-.028 4.122-.03 3.528-.002 4.022.002 4.141.032Z"
      />
      <Path
        fill="#fff"
        d="M23.626 13.366c.01 1.31.01 1.363.06 1.535.12.432.381.794.624.862.046.014.684.023 1.608.023h1.529l-.01-.295c-.009-.284-.011-.3-.091-.462-.197-.396-.824-1.043-1.942-2.002-.945-.81-1.282-1.016-1.664-1.016h-.121l.007 1.355ZM28.872 24.356c-.106.037-.3.186-.586.449l-.192.176.846.849c.464.464.858.846.872.846.016 0 .14-.112.274-.252.282-.28.398-.466.398-.624-.002-.382-.22-.8-.585-1.133a1.132 1.132 0 0 0-.55-.302c-.203-.052-.347-.054-.477-.009ZM26.478 26.578a292.33 292.33 0 0 0-2.157 2.169c-1.432 1.455-1.332 1.32-1.57 2.07-.196.62-.274.94-.29 1.167-.011.187-.01.199.046.263.052.064.07.069.203.066.188-.002.71-.13 1.238-.309.508-.167.735-.274.943-.434.089-.069 1.075-1.044 2.196-2.167l2.036-2.04-.846-.847a28.75 28.75 0 0 0-.863-.846c-.01 0-.43.41-.936.908Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoKB_svg__b"
        x1={20.245}
        x2={20.245}
        y1={68.286}
        y2={-7.926}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#18C0D3" />
        <Stop offset={1} stopColor="#65CDA1" />
      </LinearGradient>
      <ClipPath id="NeetoKB_svg__a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNeetoKb;

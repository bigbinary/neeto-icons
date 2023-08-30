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
const SvgNeetoKb = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="url(#NeetoKB_svg__a)" rx={10.753} />
    <Mask
      id="NeetoKB_svg__b"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="#E5E5E5" rx={10.753} />
    </Mask>
    <Mask
      id="NeetoKB_svg__d"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        masktype: "alpha",
      }}
    >
      <Rect width={40} height={40} fill="url(#NeetoKB_svg__c)" rx={10.753} />
    </Mask>
    <G mask="url(#NeetoKB_svg__d)">
      <Path
        fill="url(#NeetoKB_svg__e)"
        d="M37.42 22.366c0-10.215-8.28-18.495-18.495-18.495H.43v36.99h36.99V22.365Z"
      />
    </G>
    <G fill="#fff" filter="url(#NeetoKB_svg__f)">
      <Path d="M14.51 9.98c-.487.102-1.068.522-1.467 1.057a3.49 3.49 0 0 0-.467.959l-.061.224v14.354l.063.2c.27.863 1.084 1.668 2.018 1.995l.209.073 2.93.006 2.93.005 1.083-1.127c.599-.621 1.46-1.517 1.916-1.991.456-.474.825-.864.823-.868-.004-.005-.047.013-.095.036a1.903 1.903 0 0 1-.222.088c-.13.039-.313.041-4.105.041-4.33 0-4.072.007-4.365-.134a1.334 1.334 0 0 1-.55-.558 1.286 1.286 0 0 1 .01-1.133c.144-.295.502-.585.813-.656.068-.015 1.428-.024 4.07-.024 4.365 0 4.077-.01 4.372.138.183.093.44.349.533.533.11.22.147.394.133.644-.009.204-.022.258-.14.555-.012.03-.012.039.004.023.012-.014.318-.329.678-.703l1.331-1.379.674-.698v-6.662l-1.637-.01c-1.572-.006-1.647-.008-1.8-.054-.79-.226-1.327-.882-1.556-1.893-.046-.2-.05-.288-.057-1.646l-.01-1.433-3.95.002c-3.405.002-3.972.007-4.108.036Zm9.637 7.546c.331.087.66.359.812.67a1.23 1.23 0 0 1-.181 1.38c-.155.17-.318.28-.543.359l-.179.063H16.03l-.16-.059c-.665-.242-.992-.911-.778-1.594.115-.374.49-.73.866-.82.093-.023.99-.028 4.086-.03 3.496-.003 3.986.002 4.104.031Z" />
      <Path d="M23.845 11.284c.01 1.3.01 1.351.06 1.522.12.428.378.786.618.854.046.014.678.023 1.595.023h1.514l-.009-.292c-.009-.282-.011-.297-.09-.459-.196-.392-.817-1.033-1.926-1.984-.936-.802-1.27-1.006-1.648-1.006h-.12l.006 1.342ZM29.045 22.177c-.105.037-.298.184-.58.445l-.191.174.839.842c.46.46.85.839.864.839.015 0 .138-.111.272-.25.279-.279.394-.462.394-.619-.002-.379-.218-.794-.58-1.122a1.122 1.122 0 0 0-.544-.3c-.202-.052-.345-.054-.474-.009ZM26.673 24.38c-.501.496-1.463 1.462-2.139 2.149-1.42 1.442-1.32 1.308-1.555 2.052-.195.614-.272.932-.288 1.156-.011.186-.01.198.045.261.052.063.07.068.202.066.186-.003.703-.13 1.227-.306.503-.166.728-.272.934-.431.088-.068 1.066-1.034 2.177-2.148l2.018-2.022-.84-.84a28.68 28.68 0 0 0-.854-.838c-.009 0-.426.406-.927.9Z" />
    </G>
    <Defs>
      <LinearGradient
        id="NeetoKB_svg__a"
        x1={20}
        x2={18.187}
        y1={0}
        y2={72.398}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#65CDA1" />
        <Stop offset={1} stopColor="#18C0D3" />
      </LinearGradient>
      <LinearGradient
        id="NeetoKB_svg__c"
        x1={20}
        x2={20}
        y1={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8886FF" />
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
      <LinearGradient
        id="NeetoKB_svg__e"
        x1={32.249}
        x2={0.43}
        y1={9.638}
        y2={40.86}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.12} />
        <Stop offset={0.375} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoKb;

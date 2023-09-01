import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoDesk = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#neetoDesk_svg__a)"
      d="M47.997 31.998c0-13.254-10.745-23.999-23.999-23.999H0v47.997h47.997V31.998Z"
    />
    <G fill="#fff" filter="url(#neetoDesk_svg__b)">
      <Path d="M11.41 32.406h5.076c1.402 0 2.539 1.126 2.539 2.515v3.773c0 2.083-1.705 3.772-3.808 3.772-2.103 0-3.808-1.689-3.808-3.773v-6.287ZM29.18 34.921c0-1.389 1.136-2.515 2.538-2.515h5.077v6.288c0 2.083-1.705 3.772-3.808 3.772-2.103 0-3.808-1.689-3.808-3.773v-3.772ZM11.472 32.406c.637-6.355 6.048-11.317 12.63-11.317 6.582 0 11.994 4.962 12.63 11.317h-2.554c-.625-4.962-4.898-8.802-10.076-8.802-5.178 0-9.451 3.84-10.076 8.802h-2.554Z" />
    </G>
    <Path
      fill="#11243E"
      fillRule="evenodd"
      d="M90.08 20H73.236l8.335 8.198h8.51c5.365 0 9.708 4.25 9.708 9.488v17.685h8.379V37.686c0-9.77-8.1-17.685-18.086-17.685Zm-9.706 9.392-8.38-8.24v34.22h8.38v-25.98Zm64.597 20.197-5.317-5.504-.318.3c-1.845 1.742-4.937 3.425-9.211 3.425-3.004 0-5.32-.749-6.994-2.044-1.547-1.196-2.58-2.886-3.093-4.968h26.898l.019-.412c.283-5.872-1.215-10.969-4.28-14.606-3.07-3.644-7.677-5.78-13.511-5.78-10.303 0-18.347 7.59-18.347 17.688 0 5.073 1.902 9.502 5.294 12.661 3.391 3.159 8.242 5.022 14.095 5.022 6.836 0 11.263-2.332 14.463-5.484l.302-.298Zm38.823 0-5.317-5.504-.319.3c-1.845 1.742-4.937 3.425-9.21 3.425-3.005 0-5.32-.749-6.995-2.044-1.546-1.196-2.58-2.886-3.093-4.968h26.898l.02-.412c.283-5.872-1.216-10.969-4.28-14.606-3.071-3.644-7.678-5.78-13.511-5.78-10.303 0-18.348 7.59-18.348 17.688 0 5.073 1.903 9.502 5.295 12.661 3.391 3.159 8.241 5.022 14.095 5.022 6.836 0 11.263-2.332 14.462-5.484l.303-.298Zm10.586-29.29h-5.918v7.553h5.918v13.191c0 5.326.795 8.957 3.049 11.234 2.257 2.28 5.868 3.094 11.178 3.094h1.553v-7.745h-.44c-1.597 0-2.824-.06-3.774-.237-.945-.177-1.574-.462-2.011-.883-.436-.42-.73-1.02-.911-1.922-.183-.908-.244-2.081-.244-3.61V27.852h7.38v-7.554h-7.38v-8.924h-8.4v8.924Zm-65.134 7.187c2.706 0 4.69.797 6.084 2.096 1.292 1.205 2.113 2.874 2.506 4.836h-17.802c.514-2.15 1.56-3.827 3.022-4.991 1.577-1.256 3.673-1.941 6.19-1.941Zm38.822 0c2.706 0 4.69.797 6.085 2.096 1.292 1.205 2.112 2.874 2.506 4.836h-17.802c.513-2.15 1.559-3.827 3.021-4.991 1.577-1.256 3.674-1.941 6.19-1.941Zm62.794.016c5.59 0 10.033 4.569 10.033 10.185 0 5.614-4.443 10.184-10.033 10.184-5.587 0-9.965-4.566-9.965-10.184 0-5.62 4.378-10.185 9.965-10.185Zm0-7.501c-10.031 0-18.052 7.755-18.052 17.686 0 9.862 8.02 17.684 18.052 17.684 10.031 0 18.12-7.82 18.12-17.684 0-9.933-8.09-17.686-18.12-17.686Z"
      clipRule="evenodd"
    />
    <Path
      fill="#11243E"
      d="M270.596 11.006c4.595 0 8.627.898 12.094 2.695 3.509 1.796 6.204 4.365 8.084 7.707 1.921 3.3 2.882 7.144 2.882 11.53 0 4.386-.961 8.23-2.882 11.53-1.88 3.258-4.575 5.786-8.084 7.582-3.467 1.796-7.499 2.695-12.094 2.695h-15.289V11.006h15.289Zm-.313 36.282c4.595 0 8.146-1.254 10.653-3.76 2.506-2.506 3.759-6.036 3.759-10.59 0-4.553-1.253-8.104-3.759-10.653-2.507-2.59-6.058-3.885-10.653-3.885h-6.204v28.888h6.204ZM331.827 36.635c0 1.253-.083 2.381-.25 3.384h-25.379c.209 2.506 1.087 4.47 2.632 5.89 1.546 1.42 3.447 2.13 5.702 2.13 3.259 0 5.577-1.399 6.956-4.198h9.462c-1.003 3.342-2.924 6.1-5.765 8.272-2.841 2.13-6.329 3.196-10.465 3.196-3.342 0-6.349-.732-9.023-2.194-2.632-1.504-4.7-3.613-6.203-6.329-1.463-2.715-2.194-5.848-2.194-9.399 0-3.593.731-6.747 2.194-9.462 1.462-2.715 3.509-4.804 6.14-6.266 2.632-1.462 5.661-2.193 9.086-2.193 3.301 0 6.246.71 8.836 2.13 2.632 1.42 4.658 3.447 6.078 6.078 1.462 2.59 2.193 5.577 2.193 8.961Zm-9.086-2.506c-.042-2.256-.856-4.053-2.444-5.39-1.587-1.378-3.53-2.067-5.827-2.067-2.172 0-4.011.668-5.514 2.005-1.463 1.295-2.361 3.112-2.695 5.452h16.48ZM350.848 55.309c-2.84 0-5.389-.502-7.644-1.504-2.256-1.045-4.053-2.444-5.389-4.199-1.295-1.754-2.006-3.697-2.131-5.827h8.835c.168 1.336.815 2.443 1.943 3.32 1.17.878 2.611 1.317 4.324 1.317 1.671 0 2.966-.335 3.885-1.003.961-.668 1.441-1.525 1.441-2.57 0-1.127-.585-1.963-1.755-2.506-1.127-.585-2.945-1.211-5.451-1.88-2.59-.626-4.721-1.274-6.392-1.942-1.629-.668-3.049-1.692-4.261-3.07-1.169-1.38-1.754-3.238-1.754-5.577a9.12 9.12 0 0 1 1.629-5.264c1.128-1.587 2.715-2.84 4.762-3.76 2.089-.919 4.533-1.378 7.332-1.378 4.135 0 7.436 1.044 9.9 3.133 2.465 2.047 3.823 4.825 4.073 8.334h-8.396c-.126-1.379-.71-2.465-1.755-3.259-1.002-.835-2.36-1.253-4.073-1.253-1.587 0-2.82.293-3.697.877-.835.585-1.253 1.4-1.253 2.444 0 1.17.585 2.068 1.754 2.695 1.17.585 2.987 1.19 5.452 1.817 2.506.627 4.574 1.274 6.204 1.943 1.629.668 3.028 1.712 4.198 3.133 1.211 1.378 1.838 3.216 1.88 5.514 0 2.005-.564 3.801-1.692 5.389-1.086 1.587-2.674 2.84-4.762 3.76-2.047.877-4.449 1.316-7.207 1.316ZM391.597 54.745l-11.781-14.789v14.788h-8.773V8.375h8.773v26.381l11.655-14.725h11.405l-15.29 17.42 15.415 17.294h-11.404Z"
    />
    <Defs>
      <LinearGradient
        id="neetoDesk_svg__a"
        x1={25.568}
        x2={25.344}
        y1={75.284}
        y2={13.607}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FD9437" />
        <Stop offset={1} stopColor="#FFD55C" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoDesk;

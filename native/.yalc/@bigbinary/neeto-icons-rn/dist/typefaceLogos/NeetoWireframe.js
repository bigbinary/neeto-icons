import * as React from "react";
import Svg, {
  Path,
  G,
  Rect,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoWireframe = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#neetoWireframe_svg__a)"
      d="M48 32.996c0-13.255-10.745-24-24-24H0v48h48v-24Z"
    />
    <G fill="#fff" filter="url(#neetoWireframe_svg__b)">
      <Rect width={13.356} height={5.373} x={20.928} y={24.766} rx={0.512} />
      <Rect width={13.356} height={13.356} x={13.714} y={31.981} rx={0.512} />
      <Circle cx={16.4} cy={27.453} r={2.687} />
      <Rect
        width={13.356}
        height={5.373}
        x={28.913}
        y={45.338}
        rx={0.512}
        transform="rotate(-90 28.913 45.338)"
      />
    </G>
    <Path
      fill="#11243E"
      fillRule="evenodd"
      d="M90.087 21.627H73.24l8.336 8.198h8.511c5.364 0 9.708 4.25 9.708 9.488V57h8.38V39.313c0-9.77-8.101-17.686-18.088-17.686Zm-9.708 9.392L72 22.778V57h8.38V31.019Zm64.603 20.198-5.318-5.505-.318.301c-1.845 1.742-4.938 3.425-9.211 3.425-3.005 0-5.321-.748-6.995-2.044-1.547-1.196-2.581-2.886-3.093-4.968h26.899l.02-.413c.283-5.871-1.216-10.969-4.28-14.606-3.071-3.645-7.679-5.78-13.513-5.78-10.303 0-18.348 7.59-18.348 17.688 0 5.074 1.903 9.503 5.295 12.663 3.391 3.158 8.242 5.022 14.096 5.022 6.836 0 11.264-2.333 14.463-5.485l.303-.298Zm38.825 0-5.317-5.505-.319.301c-1.845 1.742-4.938 3.425-9.211 3.425-3.005 0-5.321-.748-6.995-2.044-1.547-1.196-2.58-2.886-3.093-4.968h26.899l.02-.413c.283-5.871-1.216-10.969-4.28-14.606-3.071-3.645-7.679-5.78-13.512-5.78-10.304 0-18.349 7.59-18.349 17.688 0 5.074 1.903 9.503 5.295 12.663 3.391 3.158 8.242 5.022 14.096 5.022 6.836 0 11.264-2.333 14.463-5.485l.303-.298Zm10.586-29.293h-5.918v7.555h5.918v13.192c0 5.326.796 8.958 3.05 11.235 2.258 2.28 5.868 3.094 11.179 3.094h1.553v-7.746h-.44c-1.597 0-2.825-.06-3.774-.237-.946-.177-1.574-.462-2.011-.883-.436-.42-.73-1.02-.912-1.922-.182-.908-.244-2.082-.244-3.61V29.479h7.381v-7.555h-7.381V13h-8.401v8.924Zm-65.138 7.189c2.706 0 4.691.797 6.085 2.096 1.292 1.205 2.113 2.874 2.506 4.836h-17.803c.514-2.15 1.56-3.827 3.022-4.991 1.577-1.256 3.673-1.941 6.19-1.941Zm38.826 0c2.705 0 4.69.797 6.084 2.096 1.292 1.205 2.113 2.874 2.507 4.836h-17.804c.514-2.15 1.56-3.827 3.022-4.991 1.577-1.256 3.673-1.941 6.191-1.941Zm62.798.015c5.59 0 10.034 4.57 10.034 10.186 0 5.615-4.444 10.185-10.034 10.185-5.588 0-9.966-4.566-9.966-10.185 0-5.62 4.378-10.186 9.966-10.186Zm0-7.501c-10.033 0-18.054 7.756-18.054 17.687 0 9.863 8.02 17.686 18.054 17.686C240.91 57 249 49.18 249 39.314c0-9.933-8.091-17.687-18.121-17.687Z"
      clipRule="evenodd"
    />
    <Path
      fill="#11243E"
      d="m313.792 13.516-12.22 43.741h-10.34l-8.209-31.145-8.585 31.145-10.278.063-11.781-43.804h9.4l7.708 33.965 8.899-33.965h9.776l8.397 33.777 7.771-33.777h9.462ZM323.304 18.404c-1.546 0-2.841-.48-3.886-1.442-1.002-1.002-1.504-2.235-1.504-3.697 0-1.462.502-2.674 1.504-3.635 1.045-1.002 2.34-1.504 3.886-1.504 1.545 0 2.82.502 3.822 1.504 1.045.961 1.567 2.173 1.567 3.635 0 1.462-.522 2.695-1.567 3.697-1.002.961-2.277 1.442-3.822 1.442Zm4.324 4.136v34.717h-8.774V22.54h8.774ZM344.402 27.93c1.128-1.84 2.59-3.28 4.387-4.325 1.838-1.044 3.927-1.567 6.267-1.567v9.212h-2.319c-2.757 0-4.846.648-6.267 1.943-1.378 1.295-2.068 3.551-2.068 6.768v17.296h-8.773V22.54h8.773v5.39ZM392.572 39.147c0 1.253-.084 2.38-.251 3.384h-25.38c.209 2.506 1.086 4.47 2.632 5.89s3.447 2.13 5.703 2.13c3.258 0 5.577-1.399 6.956-4.198h9.462c-1.002 3.342-2.924 6.1-5.765 8.272-2.841 2.13-6.329 3.196-10.465 3.196-3.343 0-6.351-.731-9.024-2.193-2.632-1.504-4.7-3.614-6.204-6.33-1.463-2.715-2.194-5.848-2.194-9.4 0-3.592.731-6.747 2.194-9.462 1.462-2.716 3.509-4.805 6.141-6.267 2.632-1.462 5.661-2.193 9.087-2.193 3.3 0 6.245.71 8.836 2.13 2.632 1.42 4.658 3.447 6.078 6.08 1.462 2.59 2.194 5.577 2.194 8.96Zm-9.087-2.507c-.042-2.256-.857-4.053-2.444-5.39-1.588-1.378-3.53-2.067-5.828-2.067-2.173 0-4.011.668-5.515 2.005-1.462 1.295-2.36 3.112-2.694 5.452h16.481ZM414.226 29.747h-6.079v27.51h-8.898v-27.51h-3.948V22.54h3.948v-1.755c0-4.261 1.211-7.395 3.634-9.4 2.423-2.005 6.079-2.945 10.967-2.82v7.395c-2.131-.042-3.614.313-4.449 1.065-.836.752-1.254 2.11-1.254 4.074v1.44h6.079v7.207ZM428.018 27.93c1.128-1.84 2.59-3.28 4.387-4.325 1.838-1.044 3.927-1.567 6.266-1.567v9.212h-2.318c-2.758 0-4.846.648-6.267 1.943-1.379 1.295-2.068 3.551-2.068 6.768v17.296h-8.773V22.54h8.773v5.39ZM441.658 39.773c0-3.51.689-6.622 2.068-9.337 1.421-2.716 3.321-4.805 5.703-6.267 2.423-1.462 5.118-2.193 8.084-2.193 2.59 0 4.846.522 6.768 1.567 1.963 1.044 3.53 2.36 4.7 3.948V22.54h8.836v34.717h-8.836v-5.076c-1.128 1.63-2.695 2.987-4.7 4.074-1.964 1.044-4.241 1.566-6.831 1.566-2.924 0-5.598-.752-8.021-2.256-2.382-1.504-4.282-3.614-5.703-6.33-1.379-2.757-2.068-5.91-2.068-9.462Zm27.323.125c0-2.13-.418-3.948-1.254-5.452-.835-1.545-1.963-2.715-3.384-3.509a8.869 8.869 0 0 0-4.574-1.253c-1.63 0-3.134.397-4.512 1.19-1.379.794-2.507 1.964-3.384 3.51-.836 1.504-1.254 3.3-1.254 5.39 0 2.088.418 3.926 1.254 5.514.877 1.546 2.005 2.736 3.384 3.572 1.42.835 2.924 1.253 4.512 1.253a9.226 9.226 0 0 0 4.574-1.19c1.421-.836 2.549-2.006 3.384-3.51.836-1.546 1.254-3.384 1.254-5.514ZM528.833 22.038c4.262 0 7.688 1.317 10.278 3.948 2.632 2.59 3.948 6.225 3.948 10.905v20.366h-8.774V38.081c0-2.715-.689-4.783-2.068-6.204-1.378-1.462-3.258-2.193-5.64-2.193-2.381 0-4.282.73-5.702 2.193-1.379 1.42-2.068 3.489-2.068 6.204v19.176h-8.774V38.081c0-2.715-.689-4.783-2.068-6.204-1.378-1.462-3.258-2.193-5.64-2.193-2.423 0-4.344.73-5.765 2.193-1.379 1.42-2.068 3.489-2.068 6.204v19.176h-8.773V22.54h8.773v4.198c1.128-1.462 2.569-2.61 4.324-3.446 1.797-.836 3.76-1.254 5.891-1.254 2.715 0 5.138.585 7.269 1.755 2.131 1.128 3.781 2.758 4.951 4.888 1.128-2.005 2.757-3.614 4.888-4.825a14.176 14.176 0 0 1 7.018-1.818ZM582.991 39.147c0 1.253-.084 2.38-.251 3.384h-25.38c.209 2.506 1.086 4.47 2.632 5.89s3.447 2.13 5.703 2.13c3.258 0 5.577-1.399 6.956-4.198h9.462c-1.002 3.342-2.924 6.1-5.765 8.272-2.841 2.13-6.329 3.196-10.465 3.196-3.342 0-6.35-.731-9.024-2.193-2.632-1.504-4.7-3.614-6.204-6.33-1.462-2.715-2.194-5.848-2.194-9.4 0-3.592.732-6.747 2.194-9.462 1.462-2.716 3.509-4.805 6.141-6.267 2.632-1.462 5.661-2.193 9.087-2.193 3.3 0 6.246.71 8.836 2.13 2.632 1.42 4.658 3.447 6.078 6.08 1.463 2.59 2.194 5.577 2.194 8.96Zm-9.087-2.507c-.042-2.256-.856-4.053-2.444-5.39-1.587-1.378-3.53-2.067-5.828-2.067-2.172 0-4.011.668-5.515 2.005-1.462 1.295-2.36 3.112-2.694 5.452h16.481Z"
    />
    <Defs>
      <LinearGradient
        id="neetoWireframe_svg__a"
        x1={51.771}
        x2={7.543}
        y1={71.224}
        y2={4.71}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6A67E8" />
        <Stop offset={0.699} stopColor="#B49AFC" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoWireframe;

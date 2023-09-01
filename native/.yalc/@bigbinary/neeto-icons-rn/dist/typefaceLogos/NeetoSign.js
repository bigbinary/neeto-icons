import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoSign = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#neetoSign_svg__a)"
      d="M56 32C56 18.745 45.255 8 32 8H8v48h48V32Z"
    />
    <G filter="url(#neetoSign_svg__b)">
      <Path
        fill="#fff"
        d="m34.777 39.856.301-.002c1.361 0 2.076.564 2.958 1.9l.439.679c.342.507.556.719.825.83.483.199.883.101 2.351-.606l.45-.22c.919-.45 1.545-.708 2.253-.885a.836.836 0 1 1 .406 1.623c-.44.11-.862.268-1.414.522l-1.292.621c-1.748.826-2.341.924-3.391.492-.697-.288-1.094-.704-1.674-1.59l-.217-.34c-.671-1.057-1.009-1.353-1.694-1.353l-.177.004c-.483.03-.795.25-2.879 1.797-1.943 1.442-3.425 2.13-5.309 2.13-2.297 0-4.462-.422-6.487-1.265l3.214-.743c1.053.224 2.143.336 3.273.336 1.44 0 2.632-.555 4.312-1.802l1.294-.954c1.418-1.03 1.733-1.158 2.458-1.174ZM41.8 20.03a4.78 4.78 0 0 1 0 6.758l-1.155 1.155c1.284 1.563 1.238 3.22.044 4.418l-3.347 3.346a.836.836 0 0 1-1.182-1.183l3.344-3.345c.541-.542.604-1.216-.044-2.05L27.645 40.943a2.51 2.51 0 0 1-1.21.67l-6.781 1.565a.836.836 0 0 1-1.003-1.003l1.565-6.781a2.51 2.51 0 0 1 .67-1.21l14.155-14.155a4.779 4.779 0 0 1 6.759 0Z"
      />
    </G>
    <Path
      fill="#11243E"
      d="M80 20.053v35.2h7.528v-27.72h10.186c5.625 0 10.185 4.531 10.185 10.12v17.6h7.528v-17.6c0-9.72-7.93-17.6-17.713-17.6H80Z"
    />
    <Path
      fill="#11243E"
      fillRule="evenodd"
      d="M146.177 34.76c-.722-4.579-3.531-7.953-9.149-7.953-5.218 0-8.829 2.89-9.791 7.954h18.94Zm-8.266 13.662c4.414 0 7.624-1.768 9.551-3.616l4.735 4.982c-3.131 3.135-7.463 5.465-14.205 5.465-11.558 0-19.022-7.472-19.022-17.598 0-10.046 7.866-17.602 17.976-17.602 11.477 0 17.978 8.52 17.418 20.334h-27.127c.962 4.902 4.493 8.035 10.674 8.035ZM185.148 34.76c-.722-4.579-3.532-7.953-9.15-7.953-5.218 0-8.829 2.89-9.791 7.954h18.941Zm-8.267 13.662c4.414 0 7.624-1.768 9.551-3.616l4.735 4.982c-3.131 3.135-7.463 5.465-14.205 5.465-11.558 0-19.022-7.472-19.022-17.598 0-10.046 7.867-17.602 17.976-17.602 11.477 0 17.978 8.52 17.418 20.334h-27.127c.962 4.902 4.493 8.035 10.674 8.035ZM196.91 20.357h5.941v-9.104h7.549v9.104h7.409v6.823H210.4v13.828c0 6.255.978 7.226 7.409 7.226v7.02h-1.118c-10.625 0-13.84-3.337-13.84-14.176V27.18h-5.941v-6.823ZM249.544 37.654c0-5.958-4.644-10.831-10.513-10.831-5.871 0-10.444 4.873-10.444 10.83s4.573 10.831 10.444 10.831c5.869 0 10.513-4.874 10.513-10.83Zm-28.193 0c0-9.884 7.85-17.6 17.68-17.6s17.748 7.716 17.748 17.6c0 9.815-7.918 17.6-17.748 17.6-9.83 0-17.68-7.785-17.68-17.6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#11243E"
      d="M278.051 56.692c-2.925 0-5.557-.501-7.896-1.504-2.34-1.044-4.178-2.507-5.515-4.387-1.337-1.88-2.005-4.073-2.005-6.58h7.645c.167 1.88.898 3.426 2.193 4.638 1.337 1.211 3.196 1.817 5.578 1.817 2.465 0 4.386-.585 5.765-1.755 1.379-1.211 2.068-2.757 2.068-4.637 0-1.462-.439-2.653-1.316-3.572-.836-.92-1.901-1.63-3.196-2.13-1.253-.502-3.008-1.045-5.264-1.63-2.841-.752-5.16-1.504-6.956-2.256-1.755-.794-3.259-2.005-4.512-3.635-1.253-1.629-1.88-3.801-1.88-6.517 0-2.507.627-4.7 1.88-6.58s3.008-3.321 5.264-4.324c2.256-1.003 4.867-1.504 7.833-1.504 4.22 0 7.667 1.065 10.34 3.196 2.716 2.089 4.22 4.972 4.512 8.648h-7.896c-.125-1.588-.877-2.945-2.256-4.073-1.378-1.128-3.196-1.692-5.452-1.692-2.047 0-3.718.522-5.013 1.566-1.295 1.045-1.943 2.549-1.943 4.512 0 1.337.397 2.444 1.191 3.322.836.835 1.88 1.504 3.133 2.005 1.254.501 2.967 1.044 5.139 1.63 2.883.793 5.222 1.587 7.019 2.38 1.838.794 3.384 2.027 4.637 3.698 1.295 1.63 1.943 3.823 1.943 6.58 0 2.214-.606 4.303-1.818 6.267-1.169 1.963-2.903 3.55-5.201 4.762-2.256 1.17-4.93 1.755-8.021 1.755ZM304.488 17.15c-1.295 0-2.381-.44-3.258-1.317-.878-.877-1.316-1.963-1.316-3.258s.438-2.382 1.316-3.259c.877-.877 1.963-1.316 3.258-1.316 1.254 0 2.319.439 3.196 1.316.878.877 1.316 1.964 1.316 3.259s-.438 2.381-1.316 3.258c-.877.878-1.942 1.316-3.196 1.316Zm3.51 4.574v34.53h-7.144v-34.53h7.144ZM330.622 21.16c2.674 0 5.035.543 7.082 1.63 2.089 1.044 3.718 2.36 4.888 3.947v-5.013h7.206v35.093c0 3.175-.668 5.995-2.005 8.46-1.337 2.507-3.279 4.47-5.828 5.891-2.507 1.42-5.515 2.13-9.024 2.13-4.679 0-8.564-1.106-11.656-3.32-3.091-2.173-4.846-5.14-5.264-8.9h7.081c.544 1.797 1.692 3.238 3.447 4.325 1.797 1.128 3.927 1.692 6.392 1.692 2.883 0 5.201-.878 6.956-2.632 1.797-1.755 2.695-4.303 2.695-7.646v-5.765c-1.212 1.63-2.862 3.008-4.951 4.136-2.047 1.086-4.387 1.63-7.019 1.63-3.008 0-5.765-.753-8.272-2.257-2.464-1.545-4.428-3.676-5.89-6.392-1.421-2.757-2.131-5.87-2.131-9.337 0-3.468.71-6.538 2.131-9.212 1.462-2.674 3.426-4.742 5.89-6.204 2.507-1.504 5.264-2.256 8.272-2.256Zm11.97 17.797c0-2.381-.502-4.449-1.504-6.204-.961-1.754-2.235-3.091-3.823-4.01a10.08 10.08 0 0 0-5.139-1.379c-1.838 0-3.551.46-5.138 1.379-1.588.877-2.883 2.193-3.886 3.948-.96 1.713-1.441 3.76-1.441 6.141 0 2.381.481 4.47 1.441 6.267 1.003 1.796 2.298 3.175 3.886 4.136 1.629.919 3.342 1.378 5.138 1.378 1.839 0 3.552-.46 5.139-1.378 1.588-.92 2.862-2.256 3.823-4.011 1.002-1.796 1.504-3.885 1.504-6.267ZM375.936 21.16c2.716 0 5.139.564 7.27 1.692 2.172 1.128 3.864 2.8 5.076 5.013 1.211 2.215 1.817 4.888 1.817 8.022v20.366h-7.081V36.952c0-3.092-.773-5.452-2.319-7.081-1.546-1.671-3.655-2.507-6.329-2.507s-4.805.836-6.392 2.507c-1.546 1.629-2.319 3.99-2.319 7.081v19.301h-7.144V21.724h7.144v3.948c1.17-1.42 2.653-2.528 4.449-3.321a14.548 14.548 0 0 1 5.828-1.191Z"
    />
    <Path
      stroke="#11243E"
      strokeWidth={0.333}
      d="M80 20.053v35.2h7.528v-27.72h10.186c5.625 0 10.185 4.531 10.185 10.12v17.6h7.528v-17.6c0-9.72-7.93-17.6-17.713-17.6H80Z"
    />
    <Path
      stroke="#11243E"
      strokeWidth={0.333}
      d="M146.177 34.76c-.722-4.579-3.531-7.953-9.149-7.953-5.218 0-8.829 2.89-9.791 7.954h18.94Zm-8.266 13.662c4.414 0 7.624-1.768 9.551-3.616l4.735 4.982c-3.131 3.135-7.463 5.465-14.205 5.465-11.558 0-19.022-7.472-19.022-17.598 0-10.046 7.866-17.602 17.976-17.602 11.477 0 17.978 8.52 17.418 20.334h-27.127c.962 4.902 4.493 8.035 10.674 8.035ZM185.148 34.76c-.722-4.579-3.532-7.953-9.15-7.953-5.218 0-8.829 2.89-9.791 7.954h18.941Zm-8.267 13.662c4.414 0 7.624-1.768 9.551-3.616l4.735 4.982c-3.131 3.135-7.463 5.465-14.205 5.465-11.558 0-19.022-7.472-19.022-17.598 0-10.046 7.867-17.602 17.976-17.602 11.477 0 17.978 8.52 17.418 20.334h-27.127c.962 4.902 4.493 8.035 10.674 8.035ZM196.91 20.357h5.941v-9.104h7.549v9.104h7.409v6.823H210.4v13.828c0 6.255.978 7.226 7.409 7.226v7.02h-1.118c-10.625 0-13.84-3.337-13.84-14.176V27.18h-5.941v-6.823ZM249.544 37.654c0-5.958-4.644-10.831-10.513-10.831-5.871 0-10.444 4.873-10.444 10.83s4.573 10.831 10.444 10.831c5.869 0 10.513-4.874 10.513-10.83Zm-28.193 0c0-9.884 7.85-17.6 17.68-17.6s17.748 7.716 17.748 17.6c0 9.815-7.918 17.6-17.748 17.6-9.83 0-17.68-7.785-17.68-17.6Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#11243E"
      strokeWidth={0.333}
      d="M278.051 56.692c-2.925 0-5.557-.501-7.896-1.504-2.34-1.044-4.178-2.507-5.515-4.387-1.337-1.88-2.005-4.073-2.005-6.58h7.645c.167 1.88.898 3.426 2.193 4.638 1.337 1.211 3.196 1.817 5.578 1.817 2.465 0 4.386-.585 5.765-1.755 1.379-1.211 2.068-2.757 2.068-4.637 0-1.462-.439-2.653-1.316-3.572-.836-.92-1.901-1.63-3.196-2.13-1.253-.502-3.008-1.045-5.264-1.63-2.841-.752-5.16-1.504-6.956-2.256-1.755-.794-3.259-2.005-4.512-3.635-1.253-1.629-1.88-3.801-1.88-6.517 0-2.507.627-4.7 1.88-6.58s3.008-3.321 5.264-4.324c2.256-1.003 4.867-1.504 7.833-1.504 4.22 0 7.667 1.065 10.34 3.196 2.716 2.089 4.22 4.972 4.512 8.648h-7.896c-.125-1.588-.877-2.945-2.256-4.073-1.378-1.128-3.196-1.692-5.452-1.692-2.047 0-3.718.522-5.013 1.566-1.295 1.045-1.943 2.549-1.943 4.512 0 1.337.397 2.444 1.191 3.322.836.835 1.88 1.504 3.133 2.005 1.254.501 2.967 1.044 5.139 1.63 2.883.793 5.222 1.587 7.019 2.38 1.838.794 3.384 2.027 4.637 3.698 1.295 1.63 1.943 3.823 1.943 6.58 0 2.214-.606 4.303-1.818 6.267-1.169 1.963-2.903 3.55-5.201 4.762-2.256 1.17-4.93 1.755-8.021 1.755ZM304.488 17.15c-1.295 0-2.381-.44-3.258-1.317-.878-.877-1.316-1.963-1.316-3.258s.438-2.382 1.316-3.259c.877-.877 1.963-1.316 3.258-1.316 1.254 0 2.319.439 3.196 1.316.878.877 1.316 1.964 1.316 3.259s-.438 2.381-1.316 3.258c-.877.878-1.942 1.316-3.196 1.316Zm3.51 4.574v34.53h-7.144v-34.53h7.144ZM330.622 21.16c2.674 0 5.035.543 7.082 1.63 2.089 1.044 3.718 2.36 4.888 3.947v-5.013h7.206v35.093c0 3.175-.668 5.995-2.005 8.46-1.337 2.507-3.279 4.47-5.828 5.891-2.507 1.42-5.515 2.13-9.024 2.13-4.679 0-8.564-1.106-11.656-3.32-3.091-2.173-4.846-5.14-5.264-8.9h7.081c.544 1.797 1.692 3.238 3.447 4.325 1.797 1.128 3.927 1.692 6.392 1.692 2.883 0 5.201-.878 6.956-2.632 1.797-1.755 2.695-4.303 2.695-7.646v-5.765c-1.212 1.63-2.862 3.008-4.951 4.136-2.047 1.086-4.387 1.63-7.019 1.63-3.008 0-5.765-.753-8.272-2.257-2.464-1.545-4.428-3.676-5.89-6.392-1.421-2.757-2.131-5.87-2.131-9.337 0-3.468.71-6.538 2.131-9.212 1.462-2.674 3.426-4.742 5.89-6.204 2.507-1.504 5.264-2.256 8.272-2.256Zm11.97 17.797c0-2.381-.502-4.449-1.504-6.204-.961-1.754-2.235-3.091-3.823-4.01a10.08 10.08 0 0 0-5.139-1.379c-1.838 0-3.551.46-5.138 1.379-1.588.877-2.883 2.193-3.886 3.948-.96 1.713-1.441 3.76-1.441 6.141 0 2.381.481 4.47 1.441 6.267 1.003 1.796 2.298 3.175 3.886 4.136 1.629.919 3.342 1.378 5.138 1.378 1.839 0 3.552-.46 5.139-1.378 1.588-.92 2.862-2.256 3.823-4.011 1.002-1.796 1.504-3.885 1.504-6.267ZM375.936 21.16c2.716 0 5.139.564 7.27 1.692 2.172 1.128 3.864 2.8 5.076 5.013 1.211 2.215 1.817 4.888 1.817 8.022v20.366h-7.081V36.952c0-3.092-.773-5.452-2.319-7.081-1.546-1.671-3.655-2.507-6.329-2.507s-4.805.836-6.392 2.507c-1.546 1.629-2.319 3.99-2.319 7.081v19.301h-7.144V21.724h7.144v3.948c1.17-1.42 2.653-2.528 4.449-3.321a14.548 14.548 0 0 1 5.828-1.191Z"
    />
    <Defs>
      <LinearGradient
        id="neetoSign_svg__a"
        x1={56}
        x2={-0.229}
        y1={65.771}
        y2={-3.657}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#698EEF" />
        <Stop offset={1} stopColor="#59CBEF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoSign;

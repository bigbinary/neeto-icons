import * as React from "react";
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoCrm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#neetoCRM_svg__a)"
      d="M48 32.996c0-13.255-10.745-24-24-24H0v48h48v-24Z"
    />
    <G
      fill="#fff"
      fillRule="evenodd"
      clipPath="url(#neetoCRM_svg__b)"
      clipRule="evenodd"
      filter="url(#neetoCRM_svg__c)"
    >
      <Path d="M18.336 34.09a2.33 2.33 0 1 0-3.296 3.295 2.33 2.33 0 0 0 3.296-3.296Zm1.877-1.878a4.985 4.985 0 1 0-7.05 7.05 4.985 4.985 0 0 0 7.05-7.05ZM32.963 26.776a2.33 2.33 0 1 0-3.296 3.296 2.33 2.33 0 0 0 3.296-3.296Zm1.877-1.877a4.985 4.985 0 1 0-7.05 7.05 4.985 4.985 0 0 0 7.05-7.05ZM32.963 41.403a2.33 2.33 0 1 0-3.296 3.296 2.33 2.33 0 0 0 3.296-3.296Zm1.877-1.877a4.985 4.985 0 1 0-7.05 7.05 4.985 4.985 0 0 0 7.05-7.05Z" />
      <Path d="M29.249 29.452a1.327 1.327 0 0 1-.594 1.78l-8.119 4.06a1.327 1.327 0 1 1-1.187-2.374l8.119-4.06a1.327 1.327 0 0 1 1.78.594ZM18.756 36.776a1.327 1.327 0 0 1 1.78-.593l8.12 4.06a1.327 1.327 0 0 1-1.188 2.373l-8.119-4.059a1.327 1.327 0 0 1-.593-1.78Z" />
    </G>
    <Path
      fill="#11243E"
      fillRule="evenodd"
      d="M90.087 21.623H73.24l8.336 8.198h8.511c5.364 0 9.708 4.25 9.708 9.488v17.687h8.38V39.309c0-9.77-8.101-17.686-18.088-17.686Zm-9.708 9.391L72 22.774v34.222h8.38V31.014Zm64.603 20.198-5.318-5.504-.318.301c-1.845 1.742-4.938 3.425-9.211 3.425-3.005 0-5.321-.749-6.995-2.044-1.547-1.197-2.581-2.887-3.093-4.969h26.899l.02-.412c.283-5.872-1.216-10.97-4.28-14.606-3.071-3.645-7.679-5.78-13.513-5.78-10.303 0-18.348 7.59-18.348 17.688 0 5.073 1.903 9.503 5.295 12.662 3.391 3.16 8.242 5.023 14.096 5.023 6.836 0 11.264-2.333 14.463-5.485l.303-.299Zm38.825 0-5.317-5.504-.319.301c-1.845 1.742-4.938 3.425-9.211 3.425-3.005 0-5.321-.749-6.995-2.044-1.547-1.197-2.58-2.887-3.093-4.969h26.899l.02-.412c.283-5.872-1.216-10.97-4.28-14.606-3.071-3.645-7.679-5.78-13.512-5.78-10.304 0-18.349 7.59-18.349 17.688 0 5.073 1.903 9.503 5.295 12.662 3.391 3.16 8.242 5.023 14.096 5.023 6.836 0 11.264-2.333 14.463-5.485l.303-.299Zm10.586-29.292h-5.918v7.555h5.918v13.191c0 5.327.796 8.958 3.05 11.235 2.258 2.281 5.868 3.095 11.179 3.095h1.553v-7.747h-.44c-1.597 0-2.825-.06-3.774-.237-.946-.176-1.574-.462-2.011-.882-.436-.42-.73-1.02-.912-1.923-.182-.907-.244-2.08-.244-3.61V29.475h7.381V21.92h-7.381v-8.924h-8.401v8.924Zm-65.138 7.188c2.706 0 4.691.797 6.085 2.097 1.292 1.204 2.113 2.874 2.506 4.836h-17.803c.514-2.15 1.56-3.827 3.022-4.992 1.577-1.256 3.673-1.94 6.19-1.94Zm38.826 0c2.705 0 4.69.797 6.084 2.097 1.292 1.204 2.113 2.874 2.507 4.836h-17.804c.514-2.15 1.56-3.827 3.022-4.992 1.577-1.256 3.673-1.94 6.191-1.94Zm62.798.016c5.59 0 10.034 4.57 10.034 10.186 0 5.615-4.444 10.184-10.034 10.184-5.588 0-9.966-4.566-9.966-10.184 0-5.62 4.378-10.186 9.966-10.186Zm0-7.501c-10.033 0-18.054 7.755-18.054 17.687 0 9.863 8.02 17.686 18.054 17.686C240.91 56.996 249 49.175 249 39.31c0-9.934-8.091-17.687-18.121-17.687Z"
      clipRule="evenodd"
    />
    <Path
      fill="#11243E"
      d="M253 34.368c0-4.304.961-8.147 2.883-11.531 1.963-3.426 4.616-6.079 7.958-7.959 3.384-1.921 7.165-2.882 11.343-2.882 4.888 0 9.17 1.253 12.847 3.76 3.676 2.506 6.245 5.974 7.708 10.402h-10.09c-1.002-2.089-2.423-3.655-4.261-4.7-1.796-1.044-3.885-1.566-6.267-1.566-2.548 0-4.825.605-6.83 1.817-1.964 1.17-3.51 2.84-4.638 5.013-1.086 2.173-1.629 4.721-1.629 7.646 0 2.882.543 5.43 1.629 7.645 1.128 2.172 2.674 3.864 4.638 5.076 2.005 1.17 4.282 1.755 6.83 1.755 2.382 0 4.471-.523 6.267-1.567 1.838-1.086 3.259-2.674 4.261-4.763h10.09c-1.463 4.47-4.032 7.959-7.708 10.466-3.635 2.465-7.917 3.697-12.847 3.697-4.178 0-7.959-.94-11.343-2.82-3.342-1.922-5.995-4.575-7.958-7.959-1.922-3.384-2.883-7.227-2.883-11.53ZM325.126 56.3l-9.651-17.044h-4.136V56.3h-8.773V12.56h16.418c3.384 0 6.267.605 8.648 1.817 2.382 1.17 4.157 2.778 5.327 4.825 1.211 2.006 1.817 4.262 1.817 6.768 0 2.883-.835 5.494-2.506 7.834-1.672 2.297-4.157 3.885-7.458 4.762l10.466 17.735h-10.152Zm-13.787-23.624h7.332c2.381 0 4.157-.564 5.327-1.692 1.169-1.17 1.754-2.779 1.754-4.826 0-2.005-.585-3.55-1.754-4.637-1.17-1.128-2.946-1.692-5.327-1.692h-7.332v12.847ZM389.734 12.56V56.3h-8.773V27.85L369.242 56.3h-6.643l-11.781-28.45V56.3h-8.773V12.56h9.964l13.912 32.524 13.912-32.524h9.901Z"
    />
    <Defs>
      <LinearGradient
        id="neetoCRM_svg__a"
        x1={48}
        x2={25.346}
        y1={66.767}
        y2={14.603}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#609AF0" />
        <Stop offset={1} stopColor="#6BD1F1" />
      </LinearGradient>
      <ClipPath id="neetoCRM_svg__b">
        <Path fill="#fff" d="M7.543 19.28h32.914v32.915H7.543z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNeetoCrm;

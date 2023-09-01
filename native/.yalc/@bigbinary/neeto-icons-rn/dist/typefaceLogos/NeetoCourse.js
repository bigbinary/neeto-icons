import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoCourse = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="url(#neetoCourse_svg__a)"
      d="M48 32.996c0-13.255-10.745-24-24-24H0v48h48v-24Z"
    />
    <G fill="#fff" filter="url(#neetoCourse_svg__b)">
      <Path
        fillRule="evenodd"
        d="M24.003 18.938c6.438 0 11.657 5.22 11.657 11.657v11.657H12.346V18.938h11.657Zm5.207 5.13c-.644 0-1.166.521-1.166 1.165v13.211a1.166 1.166 0 1 0 2.332 0V25.233c0-.644-.522-1.166-1.166-1.166Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M18.78 41.319c0-.515.418-.933.933-.933h12.45a3.497 3.497 0 0 1 0 6.994H12.346v-2.602h1.865v.737h17.952a1.632 1.632 0 1 0 0-3.264h-12.45a.933.933 0 0 1-.932-.932Z"
        clipRule="evenodd"
      />
      <Path d="M34.105 40.853h1.555v3.109h-1.554v-3.109Z" />
    </G>
    <Path
      fill="#11243E"
      fillRule="evenodd"
      d="M90.087 21.623H73.24l8.336 8.198h8.511c5.364 0 9.708 4.25 9.708 9.488v17.687h8.38V39.309c0-9.77-8.101-17.686-18.088-17.686Zm-9.708 9.391L72 22.774v34.222h8.38V31.014Zm64.603 20.198-5.318-5.504-.318.301c-1.845 1.742-4.938 3.425-9.211 3.425-3.005 0-5.321-.749-6.995-2.044-1.547-1.197-2.581-2.887-3.093-4.969h26.899l.02-.412c.283-5.872-1.216-10.97-4.28-14.606-3.071-3.645-7.679-5.78-13.513-5.78-10.303 0-18.348 7.59-18.348 17.688 0 5.073 1.903 9.503 5.295 12.662 3.391 3.16 8.242 5.023 14.096 5.023 6.836 0 11.264-2.333 14.463-5.485l.303-.299Zm38.825 0-5.317-5.504-.319.301c-1.845 1.742-4.938 3.425-9.211 3.425-3.005 0-5.321-.749-6.995-2.044-1.547-1.197-2.58-2.887-3.093-4.969h26.899l.02-.412c.283-5.872-1.216-10.97-4.28-14.606-3.071-3.645-7.679-5.78-13.512-5.78-10.304 0-18.349 7.59-18.349 17.688 0 5.073 1.903 9.503 5.295 12.662 3.391 3.16 8.242 5.023 14.096 5.023 6.836 0 11.264-2.333 14.463-5.485l.303-.299Zm10.586-29.292h-5.918v7.555h5.918v13.191c0 5.327.796 8.958 3.05 11.235 2.258 2.281 5.868 3.095 11.179 3.095h1.553v-7.747h-.44c-1.597 0-2.825-.06-3.774-.237-.946-.176-1.574-.462-2.011-.882-.436-.42-.73-1.02-.912-1.923-.182-.907-.244-2.08-.244-3.61V29.475h7.381V21.92h-7.381v-8.924h-8.401v8.924Zm-65.138 7.188c2.706 0 4.691.797 6.085 2.097 1.292 1.204 2.113 2.874 2.506 4.836h-17.803c.514-2.15 1.56-3.827 3.022-4.992 1.577-1.256 3.673-1.94 6.19-1.94Zm38.826 0c2.705 0 4.69.797 6.084 2.097 1.292 1.204 2.113 2.874 2.507 4.836h-17.804c.514-2.15 1.56-3.827 3.022-4.992 1.577-1.256 3.673-1.94 6.191-1.94Zm62.798.016c5.59 0 10.034 4.57 10.034 10.186 0 5.615-4.444 10.184-10.034 10.184-5.588 0-9.966-4.566-9.966-10.184 0-5.62 4.378-10.186 9.966-10.186Zm0-7.501c-10.033 0-18.054 7.755-18.054 17.687 0 9.863 8.02 17.686 18.054 17.686C240.91 56.996 249 49.175 249 39.31c0-9.934-8.091-17.687-18.121-17.687Z"
      clipRule="evenodd"
    />
    <Path
      fill="#11243E"
      d="M253.193 34.368c0-4.304.961-8.147 2.883-11.531 1.964-3.426 4.616-6.079 7.959-7.959 3.384-1.921 7.165-2.882 11.342-2.882 4.888 0 9.171 1.253 12.847 3.76 3.676 2.506 6.246 5.974 7.708 10.402h-10.089c-1.003-2.089-2.423-3.655-4.262-4.7-1.796-1.044-3.885-1.566-6.266-1.566-2.549 0-4.826.605-6.831 1.817-1.964 1.17-3.509 2.84-4.637 5.013-1.087 2.173-1.63 4.721-1.63 7.646 0 2.882.543 5.43 1.63 7.645 1.128 2.172 2.673 3.864 4.637 5.076 2.005 1.17 4.282 1.755 6.831 1.755 2.381 0 4.47-.523 6.266-1.567 1.839-1.086 3.259-2.674 4.262-4.763h10.089c-1.462 4.47-4.032 7.959-7.708 10.466-3.635 2.465-7.917 3.697-12.847 3.697-4.177 0-7.958-.94-11.342-2.82-3.343-1.922-5.995-4.575-7.959-7.959-1.922-3.384-2.883-7.227-2.883-11.53ZM318.175 56.865c-3.342 0-6.35-.731-9.024-2.193-2.674-1.504-4.784-3.614-6.329-6.33-1.504-2.715-2.256-5.849-2.256-9.4 0-3.55.772-6.684 2.318-9.4 1.588-2.715 3.739-4.804 6.455-6.266 2.715-1.504 5.744-2.256 9.087-2.256 3.342 0 6.371.752 9.086 2.256 2.716 1.462 4.846 3.55 6.392 6.266 1.588 2.716 2.382 5.85 2.382 9.4 0 3.551-.815 6.685-2.444 9.4a16.653 16.653 0 0 1-6.518 6.33c-2.715 1.462-5.765 2.193-9.149 2.193Zm0-7.645a9.145 9.145 0 0 0 4.449-1.128c1.421-.794 2.549-1.964 3.384-3.51.836-1.546 1.254-3.425 1.254-5.64 0-3.3-.878-5.828-2.632-7.582-1.713-1.797-3.823-2.695-6.33-2.695-2.506 0-4.616.898-6.329 2.695-1.671 1.754-2.507 4.282-2.507 7.582s.815 5.85 2.444 7.646c1.671 1.754 3.76 2.632 6.267 2.632ZM374.829 21.584V56.3h-8.836v-4.387c-1.128 1.504-2.611 2.695-4.449 3.572-1.797.836-3.76 1.254-5.891 1.254-2.715 0-5.118-.564-7.206-1.692-2.089-1.17-3.74-2.862-4.951-5.076-1.17-2.256-1.755-4.93-1.755-8.022V21.584h8.773v19.113c0 2.757.69 4.888 2.068 6.392 1.379 1.462 3.259 2.193 5.641 2.193 2.423 0 4.324-.73 5.702-2.193 1.379-1.504 2.068-3.635 2.068-6.392V21.584h8.836ZM391.592 26.973c1.128-1.838 2.59-3.28 4.387-4.324 1.838-1.044 3.927-1.567 6.266-1.567v9.212h-2.318c-2.758 0-4.846.648-6.267 1.943-1.379 1.295-2.068 3.551-2.068 6.768V56.3h-8.773V21.584h8.773v5.389ZM420.773 56.865c-2.84 0-5.389-.501-7.645-1.504-2.256-1.044-4.052-2.444-5.389-4.199-1.295-1.754-2.006-3.697-2.131-5.828h8.836c.167 1.337.815 2.444 1.943 3.322 1.17.877 2.611 1.316 4.324 1.316 1.671 0 2.966-.335 3.885-1.003.961-.669 1.441-1.525 1.441-2.57 0-1.127-.584-1.963-1.754-2.506-1.128-.585-2.946-1.212-5.452-1.88-2.59-.627-4.721-1.274-6.392-1.943-1.63-.668-3.05-1.692-4.262-3.07-1.169-1.38-1.754-3.238-1.754-5.578a9.12 9.12 0 0 1 1.629-5.264c1.128-1.587 2.716-2.84 4.763-3.76 2.089-.919 4.533-1.378 7.332-1.378 4.136 0 7.436 1.044 9.901 3.133 2.465 2.047 3.823 4.825 4.073 8.335h-8.397c-.125-1.38-.71-2.465-1.755-3.26-1.002-.835-2.36-1.252-4.073-1.252-1.587 0-2.82.292-3.697.877-.836.585-1.254 1.4-1.254 2.444 0 1.17.585 2.068 1.755 2.695 1.17.585 2.987 1.19 5.452 1.817 2.507.627 4.575 1.274 6.204 1.943 1.629.668 3.029 1.712 4.199 3.133 1.211 1.379 1.838 3.217 1.88 5.515 0 2.005-.564 3.801-1.692 5.389-1.086 1.587-2.674 2.84-4.763 3.76-2.047.877-4.449 1.316-7.207 1.316ZM473.243 38.19c0 1.254-.083 2.382-.25 3.384h-25.38c.208 2.507 1.086 4.47 2.632 5.89 1.545 1.421 3.446 2.132 5.702 2.132 3.259 0 5.578-1.4 6.956-4.2h9.463c-1.003 3.343-2.925 6.1-5.765 8.273-2.841 2.13-6.33 3.196-10.466 3.196-3.342 0-6.35-.731-9.024-2.193-2.632-1.504-4.7-3.614-6.204-6.33-1.462-2.715-2.193-5.849-2.193-9.4 0-3.593.731-6.747 2.193-9.462 1.462-2.716 3.51-4.805 6.142-6.267 2.632-1.462 5.66-2.193 9.086-2.193 3.301 0 6.246.71 8.836 2.13 2.632 1.42 4.658 3.447 6.079 6.079 1.462 2.59 2.193 5.577 2.193 8.961Zm-9.086-2.506c-.042-2.256-.857-4.053-2.444-5.39-1.588-1.378-3.531-2.068-5.828-2.068-2.173 0-4.011.669-5.515 2.006-1.462 1.295-2.361 3.112-2.695 5.452h16.482Z"
    />
    <Defs>
      <LinearGradient
        id="neetoCourse_svg__a"
        x1={48}
        x2={-8.229}
        y1={66.767}
        y2={-2.662}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#59CBEF" />
        <Stop offset={1} stopColor="#8CD672" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoCourse;

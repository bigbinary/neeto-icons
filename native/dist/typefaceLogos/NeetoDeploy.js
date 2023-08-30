import * as React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgNeetoDeploy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={476}
    height={74}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#neetoDeploy_svg__a)"
      d="M48 32.996c0-13.255-10.745-24-24-24H0v48h48v-24Z"
    />
    <G fill="#fff" filter="url(#neetoDeploy_svg__b)">
      <Path d="M10.933 36.53a150.514 150.514 0 0 0 4.294-6.497c-3.508.31-6.871 4.675-6.871 4.675l2.316 2.316c.067-.172.152-.338.261-.495ZM19.974 46.327l2.314 2.314s4.365-3.362 4.675-6.87a150.649 150.649 0 0 0-6.496 4.293c-.155.108-.32.196-.493.263ZM16.456 45.13c-.398.16-.788.331-1.195.467a18.494 18.494 0 0 1-3.342.766 23.55 23.55 0 0 1-1.437.158l.014-.178c.1-1.157.275-2.308.56-3.434.137-.544.311-1.072.499-1.6.117-.328.262-.642.41-.956l-.255-.254c-.567.38-1.059.861-1.477 1.405a9.217 9.217 0 0 0-1.406 2.678 11.147 11.147 0 0 0-.589 3.215c-.004.153-.015.31.009.461a1.072 1.072 0 0 0 .73.854c.156.05.314.052.477.05a10.74 10.74 0 0 0 2.94-.461c1.732-.515 3.48-1.483 4.505-3.012l-.247-.248-.196.09ZM35.72 21.278a.96.96 0 0 0-.698-.281c-3.091.06-10.717.639-14.767 4.689-1.839 1.838-2.436 2.795-3.746 4.893-.943 1.51-2.235 3.578-4.595 6.975a.96.96 0 0 0 .11 1.227l6.192 6.192a.96.96 0 0 0 1.227.11c3.398-2.361 5.465-3.652 6.975-4.595 2.097-1.31 3.054-1.907 4.893-3.746 4.057-4.057 4.632-11.679 4.69-14.767a.96.96 0 0 0-.281-.697ZM28.55 32.96a3.192 3.192 0 1 1-4.514-4.514 3.192 3.192 0 0 1 4.514 4.514Z" />
    </G>
    <Path
      fill="#11243E"
      fillRule="evenodd"
      d="M90.087 21.623H73.24l8.336 8.198h8.511c5.364 0 9.708 4.25 9.708 9.488v17.687h8.38V39.309c0-9.77-8.101-17.686-18.088-17.686Zm-9.708 9.391L72 22.774v34.222h8.38V31.014Zm64.603 20.198-5.318-5.504-.318.301c-1.845 1.742-4.938 3.425-9.211 3.425-3.005 0-5.321-.749-6.995-2.044-1.547-1.197-2.581-2.887-3.093-4.969h26.899l.02-.412c.283-5.872-1.216-10.97-4.28-14.606-3.071-3.645-7.679-5.78-13.513-5.78-10.303 0-18.348 7.59-18.348 17.688 0 5.073 1.903 9.503 5.295 12.662 3.391 3.16 8.242 5.023 14.096 5.023 6.836 0 11.264-2.333 14.463-5.485l.303-.299Zm38.825 0-5.317-5.504-.319.301c-1.845 1.742-4.938 3.425-9.211 3.425-3.005 0-5.321-.749-6.995-2.044-1.547-1.197-2.58-2.887-3.093-4.969h26.899l.02-.412c.283-5.872-1.216-10.97-4.28-14.606-3.071-3.645-7.679-5.78-13.512-5.78-10.304 0-18.349 7.59-18.349 17.688 0 5.073 1.903 9.503 5.295 12.662 3.391 3.16 8.242 5.023 14.096 5.023 6.836 0 11.264-2.333 14.463-5.485l.303-.299Zm10.586-29.292h-5.918v7.555h5.918v13.191c0 5.327.796 8.958 3.05 11.235 2.258 2.281 5.868 3.095 11.179 3.095h1.553v-7.747h-.44c-1.597 0-2.825-.06-3.774-.237-.946-.176-1.574-.462-2.011-.882-.436-.42-.73-1.02-.912-1.923-.182-.907-.244-2.08-.244-3.61V29.475h7.381V21.92h-7.381v-8.924h-8.401v8.924Zm-65.138 7.188c2.706 0 4.691.797 6.085 2.097 1.292 1.204 2.113 2.874 2.506 4.836h-17.803c.514-2.15 1.56-3.827 3.022-4.992 1.577-1.256 3.673-1.94 6.19-1.94Zm38.826 0c2.705 0 4.69.797 6.084 2.097 1.292 1.204 2.113 2.874 2.507 4.836h-17.804c.514-2.15 1.56-3.827 3.022-4.992 1.577-1.256 3.673-1.94 6.191-1.94Zm62.798.016c5.59 0 10.034 4.57 10.034 10.186 0 5.615-4.444 10.184-10.034 10.184-5.588 0-9.966-4.566-9.966-10.184 0-5.62 4.378-10.186 9.966-10.186Zm0-7.501c-10.033 0-18.054 7.755-18.054 17.687 0 9.863 8.02 17.686 18.054 17.686C240.91 56.996 249 49.175 249 39.31c0-9.934-8.091-17.687-18.121-17.687Z"
      clipRule="evenodd"
    />
    <Path
      fill="#11243E"
      d="M270.291 13.628c4.595 0 8.627.898 12.094 2.694 3.51 1.797 6.204 4.366 8.084 7.708 1.922 3.3 2.883 7.144 2.883 11.53 0 4.388-.961 8.231-2.883 11.532-1.88 3.258-4.574 5.786-8.084 7.582-3.467 1.797-7.499 2.695-12.094 2.695H255V13.628h15.291Zm-.314 36.284c4.596 0 8.147-1.254 10.654-3.76 2.506-2.507 3.76-6.037 3.76-10.591 0-4.554-1.254-8.105-3.76-10.653-2.507-2.59-6.058-3.886-10.654-3.886h-6.204v28.89h6.204ZM331.526 39.258c0 1.254-.084 2.382-.251 3.384h-25.38c.209 2.507 1.086 4.47 2.632 5.89 1.546 1.421 3.447 2.132 5.703 2.132 3.259 0 5.577-1.4 6.956-4.2h9.463c-1.003 3.343-2.925 6.1-5.766 8.273-2.841 2.13-6.329 3.196-10.465 3.196-3.342 0-6.35-.731-9.024-2.193-2.632-1.504-4.7-3.614-6.204-6.33-1.462-2.715-2.193-5.849-2.193-9.4 0-3.593.731-6.747 2.193-9.462 1.462-2.716 3.509-4.805 6.141-6.267 2.632-1.462 5.661-2.193 9.087-2.193 3.3 0 6.246.71 8.836 2.13 2.632 1.42 4.658 3.447 6.079 6.079 1.462 2.59 2.193 5.577 2.193 8.961Zm-9.087-2.506c-.042-2.256-.856-4.053-2.444-5.39-1.587-1.378-3.53-2.068-5.828-2.068-2.172 0-4.01.669-5.514 2.006-1.463 1.295-2.361 3.112-2.695 5.452h16.481ZM346.036 27.665c1.128-1.588 2.674-2.904 4.638-3.948 2.005-1.086 4.282-1.63 6.83-1.63 2.967 0 5.64.732 8.022 2.194 2.423 1.462 4.324 3.551 5.702 6.267 1.421 2.673 2.131 5.786 2.131 9.337s-.71 6.705-2.131 9.463c-1.378 2.715-3.279 4.825-5.702 6.329-2.382 1.504-5.055 2.256-8.022 2.256-2.548 0-4.804-.522-6.768-1.567-1.921-1.044-3.488-2.36-4.7-3.948v21.495h-8.773V22.652h8.773v5.013Zm18.362 12.22c0-2.089-.439-3.885-1.316-5.39-.836-1.545-1.964-2.715-3.384-3.509a8.887 8.887 0 0 0-4.512-1.19c-1.588 0-3.092.417-4.512 1.253-1.379.794-2.507 1.964-3.384 3.51-.836 1.545-1.254 3.362-1.254 5.451 0 2.09.418 3.907 1.254 5.452.877 1.546 2.005 2.737 3.384 3.572a9.108 9.108 0 0 0 4.512 1.19 8.546 8.546 0 0 0 4.512-1.252c1.42-.836 2.548-2.027 3.384-3.572.877-1.546 1.316-3.384 1.316-5.515ZM387.841 10.996v46.373h-8.773V10.996h8.773ZM411.258 57.933c-3.342 0-6.35-.731-9.024-2.193-2.673-1.504-4.783-3.614-6.329-6.33-1.504-2.715-2.256-5.849-2.256-9.4 0-3.55.773-6.684 2.319-9.4 1.587-2.715 3.739-4.804 6.454-6.266 2.716-1.504 5.745-2.256 9.087-2.256 3.342 0 6.371.752 9.087 2.256 2.715 1.462 4.846 3.55 6.392 6.266 1.587 2.716 2.381 5.85 2.381 9.4 0 3.551-.815 6.685-2.444 9.4a16.65 16.65 0 0 1-6.517 6.33c-2.716 1.462-5.766 2.193-9.15 2.193Zm0-7.645a9.15 9.15 0 0 0 4.45-1.128c1.42-.794 2.548-1.964 3.384-3.51.835-1.545 1.253-3.425 1.253-5.64 0-3.3-.877-5.828-2.632-7.582-1.713-1.797-3.823-2.695-6.329-2.695-2.507 0-4.617.898-6.33 2.695-1.671 1.754-2.506 4.282-2.506 7.582s.814 5.85 2.444 7.646c1.671 1.754 3.76 2.632 6.266 2.632ZM468.351 22.652l-21.494 51.136h-9.338l7.52-17.296-13.912-33.84h9.839l8.961 24.252 9.087-24.252h9.337Z"
    />
    <Defs>
      <LinearGradient
        id="neetoDeploy_svg__a"
        x1={57.771}
        x2={-8.229}
        y1={80.824}
        y2={-2.662}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#67BDE2" />
        <Stop offset={1} stopColor="#14D1A4" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgNeetoDeploy;

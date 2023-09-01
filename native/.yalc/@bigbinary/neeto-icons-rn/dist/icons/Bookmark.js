import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBookmark = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill={props.color}
    {...props}
  >
    <Path
      fill="#68737D"
      d="m19.507 19.568-.668-.307-1.607-.738-1.934-.889-1.663-.765c-.265-.12-.53-.245-.794-.364-.165-.075-.313-.12-.5-.096a1.065 1.065 0 0 0-.295.096l-.084.038-.41.19-1.508.692-1.923.885-1.746.802-.95.437c-.014.008-.028.013-.043.021l1.155.662V5.006c0-.06.003-.117.01-.175-.01.067-.02.136-.028.203.016-.11.044-.216.089-.32l-.077.184c.04-.092.092-.178.151-.259l-.12.156c.067-.087.143-.162.228-.229l-.156.121c.081-.061.167-.111.26-.151l-.185.076c.104-.042.211-.073.32-.088-.066.01-.136.02-.203.027.14-.017.282-.01.422-.01h9.35c.43 0 .862-.003 1.292 0 .055 0 .113.004.168.01a7.403 7.403 0 0 0-.203-.027c.111.015.217.044.32.088l-.184-.076c.093.04.179.092.26.151l-.156-.12c.086.066.161.143.228.228l-.12-.156c.06.08.11.167.151.26l-.077-.185c.042.104.073.211.088.32a7.451 7.451 0 0 1-.026-.203c.02.175.01.355.01.531V19.607c0 .2-.003.4 0 .6v.025c0 .4.352.787.767.767.416-.019.767-.337.767-.767V5.021a2.027 2.027 0 0 0-.961-1.73c-.347-.22-.747-.288-1.151-.288H7.719c-.622 0-1.278-.056-1.82.326-.421.295-.77.737-.855 1.258-.023.146-.044.29-.044.436V20.232a.77.77 0 0 0 .767.767.75.75 0 0 0 .388-.105c.22-.102.441-.203.662-.303l1.598-.735c.64-.296 1.283-.59 1.924-.884.556-.258 1.114-.513 1.67-.77.271-.124.544-.243.81-.372l.012-.006h-.775c.22.102.441.204.662.303l1.598.735c.64.296 1.283.591 1.924.885.556.257 1.115.512 1.67.769.271.125.54.25.81.372a.412.412 0 0 0 .012.006c.192.088.38.136.59.077a.782.782 0 0 0 .46-.353c.093-.179.141-.394.076-.591-.058-.18-.173-.378-.351-.459Z"
    />
    <Path
      fill="#68737D"
      d="M11.152 13.943a.453.453 0 0 1-.499-.04.497.497 0 0 1-.16-.217.526.526 0 0 1-.026-.274l.255-1.545-1.075-1.088a.526.526 0 0 1-.124-.515.502.502 0 0 1 .146-.229c.068-.06.15-.1.239-.112l1.493-.226.675-1.42c.039-.083.1-.153.174-.202a.455.455 0 0 1 .5 0c.075.05.135.12.174.203l.675 1.42 1.493.225a.462.462 0 0 1 .24.112.526.526 0 0 1 .022.744l-1.076 1.088.255 1.546a.526.526 0 0 1-.027.273.496.496 0 0 1-.16.217.459.459 0 0 1-.498.04l-1.348-.735-1.348.735Z"
    />
  </Svg>
);
export default SvgBookmark;

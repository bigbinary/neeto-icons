import{P as e,_ as r,R as t,a as o}from"./index.js";var s=["size","color","strokeWidth"];function i(e){var i=e.size,n=e.color,a=e.strokeWidth,d=r(e,s);return t.createElement("svg",o({viewBox:"0 0 24 24",fill:"none",height:i,width:i},d),t.createElement("path",{d:"M19.394 14C18.5 16 15.5 18.48 12 18.48C11.5 18.48 10.8864 18.4264 10.339 18.321L7.2 19.867C7.2 18.797 7.2 17.778 7.2 17.022C5.23493 15.7498 4.03448 13.5807 4 11.24C4 7.223 7.6 4 12 4C16.4 4 20 7.223 20 11.24C19.9985 12.1928 19.7828 13.1301 19.394 14Z",stroke:n,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M4 4L20.5 20.5",stroke:n,strokeWidth:a,strokeLinecap:"round"}))}i.defaultProps={color:"currentColor",size:24,strokeWidth:"1.5"},i.propTypes={color:e.string,size:e.oneOfType([e.string,e.number]),strokeWidth:e.oneOfType([e.string,e.number])};export{i as ChatMessage};
//# sourceMappingURL=ChatMessage.js.js.map
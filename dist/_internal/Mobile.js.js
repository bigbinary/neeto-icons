import{P as e,_ as r,R as t,a as o}from"./index.js";var i=["size","color","strokeWidth"];function s(e){var s=e.size,n=e.color,h=e.strokeWidth,l=r(e,i);return t.createElement("svg",o({viewBox:"0 0 12 18",fill:"none",height:s,width:s},l),t.createElement("rect",{x:"0.75",y:"0.75",width:"10.5",height:"16.5",rx:"2.25",stroke:n,strokeWidth:h}),t.createElement("line",{y1:"13.25",x2:"12",y2:"13.25",stroke:n,strokeWidth:h}))}s.defaultProps={color:"currentColor",size:24,strokeWidth:"1.5"},s.propTypes={color:e.string,size:e.oneOfType([e.string,e.number]),strokeWidth:e.oneOfType([e.string,e.number])};export{s as Mobile};
//# sourceMappingURL=Mobile.js.js.map

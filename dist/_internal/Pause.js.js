import{P as e,_ as r,R as t,a as o}from"./index.js";var s=["size","color","strokeWidth"];function i(e){var i=e.size,n=e.color;e.strokeWidth;var a=r(e,s);return t.createElement("svg",o({viewBox:"0 0 24 24",fill:"none",height:i,width:i},a),t.createElement("line",{x1:"9",y1:"6",x2:"9",y2:"17",stroke:n,strokeWidth:"2",strokeLinecap:"round"}),t.createElement("line",{x1:"15",y1:"6",x2:"15",y2:"17",stroke:n,strokeWidth:"2",strokeLinecap:"round"}))}i.defaultProps={color:"currentColor",size:24,strokeWidth:"1.5"},i.propTypes={color:e.string,size:e.oneOfType([e.string,e.number]),strokeWidth:e.oneOfType([e.string,e.number])};export{i as Pause};
//# sourceMappingURL=Pause.js.js.map
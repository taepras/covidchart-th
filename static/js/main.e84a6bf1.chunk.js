(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{169:function(t,e,n){},170:function(t,e,n){},191:function(t,e,n){"use strict";n.r(e);var a,i,o,l,s,r,c,d,u,h=n(1),b=n.n(h),f=n(57),x=n.n(f),v=(n(169),n(7)),j=n(6),g=(n.p,n(170),n(4)),m=n(10),p=n.n(m),O=n(2),k=n(15),w=n(3),y=n(0),B=function(t){var e=t.processedData,n=void 0===e?[]:e,a=t.scaleX,i=t.scaleY,o=t.color,l=t.gutter,s=void 0===l?2:l,r=Object(h.useRef)(null),c=Object(h.useMemo)((function(){return Math.max(Math.abs(a.range()[1]-a.range()[0])/((null===n||void 0===n?void 0:n.length)||1)-s,1)}),[s,n,a,i]);return Object(h.useEffect)((function(){r.current&&O.h(r.current).selectAll("g.bar").data(n).enter().append("g").classed("bar",!0).selectAll("rect.b").data((function(t){return[t]})).enter().append("rect").classed("b",!0).attr("x",(function(t){return a(new Date(t.date))-c})).attr("y",(function(t){return i(t.value)})).attr("width",c).attr("height",(function(t){return i(i.domain()[1]-t.value)})).attr("fill",o)}),[n,a,i]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("g",{class:"bars",ref:r})})},E=n(29),S=n(62),D=function(t){var e=t.processedData,n=void 0===e?[]:e,a=t.scaleX,i=t.scaleY,o=(t.gutter,t.color),l=void 0===o?"#000":o,s=t.nMark,r=void 0===s?7:s,c=t.markOffset,d=void 0===c?24:c,u=Object(S.a)(t,["processedData","scaleX","scaleY","gutter","color","nMark","markOffset"]),b=Object(h.useRef)(null);Object(h.useEffect)((function(){if(b.current){var t=O.h(b.current);console.log(n),t.select("path").datum(n).attr("fill","none").attr("stroke",l).attr("stroke-width",3).attr("d",O.d().x((function(t){return a(new Date(t.date))})).y((function(t){return i(t.value)})))}}),[n]);var f=Object(h.useMemo)((function(){var t,e,o,l;return n.length<=0?{x:0,y:0}:(console.log("markPos",n,a(new Date(null===n||void 0===n||null===(t=n[r])||void 0===t?void 0:t.date)),i(null===n||void 0===n||null===(e=n[r])||void 0===e?void 0:e.value)),{x:a(new Date(null===n||void 0===n||null===(o=n[r])||void 0===o?void 0:o.date)),y:i(null===n||void 0===n||null===(l=n[r])||void 0===l?void 0:l.value)})}),[n,r]);return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("g",Object(E.a)(Object(E.a)({class:"line",ref:b},u),{},{children:[Object(y.jsx)("path",{"stroke-linejoin":"round"}),Object(y.jsxs)("g",{class:"average-mark",transform:"translate(".concat(f.x,",").concat(f.y,")"),children:[Object(y.jsx)("line",{x1:0,y1:0,x2:0,y2:-d,stroke:"#fff"}),Object(y.jsx)("text",{textAnchor:"middle",dominantBaseline:"baseline",y:-d-4,style:{fill:"#fff"},fontSize:12,fontWeight:"400",children:"\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22 7 \u0e27\u0e31\u0e19"})]})]}))})},A=function(t,e){return Object(h.useMemo)((function(){return t.map((function(t,n){return{date:t.date,value:e(t)}}))}),[t,e])},_=function(t,e){var n,a,i=t;"string"===typeof t&&(i=g.DateTime.fromISO(t));var o=e?"".concat(["\u0e2d\u0e32.","\u0e08.","\u0e2d.","\u0e1e.","\u0e1e\u0e24.","\u0e28.","\u0e2a.","\u0e2d\u0e32."][null!==(n=null===(a=i)||void 0===a?void 0:a.weekday)&&void 0!==n?n:0]," "):" ";return i&&!Number.isNaN(i.get("day"))?"".concat(o).concat(i.get("day")," ").concat(["","\u0e21.\u0e04.","\u0e01.\u0e1e.","\u0e21\u0e35.\u0e04.","\u0e40\u0e21.\u0e22.","\u0e1e.\u0e04.","\u0e21\u0e34.\u0e22.","\u0e01.\u0e04.","\u0e2a.\u0e04.","\u0e01.\u0e22.","\u0e15.\u0e04.","\u0e1e.\u0e22.","\u0e18.\u0e04. "][i.get("month")]," ").concat((i.get("year")+543)%100):""},C=n(27),M=n.n(C),z=w.b.button(a||(a=Object(j.a)(["\n    color: #7F353E;\n    border: 1px #7F353E solid;\n    /* background-color: #C33646;\n    color: #fff !important; */\n    /* border: none; */\n    padding: 6px 12px;\n    border-radius: 8px;\n    font-family: 'Mitr', sans-serif;\n    font-size: 1rem;\n    text-decoration: none;\n    margin: 0;\n    display: inline-block;\n    \n    ","\n\n    ","\n\n    &:hover {\n        background-color: #7F353E;\n        color: #fff !important;\n        border: none;\n    }\n"])),(function(t){return t.isFullWidth&&Object(w.a)(i||(i=Object(j.a)(["\n        display: block;\n        width: auto;\n    "])))}),(function(t){return t.mb&&Object(w.a)(o||(o=Object(j.a)(["\n        margin-bottom: 16px;\n    "])))})),W=(w.b.div(l||(l=Object(j.a)(["\n  /* padding: 30px; */\n  width: 100%;\n  /* margin-top: 10px; */\n  /* height: 50vh; */\n  flex: 1;\n  position: relative;\n  transition: all 0.2s;\n\n  text {\n    font-family: 'Mitr', sans-serif;\n  }\n\n  .axis line, .axis path {\n    stroke: white;\n  }\n\n  .axis text {\n    fill: white;\n    font-size: 12px;\n    font-family: 'Mitr', sans-serif;\n  }\n\n  text {\n    fill: #7F353E;\n  }\n\n  text.text-white {\n    fill: #fff;\n  }\n\n  .y-axis-deaths {\n    opacity: 0.3;\n\n    path {\n      opacity: 0;\n    }\n  }\n\n  .y-axis {\n    opacity: 0.4;\n\n    path {\n      opacity: 0;\n    }\n  }\n\n  .shadow {\n    filter: drop-shadow( 0px 8px 8px rgba(0, 0, 0, .2));\n    /* Similar syntax to box-shadow */\n  }\n\n  .x-axis text { opacity: 0; }\n  .x-axis-deaths text { opacity: 0; }\n"]))),w.b.div(s||(s=Object(j.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  font-family: 'Mitr', sans-serif;\n\n  \n"]))),function(t){t.processedData,t.datesRange;var e,n,a,i=t.padding,o=(t.breakPoint,t.x),l=t.y,s=t.latestDate,r=t.firstDate,c=t.accumulated,d=t.latestValueOutskirt,u=t.latestValue,b=t.boxHeight,f=t.boxWidth,x=t.scaleX,v=t.scaleY,j=t.rawSeries,m=t.smoothedSeries,p=t.fill,k=void 0===p?"#333031":p,w=t.fillPanel,E=void 0===w?"#fff1":w,S=t.tickCount,A=void 0===S?5:S,C=t.label,M=void 0===C?"":C,z=t.notes,W=void 0===z?"":z,F=t.showDisclaimer,V=void 0!==F&&F,H=Object(h.useRef)(null),R=16,T=200,P=Object(h.useMemo)((function(){return V?28:0}),[V]),I=Object(h.useMemo)((function(){var t=v.domain(),e=v.range();return e[0]=e[0]-P,O.f().domain(t).range(e)}),[v,P]);return Object(h.useEffect)((function(){if(H.current){var t=O.h(H.current);t.select("g.x-axis").attr("transform","translate(0,".concat(b-32-i.bottom-i.top-P,")")).call(O.a(x).tickValues(x.domain()).tickFormat((function(t){return g.DateTime.fromJSDate(t).toISODate()})).tickSize(0).tickPadding(8)),t.select("g.y-axis").call(O.b(I).ticks(A).tickPadding(8).tickSize(-(f-T-32-i.left)))}}),[H,x,I,i,b,P,A,f]),Object(y.jsxs)("g",{ref:H,transform:"translate(".concat(o,",").concat(l,")"),children:[Object(y.jsx)("rect",{width:f,height:b,rx:16,fill:k,class:"shadow"}),Object(y.jsxs)("g",{transform:"translate(".concat(0,",",0,")"),children:[Object(y.jsx)("rect",{width:T,height:b,rx:16,fill:E}),Object(y.jsxs)("g",{transform:"translate(".concat(100,",").concat(b/2-6-(W?8:0),")"),children:[Object(y.jsx)("text",{y:-44,dominantBaseline:"middle",textAnchor:"middle",fontWeight:"400",fontSize:24,class:"text-white",children:M}),Object(y.jsxs)("text",{y:0,dominantBaseline:"middle",textAnchor:"middle",fontWeight:"600",fontSize:48,class:"text-white",children:["+",null===u||void 0===u||null===(e=u.toLocaleString)||void 0===e?void 0:e.call(u)]}),null!==(null!==d&&void 0!==d?d:null)&&Object(y.jsxs)("text",{y:36,dominantBaseline:"middle",textAnchor:"middle",fontWeight:"400",fontSize:20,class:"text-white",children:["\u0e1b\u0e23\u0e34\u0e21\u0e13\u0e11\u0e25 +",null===d||void 0===d||null===(n=d.toLocaleString)||void 0===n?void 0:n.call(d)]}),W&&Object(y.jsxs)("text",{y:60,dominantBaseline:"middle",textAnchor:"middle",fontWeight:"300",fontSize:16,class:"text-white",style:{opacity:.5},children:["*",W]})]}),Object(y.jsxs)("text",{x:100,y:b-R,dominantBaseline:"baseline",textAnchor:"middle",fontWeight:"400",fontSize:20,class:"text-white",style:{opacity:.5},children:["\u0e2a\u0e30\u0e2a\u0e21 ",null===c||void 0===c||null===(a=c.toLocaleString)||void 0===a?void 0:a.call(c)," \u0e23\u0e32\u0e22"]})]}),Object(y.jsxs)("g",{class:"chart",transform:"translate(".concat(T,",",0,")"),children:[Object(y.jsxs)("g",{transform:"translate(".concat(R+i.left,",").concat(R+i.top,")"),children:[Object(y.jsx)("g",{class:"x-axis axis"}),Object(y.jsx)("g",{class:"y-axis axis"}),Object(y.jsx)(B,{processedData:j,color:"#fff6",scaleX:x,scaleY:I}),Object(y.jsx)(D,{processedData:m,color:"#fff",scaleX:x,scaleY:I})]}),Object(y.jsx)("text",{x:R+i.left,y:b-R-i.bottom-P+6,dominantBaseline:"hanging",textAnchor:"start",fontWeight:"400",fontSize:12,class:"text-white",children:_(g.DateTime.fromISO(r))}),Object(y.jsx)("text",{x:f-T-R-i.right,y:b-R-i.bottom-P+6,dominantBaseline:"hanging",textAnchor:"end",fontWeight:"400",fontSize:12,class:"text-white",children:_(g.DateTime.fromISO(s))}),Object(y.jsx)("text",{y:R,x:f-T-R,fontSize:12,dominantBaseline:"hanging",textAnchor:"end",class:"text-white",style:{opacity:.5},children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e22\u0e49\u0e2d\u0e19\u0e2b\u0e25\u0e31\u0e07 2 \u0e40\u0e14\u0e37\u0e2d\u0e19"}),V&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("text",{y:b-i.bottom-12,x:f-T-R,fontSize:12,fontWeight:"normal",dominantBaseline:"baseline",textAnchor:"end",class:"text-white",children:"*\u0e22\u0e2d\u0e14\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e19\u0e35\u0e49\u0e19\u0e48\u0e32\u0e08\u0e30\u0e15\u0e48\u0e33\u0e01\u0e27\u0e48\u0e32\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e08\u0e23\u0e34\u0e07"}),Object(y.jsx)("text",{y:b-i.bottom,x:f-T-R,fontSize:12,fontWeight:"normal",dominantBaseline:"baseline",textAnchor:"end",class:"text-white",children:"\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e25\u0e14\u0e25\u0e07\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e40\u0e15\u0e35\u0e22\u0e07\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e44\u0e21\u0e48\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e1e\u0e2d"})]})]})]})}),F=w.b.div(r||(r=Object(j.a)(["\n  /* padding: 30px; */\n  width: 100%;\n  /* margin-top: 10px; */\n  /* height: 50vh; */\n  flex: 1;\n  position: relative;\n  transition: all 0.2s;\n\n  text {\n    font-family: 'Mitr', sans-serif;\n  }\n\n  .axis line, .axis path {\n    stroke: white;\n  }\n\n  .axis text {\n    fill: white;\n    font-size: 12px;\n    font-family: 'Mitr', sans-serif;\n  }\n\n  text {\n    fill: #7F353E;\n  }\n\n  text.text-white {\n    fill: #fff;\n  }\n\n  .y-axis-deaths {\n    opacity: 0.3;\n\n    path {\n      opacity: 0;\n    }\n  }\n\n  .y-axis {\n    opacity: 0.4;\n\n    path {\n      opacity: 0;\n    }\n  }\n\n  .shadow {\n    filter: drop-shadow( 0px 8px 8px rgba(0, 0, 0, .2));\n    /* Similar syntax to box-shadow */\n  }\n\n  .x-axis text { opacity: 0; }\n  .x-axis-deaths text { opacity: 0; }\n"]))),V=(w.b.div(c||(c=Object(j.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  font-family: 'Mitr', sans-serif;\n\n  \n"]))),function(t){var e,n,a,i,o,l,s,r,c,d,u,b,f,x,v,j,m=t.processedData,p=(t.datesRange,t.padding),w=void 0===p?{top:18,right:0,bottom:12,left:40}:p,B=(t.breakPoint,Object(h.useRef)(null)),E=(Object(h.useRef)(null),Object(h.useRef)(null),640),S=640,D=32,C=w,V=Object(k.a)({onResize:function(t){var e=t.observe,n=t.unobserve;t.width,t.height,t.entry;n(),e()}}),H=(V.observe,V.unobserve,V.w,V.h,V.entry,Object(h.useMemo)((function(){var t=m[m.length-1],e=g.DateTime.fromISO(null===t||void 0===t?void 0:t.date),n=e.weekday;return{iso:null===t||void 0===t?void 0:t.date,dateStr:_(e),dayColor:["#C33646","#D5A21F","#C55A9A","#2B9649","#D5682A","#31A0C3","#7E48A4","#C33646"][n],weekdayStr:["\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c","\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c","\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23","\u0e1e\u0e38\u0e18","\u0e1e\u0e24\u0e2b\u0e31\u0e2a","\u0e28\u0e38\u0e01\u0e23\u0e4c","\u0e40\u0e2a\u0e32\u0e23\u0e4c","\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"][n],weekdayNum:n}}),[m])),R=A(m,(function(t){var e,n;return null!==(e=null===t||void 0===t||null===(n=t.bangkok)||void 0===n?void 0:n.new_cases)&&void 0!==e?e:0})),T=m.map((function(t){var e,n;return{date:t.date,value:null!==(e=null===t||void 0===t||null===(n=t.bangkok)||void 0===n?void 0:n.new_cases_7day_average)&&void 0!==e?e:0}})),P=(A(m,(function(t){var e,n;return null!==(e=null===t||void 0===t||null===(n=t.thailand)||void 0===n?void 0:n.NewConfirmed)&&void 0!==e?e:0})),A(m,(function(t){var e,n;return null!==(e=null===t||void 0===t||null===(n=t.bangkok)||void 0===n?void 0:n.new_death)&&void 0!==e?e:0}))),I=m.map((function(t){var e,n;return{date:t.date,value:null!==(e=null===t||void 0===t||null===(n=t.bangkok)||void 0===n?void 0:n.new_deaths_7day_average)&&void 0!==e?e:0}})),L=Object(h.useMemo)((function(){return E-w.left-w.right}),[E,w]),X=Object(h.useMemo)((function(){return S-w.top-w.bottom}),[S,w]),N=Object(h.useMemo)((function(){return O.g().domain(O.c(m,(function(t){return new Date(t.date)}))).range([0,344-C.left-C.right])}),[m,L]),Y=Object(h.useMemo)((function(){return O.f().domain([0,O.e(m,(function(t){var e,n;return null!==(e=+(null===t||void 0===t||null===(n=t.bangkok)||void 0===n?void 0:n.new_cases))&&void 0!==e?e:0}))]).range([208-C.top-C.bottom,0])}),[m,X]),Z=Object(h.useMemo)((function(){return O.f().domain([0,O.e(m,(function(t){var e,n;return null!==(e=+(null===t||void 0===t||null===(n=t.bangkok)||void 0===n?void 0:n.new_death))&&void 0!==e?e:0}))]).range([128-C.top-C.bottom,0])}),[m,X]);return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(F,{children:[Object(y.jsx)("div",{id:"container",children:Object(y.jsxs)("svg",{id:"chart",className:"d3-component",width:"100%",ref:B,viewBox:"0 0 ".concat(E," ").concat(S),style:{backgroundColor:"#F3E1E3"},children:[Object(y.jsx)("text",{x:D,y:D,fontSize:24,dominantBaseline:"hanging",fontWeight:"600",children:"\u0e2a\u0e16\u0e32\u0e19\u0e01\u0e32\u0e23\u0e13\u0e4c COVID-19 \u0e43\u0e19"}),Object(y.jsx)("text",{x:D,y:52,fontSize:39,dominantBaseline:"hanging",fontWeight:"600",children:"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e21\u0e2b\u0e32\u0e19\u0e04\u0e23"}),Object(y.jsx)("rect",{x:448,y:D,width:160,height:64,rx:16,fill:H.dayColor}),Object(y.jsxs)("text",{x:528,y:42,dominantBaseline:"hanging",textAnchor:"middle",fontWeight:"400",fontSize:16,class:"text-white",children:["\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19",H.weekdayStr,"\u0e17\u0e35\u0e48"]}),Object(y.jsx)("text",{x:528,y:60,dominantBaseline:"hanging",textAnchor:"middle",fontWeight:"600",fontSize:24,class:"text-white",children:H.dateStr}),Object(y.jsx)(W,{label:"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",svgRef:B,x:D,y:120,boxHeight:240,boxWidth:576,padding:C,scaleY:Y,scaleX:N,rawSeries:R,smoothedSeries:T,accumulated:null===m||void 0===m||null===(e=m[m.length-1])||void 0===e||null===(n=e.bangkok)||void 0===n?void 0:n.accumulated_cases,latestValueOutskirt:null===m||void 0===m||null===(a=m[m.length-1])||void 0===a||null===(i=a.bangkok)||void 0===i?void 0:i.new_cases_outskirt,latestValue:null===m||void 0===m||null===(o=m[m.length-1])||void 0===o||null===(l=o.bangkok)||void 0===l?void 0:l.new_cases,firstDate:null===m||void 0===m||null===(s=m[0])||void 0===s?void 0:s.date,latestDate:null===m||void 0===m||null===(r=m[(null===m||void 0===m?void 0:m.length)-1])||void 0===r?void 0:r.date,tickCount:8,fill:"#C33646",fillPanel:"#0002",showDisclaimer:!0}),Object(y.jsx)(W,{label:"\u0e1c\u0e39\u0e49\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15",x:D,y:384,boxHeight:160,boxWidth:576,padding:C,scaleY:Z,scaleX:N,rawSeries:P,smoothedSeries:I,accumulated:null===m||void 0===m||null===(c=m[m.length-1])||void 0===c||null===(d=c.bangkok)||void 0===d?void 0:d.accumulated_death,latestValueOutskirt:null===m||void 0===m||null===(u=m[m.length-1])||void 0===u||null===(b=u.bangkok)||void 0===b?void 0:b.new_death_outskirt,latestValue:null===m||void 0===m||null===(f=m[m.length-1])||void 0===f||null===(x=f.bangkok)||void 0===x?void 0:x.new_death,firstDate:null===m||void 0===m||null===(v=m[0])||void 0===v?void 0:v.date,latestDate:null===m||void 0===m||null===(j=m[(null===m||void 0===m?void 0:m.length)-1])||void 0===j?void 0:j.date,fill:"#333031",fillPanel:"#fff1"}),Object(y.jsx)("text",{x:D,y:588,dominantBaseline:"bottom",fontWeight:"400",fontSize:16,fill:"#222",children:"*\u0e44\u0e21\u0e48\u0e23\u0e27\u0e21\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e43\u0e19\u0e40\u0e23\u0e37\u0e2d\u0e19\u0e08\u0e33 / \u0e23\u0e27\u0e1a\u0e23\u0e27\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e32\u0e01 \u0e28\u0e1a\u0e04. \u0e41\u0e25\u0e30 \u0e01\u0e17\u0e21. "}),Object(y.jsx)("text",{x:D,y:608,dominantBaseline:"bottom",fontWeight:"400",fontSize:16,fill:"#222",children:"\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e2a\u0e16\u0e32\u0e19\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e41\u0e25\u0e30\u0e41\u0e25\u0e30\u0e14\u0e39\u0e44\u0e1f\u0e25\u0e4c\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48 taepras.com/bkkcovid"}),Object(y.jsx)("g",{transform:"translate(".concat(608,",").concat(608,")"),children:Object(y.jsxs)("g",{transform:"translate(-54,-32)",children:[Object(y.jsx)("path",{d:"M21.9537 20.21C23.8502 22.7782 26.2604 22.9758 27.4457 22.9758C29.9744 22.9758 31.9499 21.988 33.2538 20.7632C34.2416 19.8149 35.9406 17.7208 35.9406 13.8488C35.9406 10.4508 34.6367 8.31716 33.3724 7.05286C31.4363 5.1168 29.0262 4.7612 27.5247 4.7612C24.3638 4.7612 22.7044 6.46019 21.9537 7.52694V5.31435H17.1333V31.4706H21.9537V20.21ZM26.2209 9.02841C27.3667 9.02841 28.6311 9.463 29.5003 10.2532C30.4485 11.162 30.9622 12.5844 30.9622 13.8488C30.9622 15.1131 30.488 16.5355 29.4608 17.4838C28.8286 18.0764 27.8013 18.7086 26.2209 18.7086C24.7195 18.7086 23.6921 18.1159 23.06 17.5627C22.1117 16.733 21.4795 15.4292 21.4795 13.8488C21.4795 12.2683 22.0327 11.083 23.0995 10.1742C23.9687 9.38397 24.9565 9.02841 26.2209 9.02841Z",fill:"#222222"}),Object(y.jsx)("path",{d:"M14.5573 10.1777V5.35121H9.7309V0.524704H4.90437V5.35121H0.0778656V10.1777H4.90437V19.5089H9.7309V10.1777H14.5573Z",fill:"#222222"}),Object(y.jsx)("path",{d:"M14.5574 19.5089H9.7309V24.3354H14.5574V19.5089Z",fill:"#222222"}),Object(y.jsx)("path",{d:"M52.6494 28.5618V23.7323H34.733V28.5618H52.6494Z",fill:"#14E1CA"})]})})]})}),Object(y.jsxs)("div",{style:{textAlign:"center",margin:"32px",marginTop:"0px"},children:[Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"16px"},children:[Object(y.jsx)("div",{className:"fb-share-button","data-href":"https://taepras.github.io/bkkcovid/","data-layout":"button","data-size":"large",style:{marginRight:"16px"},children:Object(y.jsx)("a",{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftaepras.github.io%bkkcovid%2F&src=sdkpreparse",className:"fb-xfbml-parse-ignore",rel:"noreferrer",children:"Share"})}),Object(y.jsx)("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-size":"large","data-url":"https://taepras.github.io/bkkcovid/","data-via":"taepras","data-dnt":"true","data-show-count":"false",children:"Tweet"}),Object(y.jsx)("div",{style:{marginLeft:"16px",display:"inline-block"},children:Object(y.jsx)("div",{className:"line-it-button","data-lang":"en","data-type":"share-a","data-ver":"3","data-url":"https://taepras.github.io/bkkcovid/","data-color":"default","data-size":"large","data-count":"false"})})]}),Object(y.jsxs)("div",{style:{display:"flex",marginBottom:"16px"},children:[Object(y.jsx)(z,{as:"a",href:"#",onClick:function(){console.log(B.current);var t=document.getElementById("container");console.log(t.offsetHeight,t.offsetWidth),M.a.toPng(t,{height:3*t.offsetHeight,width:3*t.offsetWidth,style:{transform:"scale(".concat(3,") translate(").concat(t.offsetWidth/3,"px, ").concat(t.offsetHeight/3,"px)")}}).then((function(t){var e=document.createElement("a");e.download="bkkcovid-".concat(H.iso,".png"),e.href=t,e.click()})).catch((function(t){return console.error(t)}))},isFullWidth:!0,mb:!0,style:{flexGrow:1,flexBasis:0,marginRight:"8px"},children:"\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e44\u0e1f\u0e25\u0e4c\u0e20\u0e32\u0e1e"}),Object(y.jsx)(z,{as:"a",href:"https://docs.google.com/spreadsheets/d/1VY6ddD-DdmgIlX_RiFZnIa7ZFXB-mH8nD0hVxaROrP0/edit#gid=0",target:"_blank",isFullWidth:!0,mb:!0,style:{flexGrow:1,flexBasis:0,marginLeft:"16px"},children:"\u0e14\u0e39\u0e44\u0e1f\u0e25\u0e4c\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"})]}),Object(y.jsxs)("p",{style:{lineHeight:1.2},children:[Object(y.jsx)("b",{children:"\u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e17 27 \u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 2564"}),Object(y.jsx)("br",{}),"**\u0e22\u0e2d\u0e14\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e43\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e0a\u0e38\u0e14\u0e19\u0e35\u0e49\u0e19\u0e35\u0e49 \u0e19\u0e48\u0e32\u0e08\u0e30\u0e15\u0e48\u0e33\u0e01\u0e27\u0e48\u0e32\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e08\u0e23\u0e34\u0e07**",Object(y.jsx)("br",{}),"\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e07\u0e14\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e40\u0e15\u0e35\u0e22\u0e07\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e44\u0e21\u0e48\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e1e\u0e2d",Object(y.jsx)("br",{}),Object(y.jsx)("a",{href:"https://www.pptvhd36.com/news/%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E/145279",target:"_blank",children:"[\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07]"})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("p",{style:{lineHeight:1.2},children:["\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e08\u0e32\u0e01 ",Object(y.jsx)("a",{href:"https://www.facebook.com/informationcovid19",target:"_blank",children:"\u0e28\u0e1a\u0e04."})," \u0e41\u0e25\u0e30 ",Object(y.jsx)("a",{href:"http://www.bangkok.go.th/covid19",target:"_blank",children:"\u0e01\u0e17\u0e21."}),Object(y.jsx)("br",{}),"\u0e23\u0e27\u0e1a\u0e23\u0e27\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e25\u0e30\u0e17\u0e33 visualization \u0e42\u0e14\u0e22",Object(y.jsx)("br",{}),Object(y.jsx)("a",{href:"https://taepras.com",target:"_blank",children:"\u0e18\u0e19\u0e27\u0e34\u0e0a\u0e0d\u0e4c \u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e1e\u0e07\u0e29\u0e4c\u0e0a\u0e31\u0e22 (taepras.com)"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("a",{href:"https://taepras.medium.com/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3-%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B8%87-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E-cbf7d41e2f94",target:"_blank",children:"\u0e2d\u0e48\u0e32\u0e19\u0e17\u0e35\u0e48\u0e21\u0e32\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e33\u0e01\u0e23\u0e32\u0e1f\u0e19\u0e35\u0e49 (medium.com)"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19 open source \u0e2b\u0e32\u0e01\u0e2a\u0e19\u0e43\u0e08\u0e19\u0e33\u0e44\u0e1b\u0e43\u0e0a\u0e49\u0e15\u0e48\u0e2d",Object(y.jsx)("br",{}),"\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e02\u0e49\u0e32\u0e44\u0e1b\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48 ",Object(y.jsx)("a",{href:"https://github.com/taepras/bkkcovid",target:"_blank",children:"github.com/taepras/bkkcovid"})]})]})]})})}),H=n(61),R=n.n(H),T=(w.b.div(d||(d=Object(j.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  /* padding: 30px; */\n"]))),w.b.div(u||(u=Object(j.a)(["\n  width: 100%;\n  max-width: 640px;\n  margin: auto;\n"]))));var P=function(){var t,e,n,a,i,o,l,s,r,c,d,u,b,f,x,j,m,O=Object(h.useState)({Data:[]}),k=Object(v.a)(O,2),w=k[0],B=(k[1],Object(h.useState)()),E=Object(v.a)(B,2),S=E[0],D=E[1],A=Object(h.useState)(g.DateTime.now().minus({months:2}).startOf("day")),C=Object(v.a)(A,2),M=C[0],z=C[1],W=Object(h.useState)(g.DateTime.now().startOf("day")),F=Object(v.a)(W,2),H=F[0],P=F[1],I=Object(h.useMemo)((function(){for(var t=[],e=M;e<=H;)t.push(e.toISODate()),e=e.plus({days:1});return t}),[M,H]);Object(h.useEffect)((function(){R.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vR5KEVlTJbefwhG7GXg5swMW1rDSctbXuwZR-omHnxdet_DReCYnu0r_CVgzLTxwPqKlz4WMvKOppv1/pub?gid=0&single=true&output=csv").then((function(t){var e=p.a.parse(t.data,{header:!0,dynamicTyping:!0});console.log("gsheets",e);var n=g.DateTime.fromISO(e.data[e.data.length-1].date);P(n),z(n.minus({months:2}).startOf("day")),D(e)}))}),[]);var L=Object(h.useMemo)((function(){if(!w||!S)return[];var t=w.Data,e=S.data,n=I.map((function(n){var a,i,o,l;return{date:n,thailand:null!==(a=null===t||void 0===t||null===(i=t.filter((function(t){return e=t.Date,"".concat(e.substr(6,4),"-").concat(e.substr(0,2),"-").concat(e.substr(3,2))===n;var e})))||void 0===i?void 0:i[0])&&void 0!==a?a:{},bangkok:null!==(o=null===e||void 0===e||null===(l=e.filter((function(t){return t.date===n})))||void 0===l?void 0:l[0])&&void 0!==o?o:{}}}));return console.log("gs",e,n),n}),[w,S,M,H,I]),X=Object(h.useMemo)((function(){return new URLSearchParams(window.location.search).get("tweettext")}));return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(T,{children:[Object(y.jsx)(V,{datesRange:I,processedData:L}),X&&Object(y.jsxs)("p",{style:{padding:"16px",border:"1px #7F353E solid",borderRadius:"8px"},id:"tweet-text",onClick:function(){navigator.clipboard.writeText(document.getElementById("tweet-text").innerText)},children:["\u0e22\u0e2d\u0e14\u0e42\u0e04\u0e27\u0e34\u0e14\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 (",_(null===L||void 0===L||null===(t=L[(null===L||void 0===L?void 0:L.length)-1])||void 0===t?void 0:t.date,!0),")",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"\u0e1e\u0e1a\u0e40\u0e0a\u0e37\u0e49\u0e2d +",null===L||void 0===L||null===(e=L[(null===L||void 0===L?void 0:L.length)-1])||void 0===e||null===(n=e.bangkok)||void 0===n||null===(a=n.new_cases)||void 0===a||null===(i=a.toLocaleString)||void 0===i?void 0:i.call(a)," (\u0e1b\u0e23\u0e34\u0e21\u0e13\u0e11\u0e25 +",null===L||void 0===L||null===(o=L[(null===L||void 0===L?void 0:L.length)-1])||void 0===o||null===(l=o.bangkok)||void 0===l||null===(s=l.new_cases_outskirt)||void 0===s||null===(r=s.toLocaleString)||void 0===r?void 0:r.call(s),")",Object(y.jsx)("br",{}),"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15 +",null===L||void 0===L||null===(c=L[(null===L||void 0===L?void 0:L.length)-1])||void 0===c||null===(d=c.bangkok)||void 0===d||null===(u=d.new_death)||void 0===u||null===(b=u.toLocaleString)||void 0===b?void 0:b.call(u)," (\u0e1b\u0e23\u0e34\u0e21\u0e13\u0e11\u0e25 +",null===L||void 0===L||null===(f=L[(null===L||void 0===L?void 0:L.length)-1])||void 0===f||null===(x=f.bangkok)||void 0===x||null===(j=x.new_death_outskirt)||void 0===j||null===(m=j.toLocaleString)||void 0===m?void 0:m.call(j),")",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"#\u0e01\u0e23\u0e32\u0e1f\u0e42\u0e04\u0e27\u0e34\u0e14 #\u0e42\u0e04\u0e27\u0e34\u0e14\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e",Object(y.jsx)("br",{}),"\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e2a\u0e16\u0e32\u0e19\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48 https://taepras.com/bkkcovid",Object(y.jsx)("br",{}),"\u0e23\u0e27\u0e1a\u0e23\u0e27\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e32\u0e01 \u0e28\u0e1a\u0e04. (@oc_ccsa) \u0e41\u0e25\u0e30 \u0e01\u0e17\u0e21. (@pr_bangkok)",Object(y.jsx)("br",{})]})]})})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,l=e.getTTFB;n(t),a(t),i(t),o(t),l(t)}))};x.a.render(Object(y.jsx)(b.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root")),I()}},[[191,1,2]]]);
//# sourceMappingURL=main.e84a6bf1.chunk.js.map
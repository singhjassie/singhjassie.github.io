"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[268],{8548:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(10219),c=r(92809),l=r(10413),a=r(41796),i=r(14563),o=r(85893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(0,l.Z)((function(e){return{tooltip:{backgroundColor:(0,a._4)(e.palette.background.paper,.1),color:e.palette.text.primary,fontSize:14,boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)"},arrow:{color:(0,a._4)(e.palette.background.paper,.1)}}})),d=function(e){var t=h();return(0,o.jsx)(i.Z,p(p({},e),{},{arrow:!0,classes:{tooltip:t.tooltip,arrow:t.arrow}}))},f=["style","href","Icon","children","large"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=(0,l.Z)((function(e){return{iconHolder:{display:"flex",borderRadius:6,boxShadow:"0px 4px 10px 2px rgba(0, 0, 0, 0.25)"},icon:{padding:5,width:64,height:64,background:"#FFF",borderRadius:6},bigIcon:(0,c.Z)({width:84,height:84,padding:16,background:"#FFF",borderRadius:6,boxShadow:"0px 4px 10px 2px rgba(0, 0, 0, 0.25)"},e.breakpoints.down("md"),{width:64,height:64})}})),v=function(e){var t=e.style,r=e.href,c=e.Icon,l=e.children,a=e.large,i=(0,n.Z)(e,f),s=m();return(0,o.jsx)(d,g(g({title:l},i),{},{children:(0,o.jsx)("a",{className:s.iconHolder,href:r,style:t,children:(0,o.jsx)(c,{className:a?s.bigIcon:s.icon})})}))}},81593:function(e,t,r){var n=r(10219),c=r(92809),l=r(41796),a=r(71508),i=r(10413),o=r(94184),s=r.n(o),p=r(67294),h=r(85893),d=["className","children","spacing","reversed","orientation","cloneFactor"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=(0,i.Z)((function(e){return{root:function(t){var r=t.orientation;return u(u({position:"relative",display:"flex",overflow:"hidden",flexDirection:"horizontal"===r?"row":"column"},"horizontal"===r?{width:"100%"}:{height:1,minHeight:"100%"}),{},{"&:hover $slider":{animationPlayState:"paused"},"&::before, &::after":u({content:'""',boxSizing:"border-box",pointerEvents:"none",position:"absolute",zIndex:3},"horizontal"===r?{height:"100%",top:0,width:"23%!important"}:{width:"100%",left:0,height:"23%!important"}),"&::before":u({background:"transparent linear-gradient(".concat("horizontal"===r?90:180,"deg,").concat(e.palette.background.paper," 2.52%,").concat((0,l.Fq)(e.palette.background.paper,0),") repeat scroll 0 0")},"horizontal"===r?{left:0}:{top:0}),"&::after":u({background:"transparent linear-gradient(".concat("horizontal"===r?270:0,"deg,").concat(e.palette.background.paper," 2.52%,").concat((0,l.Fq)(e.palette.background.paper,0),") repeat scroll 0 0")},"horizontal"===r?{right:0}:{bottom:0})})},slider:function(e){return{boxSizing:"border-box",alignItems:"center",display:"flex",animation:"$scroll 12s linear infinite",flexDirection:"horizontal"===e.orientation?"row":"column"}},reversed:{animationDirection:"reverse !important"},"@keyframes scroll":{"0%":function(e){var t=e.orientation;return{transform:"translate".concat("horizontal"===t?"X":"Y","(0)")}},to:function(e){var t=e.orientation;return{transform:"translate".concat("horizontal"===t?"X":"Y","(-100%)")}}},element:function(t){var r=t.spacing;return{margin:"horizontal"===t.orientation?e.spacing(0,r):e.spacing(r,0)}}}}));t.Z=function(e){var t=e.className,r=e.children,l=e.spacing,i=void 0===l?4:l,o=e.reversed,f=void 0!==o&&o,m=e.orientation,v=void 0===m?"horizontal":m,b=e.cloneFactor,j=void 0===b?1:b,x=(0,n.Z)(e,d),y=g({spacing:i,orientation:v}),w=(0,p.useMemo)((function(){return"vertical"===v?a.Z:p.Fragment}),[]);return(0,h.jsx)(w,u(u({},"vertical"===v?{className:t}:{}),{},{children:(0,h.jsx)("div",u(u({className:s()(y.root,null!==t&&void 0!==t?t:"")},x),{},{children:Array.from(Array(j+1),(function(e,t){return(0,h.jsx)("div",{className:s()(y.slider,(0,c.Z)({},y.reversed,f)),children:p.Children.map(r,(function(e,r){return(0,h.jsx)("div",{className:y.element,children:e},"slider-child-".concat(t,"-").concat(r))}))},"slider-cloned-".concat(t))}))}))}))}},81268:function(e,t,r){r.r(t),r.d(t,{default:function(){return ee}});var n,c,l,a,i,o,s,p,h,d,f,u,g,m,v,b,j,x,y,w,O,E,A,z,C,P,M,D,k,F,Z,S,N,B=r(92809),I=r(15725),R=r(36501),L=r(2658),Q=r(6931),U=r(10413),H={src:"/_next/static/image/src/containers/HomeContainers/ToolsSection/assets/netpulse-main.704add427446b8e16ada25c2584ef79e.png",height:981,width:1917,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/ARonTP9lWDz/JiUhADguKwEIBwYA09LU/0hVUgEkK0f/AShCZ//CpIAACQQDAPn4+QAB/PoAAgQGANvg4wBfb44AAR03Wv+BaEwAVk9JAAcGBQAC//4A6+/wANvd4QBvfpkAAQAQN/8kFxH/taeOABEWDQEIBgcAq6uw/2NrZgEtMUz/250uuMJF7CUAAAAASUVORK5CYII="},_=r(67294);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var q=function(e){return _.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",width:500,height:500},e),n||(n=_.createElement("path",{d:"M247.938 48.5l3.002.003c15.59.05 29.994 1.24 45.06 5.497 1.533.39 3.067.779 4.602 1.164C324.82 61.498 347.402 73.582 367 89l2.84 2.164C382.536 101.12 393.72 112.818 403 126l1.228 1.716C411.501 137.94 417.465 148.75 423 160l1.492 3.031c21.069 46.819 18.965 102.8 1.321 150.127-8.96 22.933-23.406 43.637-40.364 61.33a616.551 616.551 0 00-3.98 4.203c-6.284 6.52-13.133 12.044-20.469 17.309l-1.738 1.25C337.992 412.372 314.498 422.506 289 428l-3.654.806c-11.2 2.231-22.096 2.689-33.5 2.64-3.013-.008-6.023.02-9.035.052-19.613.07-38.235-3.285-56.811-9.498l-1.94-.63c-22.04-7.262-41.52-19.541-59.446-34.063a298.857 298.857 0 00-3.361-2.68c-1.455-1.164-2.859-2.391-4.253-3.627v-2l-1.938-.813C113 377 113 377 112 374l-3-1v-2h-2c-3.257-3.443-6.095-7.258-9-11l-1.336-1.703C85.351 343.78 76.931 328.015 70 311l-.975-2.342c-19.157-46.667-16.116-98.796 2.536-145.077C84.249 133.296 105.998 106.73 132 87l2.82-2.164C157.42 67.902 182.514 57.85 210 52l3.456-.798c11.503-2.456 22.747-2.756 34.482-2.702z",fill:"#838282"})),c||(c=_.createElement("path",{d:"M143 115c6.625-.25 6.625-.25 10 2 .507 1.775.507 1.775.693 3.948l.228 2.477.2 2.704.238 2.825c.876 10.979 1.298 21.98 1.703 32.983.155 4.051.313 8.102.473 12.153l.115 2.928c.252 6.229.648 12.434 1.13 18.65.48 7.263.593 14.549.772 21.826.125 8.83.125 8.83.975 17.608.723 5.96.577 11.902.535 17.898l-.013 3.793c-.012 3.069-.028 6.138-.049 9.207h2l-.125-2.563c.11-3.036.584-5.436 1.488-8.316.812-2.705 1.469-5.439 2.137-8.184 1.003-4.057 2.179-7.973 3.5-11.937a686.003 686.003 0 002.121-9.195c.925-2.952 1.77-4.56 3.879-6.805 2.177-.454 2.177-.454 4.668-.39l2.705.038 2.814.102 2.85.055c2.322.047 4.642.113 6.963.195l.108-2.014c.345-5.733 1.637-10.181 3.915-15.42 1.348-3.541 1.881-7.088 2.485-10.816 2.222-12.413 2.222-12.413 6.492-15.75 5.096-.637 5.096-.637 7.562 1.102 2.05 2.706 2.607 5.364 3.438 8.648l.518 2.034c1.38 5.531 2.491 11.104 3.556 16.704.73 3.686 1.578 7.337 2.446 10.992l.828 3.5c.55 2.308 1.107 4.616 1.671 6.922 1.306 5.493 2.346 10.447 1.981 16.098h2l1.187-3.563.84-2.492a356.982 356.982 0 002.04-6.39C242.83 207.17 242.83 207.17 248 202c2.814-.111 5.604-.157 8.42-.161l2.675-.015c2.934-.015 5.869-.022 8.803-.027l6.095-.017c4.266-.01 8.531-.017 12.797-.02 5.474-.006 10.947-.03 16.42-.058 4.199-.019 8.397-.024 12.596-.026 2.018-.003 4.036-.01 6.055-.024 2.82-.017 5.64-.015 8.46-.008l2.542-.028c5.697.04 5.697.04 7.852 1.72 1.98 2.564 1.677 4.53 1.285 7.664-1.02 1.666-1.02 1.666-3 3-2.76.28-5.292.379-8.052.34l-2.484.002c-2.71-.002-5.421-.026-8.132-.049a3379.564 3379.564 0 01-20.477-.087c-5.047-.03-10.095-.044-15.142-.06-9.905-.032-19.809-.083-29.713-.146l-.411 1.769c-.941 3.566-2.408 6.937-3.777 10.356-2.863 7.243-5.455 14.54-7.858 21.948-1.2 3.7-2.48 7.327-3.954 10.927l-.938 3c-2.568 7.253-2.568 7.253-6.062 9-2.938.313-2.938.313-6 0-2.637-2.805-3.63-5.495-4.563-9.188l-.75-2.957L220 256l-.563-2.262c-1.009-4.266-1.703-8.522-2.312-12.863-.928-6.331-2.525-12.315-4.242-18.465-.99-3.824-1.49-7.489-1.883-11.41l-1-1-.805 3.105-1.07 4.083-.527 2.04c-2.676 10.157-2.676 10.157-6.598 12.772-1.993.227-1.993.227-4.23.195l-2.432-.02-2.526-.05-2.56-.027c-2.084-.024-4.168-.06-6.252-.098l-.629 2.805c-2.354 10.322-5.031 20.542-7.82 30.755-1.402 5.137-2.772 10.275-4.051 15.444a630.347 630.347 0 01-4.938 18.621l-.869 3.254-.877 3.098-.767 2.783C162 311 162 311 160.051 312.33c-2.709.885-4.358.52-7.051-.33-3.304-3.304-3.116-7.396-3.246-11.895l-.1-2.904c-.059-1.935-.116-3.87-.172-5.805-.252-7.257-.816-14.453-1.455-21.685-.99-11.368-1.528-22.721-1.919-34.124-.575-16.732-1.271-33.44-2.499-50.138-.493-6.833-.717-13.598-.609-20.449h-2l-.262 1.668c-1.138 6.733-2.617 13.374-4.176 20.02l-.621 2.697c-1.285 5.403-2.944 10.436-4.941 15.615-.517 1.865-1 3.74-1.438 5.625A545.623 545.623 0 01126 224.563l-.938 3.503c-1.066 2.946-1.657 4.04-4.062 5.934-2.011.388-2.011.388-4.332.404l-2.64.038-2.84-.008-2.926.015c-2.04.007-4.081.006-6.122-.003-3.128-.008-6.254.02-9.382.052-1.982.002-3.964.001-5.946-.002l-2.84.034c-6.457-.07-6.457-.07-9.062-2.4-1.124-2.63-1.346-4.299-.91-7.13 1-1.634 1-1.634 3-3a74.06 74.06 0 018.387-.293l2.476.013c2.608.017 5.216.054 7.824.093 1.77.015 3.538.028 5.307.04 4.336.034 8.67.085 13.006.147l.448-3.78c.46-3.873 1.318-7.519 2.364-11.282l1.094-3.985.559-2.014c.803-2.911 1.574-5.832 2.347-8.751 1.275-4.787 2.561-9.57 3.856-14.352l1.832-6.774.93-3.44a740.525 740.525 0 004.632-17.997c1.508-6.113 3.208-12.152 5-18.188l.745-2.526c1.447-4.798 3.127-9.345 5.193-13.911z",fill:"#B25856"})),l||(l=_.createElement("path",{d:"M437 252h1c.818 16.88-2.653 33.073-8 49l-.766 2.313c-9.03 26.916-24.164 50.703-43.785 71.175a616.551 616.551 0 00-3.98 4.203c-6.284 6.52-13.133 12.044-20.469 17.309l-1.738 1.25C337.992 412.372 314.498 422.506 289 428l-3.654.806c-11.2 2.231-22.096 2.689-33.5 2.64-3.013-.008-6.023.02-9.035.052-19.613.07-38.235-3.285-56.811-9.498l-1.94-.63c-22.04-7.262-41.52-19.541-59.446-34.063a298.857 298.857 0 00-3.361-2.68c-1.455-1.164-2.859-2.391-4.253-3.627v-2l-1.938-.812C113 377 113 377 112 374l-3-1v-2h-2c-3.257-3.443-6.095-7.258-9-11l-1.336-1.703C85.35 343.779 76.935 328.015 70 311l-.973-2.327c-2.44-5.923-4.42-11.882-6.152-18.048l-.784-2.783C59.226 277.466 57.618 267.79 58 257h1l.38 2.225c2.404 13.931 4.945 27.42 9.62 40.775l.922 3.066C72.604 311.901 76.695 319.871 81 328l1.182 2.262C87.626 340.638 93.493 349.992 101 359l2.758 3.371C131.323 395.77 169.738 417.673 212 426l2.188.487c6.007 1.297 11.8 1.91 17.937 2.103l2.84.1c3.012.098 6.023.176 9.035.248l3.112.076c16.285.356 31.114-.643 46.888-5.014 1.32-.32 2.64-.636 3.96-.945 17.374-4.413 33.894-12.26 49.165-21.492l2.282-1.379a131.651 131.651 0 0012.96-9.067C364 390 364 390 366 390v-2c1.677-1.448 1.677-1.448 3.98-3.129 17.62-13.341 31.21-30.928 41.99-50.065.985-1.728 2.015-3.43 3.046-5.13C428.606 306.212 433.78 278.584 437 252z",fill:"#545453"})),a||(a=_.createElement("path",{d:"M179 279c3.83-.634 7.187-.81 11 0 3.34 2.853 5.522 6.4 8 10a224.634 224.634 0 004.75 5.313c2.902 3.158 5.559 6.323 8.25 9.687l1-22-4-1v-1h11l-1 2h-3v34c-5 0-5 0-7.035-1.914l-2.028-2.711-2.316-3-1.254-1.637c-2.521-3.206-5.202-6.277-7.867-9.363l-1.602-1.866c-2.38-2.817-2.38-2.817-4.898-5.509l-1 23h4v3h-13v-3h5v-31l-4-1v-2z",fill:"#1A1A1A"})),i||(i=_.createElement("path",{d:"M266 279c3.52-.117 7.04-.188 10.563-.25l3.001-.102c6.419-.085 10.193.583 15.436 4.352 1 1 1 1 1.375 4.188-.494 5.023-1.854 6.291-5.375 9.812-3.644 2.43-5.712 2.162-10 2v-3l2.438-.375L286 295c1.19-2.38 1.133-3.915 1.125-6.563l.008-2.44C287.22 284 287.22 284 286 283l-7-1v31l5 1v2h-18v-3h5v-31h-5v-3z",fill:"#171717"})),o||(o=_.createElement("path",{d:"M309 290l1 20h6c1.933-1.933 1.174-5.375 1.188-7.938l.042-3.84c.117-3.311.117-3.311-2.23-5.222 3.62-1.316 6.096-2 10-2v22h4v3h-11l-1-3-1.063 1.5c-2.98 2.307-5.272 1.88-8.937 1.5-2.707-.95-2.707-.95-5-3-.634-3.077-.47-6.063-.313-9.188l.069-2.56c.059-2.085.148-4.169.244-6.252h-3v-3c3.62-1.316 6.096-2 10-2z",fill:"#1D1D1C"})),s||(s=_.createElement("path",{d:"M393.438 292.5c2.777 2.71 2.947 3.055 3 6.688C396 303 396 303 395 304c-2.353.073-4.708.084-7.063.063l-3.91-.028L381 304l2 6 12 2v2c-4.804 2.785-9.594 2.983-15 2-3.087-1.776-4.613-3.737-6-7-.941-5.196-.882-9.4 1.688-14.063 5.478-4.59 11.154-5.315 17.75-2.437z",fill:"#1A1A1A"})),p||(p=_.createElement("path",{d:"M236.691 290.46c3.234.756 5.089 2.105 7.309 4.54 1 2 1 2 1 8h-16c1.313 4.077 1.313 4.077 3 8h12l-2 4c-4.618 1.54-9.182 1.651-14 1-2.563-2.25-2.563-2.25-4-5l-1.25-1.813c-1.208-3.522-1.574-6.581-.75-10.187 3.421-6.468 7.362-9.142 14.691-8.54z",fill:"#131313"})),h||(h=_.createElement("path",{d:"M437 252h1c.818 16.88-2.653 33.073-8 49l-.766 2.313c-9.294 27.7-25.037 51.68-45.234 72.687l-2.637 2.762C375.976 384.284 370.371 389.614 364 394h-2l2-4h2v-2c1.677-1.448 1.677-1.448 3.98-3.129 17.62-13.341 31.21-30.928 41.99-50.065.985-1.728 2.015-3.43 3.046-5.13C428.606 306.212 433.78 278.584 437 252z",fill:"#5B5B5B"})),d||(d=_.createElement("path",{d:"M362 393c-1.344 4.033-3.96 5.338-7.375 7.563l-2.021 1.321c-18.97 12.167-39.52 20.912-61.574 25.676-1.881.408-3.759.83-5.636 1.254-12.67 2.572-25.068 2.53-37.957 2.373a5048.1 5048.1 0 00-6.56-.04c-5.293-.033-10.585-.083-15.877-.147 2-2 2-2 5.578-2.148 1.558.034 3.115.078 4.672.128 1.729.035 3.457.068 5.186.1l2.754.056c17.603.323 33.694-.66 50.81-5.136 1.326-.316 2.653-.63 3.98-.941 20.937-5.373 43.046-15.37 60.144-28.717C360 393 360 393 362 393z",fill:"#545454"})),f||(f=_.createElement("path",{d:"M342 278l1 37h-10l2-1-1-32-2-1v-2c3.435-.625 6.49-1 10-1z",fill:"#191919"})),u||(u=_.createElement("path",{d:"M367 291v7h-2l-1-3-7-1-1 4 1.828.516c8.63 2.617 8.63 2.617 11.172 6.484.625 2.938.625 2.938 0 6-2.119 2.785-2.881 3.72-6 5-4.367.41-8.628.292-13 0v-8h2v4h10v-4l-12-5c-.596-7.149-.596-7.149 1.75-10.5 4.978-2.298 9.855-1.81 15.25-1.5z",fill:"#131313"})),g||(g=_.createElement("path",{d:"M258 283v10h5v2h-5v17h5l-2 4c-6.5.368-6.5.368-8.712-1.261-1.564-2.111-1.64-3.15-1.581-5.75l.03-2.296c.024-.785.05-1.571.076-2.38l.04-2.417c.036-1.965.09-3.93.147-5.896h-2l2-12c3-1 3-1 7-1z",fill:"#171717"})),m||(m=_.createElement("path",{d:"M58 257h1l.38 2.225c2.404 13.931 4.945 27.42 9.62 40.775l.922 3.066C72.604 311.901 76.695 319.871 81 328l1.182 2.262c4.883 9.307 10.045 17.88 16.69 26.039 1.952 2.476 3.575 4.958 5.128 7.699l-2 1c-23.622-29.33-45.376-69.153-44-108z",fill:"#646463"})),v||(v=_.createElement("path",{d:"M266 279c3.52-.117 7.04-.188 10.563-.25l3.001-.102c6.419-.085 10.193.583 15.436 4.352 1 1 1 1 1.375 4.188-.494 5.023-1.854 6.291-5.375 9.812-3.644 2.43-5.712 2.162-10 2v-3l2.438-.375L286 295c1.19-2.38 1.133-3.915 1.125-6.563l.008-2.44C287.22 284 287.22 284 286 283a235.648 235.648 0 00-7-1v-1a888.223 888.223 0 00-5.375-.063l-3.023-.035c-2.586-.082-2.586-.082-4.602 1.098v-3z",fill:"#1F1F1F"})),b||(b=_.createElement("path",{d:"M68 175c1.123 3.37.873 4.21-.11 7.508l-.788 2.746a9598.67 9598.67 0 01-1.657 5.578c-4.518 15.725-5.892 30.693-6.007 46.98-.024 2.698-.052 5.396-.092 8.094-.024 1.66-.04 3.319-.044 4.978C59.25 254.72 59.174 257.75 57 261c-1.706-29.192-.186-57.288 10-85l1-1z",fill:"#757474"})),j||(j=_.createElement("path",{d:"M239 291c2.934 1.796 4.472 2.944 6 6 .04 2 .043 4 0 6h-7v-2h-9v-7l-6 5c3.34-7.795 7.853-9.345 16-8z",fill:"#1C1C1C"})),x||(x=_.createElement("path",{d:"M437 252h1c1.273 26.26-7.256 55.154-20 78l-2-3 1.031-1.781C429.197 302.699 433.957 277.122 437 252z",fill:"#696969"})),y||(y=_.createElement("path",{d:"M75 319c3.145 2.652 4.508 5.82 6.25 9.5 4.878 10.028 10.934 18.952 17.734 27.773 1.85 2.502 3.467 5.032 5.016 7.727l-2 1c-9.19-11.411-17.054-23.095-24-36l-1.805-3.3C75 323 75 323 75 319z",fill:"#5D5D5D"})),w||(w=_.createElement("path",{d:"M401 127h3a83.792 83.792 0 014.688 7.063l1.317 2.168A535.513 535.513 0 01414 143l1.262 2.166c1.162 2.017 2.3 4.046 3.425 6.084l1.064 1.875c2.346 4.367 2.346 4.367 1.83 7.07L421 162l-.791-1.554c-4.783-9.353-9.57-18.488-15.615-27.098A44.02 44.02 0 01401 127z",fill:"#7B7B7A"})),O||(O=_.createElement("path",{d:"M338 277h5v36h3v3h-15v-3l1.563.5c3.165.734 3.165.734 9.437.5v-36l-4-1z",fill:"#6D6D6C"})),E||(E=_.createElement("path",{d:"M384 292c7.403-.485 7.403-.485 10 1.625 1.233 2.929 1.215 5.228 1 8.375h-6l-.25-3.313c-.387-3.72-.387-3.72-2.813-5.625L384 292z",fill:"#101010"})),A||(A=_.createElement("path",{d:"M385.063 293.813C388 294 388 294 389 295c.04 2 .043 4 0 6h-9c-.125-2.375-.125-2.375 0-5 2-2 2-2 5.063-2.188z",fill:"#6F6F6E"})),z||(z=_.createElement("path",{d:"M232.938 293.813C236 294 236 294 238 296c.125 2.625.125 2.625 0 5h-9c-.043-2-.04-4 0-6 1-1 1-1 3.938-1.188z",fill:"#6E6D6D"})),C||(C=_.createElement("path",{d:"M427 302h1c-.407 7.195-2.876 12.571-6 19a641.252 641.252 0 00-2.313 5.188l-.988 2.23L418 330l-2-3 1.137-2.168c3.821-7.441 6.999-14.975 9.863-22.832z",fill:"#626262"})),P||(P=_.createElement("path",{d:"M350 308h2v4l9 1v2l2 1h-13v-8z",fill:"#262626"})),M||(M=_.createElement("path",{d:"M422 163h2c6.34 13.85 6.34 13.85 6 21-1.582-2.373-2.53-4.12-3.508-6.723l-.8-2.13-.817-2.21-.84-2.22C422 165.258 422 165.258 422 163z",fill:"#767676"})),D||(D=_.createElement("path",{d:"M355 291h12v7h-2l-1-3c-2.097-1.023-2.097-1.023-4.563-1.688-.826-.25-1.652-.502-2.503-.761L355 292v-1z",fill:"#1E1E1E"})),k||(k=_.createElement("path",{d:"M160 251h1v7h2l1-3-.438 2.125c-.577 2.95-1.079 5.908-1.562 8.875h-2v-15z",fill:"#987271"})),F||(F=_.createElement("path",{d:"M331 313l1.563.5c4.514.926 9.03.91 13.437-.5v3h-15v-3z",fill:"#434343"})),Z||(Z=_.createElement("path",{d:"M384 311l11 1v2c-2.17.955-3.563 1.144-5.824.398-1.744-.757-3.462-1.574-5.176-2.398v-1z",fill:"#2D2D2D"})),S||(S=_.createElement("path",{d:"M244 311l-2 4h-3v-2h-5v-1c7.75-1 7.75-1 10-1z",fill:"#2E2E2E"})),N||(N=_.createElement("path",{d:"M141 162l3 1v13h-1v-11h-2v-3z",fill:"#A96A68"})))},V=r(38474),W=r(66374),Y=r(8548),G=r(81593),J=r(85893);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,B.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=(0,U.Z)((function(e){return{root:{paddingTop:75,width:"100%",paddingLeft:16,paddingRight:16,paddingBottom:75},carouselImg:{display:"block",margin:"auto"},headerIcon:{fill:"light"===e.palette.mode?"#FFFFFF":"#06043E"},headerIconWrapper:{width:64,height:64,padding:16,background:"light"===e.palette.mode?"#03232E":"#FFFFFF",borderRadius:6,marginBottom:20},bg:{height:"auto",width:"100%",borderRadius:6,boxShadow:"0px 14px 56px 21px rgba(0, 0, 0, 0.25)"},bgHolder:{width:"calc(100% - 512px)",marginBottom:e.spacing(6),"@media (max-width: 1600px)":{width:"75%"}},responsiveJustify:(0,B.Z)({},e.breakpoints.down("sm"),{justifyContent:"center"}),buttons:{marginTop:e.spacing(1)},smMarquee:{minHeight:93,marginTop:e.spacing(4),marginBottom:e.spacing(4)}}})),ee=function(e){var t=$(),r=[H],n=[(0,J.jsx)(Y.Z,{Icon:q,large:!0,children:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("b",{children:"NetPulse"}),(0,J.jsx)("br",{}),"NetPulse is an open-source network defense and analysis tool designed to empower network administrators and security professionals in safeguarding their networks against potential threats. This comprehensive tool offers a range of defensive capabilities, enabling threat detection, analysis, and protection of network traffic."]})},"netPulse")];return(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(I.ZP,X(X({},e),{},{container:!0,item:!0,xs:12,md:9,children:(0,J.jsx)(R.Z,{className:t.root,elevation:0,children:(0,J.jsxs)(I.ZP,{container:!0,item:!0,xs:12,justifyContent:"center",alignItems:"center",direction:"column",children:[(0,J.jsx)(L.Z,{variant:"h3",align:"center",paragraph:!0,children:"Projects"}),(0,J.jsx)(L.Z,{mb:4,variant:"subtitle2Semi",align:"center",paragraph:!0,children:"Showcasing my diverse expertise through impactful projects in cybersecurity and app development."}),(0,J.jsx)(Q.Z,{mdUp:!0,children:(0,J.jsx)(G.Z,{className:t.smMarquee,cloneFactor:2,children:n})}),(0,J.jsx)(Q.Z,{mdDown:!0,children:(0,J.jsx)(I.ZP,{container:!0,justifyContent:"center",children:(0,J.jsx)(I.ZP,{item:!0,xs:11,children:(0,J.jsx)(V.Z,{children:r.map((function(e,r){return(0,J.jsx)("img",{className:t.carouselImg,src:e.src,alt:"screenshot-".concat(r)},"screenshot-".concat(r))}))})})})}),(0,J.jsx)(L.Z,{mt:4,mb:4,variant:"h5",align:"center",children:"Explore My Work"}),(0,J.jsxs)(L.Z,{mb:4,variant:"subtitle2Semi",align:"center",paragraph:!0,children:["Explore my projects, where I\u2019ve implemented robust network security tools for threat detection, and performed penetration testing to safeguard digital infrastructures. Additionally, I\u2019ve developed Android apps focused on user experience and performance, leveraging Flutter and Firebase for secure, scalable solutions.",(0,J.jsx)("br",{}),"My work also includes creating dynamic games with Python, showcasing my ability to craft immersive experiences. Each project highlights my versatility and commitment to excellence in both security and software development, reflecting my dedication to protecting digital environments and building innovative solutions."]}),(0,J.jsx)(W.Z,{variant:"outlined",to:"/docs",children:"See all Projects \u2794"})]})})}))})}}}]);
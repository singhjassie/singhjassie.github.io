"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{14563:function(e,t,o){o.d(t,{Z:function(){return O}});var r=o(1048),n=o(32793),i=o(67294),a=(o(45697),o(86010)),p=o(77463),l=o(41796),s=o(29602),c=o(2734),u=o(89130),m=o(98216),d=o(96514),h=o(14594),f=o(2068),g=o(51705),b=o(27909),T=o(13511),w=o(49299),v=o(21420);function y(e){return(0,v.Z)("MuiTooltip",e)}var Z=(0,o(11271).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),x=o(85893);const R=["arrow","children","classes","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];const M=(0,s.ZP)(h.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((({theme:e,ownerState:t,open:o})=>(0,n.Z)({zIndex:e.zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${Z.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Z.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Z.arrow}`]:(0,n.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Z.arrow}`]:(0,n.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})}))),S=(0,s.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,m.Z)(o.placement.split("-")[0])}`]]}})((({theme:e,ownerState:t})=>{return(0,n.Z)({backgroundColor:(0,l.Fq)(e.palette.grey[700],.92),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:(o=16/14,Math.round(1e5*o)/1e5)+"em",fontWeight:e.typography.fontWeightRegular},{[`.${Z.popper}[data-popper-placement*="left"] &`]:(0,n.Z)({transformOrigin:"right center"},t.isRtl?(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${Z.popper}[data-popper-placement*="right"] &`]:(0,n.Z)({transformOrigin:"left center"},t.isRtl?(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${Z.popper}[data-popper-placement*="top"] &`]:(0,n.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${Z.popper}[data-popper-placement*="bottom"] &`]:(0,n.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})});var o})),C=(0,s.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,l.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let P=!1,L=null;function k(e,t){return o=>{t&&t(o),e(o)}}var O=i.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiTooltip"}),{arrow:l=!1,children:s,describeChild:v=!1,disableFocusListener:Z=!1,disableHoverListener:O=!1,disableInteractive:E=!1,disableTouchListener:F=!1,enterDelay:I=100,enterNextDelay:B=0,enterTouchDelay:D=700,followCursor:N=!1,id:W,leaveDelay:$=0,leaveTouchDelay:A=1500,onClose:j,onOpen:z,open:U,placement:_="bottom",PopperComponent:H=h.Z,PopperProps:q={},title:V,TransitionComponent:X=d.Z,TransitionProps:Y}=o,G=(0,r.Z)(o,R),J=(0,c.Z)(),K="rtl"===J.direction,[Q,ee]=i.useState(),[te,oe]=i.useState(null),re=i.useRef(!1),ne=E||N,ie=i.useRef(),ae=i.useRef(),pe=i.useRef(),le=i.useRef(),[se,ce]=(0,w.Z)({controlled:U,default:!1,name:"Tooltip",state:"open"});let ue=se;const me=(0,b.Z)(W),de=i.useRef(),he=i.useCallback((()=>{void 0!==de.current&&(document.body.style.WebkitUserSelect=de.current,de.current=void 0),clearTimeout(le.current)}),[]);i.useEffect((()=>()=>{clearTimeout(ie.current),clearTimeout(ae.current),clearTimeout(pe.current),he()}),[he]);const fe=e=>{clearTimeout(L),P=!0,ce(!0),z&&!ue&&z(e)},ge=(0,f.Z)((e=>{clearTimeout(L),L=setTimeout((()=>{P=!1}),800+$),ce(!1),j&&ue&&j(e),clearTimeout(ie.current),ie.current=setTimeout((()=>{re.current=!1}),J.transitions.duration.shortest)})),be=e=>{re.current&&"touchstart"!==e.type||(Q&&Q.removeAttribute("title"),clearTimeout(ae.current),clearTimeout(pe.current),I||P&&B?ae.current=setTimeout((()=>{fe(e)}),P?B:I):fe(e))},Te=e=>{clearTimeout(ae.current),clearTimeout(pe.current),pe.current=setTimeout((()=>{ge(e)}),$)},{isFocusVisibleRef:we,onBlur:ve,onFocus:ye,ref:Ze}=(0,T.Z)(),[,xe]=i.useState(!1),Re=e=>{ve(e),!1===we.current&&(xe(!1),Te(e))},Me=e=>{Q||ee(e.currentTarget),ye(e),!0===we.current&&(xe(!0),be(e))},Se=e=>{re.current=!0;const t=s.props;t.onTouchStart&&t.onTouchStart(e)},Ce=be,Pe=Te,Le=e=>{Se(e),clearTimeout(pe.current),clearTimeout(ie.current),he(),de.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",le.current=setTimeout((()=>{document.body.style.WebkitUserSelect=de.current,be(e)}),D)},ke=e=>{s.props.onTouchEnd&&s.props.onTouchEnd(e),he(),clearTimeout(pe.current),pe.current=setTimeout((()=>{ge(e)}),A)};i.useEffect((()=>{if(ue)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||ge(e)}}),[ge,ue]);const Oe=(0,g.Z)(ee,t),Ee=(0,g.Z)(Ze,Oe),Fe=(0,g.Z)(s.ref,Ee);""===V&&(ue=!1);const Ie=i.useRef({x:0,y:0}),Be=i.useRef(),De={},Ne="string"===typeof V;v?(De.title=ue||!Ne||O?null:V,De["aria-describedby"]=ue?me:null):(De["aria-label"]=Ne?V:null,De["aria-labelledby"]=ue&&!Ne?me:null);const We=(0,n.Z)({},De,G,s.props,{className:(0,a.Z)(G.className,s.props.className),onTouchStart:Se,ref:Fe},N?{onMouseMove:e=>{const t=s.props;t.onMouseMove&&t.onMouseMove(e),Ie.current={x:e.clientX,y:e.clientY},Be.current&&Be.current.update()}}:{});const $e={};F||(We.onTouchStart=Le,We.onTouchEnd=ke),O||(We.onMouseOver=k(Ce,We.onMouseOver),We.onMouseLeave=k(Pe,We.onMouseLeave),ne||($e.onMouseOver=Ce,$e.onMouseLeave=Pe)),Z||(We.onFocus=k(Me,We.onFocus),We.onBlur=k(Re,We.onBlur),ne||($e.onFocus=Me,$e.onBlur=Re));const Ae=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(te),options:{element:te,padding:4}}];return null!=(e=q.popperOptions)&&e.modifiers&&(t=t.concat(q.popperOptions.modifiers)),(0,n.Z)({},q.popperOptions,{modifiers:t})}),[te,q]),je=(0,n.Z)({},o,{isRtl:K,arrow:l,disableInteractive:ne,placement:_,PopperComponent:H,touch:re.current}),ze=(e=>{const{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,m.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,p.Z)(a,y,t)})(je);return(0,x.jsxs)(i.Fragment,{children:[i.cloneElement(s,We),(0,x.jsx)(M,(0,n.Z)({as:H,className:ze.popper,placement:_,anchorEl:N?{getBoundingClientRect:()=>({top:Ie.current.y,left:Ie.current.x,right:Ie.current.x,bottom:Ie.current.y,width:0,height:0})}:Q,popperRef:Be,open:!!Q&&ue,id:me,transition:!0},$e,q,{popperOptions:Ae,ownerState:je,children:({TransitionProps:e})=>(0,x.jsx)(X,(0,n.Z)({timeout:J.transitions.duration.shorter},e,Y,{children:(0,x.jsxs)(S,{className:ze.tooltip,ownerState:je,children:[V,l?(0,x.jsx)(C,{className:ze.arrow,ref:oe,ownerState:je}):null]})}))}))]})}))}}]);
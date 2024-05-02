"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{3915:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var a=r(7437),s=r(2265),i=r(8364),n=r(2218),o=r(9354);let l=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.f,{ref:t,className:(0,o.cn)(l(),r),...s})});d.displayName=i.f.displayName;let c=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,a.jsx)("input",{type:s,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});c.displayName="Input";var u=r(1538);let f=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),p=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:n=!1,...l}=e,d=n?u.g7:"button";return(0,a.jsx)(d,{className:(0,o.cn)(f({variant:s,size:i,className:r})),ref:t,...l})});p.displayName="Button";var h=r(1868);let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsxs)(h.fC,{ref:t,className:(0,o.cn)("relative flex w-full touch-none select-none items-center",r),...s,children:[(0,a.jsx)(h.fQ,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:(0,a.jsx)(h.e6,{className:"absolute h-full bg-primary"})}),(0,a.jsx)(h.bU,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]})});m.displayName=h.fC.displayName;var g=r(8068),x=r(5231),b=r(8148),v=r(2842),j=r(9542),y=r(4142),w=r(5475),N=r(153),S=r(6638);let T=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",r),...s})})});T.displayName="Table";let k=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",r),...s})});k.displayName="TableHeader";let A=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",r),...s})});A.displayName="TableBody",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...s})}).displayName="TableFooter";let C=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...s})});C.displayName="TableRow";let R=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("th",{ref:t,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...s})});R.displayName="TableHead";let _=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("td",{ref:t,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...s})});_.displayName="TableCell",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",r),...s})}).displayName="TableCaption";var E=()=>{let{toast:e}=(0,g.pm)(),[t,r]=(0,s.useState)(null),[i,n]=(0,s.useState)([]),[o,l]=(0,s.useState)({speed:0,action:0,proportional:0,integral:0,derivative:0});(0,s.useEffect)(()=>{O()},[]),(0,s.useEffect)(()=>{E()},[]);let u="http://192.168.1.235:8080/rest/lego/",[f,h]=(0,s.useState)([]),E=async()=>{try{let e=await fetch(u+"getRoundTimes?legoSettingId=1");if(e.ok){let t=await e.json();h(t)}else console.error("Failed to fetch round times")}catch(e){console.error("There was a problem with the fetch operation:",e)}},O=async()=>{try{let e=await fetch(u+"getlego");if(e.ok){let t=await e.json();r(t),t&&t.legoSetting?n(t.legoSetting):n([]),t&&t.id&&(console.log(t),l(e=>({...e,speed:t.legoSetting[0].speed,action:t.legoSetting[0].action,proportional:t.legoSetting[0].proportional,integral:t.legoSetting[0].integral,derivative:t.legoSetting[0].derivative})))}}catch(e){console.error("There was a problem with the fetch operation:",e)}},D=async()=>{if(t){let r={action:o.action,speed:o.speed,proportional:o.proportional,integral:o.integral,derivative:o.derivative,lego:{id:t.id}};try{let t=await fetch(u+"setvalues",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});e({title:"NewSettings",description:"Success!"}),O();let a=await t.json();console.log("New settings:",a)}catch(e){console.error("There was a problem with the fetch operation:",e)}}},V=e=>{console.log("asdsdd");let{name:t,value:r}=e.target;l({...o,[t]:r})},F=e=>t=>{l(r=>({...r,[e]:t[0]}))};return(0,a.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-8 text-center",children:"Lego Settings"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold mb-4",children:"Lego Settings"}),i.length>0?i.map((e,t)=>(0,a.jsx)("div",{className:"border-b border-gray-200 pb-4 mb-4 last:border-none last:mb-0",children:(0,a.jsxs)(T,{children:[(0,a.jsx)(k,{children:(0,a.jsxs)(C,{children:[(0,a.jsx)(R,{children:"Id"}),(0,a.jsx)(R,{children:"Speed"}),(0,a.jsx)(R,{children:"Action"}),(0,a.jsx)(R,{children:"PValue"}),(0,a.jsx)(R,{children:"IValue"}),(0,a.jsx)(R,{children:"DValue"}),(0,a.jsx)(R,{children:"Time"})]})}),(0,a.jsx)(A,{children:i.length>0?i.map((e,t)=>(0,a.jsxs)(C,{children:[(0,a.jsx)(_,{children:e.id}),(0,a.jsx)(_,{children:e.speed}),(0,a.jsx)(_,{children:I[e.action]}),(0,a.jsx)(_,{children:e.proportional}),(0,a.jsx)(_,{children:e.integral}),(0,a.jsx)(_,{children:e.derivative}),(0,a.jsx)(_,{children:new Date(e.time).toLocaleString()})]},t)):(0,a.jsx)(C,{children:(0,a.jsx)(_,{colSpan:7,className:"text-center",children:"No settings available"})})})]})},t)):(0,a.jsx)("p",{children:"No settings available"})]}),(0,a.jsx)("div",{className:"bg-white rounded-lg shadow-md p-6",children:(0,a.jsx)(x.h,{width:"100%",height:400,children:(0,a.jsxs)(b.w,{data:f,children:[(0,a.jsx)(v.K,{dataKey:"time"}),(0,a.jsx)(j.B,{}),(0,a.jsx)(y.q,{strokeDasharray:"3 3"}),(0,a.jsx)(w.u,{}),(0,a.jsx)(N.D,{}),(0,a.jsx)(S.x,{type:"monotone",dataKey:"roundNumber",stroke:"#f97315"})]})})})]}),(0,a.jsxs)("div",{className:"mt-8 bg-white rounded-lg shadow-md p-6",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold mb-4",children:"New values"}),(0,a.jsx)("form",{children:(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{htmlFor:"speed",children:"Speed"}),(0,a.jsx)(m,{value:[o.speed],max:3,step:.5,onValueChange:F("speed")}),(0,a.jsx)(c,{id:"speed",type:"text",name:"speed",value:o.speed,onChange:V})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{htmlFor:"proportional",children:"Proportional"}),(0,a.jsx)(m,{value:[o.proportional],max:40,step:1,onValueChange:F("proportional")}),(0,a.jsx)(c,{id:"proportional",type:"text",name:"proportional",value:o.proportional,onChange:V})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{htmlFor:"integral",children:"Integral"}),(0,a.jsx)(m,{value:[o.integral],max:1,step:.001,onValueChange:F("integral")}),(0,a.jsx)(c,{id:"integral",type:"text",name:"integral",value:o.integral,onChange:V})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{htmlFor:"derivative",children:"Derivative"}),(0,a.jsx)(m,{value:[o.derivative],max:40,step:1,onValueChange:F("derivative")}),(0,a.jsx)(c,{id:"derivative",type:"text",name:"derivative",value:o.derivative,onChange:V})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{htmlFor:"action",children:"Action"}),(0,a.jsx)(m,{value:[o.action],max:4,step:1,onValueChange:F("action")}),(0,a.jsx)(c,{disabled:!0,id:"action",type:"text",className:"disabled:opacity-100",name:"action",value:I[o.action]})]}),(0,a.jsx)("div",{className:"mt-8 text-center",children:(0,a.jsx)(p,{type:"button",onClick:D,children:"OK"})})]})})]})]})};let I=["Stop","Forward","Backward","TurnLeft","TurnRight"]},8068:function(e,t,r){r.d(t,{pm:function(){return f}});var a=r(2265);let s=0,i=new Map,n=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?n(r):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=o(d,e),l.forEach(e=>{e(d)})}function u(e){let{...t}=e,r=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=a.useState(d);return a.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},9354:function(e,t,r){r.d(t,{cn:function(){return i}});var a=r(4839),s=r(6164);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}}]);
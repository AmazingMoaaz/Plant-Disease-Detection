(this.webpackJsonpphoto=this.webpackJsonpphoto||[]).push([[0],{59:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(15),s=a.n(i),l=(a(59),a(29)),r=a(4),o=a(87),j=a(88),d=a(89),b=a(105),m=a(90),x=a(91),h=a(92),p=a(85),O=a.p+"static/media/PlantIcon1.eeefa143.png",g=a.p+"static/media/PlantIcon2.0a7c1dcf.png",u=a.p+"static/media/PlantIcon3.62418564.png",f=a.p+"static/media/PlantIcon4.b66f253c.png",C=a.p+"static/media/backgroundImage.b58906be.png",N=a.p+"static/media/logo.5933b895.PNG",y=a(3);const k=Object(p.a)((e=>({appbar:{background:"#009900",boxShadow:"none",color:"white"},grow:{flexGrow:1},title:{flexGrow:1,textAlign:"left",fontWeight:"Open Sans",color:"white"},header:{marginBottom:e.spacing(2),color:"white",textAlign:"center"},buttonContainer:{display:"flex",justifyContent:"center",gap:e.spacing(2)},mainContainer:{backgroundImage:"url(".concat(C,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(4)},plantIcon:{width:150,height:150}})));var w=()=>{const e=k(),t=Object(r.o)(),a=e=>{t("/image-upload/".concat(e))};return Object(y.jsxs)(n.a.Fragment,{children:[Object(y.jsx)(o.a,{position:"static",className:e.appbar,children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(d.a,{className:e.title,variant:"h6",noWrap:!0,children:"Plant Diseases Detection"}),Object(y.jsx)("div",{className:e.grow}),Object(y.jsx)(b.a,{src:N})]})}),Object(y.jsx)(m.a,{maxWidth:"xl",className:e.mainContainer,children:Object(y.jsxs)(x.a,{container:!0,spacing:2,justifyContent:"center",alignItems:"flex-start",className:e.buttonContainer,children:[Object(y.jsx)(x.a,{item:!0,xs:12,className:e.header,children:Object(y.jsx)(d.a,{variant:"h5",children:"Choose Your Plant"})}),Object(y.jsx)(x.a,{item:!0,children:Object(y.jsx)(h.a,{className:e.circularButton,onClick:()=>a("model1"),"aria-label":"model1",children:Object(y.jsx)("img",{src:O,alt:"Model 1",className:e.plantIcon})})}),Object(y.jsx)(x.a,{item:!0,children:Object(y.jsx)(h.a,{className:e.circularButton,onClick:()=>a("model2"),"aria-label":"model2",children:Object(y.jsx)("img",{src:g,alt:"Model 2",className:e.plantIcon})})}),Object(y.jsx)(x.a,{item:!0,children:Object(y.jsx)(h.a,{className:e.circularButton,onClick:()=>a("model3"),"aria-label":"model3",children:Object(y.jsx)("img",{src:u,alt:"Model 3",className:e.plantIcon})})}),Object(y.jsx)(x.a,{item:!0,children:Object(y.jsx)(h.a,{className:e.circularButton,onClick:()=>a("model4"),"aria-label":"model4",children:Object(y.jsx)("img",{src:f,alt:"Model 4",className:e.plantIcon})})})]})})]})},v=a(93),I=a(96),S=a(94),P=a(95),M=a(97),F=a(49),R=a(98),D=a(99),B=a(100),L=a(101),W=a(102),z=a(103),A=a(104),E=a(47),G=a.n(E),T=a(45),U=a.n(T),q=a(46),H=a.n(q),J=a(44),Y=a.n(J);const K=Object(p.a)((e=>({grow:{flexGrow:1},text:{color:"white",textAlign:"center"},appbar:{background:"#009900",boxShadow:"none",color:"white"},mainContainer:{backgroundImage:"url(".concat(C,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",height:"93vh",display:"flex",justifyContent:"center",alignItems:"center"},imageCard:{margin:"auto",maxWidth:400,backgroundColor:"transparent",boxShadow:"0px 9px 70px 0px rgb(0 0 0 / 30%) !important",borderRadius:"15px"},imageCardEmpty:{height:"auto"},content:{display:"flex",flexDirection:"column",alignItems:"center"},input:{display:"none"},detail:{margin:"auto",textAlign:"center"},cardMedia:{maxHeight:300,width:"auto",margin:"0 auto"},resultsContainer:{marginTop:e.spacing(2)}})));var Q=()=>{const e=K(),{selectedModel:t}=Object(r.q)(),a=Object(r.o)(),[i,s]=Object(c.useState)(null),[l,p]=Object(c.useState)(null),[O,g]=Object(c.useState)(!1),[u,f]=Object(c.useState)(null),[C,k]=Object(c.useState)(null),w=Object(c.useRef)(null),E=Object(c.useRef)(null),T=e=>{const a=e.target.files[0];s(a),p(URL.createObjectURL(a)),(async e=>{g(!0),f(null);try{const a=new FormData;a.append("file",e);const c=await fetch("http://192.168.1.6:8000/predict/".concat(t),{method:"POST",body:a});if(!c.ok)throw new Error("Failed to process image. Please try again.");const n=await c.json();k(n)}catch(a){f(a.message)}finally{g(!1)}})(a)};return Object(c.useEffect)((()=>{p(i?URL.createObjectURL(i):null)}),[i]),Object(y.jsxs)(n.a.Fragment,{children:[Object(y.jsx)(o.a,{position:"static",className:e.appbar,children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(h.a,{edge:"start",color:"inherit","aria-label":"back",onClick:()=>a(-1),children:Object(y.jsx)(Y.a,{})}),Object(y.jsx)(d.a,{className:e.text,variant:"h6",noWrap:!0,children:"Plant Diseases Detection"}),Object(y.jsx)("div",{className:e.grow}),Object(y.jsx)(b.a,{src:N})]})}),Object(y.jsx)(m.a,{maxWidth:!1,className:e.mainContainer,disableGutters:!0,children:Object(y.jsx)(x.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:Object(y.jsx)(x.a,{item:!0,xs:12,children:Object(y.jsxs)(v.a,{className:"".concat(e.imageCard," ").concat(l?"":e.imageCardEmpty),children:[l&&Object(y.jsx)(S.a,{children:Object(y.jsx)(P.a,{component:"img",image:l,title:"Uploaded Image",className:e.cardMedia})}),!l&&Object(y.jsx)(I.a,{className:e.content,children:Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px"},children:[Object(y.jsx)(h.a,{onClick:()=>{E.current.setAttribute("capture","environment"),E.current.click()},color:"primary",children:Object(y.jsx)(U.a,{fontSize:"large"})}),Object(y.jsx)("input",{ref:E,type:"file",accept:"image/*",capture:"environment",className:e.input,onChange:T}),Object(y.jsx)("input",{ref:w,type:"file",accept:"image/*",className:e.input,onChange:T}),Object(y.jsx)(h.a,{onClick:()=>w.current.click(),color:"primary",children:Object(y.jsx)(H.a,{fontSize:"large"})})]})}),Object(y.jsxs)("div",{className:e.resultsContainer,children:[C&&Object(y.jsx)(I.a,{className:e.detail,children:Object(y.jsx)(M.a,{component:F.a,children:Object(y.jsxs)(R.a,{size:"small",children:[Object(y.jsx)(D.a,{children:Object(y.jsxs)(B.a,{children:[Object(y.jsx)(L.a,{children:"Label"}),Object(y.jsx)(L.a,{align:"right",children:"Confidence"})]})}),Object(y.jsx)(W.a,{children:Object(y.jsxs)(B.a,{children:[Object(y.jsx)(L.a,{children:C.class}),Object(y.jsxs)(L.a,{align:"right",children:[(100*parseFloat(C.confidence)).toFixed(2),"%"]})]})})]})})}),O&&Object(y.jsxs)(I.a,{className:e.detail,children:[Object(y.jsx)(z.a,{color:"secondary"}),Object(y.jsx)(d.a,{variant:"subtitle1",children:"Processing..."})]}),u&&Object(y.jsx)(I.a,{className:e.detail,children:Object(y.jsx)(d.a,{color:"error",variant:"h6",children:u})}),(C||u)&&Object(y.jsx)(I.a,{className:e.detail,children:Object(y.jsx)(A.a,{variant:"contained",color:"primary",onClick:()=>{s(null),p(null),k(null),f(null)},startIcon:Object(y.jsx)(G.a,{}),children:"Clear"})})]})]})})})})]})};const V=()=>{const{selectedModel:e}=Object(r.q)();return Object(y.jsx)(Q,{selectedModel:e})};var X=function(){return Object(y.jsx)(l.a,{children:Object(y.jsxs)(r.c,{children:[Object(y.jsx)(r.a,{path:"/model-selection",element:Object(y.jsx)(w,{})}),Object(y.jsx)(r.a,{path:"/image-upload/:selectedModel",element:Object(y.jsx)(V,{})}),Object(y.jsx)(r.a,{path:"/",element:Object(y.jsx)(w,{})})," "]})})};var Z=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((t=>{let{getCLS:a,getFID:c,getFCP:n,getLCP:i,getTTFB:s}=t;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(X,{})}),document.getElementById("root")),Z()}},[[64,1,2]]]);
//# sourceMappingURL=main.523b39de.chunk.js.map
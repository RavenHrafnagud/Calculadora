(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],{12:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useCalcular}));var _home_raven_Documentos_Academia_Geek_Curso_Semana_6_Developer_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),temporal="",operador="",almacen="",calculo=0;function useCalcular(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(_home_raven_Documentos_Academia_Geek_Curso_Semana_6_Developer_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),valor=_useState2[0],setValor=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){""===temporal&&(document.getElementById("display").innerHTML=valor)}));var calcular=function calcular(c){0!==calculo&&(temporal=calculo.toString(),calculo=0),"/"===operador&&"-"===c.target.value||"*"===operador&&"-"===c.target.value||"+"===operador&&"-"===c.target.value?(temporal=operador,operador=c.target.value):("-"===operador&&"/"===c.target.value||"-"===operador&&"*"===c.target.value||"-"===operador&&"+"===c.target.value)&&(operador=c.target.value,temporal=""),"ac"===c.target.value?(calculo=0,almacen="",temporal="",operador="",document.getElementById("display").innerHTML=valor,document.getElementById("formula").innerHTML=almacen):"="===c.target.value?(almacen+=temporal,calculo=eval(almacen),document.getElementById("formula").innerHTML=almacen,document.getElementById("display").innerHTML=calculo,almacen="",temporal="",operador=""):0===temporal.length&&"/"===c.target.value||0===temporal.length&&"*"===c.target.value?(document.getElementById("display").innerHTML=c.target.value,document.getElementById("formula").innerHTML=almacen):"+"===c.target.value||"-"===c.target.value||"*"===c.target.value||"/"===c.target.value?"/"!==temporal&&"*"!==temporal&&"-"!==temporal&&"+"!==temporal&&(operador=c.target.value,almacen+=temporal,temporal="",document.getElementById("formula").innerHTML=almacen+operador,document.getElementById("display").innerHTML=c.target.value):temporal.length<24&&(1===temporal.length&&"0"===temporal&&"."!==c.target.value?(temporal=c.target.value,document.getElementById("display").innerHTML=temporal):temporal.includes(".")&&"."===c.target.value||(temporal=temporal+operador+c.target.value,operador="",document.getElementById("display").innerHTML=temporal,document.getElementById("formula").innerHTML=almacen))};return{calcular:calcular}}},21:function(e,n,r){"use strict";r.r(n);var t,a,o,c,l,i,d,u,m,b,_,g,s,j,p,f,O,h,v,w,k,y,x,E,C=r(0),M=r.n(C),T=r(8),D=r.n(T),B=r(2),I=r(3),L=Object(I.a)(t||(t=Object(B.a)(["\n    *{\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n    html{\n        font-size: 62.5%;\n    }\n\n    body{\n        background-color:bisque;\n    }\n"]))),P=I.c.main(a||(a=Object(B.a)(["\n\n    @import 'https://fonts.googleapis.com/css?family=Share+Tech+Mono';\n    @font-face {\n        font-family: 'Digital';\n        src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot');\n        src: url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix')\n        format('embedded-opentype'),\n        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2')\n        format('woff2'),\n        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff')\n        format('woff'),\n        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf')\n        format('truetype'),\n        url('//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7')\n        format('svg');\n    }\n\n\n    background-color:black;\n    display:flex;\n    flex-wrap:wrap;\n    margin:auto;\n    margin-top:10%;\n    width:32rem;\n    border: 0.2rem;\n    border-color:#47476b;\n    border-style:solid;\n"]))),A=I.c.section(o||(o=Object(B.a)(["\n    width:31.5rem;\n    margin-left:auto;\n    margin-right:auto;\n    height:4.9rem;\n    margin-bottom:0.5rem;\n"]))),H=I.c.div(c||(c=Object(B.a)(["\n    width:31.5rem;\n    margin-left:auto;\n    margin-right:auto;\n    height:2rem;\n    font-family: 'Digital';\n    font-size: 2rem;\n    color: orange;\n    text-align: right;\n    vertical-align: text-top;\n    line-height: 2rem;\n"]))),S=I.c.div(l||(l=Object(B.a)(["\n    width:31.5rem;\n    margin-left:auto;\n    margin-right:auto;\n    height:2.9rem;\n    font-size: 2.9rem;\n    font-family: 'Digital';\n    color: white;\n    text-align: right;\n    line-height: 3.5rem;\n"]))),q=I.c.section(i||(i=Object(B.a)(["\n    width:31.5rem;\n    margin-left:auto;\n    margin-right:auto;\n    display:grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n"]))),z=I.c.button(d||(d=Object(B.a)(["\n    height: 6.5rem;\n    /* width: 8rem; */\n    background-color:#4d4d4d;\n    color: white;\n    outline: 0.1rem solid black;\n    border: none;\n    font-family: Share Tech Mono, monospace;\n    font-size: 2rem;\n    cursor: default;\n    &:hover {\n        color: black;\n        outline: 0.05rem solid grey;\n        z-index: 3;\n    }\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n\n    ",";\n"])),(function(e){return e.limpiador&&Object(I.b)(u||(u=Object(B.a)(["\n        background-color:red;\n        grid-column:1/3;\n        grid-row:1;\n    "])))}),(function(e){return e.dividir&&Object(I.b)(m||(m=Object(B.a)(["\n        background-color:gray;\n        grid-column:3;\n        grid-row:1;\n    "])))}),(function(e){return e.multiplo&&Object(I.b)(b||(b=Object(B.a)(["\n        background-color:gray;\n        grid-column:4;\n        grid-row:1;\n    "])))}),(function(e){return e.siete&&Object(I.b)(_||(_=Object(B.a)(["\n        grid-column:1;\n        grid-row:2;\n    "])))}),(function(e){return e.ocho&&Object(I.b)(g||(g=Object(B.a)(["\n        grid-column:2;\n        grid-row:2;\n    "])))}),(function(e){return e.nueve&&Object(I.b)(s||(s=Object(B.a)(["\n        grid-column:3;\n        grid-row:2;\n    "])))}),(function(e){return e.resta&&Object(I.b)(j||(j=Object(B.a)(["\n        background-color:gray;\n        grid-column:4;\n        grid-row:2;\n    "])))}),(function(e){return e.cuatro&&Object(I.b)(p||(p=Object(B.a)(["\n        grid-column:1;\n        grid-row:3;\n    "])))}),(function(e){return e.cinco&&Object(I.b)(f||(f=Object(B.a)(["\n        grid-column:2;\n        grid-row:3;\n    "])))}),(function(e){return e.seis&&Object(I.b)(O||(O=Object(B.a)(["\n        grid-column:3;\n        grid-row:3;\n    "])))}),(function(e){return e.suma&&Object(I.b)(h||(h=Object(B.a)(["\n        background-color:gray;\n        grid-column:4;\n        grid-row:3;\n    "])))}),(function(e){return e.uno&&Object(I.b)(v||(v=Object(B.a)(["\n        grid-column:1;\n        grid-row:4;\n    "])))}),(function(e){return e.dos&&Object(I.b)(w||(w=Object(B.a)(["\n        grid-column:2;\n        grid-row:4;\n    "])))}),(function(e){return e.tres&&Object(I.b)(k||(k=Object(B.a)(["\n        grid-column:3;\n        grid-row:4;\n    "])))}),(function(e){return e.igualdad&&Object(I.b)(y||(y=Object(B.a)(["\n        height: auto;\n        background-color:blue;\n        grid-column:4;\n        grid-row:4/6;\n    "])))}),(function(e){return e.cero&&Object(I.b)(x||(x=Object(B.a)(["\n        grid-column:1/3;\n        grid-row:5;\n    "])))}),(function(e){return e.decimal&&Object(I.b)(E||(E=Object(B.a)(["\n        grid-column:3;\n        grid-row:5;\n    "])))})),K=r(12),R=r(1);var U=function(){var e=Object(K.a)().calcular;return Object(R.jsxs)(P,{children:[Object(R.jsxs)(A,{children:[Object(R.jsx)(H,{id:"formula"}),Object(R.jsx)(S,{id:"display",children:"0"})]}),Object(R.jsxs)(q,{children:[Object(R.jsx)(z,{limpiador:!0,value:"ac",id:"clear",onClick:e,children:"AC"}),Object(R.jsx)(z,{dividir:!0,value:"/",id:"divide",onClick:e,children:"/"}),Object(R.jsx)(z,{multiplo:!0,value:"*",id:"multiply",onClick:e,children:"X"}),Object(R.jsx)(z,{siete:!0,value:"7",id:"seven",onClick:e,children:"7"}),Object(R.jsx)(z,{ocho:!0,value:"8",id:"eight",onClick:e,children:"8"}),Object(R.jsx)(z,{nueve:!0,value:"9",id:"nine",onClick:e,children:"9"}),Object(R.jsx)(z,{resta:!0,value:"-",id:"subtract",onClick:e,children:"-"}),Object(R.jsx)(z,{cuatro:!0,value:"4",id:"four",onClick:e,children:"4"}),Object(R.jsx)(z,{cinco:!0,value:"5",id:"five",onClick:e,children:"5"}),Object(R.jsx)(z,{seis:!0,value:"6",id:"six",onClick:e,children:"6"}),Object(R.jsx)(z,{suma:!0,value:"+",id:"add",onClick:e,children:"+"}),Object(R.jsx)(z,{uno:!0,value:"1",id:"one",onClick:e,children:"1"}),Object(R.jsx)(z,{dos:!0,value:"2",id:"two",onClick:e,children:"2"}),Object(R.jsx)(z,{tres:!0,value:"3",id:"three",onClick:e,children:"3"}),Object(R.jsx)(z,{igualdad:!0,value:"=",id:"equals",onClick:e,children:"="}),Object(R.jsx)(z,{cero:!0,value:"0",id:"zero",onClick:e,children:"0"}),Object(R.jsx)(z,{decimal:!0,value:".",id:"decimal",onClick:e,children:"."})]})]})};D.a.render(Object(R.jsxs)(M.a.StrictMode,{children:[Object(R.jsx)(L,{}),Object(R.jsx)(U,{})]}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8f206e5d.chunk.js.map
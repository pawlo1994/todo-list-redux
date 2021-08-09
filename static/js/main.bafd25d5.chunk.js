(this["webpackJsonptodo-list-redux"]=this["webpackJsonptodo-list-redux"]||[]).push([[0],{44:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var r,c,a,i,o,d,s,u,j,l,b,x,p,h,O,f,m,g,k,z,v=t(0),w=t.n(v),y=t(22),C=t.n(y),D=t(10),S=(t(44),t(35)),T=t(21),P=t(6),U=t(4),F=U.c.form(r||(r=Object(P.a)(["\n    margin: 0 auto;\n    padding: 20px;\n    display: flex;\n\n    @media(max-width: ","px){\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.breakpoint})),L=U.c.button(c||(c=Object(P.a)(["\n    flex-shrink: 0;\n    padding: 10px;\n    background-color: ",";\n    color: #fff;\n    border: none;\n    transition: background-color 0.3s, transform 0.3s;\n\n    &:hover{\n        cursor: pointer;\n        background-color: hsl(180, 100%, 30%);\n        transform: scale(1.1);\n    }\n\n    &:active{\n        outline: 2px solid #000;\n    }\n"])),(function(n){return n.theme.buttonMainColor})),M=U.c.input(a||(a=Object(P.a)(["\n    flex-grow: 1;\n    margin-right: 20px;\n    padding: 10px;\n    border: 1px solid #ccc;\n\n    @media(max-width: ","px){\n        margin: 0 0 10px;\n    }\n"])),(function(n){return n.theme.breakpoint})),I=t(33),N="tasks",H=function(n){return localStorage.setItem(N,JSON.stringify(n))},A=Object(T.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(N))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(I.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),B=A.actions,E=B.addTask,J=B.toggleHideDone,R=B.toggleTaskDone,Z=B.removeTask,q=B.setAllDone,G=B.fetchExampleTasks,K=B.setTasks,W=function(n){return n.tasks},Q=function(n){return W(n).tasks},V=function(n){return W(n).hideDone},X=A.reducer,Y=t(2),$=function(){var n=Object(v.useRef)(null),e=Object(v.useState)(""),t=Object(S.a)(e,2),r=t[0],c=t[1],a=Object(D.b)();return Object(Y.jsxs)(F,{onSubmit:function(e){e.preventDefault(),r.trim()?(a(E({content:r.trim(),done:!1,id:Object(T.c)()})),c(""),n.current.focus()):c("")},children:[Object(Y.jsx)(M,{ref:n,placeholder:"Co jest do zrobienia?",value:r,onChange:function(n){var e=n.target;return c(e.value)},required:!0}),Object(Y.jsx)(L,{children:"Dodaj zadanie"})]})},_=U.c.ul(i||(i=Object(P.a)(["\n    list-style-type: none;\n    margin: 0 auto;\n    padding: 40px 10px 20px;\n"]))),nn=U.c.li(o||(o=Object(P.a)(["\n    padding: 10px 20px;\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    border-bottom: 2px solid #ddd;\n\n    ","\n"])),(function(n){return n.hidden&&Object(U.b)(d||(d=Object(P.a)(["\n        display: none;\n    "])))})),en=U.c.span(s||(s=Object(P.a)(["\n    color: #333;\n    word-break: break-word;\n    padding: 0 5px;\n\n    ","\n"])),(function(n){return n.done&&Object(U.b)(u||(u=Object(P.a)(["\n        text-decoration: line-through;\n    "])))})),tn=U.c.button(j||(j=Object(P.a)(["\n    display: flex;\n    padding: 5px;\n    width: 30px;\n    height: 30px;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    transition: background-color 0.3s;\n\n    ","\n\n    ","\n\n    &:hover{\n        cursor: pointer;\n    }\n\n    &:active{\n        outline: 2px solid #000;\n    }\n"])),(function(n){return n.done&&Object(U.b)(l||(l=Object(P.a)(["\n        background-color: #090;\n        color: #fff;\n\n        &:hover{\n            background-color: #0a0;\n        }\n    "])))}),(function(n){return n.remove&&Object(U.b)(b||(b=Object(P.a)(["\n        background-color: #f00;\n        color: #fff;\n\n        &:hover{\n            background-color: #f60;\n        }\n    "])))})),rn=t(8),cn=t(17),an=U.c.button(x||(x=Object(P.a)(["\n    padding-left: 20px;\n    background-color: transparent;\n    border: none;\n    text-decoration: none;\n    color: ",";\n    transition: color 0.3s;\n\n    @media(max-width:","px){\n        padding-left: 0;\n        padding-bottom: 15px;\n    }\n\n    ","\n\n    &:hover{\n        color: hsl(180, 100%, 35%);\n        cursor: pointer;\n    }\n\n    &:active{\n        color: hsl(180, 100%, 20%);\n    }\n\n    &:disabled{\n        color: #999;\n        cursor: default;\n    }\n"])),(function(n){return n.theme.buttonMainColor}),(function(n){return n.theme.breakpoint}),(function(n){return n.hidden&&Object(U.b)(p||(p=Object(P.a)(["\n        display: none;\n    "])))})),on=Object(U.c)(an)(h||(h=Object(P.a)(["\n    padding: 0;\n    text-decoration: none;\n"]))),dn=function(){var n=Object(rn.h)(),e=new URLSearchParams(n.search).get("szukaj"),t=Object(D.c)((function(n){return function(n,e){var t=Q(n);return e&&""!==e.trim?Q(n).filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),r=Object(D.c)(V),c=Object(D.b)();return Object(Y.jsx)(_,{children:t.map((function(n){return Object(Y.jsxs)(nn,{hidden:r&&n.done,children:[Object(Y.jsx)(tn,{done:!0,onClick:function(){return c(R(n.id))},children:n.done?"\u2714":""}),Object(Y.jsx)(en,{done:n.done,children:Object(Y.jsx)(on,{as:cn.b,to:"/zadania/".concat(n.id),children:n.content})}),Object(Y.jsx)(tn,{remove:!0,onClick:function(){return c(Z(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},sn=U.c.div(O||(O=Object(P.a)(["\n    display: flex;\n    list-style-type: none;\n    padding: 0; \n\n    @media(max-width:","px){\n        flex-direction: column;\n        align-items: center;\n    }\n"])),(function(n){return n.theme.breakpoint})),un=function(){var n=Object(D.c)(Q),e=Object(D.c)(V),t=Object(D.b)();return Object(Y.jsx)(Y.Fragment,{children:n.length>0&&Object(Y.jsxs)(sn,{children:[Object(Y.jsxs)(an,{onClick:function(){return t(J())},children:[e?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(Y.jsx)(an,{disabled:n.every((function(n){return n.done})),onClick:function(){return t(q())},children:"Uko\u0144cz wszystkie"})]})})},jn=U.c.section(f||(f=Object(P.a)(["\n    background-color: #fff;\n    margin: 30px;\n    padding: 0;\n    box-shadow: 0px 0px 2px 2px #ddd;\n"]))),ln=U.c.header(m||(m=Object(P.a)(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px solid #ddd;\n    padding: 0 20px;\n\n    @media(max-width: ","px){\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.breakpoint})),bn={breakpoint:767,buttonMainColor:"teal"},xn=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(Y.jsx)(U.a,{theme:bn,children:Object(Y.jsxs)(jn,{children:[Object(Y.jsxs)(ln,{children:[Object(Y.jsx)("h2",{children:e}),r]}),t]})})},pn=U.c.header(g||(g=Object(P.a)(["\n    margin: 40px 30px 0;\n"]))),hn=function(n){var e=n.title;return Object(Y.jsx)(pn,{children:Object(Y.jsx)("h1",{children:e})})},On=U.c.main(k||(k=Object(P.a)(["\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1024px;\n"]))),fn=function(n){var e=n.children;return Object(Y.jsx)(On,{children:e})},mn=U.c.div(z||(z=Object(P.a)(["\n    padding: 20px;\n    padding-right: 0;\n    display: grid;\n    grid-template-columns: 1fr;\n\n    @media(max-width: ","px)\n    {\n        padding-right: 20px;\n    }\n"])),(function(n){return n.theme.breakpoint})),gn="szukaj",kn=function(){var n=Object(rn.h)(),e=Object(rn.g)(),t=new URLSearchParams(n.search).get(gn);return Object(Y.jsx)(mn,{children:Object(Y.jsx)(M,{placeholder:"Filtruj zadania",value:t||"",onChange:function(t){var r=t.target,c=new URLSearchParams(n.search);""===r.value.trim()?c.delete(gn):c.set(gn,r.value),e.push("".concat(n.pathname,"?").concat(c.toString()))}})})};var zn,vn=function(){var n=Object(D.b)();return Object(Y.jsx)(U.a,{theme:bn,children:Object(Y.jsxs)(fn,{children:[Object(Y.jsx)(hn,{title:"Lista Zada\u0144"}),Object(Y.jsx)(xn,{title:"Dodaj nowe zadanie",body:Object(Y.jsx)($,{}),extraHeaderContent:Object(Y.jsx)(an,{onClick:function(){return n(G())},children:"Pobierz przyk\u0142adowe zadania"})}),Object(Y.jsx)(xn,{title:"Wyszukiwarka",body:Object(Y.jsx)(kn,{})}),Object(Y.jsx)(xn,{title:"Lista zada\u0144",body:Object(Y.jsx)(dn,{}),extraHeaderContent:Object(Y.jsx)(un,{})})]})})},wn=U.c.p(zn||(zn=Object(P.a)(["\n    padding: 0 20px 10px;\n"])));var yn=function(){return Object(Y.jsx)(U.a,{theme:bn,children:Object(Y.jsxs)(fn,{children:[Object(Y.jsx)(hn,{title:"O autorze"}),Object(Y.jsx)(xn,{title:"Pawe\u0142 Suchy",body:Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(wn,{children:["Nazywam si\u0119 ",Object(Y.jsx)("strong",{children:"Pawe\u0142 Suchy"}),", mam 26 lat, mieszkam w Mi\u0119dzyrzeczu Dolnym ko\u0142o Bielska-Bia\u0142ej."]}),Object(Y.jsx)(wn,{children:'Uko\u0144czy\u0142em technikum informatyczne w Zespole Szk\xf3\u0142 "Silesia" w Czechowicach-Dziedzicach jednak p\xf3ki co nie pracuj\u0119 w zawodzie.'}),Object(Y.jsx)(wn,{children:"Aktualnie pracuj\u0119 na produkcji w bran\u017cy Automotive jednak bardzo mocno wierz\u0119 w to, \u017ce po uko\u0144czeniu tego kursu uda mi si\u0119, je\u015bli nie zmieni\u0107 prac\u0119 na sta\u0142e, to chocia\u017c zacz\u0105\u0107 dorabia\u0107 na frontendzie."}),Object(Y.jsx)(wn,{children:"Poza prac\u0105 od prawie 13 lat gram na puzonie a od prawie 12 w M\u0142odzie\u017cowej Orkiestrze D\u0119tej Miejskiego Domu Kultury w Czechowicach-Dziedzicach. Poza t\u0105 orkiestr\u0105 mia\u0142em r\xf3wnie\u017c okazj\u0119 wzi\u0105\u0107 udzia\u0142 w czterech edycjach \u017bywieckiego Suwakowania a tak\u017ce zagra\u0107 dwa koncerty razem z zespo\u0142em Golec uOrkiestra."})]})})]})})};var Cn,Dn,Sn=function(){var n=Object(rn.i)().id,e=Object(D.c)((function(e){return function(n,e){return Q(n).find((function(n){return n.id===e}))}(e,n)}));return Object(Y.jsx)(U.a,{theme:bn,children:Object(Y.jsxs)(fn,{children:[Object(Y.jsx)(hn,{title:"Szczeg\xf3\u0142y zadania"}),Object(Y.jsx)(xn,{title:e?e.content:"Nie znaleziono zadania",body:e?Object(Y.jsxs)(wn,{children:[Object(Y.jsx)("strong",{children:"Uko\u0144czono:"})," ",e.done?"Tak \ud83d\ude01":"Nie \ud83d\ude2a"]}):Object(Y.jsx)(wn,{children:"\ud83e\udd14"})})]})})},Tn="active",Pn=Object(U.c)(cn.c).attrs((function(){return{activeClassName:Tn}}))(Cn||(Cn=Object(P.a)(["\n    color: white;\n    text-decoration: none;\n    padding: 0 20px;\n&.","{\n    font-weight: bold;\n}\n"])),Tn),Un=U.c.nav(Dn||(Dn=Object(P.a)(["\n    display: flex;\n    list-style: none;\n    background-color: teal;\n    padding: 20px;\n    align-items: center;\n    justify-content: center;\n"]))),Fn=function(){return Object(Y.jsxs)(cn.a,{children:[Object(Y.jsx)("nav",{children:Object(Y.jsxs)(Un,{children:[Object(Y.jsx)("li",{children:Object(Y.jsx)(Pn,{to:"/zadania",children:"Zadania"})}),Object(Y.jsx)("li",{children:Object(Y.jsx)(Pn,{to:"/autor",children:"O autorze"})})]})}),Object(Y.jsxs)(rn.d,{children:[Object(Y.jsx)(rn.b,{path:"/zadania/:id",children:Object(Y.jsx)(Sn,{})}),Object(Y.jsx)(rn.b,{path:"/zadania",children:Object(Y.jsx)(vn,{})}),Object(Y.jsx)(rn.b,{path:"/autor",children:Object(Y.jsx)(yn,{})}),Object(Y.jsx)(rn.b,{path:"/",children:Object(Y.jsx)(rn.a,{to:"/zadania"})})]})]})},Ln=t(36),Mn=t(12),In=t.n(Mn),Nn=t(16),Hn=t(34),An=function(){var n=Object(Hn.a)(In.a.mark((function n(){var e;return In.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todo-list-redux/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Bn=In.a.mark(Rn),En=In.a.mark(Zn),Jn=In.a.mark(qn);function Rn(){var n;return In.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Nn.c)(1e3);case 3:return e.next=5,Object(Nn.b)(An);case 5:return n=e.sent,e.next=8,Object(Nn.d)(K(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Nn.b)(alert,"Co\u015b posz\u0142o nie tak!");case 14:case"end":return e.stop()}}),Bn,null,[[0,10]])}function Zn(){var n;return In.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nn.e)(Q);case 2:return n=e.sent,e.next=5,Object(Nn.b)(H,n);case 5:case"end":return e.stop()}}),En)}function qn(){return In.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Nn.g)(G.type,Rn);case 2:return n.next=4,Object(Nn.f)("*",Zn);case 4:case"end":return n.stop()}}),Jn)}var Gn=In.a.mark(Kn);function Kn(){return In.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Nn.a)([qn()]);case 2:case"end":return n.stop()}}),Gn)}var Wn=Object(Ln.a)(),Qn=Object(T.a)({reducer:{tasks:X},middleware:[Wn]});Wn.run(Kn);var Vn=Qn,Xn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),a(n),i(n)}))};C.a.render(Object(Y.jsx)(w.a.StrictMode,{children:Object(Y.jsx)(D.a,{store:Vn,children:Object(Y.jsx)(Fn,{})})}),document.getElementById("root")),Xn()}},[[50,1,2]]]);
//# sourceMappingURL=main.bafd25d5.chunk.js.map
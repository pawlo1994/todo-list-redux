(this["webpackJsonptodo-list-redux"]=this["webpackJsonptodo-list-redux"]||[]).push([[0],{44:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var r,c,a,i,o,s,d,u,j,l,b,x,p,h,O,f,m,k,g,z=t(0),v=t.n(z),w=t(22),y=t.n(w),C=t(10),D=(t(44),t(35)),S=t(21),T=t(7),P=t(4),U=P.c.form(r||(r=Object(T.a)(["\n    margin: 0 auto;\n    padding: 20px;\n    display: flex;\n\n    @media(max-width: ","px){\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.breakpoint})),F=P.c.button(c||(c=Object(T.a)(["\n    flex-shrink: 0;\n    padding: 10px;\n    background-color: ",";\n    color: #fff;\n    border: none;\n    transition: background-color 0.3s, transform 0.3s;\n\n    &:hover{\n        cursor: pointer;\n        background-color: hsl(180, 100%, 30%);\n        transform: scale(1.1);\n    }\n\n    &:active{\n        outline: 2px solid #000;\n    }\n"])),(function(n){return n.theme.buttonMainColor})),L=P.c.input(a||(a=Object(T.a)(["\n    flex-grow: 1;\n    margin-right: 20px;\n    padding: 10px;\n    border: 1px solid #ccc;\n\n    @media(max-width: ","px){\n        margin: 0 0 10px;\n    }\n"])),(function(n){return n.theme.breakpoint})),M=t(33),I="tasks",N=function(n){return localStorage.setItem(I,JSON.stringify(n))},H=Object(S.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(I))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(M.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),A=H.actions,B=A.addTask,E=A.toggleHideDone,J=A.toggleTaskDone,R=A.removeTask,Z=A.setAllDone,q=A.fetchExampleTasks,G=A.setTasks,K=function(n){return n.tasks},W=function(n){return K(n).tasks},Q=function(n){return K(n).hideDone},V=H.reducer,X=t(2),Y=function(){var n=Object(z.useRef)(null),e=Object(z.useState)(""),t=Object(D.a)(e,2),r=t[0],c=t[1],a=Object(C.b)();return Object(X.jsxs)(U,{onSubmit:function(e){e.preventDefault(),r.trim()?(a(B({content:r.trim(),done:!1,id:Object(S.c)()})),c(""),n.current.focus()):c("")},children:[Object(X.jsx)(L,{ref:n,placeholder:"Co jest do zrobienia?",value:r,onChange:function(n){var e=n.target;return c(e.value)},required:!0}),Object(X.jsx)(F,{children:"Dodaj zadanie"})]})},$=P.c.ul(i||(i=Object(T.a)(["\n    list-style-type: none;\n    margin: 0 auto;\n    padding: 40px 10px 20px;\n"]))),_=P.c.li(o||(o=Object(T.a)(["\n    padding: 10px 20px;\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    border-bottom: 2px solid #ddd;\n\n    ","\n"])),(function(n){return n.hidden&&Object(P.b)(s||(s=Object(T.a)(["\n        display: none;\n    "])))})),nn=P.c.span(d||(d=Object(T.a)(["\n    color: #333;\n    word-break: break-word;\n    padding: 0 5px;\n\n    ","\n"])),(function(n){return n.done&&Object(P.b)(u||(u=Object(T.a)(["\n        text-decoration: line-through;\n    "])))})),en=P.c.button(j||(j=Object(T.a)(["\n    display: flex;\n    padding: 5px;\n    width: 30px;\n    height: 30px;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    transition: background-color 0.3s;\n\n    ","\n\n    ","\n\n    &:hover{\n        cursor: pointer;\n    }\n\n    &:active{\n        outline: 2px solid #000;\n    }\n"])),(function(n){return n.done&&Object(P.b)(l||(l=Object(T.a)(["\n        background-color: #090;\n        color: #fff;\n\n        &:hover{\n            background-color: #0a0;\n        }\n    "])))}),(function(n){return n.remove&&Object(P.b)(b||(b=Object(T.a)(["\n        background-color: #f00;\n        color: #fff;\n\n        &:hover{\n            background-color: #f60;\n        }\n    "])))})),tn=t(8),rn=t(17),cn=function(){var n=Object(tn.h)(),e=new URLSearchParams(n.search).get("szukaj"),t=Object(C.c)((function(n){return function(n,e){var t=W(n);return e&&""!==e.trim?W(n).filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),r=Object(C.c)(Q),c=Object(C.b)();return Object(X.jsx)($,{children:t.map((function(n){return Object(X.jsxs)(_,{hidden:r&&n.done,children:[Object(X.jsx)(en,{done:!0,onClick:function(){return c(J(n.id))},children:n.done?"\u2714":""}),Object(X.jsx)(nn,{done:n.done,children:Object(X.jsx)(rn.b,{to:"/zadania/".concat(n.id),children:n.content})}),Object(X.jsx)(en,{remove:!0,onClick:function(){return c(R(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},an=P.c.div(x||(x=Object(T.a)(["\n    display: flex;\n    list-style-type: none;\n    padding: 0; \n\n    @media(max-width:","px){\n        flex-direction: column;\n        align-items: center;\n    }\n"])),(function(n){return n.theme.breakpoint})),on=P.c.button(p||(p=Object(T.a)(["\n    padding-left: 20px;\n    background-color: transparent;\n    border: none;\n    color: ",";\n    transition: color 0.3s;\n\n    @media(max-width:","px){\n        padding-left: 0;\n        padding-bottom: 15px;\n    }\n\n    ","\n\n    &:hover{\n        color: hsl(180, 100%, 35%);\n        cursor: pointer;\n    }\n\n    &:active{\n        color: hsl(180, 100%, 20%);\n    }\n\n    &:disabled{\n        color: #999;\n        cursor: default;\n    }\n"])),(function(n){return n.theme.buttonMainColor}),(function(n){return n.theme.breakpoint}),(function(n){return n.hidden&&Object(P.b)(h||(h=Object(T.a)(["\n        display: none;\n    "])))})),sn=function(){var n=Object(C.c)(W),e=Object(C.c)(Q),t=Object(C.b)();return Object(X.jsx)(X.Fragment,{children:n.length>0&&Object(X.jsxs)(an,{children:[Object(X.jsxs)(on,{onClick:function(){return t(E())},children:[e?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(X.jsx)(on,{disabled:n.every((function(n){return n.done})),onClick:function(){return t(Z())},children:"Uko\u0144cz wszystkie"})]})})},dn=P.c.section(O||(O=Object(T.a)(["\n    background-color: #fff;\n    margin: 30px;\n    padding: 0;\n    box-shadow: 0px 0px 2px 2px #ddd;\n"]))),un=P.c.header(f||(f=Object(T.a)(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px solid #ddd;\n    padding: 0 20px;\n\n    @media(max-width: ","px){\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.breakpoint})),jn={breakpoint:767,buttonMainColor:"teal"},ln=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(X.jsx)(P.a,{theme:jn,children:Object(X.jsxs)(dn,{children:[Object(X.jsxs)(un,{children:[Object(X.jsx)("h2",{children:e}),r]}),t]})})},bn=P.c.header(m||(m=Object(T.a)(["\n    margin: 40px 30px 0;\n"]))),xn=function(n){var e=n.title;return Object(X.jsx)(bn,{children:Object(X.jsx)("h1",{children:e})})},pn=P.c.main(k||(k=Object(T.a)(["\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1024px;\n"]))),hn=function(n){var e=n.children;return Object(X.jsx)(pn,{children:e})},On=P.c.div(g||(g=Object(T.a)(["\n    padding: 20px;\n    padding-right: 0;\n    display: grid;\n    grid-template-columns: 1fr;\n"]))),fn="szukaj",mn=function(){var n=Object(tn.h)(),e=Object(tn.g)(),t=new URLSearchParams(n.search).get(fn);return Object(X.jsx)(On,{children:Object(X.jsx)(L,{placeholder:"Filtruj zadania",value:t||"",onChange:function(t){var r=t.target,c=new URLSearchParams(n.search);""===r.value.trim()?c.delete(fn):c.set(fn,r.value),e.push("".concat(n.pathname,"?").concat(c.toString()))}})})};var kn,gn=function(){var n=Object(C.b)();return Object(X.jsx)(P.a,{theme:jn,children:Object(X.jsxs)(hn,{children:[Object(X.jsx)(xn,{title:"Lista Zada\u0144"}),Object(X.jsx)(ln,{title:"Dodaj nowe zadanie",body:Object(X.jsx)(Y,{}),extraHeaderContent:Object(X.jsx)(on,{onClick:function(){return n(q())},children:"Pobierz przyk\u0142adowe zadania"})}),Object(X.jsx)(ln,{title:"Wyszukiwarka",body:Object(X.jsx)(mn,{})}),Object(X.jsx)(ln,{title:"Lista zada\u0144",body:Object(X.jsx)(cn,{}),extraHeaderContent:Object(X.jsx)(sn,{})})]})})},zn=P.c.p(kn||(kn=Object(T.a)(["\n    padding: 0 20px 10px;\n"])));var vn=function(){return Object(X.jsx)(P.a,{theme:jn,children:Object(X.jsxs)(hn,{children:[Object(X.jsx)(xn,{title:"O autorze"}),Object(X.jsx)(ln,{title:"Pawe\u0142 Suchy",body:Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(zn,{children:["Nazywam si\u0119 ",Object(X.jsx)("strong",{children:"Pawe\u0142 Suchy"}),", mam 26 lat, mieszkam w Mi\u0119dzyrzeczu Dolnym ko\u0142o Bielska-Bia\u0142ej."]}),Object(X.jsx)(zn,{children:'Uko\u0144czy\u0142em technikum infromatyczne w Zespole Szk\xf3\u0142 "Silesia" w Czechowicach-Dziedzicach jednak p\xf3ki co nie pracuj\u0119 w zawodzie.'}),Object(X.jsx)(zn,{children:"Aktualnie pracuj\u0119 na produkcji w bran\u017cy Automotive jednak bardzo mocno wierz\u0119 w to, \u017ce po uko\u0144czeniu tego kursu uda mi si\u0119, je\u015bli nie zmieni\u0107 prac\u0119 na sta\u0142e, to chocia\u017c zacz\u0105\u0107 dorabia\u0107 na frontendzie."}),Object(X.jsx)(zn,{children:"Poza prac\u0105 od prawie 13 lat gram na puzonie a od prawie 12 w M\u0142odzie\u017cowej Orkiestrze D\u0119tej Miejskiego Domu Kultury w Czechowicach-Dziedzicach. Poza t\u0105 orkiestr\u0105 mia\u0142em r\xf3wnie\u017c okazj\u0119 wzi\u0105\u0107 udzia\u0142 w czterech edycjach \u017bywieckiego Suwakowania a tak\u017ce zagra\u0107 dwa koncerty razem z zespo\u0142em Golec uOrkiestra."})]})})]})})};var wn,yn=function(){var n=Object(tn.i)().id,e=Object(C.c)((function(e){return function(n,e){return W(n).find((function(n){return n.id===e}))}(e,n)}));return Object(X.jsx)(P.a,{theme:jn,children:Object(X.jsxs)(hn,{children:[Object(X.jsx)(xn,{title:"Szczeg\xf3\u0142y zadania"}),Object(X.jsx)(ln,{title:e?e.content:"Nie znaleziono zadania",body:Object(X.jsxs)(zn,{children:[Object(X.jsx)("strong",{children:"Uko\u0144czono:"})," ",e.done?"Tak \ud83d\ude01":"Nie \ud83d\ude2a"]})})]})})},Cn="active",Dn=Object(P.c)(rn.c).attrs((function(){return{activeClassName:Cn}}))(wn||(wn=Object(T.a)(["\n&.","{\n    font-weight: bold;\n}\n"])),Cn),Sn=function(){return Object(X.jsxs)(rn.a,{children:[Object(X.jsx)("nav",{children:Object(X.jsxs)("ul",{children:[Object(X.jsx)("li",{children:Object(X.jsx)(Dn,{to:"/zadania",children:"Zadania"})}),Object(X.jsx)("li",{children:Object(X.jsx)(Dn,{to:"/autor",children:"O autorze"})})]})}),Object(X.jsxs)(tn.d,{children:[Object(X.jsx)(tn.b,{path:"/zadania/:id",children:Object(X.jsx)(yn,{})}),Object(X.jsx)(tn.b,{path:"/zadania",children:Object(X.jsx)(gn,{})}),Object(X.jsx)(tn.b,{path:"/autor",children:Object(X.jsx)(vn,{})}),Object(X.jsx)(tn.b,{path:"/",children:Object(X.jsx)(tn.a,{to:"/zadania"})})]})]})},Tn=t(36),Pn=t(12),Un=t.n(Pn),Fn=t(16),Ln=t(34),Mn=function(){var n=Object(Ln.a)(Un.a.mark((function n(){var e;return Un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todo-list-redux/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),In=Un.a.mark(An),Nn=Un.a.mark(Bn),Hn=Un.a.mark(En);function An(){var n;return Un.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Fn.c)(1e3);case 3:return e.next=5,Object(Fn.b)(Mn);case 5:return n=e.sent,e.next=8,Object(Fn.d)(G(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Fn.b)(alert,"Co\u015b posz\u0142o nie tak!");case 14:case"end":return e.stop()}}),In,null,[[0,10]])}function Bn(){var n;return Un.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fn.e)(W);case 2:return n=e.sent,e.next=5,Object(Fn.b)(N,n);case 5:case"end":return e.stop()}}),Nn)}function En(){return Un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Fn.g)(q.type,An);case 2:return n.next=4,Object(Fn.f)("*",Bn);case 4:case"end":return n.stop()}}),Hn)}var Jn=Un.a.mark(Rn);function Rn(){return Un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Fn.a)([En()]);case 2:case"end":return n.stop()}}),Jn)}var Zn=Object(Tn.a)(),qn=Object(S.a)({reducer:{tasks:V},middleware:[Zn]});Zn.run(Rn);var Gn=qn,Kn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),a(n),i(n)}))};y.a.render(Object(X.jsx)(v.a.StrictMode,{children:Object(X.jsx)(C.a,{store:Gn,children:Object(X.jsx)(Sn,{})})}),document.getElementById("root")),Kn()}},[[50,1,2]]]);
//# sourceMappingURL=main.dcc8af20.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[556],{556:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),a=n(689),s=n(87),c="MoviesRender_HomeLink__WdalG",u=n(184),o=function(e){var t=e.films,n=(0,a.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:t.map((function(e){var t=e.title,r=e.id;return(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"".concat(r),state:n,className:c,children:t})},r)}))})})},l=n(791),i="Form_Form__xzXav",m="Form_Input__Ln-gV",h="Form_Btn__vLyLS",f=function(){var e=(0,l.useState)([]),t=(0,r.Z)(e,2),n=t[0],a=t[1],c=(0,l.useState)(null),f=(0,r.Z)(c,2),d=f[0],p=f[1],_=(0,s.lr)(),x=(0,r.Z)(_,2),j=x[0],v=x[1],b=j.get("qurey");return(0,l.useEffect)((function(){b&&fetch("https://api.themoviedb.org/3/search/movie?query=\n".concat(b,"&api_key=487f22e4948534aa04d1bc1da1e0a7b4")).then((function(e){return e.json()})).then((function(e){a(e.results)})).catch((function(e){p(e)}))}),[b]),(0,u.jsxs)(u.Fragment,{children:[d&&(0,u.jsx)("h1",{children:d.message}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;v({qurey:t.elements.qurey.value}),t.reset()},className:i,children:[(0,u.jsx)("input",{className:m,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter movies name",name:"qurey"}),(0,u.jsx)("button",{type:"submit",className:h,children:(0,u.jsx)("span",{className:"button-label",children:"Search"})})]}),(0,u.jsx)(o,{films:n})]})},d=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(f,{})})}}}]);
//# sourceMappingURL=556.c83ba430.chunk.js.map
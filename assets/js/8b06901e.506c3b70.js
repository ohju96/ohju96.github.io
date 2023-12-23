"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[517],{7958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(5893),s=t(1151);const r={sidebar_position:3},o=void 0,d={id:"study/domain-driven-design/\uc720\ube44\ucffc\ud130\uc2a4\uc5b8\uc5b4",title:"\uc720\ube44\ucffc\ud130\uc2a4\uc5b8\uc5b4",description:"\ucf54\ub4dc\uc5d0 \ub3c4\uba54\uc778\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc6a9\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac8c \uc911\uc694\ud558\ub2e4. \uc704 \ucc98\ub7fc STEP \uc2dc\ub9ac\uc988\ub97c \ub098\uc5f4\ud558\ub294 \uac83 \ubcf4\ub2e4 \uc544\ub798\uc640 \uac19\uc774 \uba85\ud655\ud558\uac8c \ud45c\ud604\ud574 \uc8fc\ub294 \uac8c \ub354 \uc88b\ub2e4.",source:"@site/docs/study/domain-driven-design/01-\uc720\ube44\ucffc\ud130\uc2a4\uc5b8\uc5b4.md",sourceDirName:"study/domain-driven-design",slug:"/study/domain-driven-design/\uc720\ube44\ucffc\ud130\uc2a4\uc5b8\uc5b4",permalink:"/docs/study/domain-driven-design/\uc720\ube44\ucffc\ud130\uc2a4\uc5b8\uc5b4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"domain-driven-design",permalink:"/docs/category/domain-driven-design"}},c={},a=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public OrderState {\n\tSTEP1, STEP2, STEP3, ...;\n}\n\npublic OrderState {\n\tPAYMENT_WAITING, PREPARING, SHIPPED, ...;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\ucf54\ub4dc\uc5d0 \ub3c4\uba54\uc778\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc6a9\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac8c \uc911\uc694\ud558\ub2e4. \uc704 \ucc98\ub7fc STEP \uc2dc\ub9ac\uc988\ub97c \ub098\uc5f4\ud558\ub294 \uac83 \ubcf4\ub2e4 \uc544\ub798\uc640 \uac19\uc774 \uba85\ud655\ud558\uac8c \ud45c\ud604\ud574 \uc8fc\ub294 \uac8c \ub354 \uc88b\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\ub3c4\uba54\uc778 \uc8fc\ub3c4 \uc124\uacc4\uc5d0\uc11c \uc5b8\uc5b4\uc758 \uc911\uc694\ud568\uc744 \uac15\uc870\ud558\uae30 \uc704\ud574 \uc720\ube44\ucffc\ud130\uc2a4 \uc5b8\uc5b4\ub77c\ub294 \uc6a9\uc5b4\ub97c \uc0ac\uc6a9\ud55c\ub2e4. \uc774 \uc6a9\uc5b4\ub294 \uc804\ubb38\uac00, \uad00\uacc4\uc790, \uac1c\ubc1c\uc790\uac00 \ub3c4\uba54\uc778\uacfc \uad00\ub828\ub41c \uacf5\ud1b5\uc758 \uc5b8\uc5b4\ub97c \ub9cc\ub4e4\uace0 \uc774\ub97c \ub300\ud654, \ubb38\uc11c, \ub3c4\uba54\uc778 \ubaa8\ub378, \ucf54\ub4dc, \ud14c\uc2a4\ud2b8 \ub4f1 \ubaa8\ub4e0 \uacf3\uc5d0\uc11c \uac19\uc740 \uc6a9\uc5b4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uc720\ube44\ucffc\ud130\uc2a4 \uc5b8\uc5b4\ub97c \ud1b5\ud574 \uc6a9\uc5b4\uc758 \ubaa8\ud638\ud568\uc744 \uc904\uc77c \uc218 \uc788\uace0 \ub3c4\uba54\uc778\uacfc \ucf54\ub4dc\uc5d0\uc11c \ubd88\ud544\uc694\ud55c \ud574\uc11d\uc744 \uc904\uc77c \uc218 \uc788\uac8c \ub41c\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uc5ec\uae30\uc11c \uccb4\ud06c\ud574 \ubd10\uc57c \ud558\ub294 \ubd80\ubd84\uc740 \uc6b0\ub9ac\ub294 \ud55c\uae00\uc744 \uc0ac\uc6a9\ud558\ub294 \ubd80\ubd84\uc778\ub370 \uc601\uc5b4\ub85c \ud574\uc11d\ud558\ub824\ub294 \ub178\ub825\uc774 \ud544\uc694\ud558\ub2e4. \uc54c\ub9de\uc740 \uc601\uc5b4\ub97c \ucc3e\uae30 \uc27d\uc9c0 \uc54a\uc9c0\ub9cc \ucc3e\ub294 \uc2dc\uac04\uc744 \uc544\uae4c\uc6cc \ud558\uc9c0 \uc54a\ub294 \uac8c \uc911\uc694\ud558\ub2e4."})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
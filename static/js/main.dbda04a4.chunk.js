(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[12],{10:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.CHANGE_LAYOUT="@@layout/CHANGE_LAYOUT",e.CHANGE_LAYOUT_WIDTH="@@layout/CHANGE_LAYOUT_WIDTH",e.CHANGE_MENU_POSITIONS="@@layout/CHANGE_MENU_POSITIONS",e.CHANGE_SIDEBAR_THEME="@@layout/CHANGE_SIDEBAR_THEME",e.CHANGE_SIDEBAR_TYPE="@@layout/CHANGE_SIDEBAR_TYPE",e.TOGGLE_SIDEBAR_USER_INFO="@@layout/TOGGLE_SIDEBAR_USER_INFO",e.CHANGE_TOPBAR_THEME="@@layout/CHANGE_TOPBAR_THEME",e.SHOW_RIGHT_SIDEBAR="@@layout/SHOW_RIGHT_SIDEBAR",e.HIDE_RIGHT_SIDEBAR="@@layout/HIDE_RIGHT_SIDEBAR"}(a||(a={}))},102:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),c=n.n(o),i=n(46),u=n(63),s=n(106),l={es:{translation:n(64)}};i.a.use(u.a).use(s.e).init({resources:l,lng:"en",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});i.a;var d=n(3),b=n(30),p=n(12),f=n(15),O=n(14),h=n(1),m=function(e){Object(a.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[]);var t=e.children||null;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(a.Suspense,{fallback:Object(h.jsx)("div",{className:""}),children:t})})},j=n(23),E=n(107),y=n(26),S=n(16),T=n(9),_=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(7)]).then(n.bind(null,961))})),I=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(10)]).then(n.bind(null,976))})),g=r.a.lazy((function(){return n.e(9).then(n.bind(null,934))})),R=r.a.lazy((function(){return Promise.all([n.e(4),n.e(8)]).then(n.bind(null,965))})),L=function(){return Object(h.jsx)("div",{className:""})},A=function(e){var t=e.children,n=Object(f.b)(),r=Object(f.c)((function(e){return{layoutWidth:e.Layout.layoutWidth,menuPosition:e.Layout.menuPosition,leftSideBarTheme:e.Layout.leftSideBarTheme,leftSideBarType:e.Layout.leftSideBarType,showSidebarUserInfo:e.Layout.showSidebarUserInfo,showTwoToneIcons:e.Layout.showTwoToneIcons,topbarTheme:e.Layout.topbarTheme,isOpenRightSideBar:e.Layout.isOpenRightSideBar}})),o=r.layoutWidth,c=r.menuPosition,i=r.leftSideBarTheme,u=r.leftSideBarType,s=r.showSidebarUserInfo,l=r.showTwoToneIcons,d=r.topbarTheme,b=r.isOpenRightSideBar,p=Object(a.useState)(!1),O=Object(j.a)(p,2),m=O[0],A=O[1];Object(a.useEffect)((function(){Object(T.a)("data-layout-mode",S.a.LAYOUT_VERTICAL)}),[]),Object(a.useEffect)((function(){Object(T.a)("data-layout-width",o)}),[n,o]),Object(a.useEffect)((function(){Object(T.a)("data-layout-menu-position",c)}),[c]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-color",i)}),[i]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-size",u)}),[u]),Object(a.useEffect)((function(){Object(T.a)("data-topbar-color",d)}),[d]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-icon",l?"twotones":"")}),[l]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-showuser",s)}),[s]);var v=Object(a.useCallback)((function(){window.innerWidth>768&&window.innerWidth<=1028?n(Object(y.e)(S.d.LEFT_SIDEBAR_TYPE_CONDENSED)):window.innerWidth>1028&&n(Object(y.e)(S.d.LEFT_SIDEBAR_TYPE_DEFAULT))}),[n]);Object(a.useEffect)((function(){return window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}}),[n,v]);var P=u===S.d.LEFT_SIDEBAR_TYPE_CONDENSED;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(a.Suspense,{fallback:L(),children:Object(h.jsx)(_,{openLeftMenuCallBack:function(){A((function(e){return!e})),document.body&&(m?document.body.classList.remove("sidebar-enable"):document.body.classList.add("sidebar-enable"))},hideLogo:!1})}),Object(h.jsx)(a.Suspense,{fallback:L(),children:Object(h.jsx)(I,{isCondensed:P})}),Object(h.jsxs)("div",{className:"content-page",children:[Object(h.jsx)("div",{className:"content",children:Object(h.jsx)(E.a,{fluid:!0,children:Object(h.jsx)(a.Suspense,{fallback:L(),children:t})})}),Object(h.jsx)(a.Suspense,{fallback:L(),children:Object(h.jsx)(g,{})})]})]}),b&&Object(h.jsx)(a.Suspense,{fallback:L(),children:Object(h.jsx)(R,{})})]})},v=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(7)]).then(n.bind(null,961))})),P=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(10)]).then(n.bind(null,976))})),x=r.a.lazy((function(){return n.e(9).then(n.bind(null,934))})),U=r.a.lazy((function(){return Promise.all([n.e(4),n.e(8)]).then(n.bind(null,965))})),w=function(){return Object(h.jsx)("div",{className:"text-center"})},N=function(e){var t=e.children,n=Object(f.b)(),r=Object(a.useState)(!1),o=Object(j.a)(r,2),c=o[0],i=o[1],u=Object(f.c)((function(e){return{layoutWidth:e.Layout.layoutWidth,menuPosition:e.Layout.menuPosition,leftSideBarTheme:e.Layout.leftSideBarTheme,leftSideBarType:e.Layout.leftSideBarType,topbarTheme:e.Layout.topbarTheme,showSidebarUserInfo:e.Layout.showSidebarUserInfo,isOpenRightSideBar:e.Layout.isOpenRightSideBar}})),s=u.layoutWidth,l=u.menuPosition,d=u.leftSideBarTheme,b=u.leftSideBarType,p=u.topbarTheme,O=u.showSidebarUserInfo,m=u.isOpenRightSideBar;Object(a.useEffect)((function(){Object(T.a)("data-layout-mode",S.a.LAYOUT_DETACHED),n(Object(y.n)(!0))}),[n]),Object(a.useEffect)((function(){Object(T.a)("data-layout-width",s)}),[n,s]),Object(a.useEffect)((function(){Object(T.a)("data-layout-menu-position",l)}),[l]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-color",d)}),[d]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-size",b)}),[b]),Object(a.useEffect)((function(){Object(T.a)("data-topbar-color",p)}),[p]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-showuser",O)}),[O]);var _=b===S.d.LEFT_SIDEBAR_TYPE_CONDENSED;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(a.Suspense,{fallback:w(),children:Object(h.jsx)(v,{openLeftMenuCallBack:function(){i((function(e){return!e})),document.body&&(c?document.body.classList.add("sidebar-enable"):document.body.classList.remove("sidebar-enable"))},navCssClasses:"topnav-navbar topnav-navbar-dark",topbarDark:!0})}),Object(h.jsx)(a.Suspense,{fallback:w(),children:Object(h.jsx)(P,{isCondensed:_})}),Object(h.jsxs)("div",{className:"content-page",children:[Object(h.jsx)("div",{className:"content",children:Object(h.jsx)(E.a,{fluid:!0,children:Object(h.jsx)(a.Suspense,{fallback:w(),children:t})})}),Object(h.jsx)(a.Suspense,{fallback:w(),children:Object(h.jsx)(x,{})})]})]}),m&&Object(h.jsx)(a.Suspense,{fallback:w(),children:Object(h.jsx)(U,{})})]})},D=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(7)]).then(n.bind(null,961))})),B=r.a.lazy((function(){return Promise.all([n.e(1),n.e(11),n.e(56)]).then(n.bind(null,977))})),k=r.a.lazy((function(){return n.e(9).then(n.bind(null,934))})),G=r.a.lazy((function(){return Promise.all([n.e(4),n.e(8)]).then(n.bind(null,965))})),C=function(){return Object(h.jsx)("div",{className:"text-center"})},H=function(e){var t=e.children,n=Object(f.b)(),r=Object(a.useState)(!1),o=Object(j.a)(r,2),c=o[0],i=o[1],u=Object(f.c)((function(e){return{layoutWidth:e.Layout.layoutWidth,menuPosition:e.Layout.menuPosition,topbarTheme:e.Layout.topbarTheme,isOpenRightSideBar:e.Layout.isOpenRightSideBar}})),s=u.layoutWidth,l=u.menuPosition,d=u.topbarTheme,b=u.isOpenRightSideBar;Object(a.useEffect)((function(){Object(T.a)("data-layout-mode",O.a.LAYOUT_HORIZONTAL)}),[n]),Object(a.useEffect)((function(){Object(T.a)("data-layout-width",s)}),[s]),Object(a.useEffect)((function(){Object(T.a)("data-layout-menu-position",l)}),[l]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-color",O.d.LEFT_SIDEBAR_THEME_LIGHT)}),[]),Object(a.useEffect)((function(){Object(T.a)("data-topbar-color",d)}),[d]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(a.Suspense,{fallback:C(),children:Object(h.jsx)(D,{openLeftMenuCallBack:function(){i(!c),document.body&&(c?document.body.classList.remove("sidebar-enable"):document.body.classList.add("sidebar-enable"))},topbarDark:!1})}),Object(h.jsx)(a.Suspense,{fallback:C(),children:Object(h.jsx)(B,{isMenuOpened:c})}),Object(h.jsxs)("div",{className:"content-page",children:[Object(h.jsx)("div",{className:"content",children:Object(h.jsx)(E.a,{fluid:!0,children:Object(h.jsx)(a.Suspense,{fallback:C(),children:t})})}),Object(h.jsx)(a.Suspense,{fallback:C(),children:Object(h.jsx)(k,{})}),b&&Object(h.jsx)(a.Suspense,{fallback:C(),children:Object(h.jsx)(G,{})})]})]})})},z=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(7)]).then(n.bind(null,961))})),W=r.a.lazy((function(){return Promise.all([n.e(1),n.e(4),n.e(11),n.e(55)]).then(n.bind(null,971))})),F=r.a.lazy((function(){return n.e(9).then(n.bind(null,934))})),Y=r.a.lazy((function(){return Promise.all([n.e(4),n.e(8)]).then(n.bind(null,965))})),J=function(){return Object(h.jsx)("div",{className:"text-center"})},M=function(e){var t=e.children,n=Object(f.b)(),r=Object(f.c)((function(e){return{layoutWidth:e.Layout.layoutWidth,menuPosition:e.Layout.menuPosition,leftSideBarTheme:e.Layout.leftSideBarTheme,leftSideBarType:e.Layout.leftSideBarType,topbarTheme:e.Layout.topbarTheme,isOpenRightSideBar:e.Layout.isOpenRightSideBar}})),o=r.layoutWidth,c=r.leftSideBarTheme,i=r.isOpenRightSideBar,u=r.topbarTheme,s=r.leftSideBarType,l=Object(a.useState)(!1),d=Object(j.a)(l,2),b=d[0],p=d[1];Object(a.useEffect)((function(){Object(T.a)("data-layout-mode",O.a.LAYOUT_TWO_COLUMN),n(Object(y.f)(O.f.TOPBAR_THEME_LIGHT))}),[n]),Object(a.useEffect)((function(){Object(T.a)("data-layout-width",o)}),[n,o]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-color",c)}),[c]),Object(a.useEffect)((function(){Object(T.a)("data-topbar-color",u)}),[u]),Object(a.useEffect)((function(){Object(T.a)("data-sidebar-size",s)}),[s]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(a.Suspense,{fallback:J(),children:Object(h.jsx)(z,{openLeftMenuCallBack:function(){p((function(e){return!e})),document.body&&(b?document.body.classList.add("sidebar-enable"):document.body.classList.remove("sidebar-enable"))},topbarDark:!0})}),Object(h.jsx)(a.Suspense,{fallback:J(),children:Object(h.jsx)(W,{})}),Object(h.jsxs)("div",{className:"content-page",children:[Object(h.jsx)("div",{className:"content",children:Object(h.jsx)(E.a,{fluid:!0,children:Object(h.jsx)(a.Suspense,{fallback:J(),children:t})})}),Object(h.jsx)(a.Suspense,{fallback:J(),children:Object(h.jsx)(F,{})})]})]}),i&&Object(h.jsx)(a.Suspense,{fallback:J(),children:Object(h.jsx)(Y,{})})]})},V=n(31),X=n(35),Z=n(51),Q=n(50),K=n(67),q=n(11),$=n.n(q),ee={API_URL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL};$.a.defaults.headers.post["Content-Type"]="application/json",$.a.defaults.baseURL=ee.API_URL,$.a.interceptors.response.use((function(e){return e}),(function(e){var t;if(e&&e.response&&404===e.response.status);else{if(!e||!e.response||403!==e.response.status){switch(e.response.status){case 401:t="Invalid credentials";break;case 403:t="Access Forbidden";break;case 404:t="Sorry! the data you are looking for could not be found";break;default:t=e.response&&e.response.data?e.response.data.message:e.message||e}return Promise.reject(t)}window.location.href="/access-denied"}}));var te="shreyu_user",ne=function(e){e?$.a.defaults.headers.common.Authorization="JWT "+e:delete $.a.defaults.headers.common.Authorization},ae=function(){var e=sessionStorage.getItem(te);return e?"object"==typeof e?e:JSON.parse(e):null},re=function e(){var t=this;Object(Q.a)(this,e),this.get=function(e,t){var n;if(t){var a=t?Object.keys(t).map((function(e){return e+"="+t[e]})).join("&"):"";n=$.a.get("".concat(e,"?").concat(a),t)}else n=$.a.get("".concat(e),t);return n},this.getFile=function(e,t){var n;if(t){var a=t?Object.keys(t).map((function(e){return e+"="+t[e]})).join("&"):"";n=$.a.get("".concat(e,"?").concat(a),{responseType:"blob"})}else n=$.a.get("".concat(e),{responseType:"blob"});return n},this.getMultiple=function(e,t){var n=[],a="";t&&(a=t?Object.keys(t).map((function(e){return e+"="+t[e]})).join("&"):"");var r,o=Object(Z.a)(e);try{for(o.s();!(r=o.n()).done;){var c=r.value;n.push($.a.get("".concat(c,"?").concat(a)))}}catch(i){o.e(i)}finally{o.f()}return $.a.all(n)},this.create=function(e,t){return $.a.post(e,t)},this.updatePatch=function(e,t){return $.a.patch(e,t)},this.update=function(e,t){return $.a.put(e,t)},this.delete=function(e){return $.a.delete(e)},this.createWithFile=function(e,t){var n=new FormData;for(var a in t)n.append(a,t[a]);var r={headers:Object(d.a)(Object(d.a)({},$.a.defaults.headers),{},{"content-type":"multipart/form-data"})};return $.a.post(e,n,r)},this.updateWithFile=function(e,t){var n=new FormData;for(var a in t)n.append(a,t[a]);var r={headers:Object(d.a)(Object(d.a)({},$.a.defaults.headers),{},{"content-type":"multipart/form-data"})};return $.a.patch(e,n,r)},this.isUserAuthenticated=function(){var e=t.getLoggedInUser();if(!e)return!1;var n=Object(K.a)(e.token),a=Date.now()/1e3;return!(n.exp<a)||(console.warn("access token expired"),!1)},this.setLoggedInUser=function(e){e?sessionStorage.setItem(te,JSON.stringify(e)):sessionStorage.removeItem(te)},this.getLoggedInUser=function(){return ae()},this.setUserInSession=function(e){var n=sessionStorage.getItem(te);if(n){var a=JSON.parse(n),r=a.token,o=a.user;t.setLoggedInUser(Object(d.a)(Object(d.a)({token:r},o),e))}}},oe=ae();if(oe){var ce=oe.token;ce&&ne(ce)}var ie=function(e){var t=e.component,n=e.roles,a=Object(X.a)(e,["component","roles"]),r=new re;return Object(h.jsx)(p.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){if(!1===r.isUserAuthenticated())return Object(h.jsx)(p.a,{to:{pathname:"/auth/login",state:{from:e.location}}});var a=r.getLoggedInUser();return n&&-1===n.indexOf(a.role)?Object(h.jsx)(p.a,{to:{pathname:"/"}}):Object(h.jsx)(t,Object(d.a)({},e))}}))},ue=function(){var e=!1===(new re).isUserAuthenticated()?"landing":"dashboard/ecommerce";return Object(h.jsx)(p.a,{to:"/".concat(e)})},se=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(5),n.e(35)]).then(n.bind(null,935))})),le=r.a.lazy((function(){return n.e(49).then(n.bind(null,936))})),de=r.a.lazy((function(){return n.e(48).then(n.bind(null,937))})),be=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(5),n.e(34)]).then(n.bind(null,938))})),pe=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(5),n.e(36)]).then(n.bind(null,939))})),fe=r.a.lazy((function(){return Promise.all([n.e(1),n.e(5),n.e(38)]).then(n.bind(null,940))})),Oe=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(39)]).then(n.bind(null,957))})),he=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(16)]).then(n.bind(null,967))})),me=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(37)]).then(n.bind(null,962))})),je=r.a.lazy((function(){return Promise.all([n.e(3),n.e(5),n.e(24),n.e(62)]).then(n.bind(null,970))})),Ee=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(29)]).then(n.bind(null,941))})),ye=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(6),n.e(40)]).then(n.bind(null,966))})),Se=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(5),n.e(20)]).then(n.bind(null,968))})),Te=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(26)]).then(n.bind(null,942))})),_e=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(18)]).then(n.bind(null,972))})),Ie=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(5),n.e(4),n.e(19)]).then(n.bind(null,943))})),ge=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,975))})),Re=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(14)]).then(n.bind(null,959))})),Le=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(27)]).then(n.bind(null,969))})),Ae=r.a.lazy((function(){return n.e(67).then(n.bind(null,978))})),ve=r.a.lazy((function(){return n.e(68).then(n.bind(null,979))})),Pe=r.a.lazy((function(){return n.e(54).then(n.bind(null,944))})),xe=r.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(28)]).then(n.bind(null,964))})),Ue=r.a.lazy((function(){return n.e(45).then(n.bind(null,973))})),we=r.a.lazy((function(){return Promise.all([n.e(51),n.e(58)]).then(n.bind(null,945))})),Ne=r.a.lazy((function(){return n.e(57).then(n.bind(null,980))})),De=r.a.lazy((function(){return Promise.all([n.e(1),n.e(46),n.e(66)]).then(n.bind(null,946))})),Be=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(23)]).then(n.bind(null,958))})),ke=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(15)]).then(n.bind(null,963))})),Ge=r.a.lazy((function(){return Promise.all([n.e(52),n.e(73)]).then(n.bind(null,947))})),Ce=r.a.lazy((function(){return Promise.all([n.e(1),n.e(50),n.e(72)]).then(n.bind(null,981))})),He=r.a.lazy((function(){return Promise.all([n.e(53),n.e(71)]).then(n.bind(null,982))})),ze=r.a.lazy((function(){return Promise.all([n.e(32),n.e(69)]).then(n.bind(null,948))})),We=r.a.lazy((function(){return Promise.all([n.e(21),n.e(59)]).then(n.bind(null,949))})),Fe=r.a.lazy((function(){return Promise.all([n.e(5),n.e(43),n.e(63)]).then(n.bind(null,950))})),Ye=r.a.lazy((function(){return Promise.all([n.e(5),n.e(31),n.e(64)]).then(n.bind(null,951))})),Je=r.a.lazy((function(){return Promise.all([n.e(41),n.e(70)]).then(n.bind(null,983))})),Me=r.a.lazy((function(){return Promise.all([n.e(25),n.e(65)]).then(n.bind(null,952))})),Ve=r.a.lazy((function(){return Promise.all([n.e(42),n.e(60)]).then(n.bind(null,960))})),Xe=r.a.lazy((function(){return Promise.all([n.e(47),n.e(76)]).then(n.bind(null,953))})),Ze=r.a.lazy((function(){return Promise.all([n.e(44),n.e(75)]).then(n.bind(null,974))})),Qe=r.a.lazy((function(){return Promise.all([n.e(30),n.e(74)]).then(n.bind(null,954))})),Ke=r.a.lazy((function(){return Promise.all([n.e(33),n.e(61)]).then(n.bind(null,955))})),qe={path:"/",exact:!0,component:function(){return Object(h.jsx)(ue,{})},route:p.b},$e={path:"/dashboard",name:"Dashboards",icon:"airplay",header:"Navigation",children:[{path:"/dashboard/ecommerce",name:"Ecommerce",component:he,route:ie},{path:"/dashboard/analytics",name:"Analytics",component:me,route:ie}]},et=[{path:"/apps/calendar",name:"Calendar",route:ie,roles:["Admin"],icon:"calendar",component:je,header:"Apps"},{path:"/apps/chat",name:"Chat",route:ie,roles:["Admin"],icon:"message-square",component:Se},{path:"/apps/email",name:"Email",route:ie,roles:["Admin"],icon:"mail",children:[{path:"/apps/email/inbox",name:"Inbox",component:Te,route:ie},{path:"/apps/email/details",name:"Email Details",component:_e,route:ie},{path:"/apps/email/compose",name:"Compose Email",component:Ie,route:ie}]},{path:"/apps/projects",name:"Projects",route:ie,roles:["Admin"],icon:"uil-briefcase",children:[{path:"/apps/projects/list",name:"List",component:Ee,route:ie},{path:"/apps/projects/details",name:"Detail",component:ye,route:ie}]},{path:"/apps/tasks",name:"Tasks",route:ie,roles:["Admin"],icon:"clipboard",children:[{path:"/apps/tasks/list",name:"Task List",component:ge,route:ie},{path:"/apps/tasks/kanban",name:"Kanban",component:Re,route:ie}]},{path:"/apps/file-manager",name:"File Manager",route:ie,roles:["Admin"],icon:"folder-plus",component:Le}],tt={path:"/pages",name:"Pages",icon:"package",header:"Custom",children:[{path:"/pages/starter",name:"Starter",component:Pe,route:ie},{path:"/pages/profile",name:"Profile",component:xe,route:ie},{path:"/pages/activity",name:"Activity",component:Ue,route:ie},{path:"/pages/invoice",name:"Invoice",component:we,route:ie},{path:"/pages/pricing",name:"Pricing",component:De,route:ie}]},nt={path:"/components",name:"Components",icon:"package",header:"UI Elements",children:[{path:"/components/ui-elements",name:"UIElements",component:Be,route:ie},{path:"/components/widgets",name:"Widgets",component:ke,route:ie},{path:"/icons",name:"Icons",children:[{path:"/icons/unicons",name:"Unicons",component:Ge,route:ie},{path:"/icons/feather",name:"Feather",component:Ce,route:ie},{path:"/icons/bootstrap",name:"Bootstrap Icon",component:He,route:ie}]},{path:"/forms",name:"Forms",children:[{path:"/forms/basic",name:"Basic Elements",component:ze,route:ie},{path:"/forms/advanced",name:"Form Advanced",component:We,route:ie},{path:"/forms/validation",name:"Form Validation",component:Fe,route:ie},{path:"/forms/wizard",name:"Form Wizard",component:Ye,route:ie},{path:"/forms/upload",name:"File Upload",component:Je,route:ie},{path:"/forms/editors",name:"Editors",component:Me,route:ie}]},{path:"/components/charts",name:"Charts",component:Ve,route:ie},{path:"/tables",name:"Tables",children:[{path:"/tables/basic",name:"Basic",component:Xe,route:ie},{path:"/tables/advanced",name:"Advanced",component:Ze,route:ie}]},{path:"/maps",name:"Maps",children:[{path:"/maps/googlemaps",name:"Google Maps",component:Qe,route:ie},{path:"/maps/vectorMaps",name:"Google Maps",component:Ke,route:ie}]}]},at=[{path:"/auth/login",name:"Login",component:se,route:p.b},{path:"/auth/register",name:"Register",component:pe,route:p.b},{path:"/auth/confirm",name:"Confirm",component:de,route:p.b},{path:"/auth/forget-password",name:"Forget Password",component:be,route:p.b},{path:"/auth/lock-screen",name:"Lock Screen",component:fe,route:p.b},{path:"/auth/logout",name:"Logout",component:le,route:p.b}],rt=[{path:"/landing",name:"landing",component:Oe,route:p.b},{path:"/maintenance",name:"Maintenance",component:Ne,route:p.b},{path:"/error-404",name:"Error - 404",component:Ae,route:p.b},{path:"/error-500",name:"Error - 500",component:ve,route:p.b}],ot=function e(t){var n=[];return(t=t||[]).forEach((function(t){n.push(t),"undefined"!==typeof t.children&&(n=[].concat(Object(V.a)(n),Object(V.a)(e(t.children))))})),n},ct=[qe,$e].concat(et,[tt,nt]),it=[].concat(at,rt),ut=ot(Object(V.a)(ct)),st=ot(Object(V.a)(it)),lt=function(e){var t=Object(f.c)((function(e){return{layout:e.Layout}})).layout,n=function(){var e=M;switch(t.layoutType){case O.a.LAYOUT_HORIZONTAL:e=H;break;case O.a.LAYOUT_DETACHED:e=N;break;case O.a.LAYOUT_VERTICAL:e=A;break;default:e=M}return e}();return Object(h.jsx)(b.a,{children:Object(h.jsxs)(p.d,{children:[Object(h.jsx)(p.b,{path:st.map((function(e){return e.path})),children:Object(h.jsx)(m,Object(d.a)(Object(d.a)({},e),{},{layout:t,children:Object(h.jsx)(p.d,{children:st.map((function(e,t){return!e.children&&Object(h.jsx)(e.route,{path:e.path,roles:e.roles,exact:e.exact,component:e.component},t)}))})}))}),Object(h.jsx)(p.b,{path:ut.map((function(e){return e.path})),children:Object(h.jsx)(n,Object(d.a)(Object(d.a)({},e),{},{children:Object(h.jsx)(p.d,{children:ut.map((function(e,t){return!e.children&&Object(h.jsx)(e.route,{path:e.path,roles:e.roles,exact:e.exact,component:e.component},t)}))})}))})]})})},dt=n(69),bt=new(n.n(dt).a)($.a);var pt=new re;function ft(e){return pt.create("".concat("/login/"),e)}function Ot(){return pt.create("".concat("/logout/"),{})}function ht(e){return pt.create("".concat("/register/"),e)}function mt(e){return pt.create("".concat("/forget-password/"),e)}n(102);!function(){var e=[{id:1,email:"shreyu@coderthemes.com",username:"test",password:"test",firstName:"Test",lastName:"User",role:"Admin",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI"}];bt.onPost("/login/").reply((function(t){return new Promise((function(n,a){setTimeout((function(){var a=JSON.parse(t.data),r=e.filter((function(e){return e.email===a.email&&e.password===a.password}));if(r.length){var o=r[0];n([200,o])}else n([401,{message:"Username or password is incorrect"}])}),1e3)}))})),bt.onPost("/register/").reply((function(t){return new Promise((function(n,a){setTimeout((function(){var a=JSON.parse(t.data),r=a.fullname.split(" "),o=Object(j.a)(r,2),c=o[0],i=o[1],u={id:e.length+1,username:c,password:a.password,firstName:c,lastName:i,role:"Admin",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI"};e.push(u),n([200,u])}),1e3)}))})),bt.onPost("/forget-password/").reply((function(t){return new Promise((function(n,a){setTimeout((function(){var a=JSON.parse(t.data);if(e.filter((function(e){return e.email===a.email})).length){n([200,{message:"We've sent you a link to reset password to your registered email."}])}else n([401,{message:"Sorry, we could not find any registered user with entered username"}])}),1e3)}))}))}();var jt=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(lt,{})})},Et=function(e){e&&e instanceof Function&&n.e(77).then(n.bind(null,956)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},yt=n(25),St=n(70),Tt=n(6),_t={user:(new re).getLoggedInUser(),loading:!1},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Tt.a.API_RESPONSE_SUCCESS:switch(t.payload.actionType){case Tt.a.LOGIN_USER:return Object(d.a)(Object(d.a)({},e),{},{user:t.payload.data,userLoggedIn:!0,loading:!1});case Tt.a.SIGNUP_USER:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,userSignUp:!0});case Tt.a.LOGOUT_USER:return Object(d.a)(Object(d.a)({},e),{},{user:null,loading:!1,userLogout:!0,userLoggedIn:!1});case Tt.a.FORGOT_PASSWORD:return Object(d.a)(Object(d.a)({},e),{},{resetPasswordSuccess:t.payload.data,loading:!1,passwordReset:!0});default:return Object(d.a)({},e)}case Tt.a.API_RESPONSE_ERROR:switch(t.payload.actionType){case Tt.a.LOGIN_USER:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload.error,userLoggedIn:!1,loading:!1});case Tt.a.SIGNUP_USER:return Object(d.a)(Object(d.a)({},e),{},{registerError:t.payload.error,userSignUp:!1,loading:!1});case Tt.a.FORGOT_PASSWORD:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload.error,loading:!1,passwordReset:!1});default:return Object(d.a)({},e)}case Tt.a.LOGIN_USER:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,userLoggedIn:!1});case Tt.a.LOGOUT_USER:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,userLogout:!1});case Tt.a.RESET:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:!1,userSignUp:!1,userLoggedIn:!1,passwordReset:!1,passwordChange:!1,resetPasswordSuccess:null});default:return Object(d.a)({},e)}},gt=n(10),Rt={layoutType:O.a.LAYOUT_VERTICAL,layoutWidth:O.b.LAYOUT_WIDTH_FLUID,menuPosition:O.c.MENU_POSITION_FIXED,leftSideBarTheme:O.d.LEFT_SIDEBAR_THEME_LIGHT,leftSideBarType:O.e.LEFT_SIDEBAR_TYPE_DEFAULT,showSidebarUserInfo:!1,topbarTheme:O.f.TOPBAR_THEME_LIGHT,isOpenRightSideBar:!1},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case gt.a.CHANGE_LAYOUT:return Object(d.a)(Object(d.a)({},e),{},{layoutType:t.payload});case gt.a.CHANGE_LAYOUT_WIDTH:var n=Object(T.b)(t.payload&&t.payload);return Object(d.a)(Object(d.a)({},e),{},{layoutWidth:t.payload},n);case gt.a.CHANGE_MENU_POSITIONS:return Object(d.a)(Object(d.a)({},e),{},{menuPosition:t.payload});case gt.a.CHANGE_SIDEBAR_THEME:return Object(d.a)(Object(d.a)({},e),{},{leftSideBarTheme:t.payload});case gt.a.CHANGE_SIDEBAR_TYPE:return Object(d.a)(Object(d.a)({},e),{},{leftSideBarType:t.payload});case gt.a.TOGGLE_SIDEBAR_USER_INFO:return Object(d.a)(Object(d.a)({},e),{},{showSidebarUserInfo:t.payload});case gt.a.CHANGE_TOPBAR_THEME:return Object(d.a)(Object(d.a)({},e),{},{topbarTheme:t.payload});case gt.a.SHOW_RIGHT_SIDEBAR:return Object(d.a)(Object(d.a)({},e),{},{isOpenRightSideBar:!0});case gt.a.HIDE_RIGHT_SIDEBAR:return Object(d.a)(Object(d.a)({},e),{},{isOpenRightSideBar:!1});default:return e}},At=Object(yt.c)({Auth:It,Layout:Lt}),vt=n(7),Pt=n.n(vt),xt=n(8),Ut=n(22),wt=Pt.a.mark(Ft),Nt=Pt.a.mark(Yt),Dt=Pt.a.mark(Jt),Bt=Pt.a.mark(Mt),kt=Pt.a.mark(Vt),Gt=Pt.a.mark(Xt),Ct=Pt.a.mark(Zt),Ht=Pt.a.mark(Qt),zt=Pt.a.mark(Kt),Wt=new re;function Ft(e){var t,n,a,r,o;return Pt.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.email,a=t.password,e.type,c.prev=1,c.next=4,Object(xt.b)(ft,{email:n,password:a});case 4:return r=c.sent,o=r.data,Wt.setLoggedInUser(o),ne(o.token),c.next=10,Object(xt.d)(Object(Ut.b)(Tt.a.LOGIN_USER,o));case 10:c.next=18;break;case 12:return c.prev=12,c.t0=c.catch(1),c.next=16,Object(xt.d)(Object(Ut.a)(Tt.a.LOGIN_USER,c.t0));case 16:Wt.setLoggedInUser(null),ne(null);case 18:case"end":return c.stop()}}),wt,null,[[1,12]])}function Yt(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(xt.b)(Ot);case 3:return Wt.setLoggedInUser(null),ne(null),e.next=7,Object(xt.d)(Object(Ut.b)(Tt.a.LOGOUT_USER,{}));case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Object(xt.d)(Object(Ut.a)(Tt.a.LOGOUT_USER,e.t0));case 13:case"end":return e.stop()}}),Nt,null,[[0,9]])}function Jt(e){var t,n,a,r,o,c;return Pt.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.fullname,a=t.email,r=t.password,i.prev=1,i.next=4,Object(xt.b)(ht,{fullname:n,email:a,password:r});case 4:return o=i.sent,c=o.data,i.next=8,Object(xt.d)(Object(Ut.b)(Tt.a.SIGNUP_USER,c));case 8:i.next=16;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(xt.d)(Object(Ut.a)(Tt.a.SIGNUP_USER,i.t0));case 14:Wt.setLoggedInUser(null),ne(null);case 16:case"end":return i.stop()}}),Dt,null,[[1,10]])}function Mt(e){var t,n;return Pt.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.email,a.prev=1,a.next=4,Object(xt.b)(mt,{email:t});case 4:return n=a.sent,a.next=7,Object(xt.d)(Object(Ut.b)(Tt.a.FORGOT_PASSWORD,n.data));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(xt.d)(Object(Ut.a)(Tt.a.FORGOT_PASSWORD,a.t0));case 13:case"end":return a.stop()}}),Bt,null,[[1,9]])}function Vt(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.e)(Tt.a.LOGIN_USER,Ft);case 2:case"end":return e.stop()}}),kt)}function Xt(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.e)(Tt.a.LOGOUT_USER,Yt);case 2:case"end":return e.stop()}}),Gt)}function Zt(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.e)(Tt.a.SIGNUP_USER,Jt);case 2:case"end":return e.stop()}}),Ct)}function Qt(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.e)(Tt.a.FORGOT_PASSWORD,Mt);case 2:case"end":return e.stop()}}),Ht)}function Kt(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.c)(Vt),Object(xt.c)(Xt),Object(xt.c)(Zt),Object(xt.c)(Qt)]);case 2:case"end":return e.stop()}}),zt)}var qt=Kt,$t=Pt.a.mark(on),en=Pt.a.mark(cn),tn=Pt.a.mark(un),nn=Pt.a.mark(sn),an=Pt.a.mark(ln);function rn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toggle";switch(t){case"add":document.body&&document.body.classList.add(e);break;case"remove":document.body&&document.body.classList.remove(e);break;default:document.body&&document.body.classList.toggle(e)}return!0}function on(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(xt.b)(rn,"right-bar-enabled","add");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),$t,null,[[0,5]])}function cn(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(xt.b)(rn,"right-bar-enabled","remove");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),en,null,[[0,5]])}function un(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.e)(gt.a.SHOW_RIGHT_SIDEBAR,on);case 2:case"end":return e.stop()}}),tn)}function sn(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.e)(gt.a.HIDE_RIGHT_SIDEBAR,cn);case 2:case"end":return e.stop()}}),nn)}function ln(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.c)(un),Object(xt.c)(sn)]);case 2:case"end":return e.stop()}}),an)}var dn=ln,bn=Pt.a.mark(pn);function pn(){return Pt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([qt(),dn()]);case 2:case"end":return e.stop()}}),bn)}var fn=Object(St.a)(),On=[fn];c.a.render(Object(h.jsx)(f.a,{store:function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||yt.d,n=Object(yt.e)(At,e,t(yt.a.apply(void 0,On)));return fn.run(pn),n,n}({}),children:Object(h.jsx)(jt,{})}),document.getElementById("root")),Et()},14:function(e,t,n){"use strict";var a,r,o,c,i,u;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return u})),function(e){e.LAYOUT_VERTICAL="vertical",e.LAYOUT_HORIZONTAL="horizontal",e.LAYOUT_DETACHED="detached",e.LAYOUT_TWO_COLUMN="two-column"}(a||(a={})),function(e){e.LAYOUT_WIDTH_FLUID="fluid",e.LAYOUT_WIDTH_BOXED="boxed"}(r||(r={})),function(e){e.MENU_POSITION_FIXED="fixed",e.MENU_POSITION_SCROLLABLE="scrollable"}(o||(o={})),function(e){e.LEFT_SIDEBAR_THEME_LIGHT="light",e.LEFT_SIDEBAR_THEME_DARK="dark"}(c||(c={})),function(e){e.LEFT_SIDEBAR_TYPE_DEFAULT="default",e.LEFT_SIDEBAR_TYPE_CONDENSED="condensed",e.LEFT_SIDEBAR_TYPE_COMPACT="compact"}(i||(i={})),function(e){e.TOPBAR_THEME_LIGHT="light",e.TOPBAR_THEME_DARK="dark"}(u||(u={}))},16:function(e,t,n){"use strict";var a=n(14);n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return a.b})),n.d(t,"c",(function(){return a.d})),n.d(t,"d",(function(){return a.e}))},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return l}));var a=n(6),r=function(e,t){return{type:a.a.API_RESPONSE_SUCCESS,payload:{actionType:e,data:t}}},o=function(e,t){return{type:a.a.API_RESPONSE_ERROR,payload:{actionType:e,error:t}}},c=function(e,t){return{type:a.a.LOGIN_USER,payload:{email:e,password:t}}},i=function(){return{type:a.a.LOGOUT_USER,payload:{}}},u=function(e,t,n){return{type:a.a.SIGNUP_USER,payload:{fullname:e,email:t,password:n}}},s=function(e){return{type:a.a.FORGOT_PASSWORD,payload:{email:e}}},l=function(){return{type:a.a.RESET,payload:{}}}},26:function(e,t,n){"use strict";n.d(t,"i",(function(){return a.d})),n.d(t,"j",(function(){return a.e})),n.d(t,"m",(function(){return a.g})),n.d(t,"g",(function(){return a.c})),n.d(t,"k",(function(){return a.f})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"n",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"l",(function(){return b})),n.d(t,"h",(function(){return p}));var a=n(22),r=n(10),o=function(e){return{type:r.a.CHANGE_LAYOUT,payload:e}},c=function(e){return{type:r.a.CHANGE_LAYOUT_WIDTH,payload:e}},i=function(e){return{type:r.a.CHANGE_MENU_POSITIONS,payload:e}},u=function(e){return{type:r.a.CHANGE_SIDEBAR_THEME,payload:e}},s=function(e){return{type:r.a.CHANGE_SIDEBAR_TYPE,payload:e}},l=function(e){return{type:r.a.TOGGLE_SIDEBAR_USER_INFO,payload:e}},d=function(e){return{type:r.a.CHANGE_TOPBAR_THEME,payload:e}},b=function(){return{type:r.a.SHOW_RIGHT_SIDEBAR}},p=function(){return{type:r.a.HIDE_RIGHT_SIDEBAR}}},6:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.API_RESPONSE_SUCCESS="@@auth/API_RESPONSE_SUCCESS",e.API_RESPONSE_ERROR="@@auth/API_RESPONSE_ERROR",e.LOGIN_USER="@@auth/LOGIN_USER",e.LOGOUT_USER="@@auth/LOGOUT_USER",e.SIGNUP_USER="@@auth/SIGNUP_USER",e.FORGOT_PASSWORD="@@auth/FORGOT_PASSWORD",e.FORGOT_PASSWORD_CHANGE="@@auth/FORGOT_PASSWORD_CHANGE",e.RESET="@@auth/RESET"}(a||(a={}))},64:function(e){e.exports=JSON.parse('{"Log In":"Logga in","Don\'t have an account?":"\xbfNo tienes una cuenta?","Sign Up":"Bli Medlem","Success":"\xc9xito","Enter your email address and we\'ll send you an email with instructions to reset your password.":"Ingrese su direcci\xf3n de correo electr\xf3nico y le enviaremos un correo electr\xf3nico con instrucciones para restablecer su contrase\xf1a.","Welcome back!":"\xa1Bienvenido de nuevo!","Email Address":"Direcci\xf3n de correo electr\xf3nico","Username":"Nombre de usuario","Password":"Contrase\xf1a","Name":"Nombre","Your full name":"Tu nombre completo","Enter your Password":"Ingresa tu contrase\xf1a","Sign in with":"inicia sesi\xf3n con","Forgot your password?":"\xbfOlvidaste tu contrase\xf1a?","See you again !":"Hasta luego !","Remember me":"Recu\xe9rdame","With Google":"Con Google","With Facebook":"Con facebook","You are now successfully sign out.":"Ahora ha salido correctamente.","Back to":"De regreso","Sign In":"Iniciar sesi\xf3n","Sign up using":"Reg\xedstrate usando","Already have account?":"\xbfYa tienes cuenta?","Log in":"acceso","Login":"Acceso","Reset Password":"Restablecer la contrase\xf1a","Submit":"Enviar","I simply love it!":"\xa1Simplemente me encanta!","It\'s a elegent templete. I love it very much!":"Es una plantilla elegante. \xa1Yo la amo mucho!","Admin User":"Usuario administradora","Create your account":"Crea tu cuenta","Create a free account and start using Shreyu":"Cree una cuenta gratuita y comience a usar Shreyu","I accept Terms and Conditions":"Acepto los t\xe9rminos y condiciones"}')},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=function(e,t){var n={};return e.forEach((function(e){var a=JSON.stringify(t(e));n[a]=n[a]||[],n[a].push(e)})),Object.keys(n).map((function(e){return n[e]}))},r=function(e,t){return Array(Math.ceil(e.length/t)).fill(1).map((function(e,n){return n*t})).map((function(n){return e.slice(n,n+t)}))},o=n(16),c=function(e){var t={leftSideBarType:o.d.LEFT_SIDEBAR_TYPE_DEFAULT};switch(e){case o.b.LAYOUT_WIDTH_FLUID:t.leftSideBarType=o.d.LEFT_SIDEBAR_TYPE_DEFAULT;break;case o.b.LAYOUT_WIDTH_BOXED:t.leftSideBarType=o.d.LEFT_SIDEBAR_TYPE_CONDENSED;break;default:return t}return t},i=function(e,t){document.body&&document.body.setAttribute(e,t)}}},[[104,13,22]]]);
//# sourceMappingURL=main.dbda04a4.chunk.js.map
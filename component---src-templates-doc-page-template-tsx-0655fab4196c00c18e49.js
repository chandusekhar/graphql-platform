(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+7hJ":function(e,t,n){var i=n("REpN"),o=n("Bgjm"),r=n("34EK"),a=n("i18P"),c=n("krUJ"),l=n("E9J1"),u=l.get,s=l.enforce,p=String(String).split("String");(e.exports=function(e,t,n,c){var l=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||r(n,"name")||o(n,"name",t),s(n).source=p.join("string"==typeof t?t:"")),e!==i?(l?!d&&e[t]&&(u=!0):delete e[t],u?e[t]=n:o(e,t,n)):u?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},"/TCF":function(e,t,n){var i=n("REpN"),o=n("krUJ"),r=i.WeakMap;e.exports="function"==typeof r&&/native code/.test(o(r))},"0dIN":function(e,t,n){var i=n("gQbX"),o=Math.max,r=Math.min;e.exports=function(e,t){var n=i(e);return n<0?o(n+t,0):r(n,t)}},"17+C":function(e,t,n){var i=n("4jnk");e.exports=function(e){return Object(i(e))}},"1RYp":function(e,t,n){var i=n("QU3x"),o=n("FlY1");e.exports=Object.keys||function(e){return i(e,o)}},"34EK":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},"46f4":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"48MS":function(e,t,n){var i=n("bmrq");e.exports=Array.isArray||function(e){return"Array"==i(e)}},"4jnk":function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},"6Zah":function(e,t,n){"use strict";var i={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,r=o&&!i.call({1:2},1);t.f=r?function(e){var t=o(this,e);return!!t&&t.enumerable}:i},"6cYJ":function(e,t,n){var i=n("34EK"),o=n("SWhb"),r=n("GoW4"),a=n("jekk");e.exports=function(e,t){for(var n=o(t),c=a.f,l=r.f,u=0;u<n.length;u++){var s=n[u];i(e,s)||c(e,s,l(t,s))}}},"86Yh":function(e,t,n){var i=n("ckLD"),o=n("48MS"),r=n("QD2z")("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?i(n)&&null===(n=n[r])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"8deY":function(e,t,n){var i=n("lSYd"),o=n("ij4R");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:i?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"8mzz":function(e,t,n){var i=n("JhOX"),o=n("bmrq"),r="".split;e.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?r.call(e,""):Object(e)}:Object},AAQS:function(e,t,n){"use strict";var i=n("48MS"),o=n("WD+B"),r=n("ehR5"),a=function(e,t,n,c,l,u,s,p){for(var d,f=l,m=0,g=!!s&&r(s,p,3);m<c;){if(m in n){if(d=g?g(n[m],m,t):n[m],u>0&&i(d))f=a(e,t,d,o(d.length),f,u-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=d}f++}m++}return f};e.exports=a},AIgE:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),r=n("BBkP"),a=n("CMDK"),c=n("A2+M"),l=n("/MKj"),u=n("vOnD"),s=n("t+sS"),p=n.n(s),d=n("NmUf"),f=n.n(d),m=n("zZ/w"),g=n("mcIw"),h=n("C3u5"),v=(n("aFQa"),n("fLR6")),x=(n("XvpG"),n("Z2vj"),n("KQm4")),y=n("Wbzz"),b=n("MUpH");function w(){var e=Object(b.a)(["\n  body {\n    overflow-y: ",";\n\n    @media only screen and (min-width: 600px) {\n      overflow-y: initial;\n    }\n  }\n"]);return w=function(){return e},e}var E=u.c.div.withConfig({displayName:"doc-page-elements__MostProminentSection",componentId:"sc-1y7nogp-0"})([""]),j="\n  max-height: 90vh;\n  display: block;\n  align-self: start;\n  position: sticky;\n  top: 0;\n  overflow-y: auto;\n  z-index: 25;\n\n  "+Object(m.g)("\n    max-height: none;\n    width: 350px;\n  ")+"\n\n  "+Object(m.d)("\n    width: 100%;\n  ")+"\n",O=Object(u.a)(w(),(function(e){return e.disableScrolling?"hidden":"initial"})),C=function(e){var t,n=e.data,r=Object(l.useDispatch)(),a=Object(i.useState)(),c=a[0],u=a[1],s=Object(i.useState)([]),p=s[0],d=s[1],f=Object(l.useSelector)((function(e){return e.common.yScrollPosition})),m=Object(i.useCallback)((function(){r(Object(g.b)())}),[]);Object(i.useEffect)((function(){var e,t=(null!==(e=n.tableOfContents.items)&&void 0!==e?e:[]).flatMap((function(e){var t;return[e].concat(Object(x.a)(null!==(t=e.items)&&void 0!==t?t:[]))})).map((function(e){var t,n;return{id:e.url,position:(null!==(t=null===(n=document.getElementById(e.url.substring(1)))||void 0===n?void 0:n.offsetTop)&&void 0!==t?t:80)-80}})).reverse();d(t)}),[n]),Object(i.useEffect)((function(){var e,t=null===(e=p.find((function(e){return f>=e.position})))||void 0===e?void 0:e.id;window.history.pushState(void 0,null!=t?t:"ChilliCream Docs","./"+(null!=t?t:"")),u(t)}),[p,f]);var h=null!==(t=n.tableOfContents.items)&&void 0!==t?t:[];return h.length>0?o.a.createElement(I,null,o.a.createElement(k,null,"In this article"),o.a.createElement(E,null,o.a.createElement("div",{onClick:m},o.a.createElement(_,{items:h,activeHeadingId:c})))):null},_=function e(t){var n=t.items,r=t.activeHeadingId;return o.a.createElement(N,null,n.map((function(t){var n;return o.a.createElement(i.Fragment,{key:t.url},o.a.createElement(z,{className:r===t.url?"active":void 0},o.a.createElement(S,{to:t.url},t.title)),t.items&&o.a.createElement(e,{items:null!==(n=t.items)&&void 0!==n?n:[],activeHeadingId:r}))})))},I=u.c.section.withConfig({displayName:"article-sections__Container",componentId:"sc-1xnyxv5-0"})(["margin-bottom:20px;"]),k=u.c.h6.withConfig({displayName:"article-sections__Title",componentId:"sc-1xnyxv5-1"})(["padding:0 25px;font-size:0.833em;@media only screen and (min-width:1320px){padding:0 20px;}"]),N=u.c.ul.withConfig({displayName:"article-sections__TocItemContainer",componentId:"sc-1xnyxv5-2"})(["position:absolute;display:block;margin:0;padding:0 25px 10px;list-style-type:none;@media only screen and (min-width:1320px){padding:0 20px 10px;}"]),S=Object(u.c)((function(e){return o.a.createElement(y.Link,e)})).withConfig({displayName:"article-sections__TocLink",componentId:"sc-1xnyxv5-3"})(["font-size:0.833em;color:#666;:hover{color:#000;}"]),z=u.c.li.withConfig({displayName:"article-sections__TocListItem",componentId:"sc-1xnyxv5-4"})(["flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;> ","{padding-right:0;}&.active > ","{font-weight:bold;}"],N,S),P=function(e){var t=e.children,n=Object(i.createRef)(),r=Object(l.useDispatch)();return Object(i.useEffect)((function(){var e=function(){var e,t,i=null!==(e=null===(t=n.current)||void 0===t?void 0:t.offsetHeight)&&void 0!==e?e:0;if(i>0){var o=window.innerHeight>i?i-25:window.innerHeight-85;r(Object(g.i)({articleHeight:o+"px"}))}else r(Object(g.i)({articleHeight:"94vh"}))};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}})),o.a.createElement(H,{ref:n},t)},H=u.c.div.withConfig({displayName:"doc-page-article-wrapper__ArticleWrapperElement",componentId:"sc-13mid1d-0"})(["display:grid;",";"," grid-template-rows:1fr;"],m.b,Object(m.f)("\n    grid-template-columns: 1fr;\n  ")),T=n("qGPU"),M=n.n(T),L=function(e){var t=e.showWhenScreenWidthIsSmallerThan,n=e.title,i=e.onClose;return o.a.createElement(W,{showWhenScreenWidthIsSmallerThan:t},o.a.createElement(D,null,n),o.a.createElement(R,{onClick:i}))},W=u.c.header.withConfig({displayName:"doc-page-pane-header__Header",componentId:"sc-9lcvm7-0"})(["display:flex;flex-direction:row;align-items:center;padding-bottom:10px;@media only screen and (min-width:","px){display:none;}"],(function(e){return e.showWhenScreenWidthIsSmallerThan})),D=u.c.h5.withConfig({displayName:"doc-page-pane-header__Title",componentId:"sc-9lcvm7-1"})(["flex:1 1 auto;margin-bottom:0;margin-left:25px;"]),R=Object(u.c)(M.a).withConfig({displayName:"doc-page-pane-header__CloseButton",componentId:"sc-9lcvm7-2"})(["flex:0 0 auto;margin-right:19px;margin-left:20px;width:26px;height:26px;opacity:0.5;cursor:pointer;transition:opacity 0.2s ease-in-out;&:hover{opacity:1;}"]),F=function(e){var t=e.children,n=Object(l.useSelector)((function(e){return e.common.showAside})),r=Object(l.useSelector)((function(e){return e.common.articleViewportHeight})),a=Object(l.useDispatch)(),c=Object(i.useCallback)((function(){a(Object(g.l)())}),[]);return o.a.createElement(A,{calculatedHeight:r,className:n?"show":""},o.a.createElement(O,{disableScrolling:n}),o.a.createElement(L,{title:"About this article",showWhenScreenWidthIsSmallerThan:m.h,onClose:c}),t)},A=u.c.aside.withConfig({displayName:"doc-page-aside__Aside",componentId:"s4ne5m-0"})([""," height:100%;margin-left:0;transition:transform 250ms;background-color:white;padding:25px 0 0;&.show{transform:none;}",""],j,(function(e){var t=e.calculatedHeight;return Object(m.f)("\n      transform: translateX(100%);\n      height: "+t+";\n      position: fixed;\n      top: 60px;\n      right: 0;\n      "+m.a+"\n    ")})),K=n("LOFe"),Z=n("ZGSP"),B=n("DmWS"),X=n.n(B),Q=n("+K7j"),J=n.n(Q),V=function(e){var t=e.data,n=e.originPath,i=t.site.siteMetadata,r=i.repositoryUrl+"/blob/master/website/src/docs/"+n;return o.a.createElement(Y,null,o.a.createElement(q,null,"Help us improving our content"),o.a.createElement(U,null,o.a.createElement(G,null,o.a.createElement($,{to:r},o.a.createElement(K.a,null,o.a.createElement(X.a,null)),"Edit on GitHub")),o.a.createElement(G,null,o.a.createElement($,{to:i.tools.slack},o.a.createElement(K.a,null,o.a.createElement(J.a,null)),"Discuss on Slack"))))},Y=u.c.section.withConfig({displayName:"doc-page-community__Container",componentId:"sc-1onj5g2-0"})(["margin-bottom:20px;"]),q=u.c.h6.withConfig({displayName:"doc-page-community__Title",componentId:"sc-1onj5g2-1"})(["padding:0 25px;font-size:0.833em;@media only screen and (min-width:1320px){padding:0 20px;}"]),U=u.c.ol.withConfig({displayName:"doc-page-community__CommunityItems",componentId:"sc-1onj5g2-2"})(["display:flex;flex-direction:column;margin:0;padding:0 25px 10px;list-style-type:none;@media only screen and (min-width:1320px){padding:0 20px 10px;}"]),G=u.c.li.withConfig({displayName:"doc-page-community__CommunityItem",componentId:"sc-1onj5g2-3"})(["flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;"]),$=Object(u.c)(Z.a).withConfig({displayName:"doc-page-community__CommunityLink",componentId:"sc-1onj5g2-4"})(["font-size:0.833em;color:#666;> ","{margin-right:10px;> svg{fill:#666;}}:hover{color:#000;> "," > svg{fill:#000;}}"],K.a,K.a),ee=(n("r5vi"),u.c.div.withConfig({displayName:"doc-page-legacy__Dialog",componentId:"sc-1vucprn-0"})(["display:",";background-color:#ffb806;@media only screen and (min-width:820px){> .gatsby-image-wrapper{border-radius:4px 4px 0 0;}}"],(function(e){return e.show?"initial":"none"})),u.c.div.withConfig({displayName:"doc-page-legacy__Container",componentId:"sc-1vucprn-1"})(["display:flex;flex-direction:row;padding:10px 20px;@media only screen and (min-width:820px){padding:10px 50px;}"]),u.c.div.withConfig({displayName:"doc-page-legacy__Message",componentId:"sc-1vucprn-2"})(["flex:0 1 auto;font-size:0.889em;line-height:1.667em;color:#4f3903;"]),Object(u.c)(Z.a).withConfig({displayName:"doc-page-legacy__LegacyDocLink",componentId:"sc-1vucprn-3"})(["text-decoration:underline;color:#4f3903;"]),u.c.button.withConfig({displayName:"doc-page-legacy__CloseButton",componentId:"sc-1vucprn-4"})(["flex:0 0 auto;margin-left:auto;cursor:pointer;> svg{fill:#4f3903;width:24px;height:24px;}"]),n("l5rq")),te=n.n(ee),ne=n("RkNZ"),ie=n.n(ne),oe=n("XuCD"),re=n.n(oe),ae=function(e){var t,n,r,a,c,u,s=e.data,p=e.selectedPath,d=e.selectedProduct,f=e.selectedVersion,m=Object(l.useSelector)((function(e){return e.common.expandedPaths})),h=Object(l.useSelector)((function(e){return e.common.showTOC})),v=Object(l.useDispatch)(),x=Object(i.useState)(!1),y=x[0],b=x[1],w=null===(t=s.config)||void 0===t||null===(n=t.products)||void 0===n?void 0:n.find((function(e){return(null==e?void 0:e.path)===d})),j=null==w||null===(r=w.versions)||void 0===r?void 0:r.find((function(e){return(null==e?void 0:e.path)===f})),O=Object(i.useCallback)((function(e){e.stopPropagation(),v(Object(g.c)())}),[]),C=Object(i.useCallback)((function(){b(!1)}),[]),_=Object(i.useCallback)((function(){v(Object(g.n)())}),[]),I=Object(i.useCallback)((function(){v(Object(g.c)())}),[]),k=Object(i.useCallback)((function(e,t){e.stopPropagation(),b(!t)}),[]),N=Object(i.useCallback)((function(e,t){e.stopPropagation(),v(Object(g.m)({path:t}))}),[]);Object(i.useEffect)((function(){return window.addEventListener("click",C),function(){window.removeEventListener("click",C)}}),[C]),Object(i.useEffect)((function(){if(null==j?void 0:j.items){var e=f.length>0?f.length+1:0,t=p.indexOf(d)+d.length+1+e,n=p.substring(t).split("/").filter((function(e){return e.length>0}));if(n.length>0)if(j.items.find((function(e){return e.path===n[0]&&e.items}))){var i=p.substring(0,n.length>1?p.lastIndexOf(n[n.length-1])-1:p.length-1);v(Object(g.e)({path:i}))}}}),[w,p,d]);var S=Object(l.useSelector)((function(e){return e.common.articleViewportHeight}));return o.a.createElement(ue,{calculatedHeight:S,className:h?"show":""},o.a.createElement(L,{title:"Table of contents",showWhenScreenWidthIsSmallerThan:1111,onClose:_}),o.a.createElement(se,null,o.a.createElement(pe,{onClick:function(e){return k(e,y)}},null==w?void 0:w.title,o.a.createElement(K.a,{size:16},o.a.createElement(re.a,null))),o.a.createElement(de,{open:y,onClick:O},null===(a=s.config)||void 0===a||null===(c=a.products)||void 0===c?void 0:c.map((function(e){return e===w?o.a.createElement(me,{key:e.path,onClick:C},o.a.createElement(he,null,e.title),o.a.createElement(ve,null,e.description)):o.a.createElement(ge,{key:e.path,to:""===e.versions[0].path?"/docs/"+e.path+"/":"/docs/"+e.path+"/"+e.versions[0].path+"/"},o.a.createElement(he,null,e.title),o.a.createElement(ve,null,e.description))})))),!y&&w.versions.length>1&&o.a.createElement(xe,null,w.versions.map((function(e,t){return o.a.createElement(be,{key:e.path+t,className:j.path===e.path?"active":void 0},o.a.createElement(ye,{to:""===e.path?"/docs/"+w.path+"/":"/docs/"+w.path+"/"+e.path+"/"},e.title))}))),!y&&(null==j?void 0:j.items)&&o.a.createElement(E,null,function e(t,n){return o.a.createElement(we,null,t.map((function(t){var i=t.path,r=t.title,a=t.items,c=a||"index"!==i?n+"/"+i:n;return o.a.createElement(_e,{key:c+(a?"/parent":""),className:a?ce(p,c)?"active":"":le(p,c)?"active":"",onClick:I},a?o.a.createElement(Oe,{expanded:-1!==m.indexOf(c)},o.a.createElement(Ee,{onClick:function(e){return N(e,c)}},r,o.a.createElement(K.a,{size:16},o.a.createElement(te.a,{className:"arrow-down"}),o.a.createElement(ie.a,{className:"arrow-up"}))),o.a.createElement(je,null,e(a,c))):o.a.createElement(Ce,{to:c+"/"},r))})))}(j.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title,items:e.items?null==e?void 0:e.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title}})):void 0}})),"/docs/"+w.path+((null==j||null===(u=j.path)||void 0===u?void 0:u.length)?"/"+j.path:""))))};function ce(e,t){var n=t.endsWith("/")?t:t+"/";return e.startsWith(n)}function le(e,t){return t===e.substring(0,e.lastIndexOf("/"))}var ue=u.c.nav.withConfig({displayName:"doc-page-navigation__Navigation",componentId:"ssy9ga-0"})([""," padding:25px 0 0;transition:margin-left 250ms;background-color:white;&.show{margin-left:0;}",""],j,(function(e){var t=e.calculatedHeight;return Object(m.g)("\n      margin-left: -105%;\n      height: "+t+";\n      position: fixed;\n      top: 60px;\n      left: 0;\n      "+m.a+"\n    ")})),se=u.c.div.withConfig({displayName:"doc-page-navigation__ProductSwitcher",componentId:"ssy9ga-1"})(["display:flex;flex-wrap:wrap;align-items:center;@media only screen and (min-width:1070px){position:relative;flex-wrap:initial;overflow-y:initial;}"]),pe=u.c.button.withConfig({displayName:"doc-page-navigation__ProductSwitcherButton",componentId:"ssy9ga-2"})(["display:flex;flex:0 0 auto;flex-direction:row;align-items:center;border:1px solid #ccc;border-radius:5px;margin:6px 14px 10px;padding:7px 10px;width:calc(100% - 28px);height:38px;font-size:0.833em;transition:background-color 0.2s ease-in-out;> ","{margin-left:auto;> svg{fill:#666;}}:hover{background-color:#ddd;}@media only screen and (min-width:1070px){margin-bottom:20px;padding:7px 5px;width:calc(100% - 28px);height:initial;}"],K.a),de=u.c.div.withConfig({displayName:"doc-page-navigation__ProductSwitcherDialog",componentId:"ssy9ga-3"})(["display:",";flex:1 1 100%;flex-direction:column;padding:0 10px;background-color:#fff;@media only screen and (min-width:1070px){top:135px;position:fixed;z-index:10;flex-direction:row;flex-wrap:wrap;margin:0 14px;border-radius:5px;padding:10px;width:700px;height:initial;box-shadow:0 3px 6px 0 rgba(0,0,0,0.25);}"],(function(e){return e.open?"flex":"none"})),fe=Object(u.b)(["flex:0 0 auto;border:1px solid #ccc;border-radius:5px;margin:5px;padding:10px;font-size:0.833em;color:#666;cursor:pointer;@media only screen and (min-width:1070px){flex:0 0 calc(50% - 32px);}"]),me=u.c.div.withConfig({displayName:"doc-page-navigation__ActiveProduct",componentId:"ssy9ga-4"})(["",";background-color:#ddd;"],fe),ge=Object(u.c)(Z.a).withConfig({displayName:"doc-page-navigation__ProductLink",componentId:"ssy9ga-5"})(["",";transition:background-color 0.2s ease-in-out;:hover{background-color:#ddd;}"],fe),he=u.c.h6.withConfig({displayName:"doc-page-navigation__ProductTitle",componentId:"ssy9ga-6"})(["font-size:1em;"]),ve=u.c.p.withConfig({displayName:"doc-page-navigation__ProductDescription",componentId:"ssy9ga-7"})(["margin-bottom:0;"]),xe=u.c.ol.withConfig({displayName:"doc-page-navigation__ProductVersions",componentId:"ssy9ga-8"})(["display:flex;flex-direction:row;margin:0;padding:0 25px 10px;list-style-type:none;@media only screen and (min-width:1070px){padding:0 20px 10px;}"]),ye=Object(u.c)(Z.a).withConfig({displayName:"doc-page-navigation__ProductVersionLink",componentId:"ssy9ga-9"})(["font-size:0.833em;color:#666;:hover{color:#000;}"]),be=u.c.li.withConfig({displayName:"doc-page-navigation__ProductVersion",componentId:"ssy9ga-10"})(["flex:0 0 auto;margin:5px 20px 5px 0;padding:0;min-height:20px;line-height:initial;&.active{> ","{font-weight:bold;}}"],ye),we=u.c.ol.withConfig({displayName:"doc-page-navigation__NavigationList",componentId:"ssy9ga-11"})(["display:flex;flex-direction:column;margin:0;padding:0 25px 20px;list-style-type:none;@media only screen and (min-width:1070px){display:flex;padding:0 20px 20px;}"]),Ee=u.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroupToggle",componentId:"ssy9ga-12"})(["display:flex;flex-direction:row;align-items:center;min-height:20px;font-size:0.833em;"]),je=u.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroupContent",componentId:"ssy9ga-13"})(["> ","{padding:5px 10px;}"],we),Oe=u.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroup",componentId:"ssy9ga-14"})(["display:flex;flex-direction:column;cursor:pointer;> ","{display:",";}> "," > ","{margin-left:auto;> .arrow-down{display:",";fill:#666;}> .arrow-up{display:",";fill:#666;}}"],je,(function(e){return e.expanded?"initial":"none"}),Ee,K.a,(function(e){return e.expanded?"none":"initial"}),(function(e){return e.expanded?"initial":"none"})),Ce=Object(u.c)(Z.a).withConfig({displayName:"doc-page-navigation__NavigationLink",componentId:"ssy9ga-15"})(["font-size:0.833em;color:#666;:hover{color:#000;}"]),_e=u.c.li.withConfig({displayName:"doc-page-navigation__NavigationItem",componentId:"ssy9ga-16"})(["flex:0 0 auto;margin:5px 0;padding:0;min-height:20px;line-height:initial;&.active{> ",",> "," > ","{font-weight:bold;}}"],Ce,Oe,Ee),Ie=function(e){var t=e.data,n=e.originPath,r=Object(l.useDispatch)(),a=t.file.childMdx,u=a.fields,s=a.frontmatter,d=a.body,m=u.slug.substring(1),x="/docs/"+m,y=/^([\w-]*?)\/(v\d+)?/g.exec(m),b=y[1]||"",w=y&&y[2]||"",E=s.title,j=Object(l.useSelector)((function(e){return e.common.yScrollPosition>10})),O=Object(i.useCallback)((function(){r(Object(g.n)())}),[]),_=Object(i.useCallback)((function(){r(Object(g.l)())}),[]);return o.a.createElement(Se,null,o.a.createElement(ae,{data:t,selectedPath:x,selectedProduct:b,selectedVersion:w}),o.a.createElement(P,null,o.a.createElement(Ne,null,o.a.createElement(h.a,null,!1,o.a.createElement(v.b,{kind:"doc"},o.a.createElement(ke,null,o.a.createElement(ze,{hasScrolled:j},o.a.createElement(Pe,{onClick:O,className:"toc-toggle"},o.a.createElement(p.a,null)," Table of contents"),o.a.createElement(Pe,{onClick:_,className:"aside-toggle"},o.a.createElement(f.a,null)," About this article"))),o.a.createElement(v.c,null,E)),o.a.createElement(v.a,null,o.a.createElement(c.MDXRenderer,null,d))),!1)),o.a.createElement(F,null,o.a.createElement(V,{data:t,originPath:n}),o.a.createElement(C,{data:t.file.childMdx})))},ke=u.c.div.withConfig({displayName:"doc-page__ResponsiveMenuWrapper",componentId:"fuo9s5-0"})(["position:absolute;left:0;right:0;"]),Ne=u.c.div.withConfig({displayName:"doc-page__ArticleContainer",componentId:"fuo9s5-1"})(["padding:20px;grid-row:1;grid-column:3;",";",""],Object(m.f)("\n      grid-column: 1;\n  "),Object(m.e)("\n    width: 100%;\n    padding: 0;\n  ")),Se=u.c.div.withConfig({displayName:"doc-page__Container",componentId:"fuo9s5-2"})(["display:grid;",";"," "," grid-template-rows:1fr;width:100%;height:100%;overflow:visible;","{grid-row:1;grid-column:2;","}","{grid-row:1;grid-column:1 / 6;"," ","}","{grid-row:1;grid-column:4;","}"],m.b,Object(m.f)("\n    grid-template-columns: 250px 1fr;\n    width: auto;\n  "),Object(m.g)("\n    grid-template-columns: 1fr;\n  "),ue,Object(m.f)("\n      grid-column: 1;\n    "),H,Object(m.f)("\n      grid-column: 2 / 5;\n    "),Object(m.g)("\n      grid-column: 1 / 5;\n    "),A,Object(m.e)("\n      grid-column: 1;\n    ")),ze=u.c.div.withConfig({displayName:"doc-page__ResponsiveMenu",componentId:"fuo9s5-3"})(["position:fixed;transition:all 100ms linear 0s;"," box-sizing:border-box;z-index:3;display:flex;flex-direction:row;align-items:center;border-radius:4px 4px 0 0;background:linear-gradient( 180deg,#ffffff 30%,rgba(255,255,255,0.75) 100% );width:820px;height:60px;margin-left:auto;margin-right:auto;padding:0 20px;"," "," "," ",""],(function(e){return e.hasScrolled?"top: 60px;":"top: 80px;"}),Object(m.e)("\n    left: 0;\n    width: auto;\n    right: 0;\n    margin-left: 0;\n    margin-right: 0;\n    top: 60px;\n  "),Object(m.c)("\n    display: none;\n  "),Object(m.f)("\n    > .toc-toggle {\n      display: none;\n    }\n  "),Object(m.g)("\n    > .toc-toggle {\n      display: initial;\n    }\n  ")),Pe=u.c.button.withConfig({displayName:"doc-page__Button",componentId:"fuo9s5-4"})(["display:flex;flex-direction:row;align-items:center;color:#666;transition:color 0.2s ease-in-out;&.aside-toggle{margin-left:auto;}&:hover{color:#000;> svg{fill:#000;}}> svg{margin-right:5px;width:16px;height:16px;fill:#666;transition:fill 0.2s ease-in-out;}"]);t.default=function(e){var t=e.data,n=e.pageContext;return o.a.createElement(a.a,null,o.a.createElement(r.a,{title:t.file.childMdx.frontmatter.title}),o.a.createElement(Ie,{data:t,originPath:n.originPath}))}},Bgjm:function(e,t,n){var i=n("IvzW"),o=n("jekk"),r=n("46f4");e.exports=i?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},C2zU:function(e,t,n){var i=n("REpN"),o=n("ckLD"),r=i.document,a=o(r)&&o(r.createElement);e.exports=function(e){return a?r.createElement(e):{}}},E9J1:function(e,t,n){var i,o,r,a=n("/TCF"),c=n("REpN"),l=n("ckLD"),u=n("Bgjm"),s=n("34EK"),p=n("uFM1"),d=n("HIFH"),f=c.WeakMap;if(a){var m=new f,g=m.get,h=m.has,v=m.set;i=function(e,t){return v.call(m,e,t),t},o=function(e){return g.call(m,e)||{}},r=function(e){return h.call(m,e)}}else{var x=p("state");d[x]=!0,i=function(e,t){return u(e,x,t),t},o=function(e){return s(e,x)?e[x]:{}},r=function(e){return s(e,x)}}e.exports={set:i,get:o,has:r,enforce:function(e){return r(e)?o(e):i(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},F8ZZ:function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+i).toString(36)}},FlY1:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},GoW4:function(e,t,n){var i=n("IvzW"),o=n("6Zah"),r=n("46f4"),a=n("a0vn"),c=n("PK3T"),l=n("34EK"),u=n("STyW"),s=Object.getOwnPropertyDescriptor;t.f=i?s:function(e,t){if(e=a(e),t=c(t,!0),u)try{return s(e,t)}catch(n){}if(l(e,t))return r(!o.f.call(e,t),e[t])}},HIFH:function(e,t){e.exports={}},IvzW:function(e,t,n){var i=n("JhOX");e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},JhOX:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},Km5v:function(e,t,n){var i,o=n("m/aQ"),r=n("OKd1"),a=n("FlY1"),c=n("HIFH"),l=n("gbZP"),u=n("C2zU"),s=n("uFM1"),p=s("IE_PROTO"),d=function(){},f=function(e){return"<script>"+e+"<\/script>"},m=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var e,t;m=i?function(e){e.write(f("")),e.close();var t=e.parentWindow.Object;return e=null,t}(i):((t=u("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F);for(var n=a.length;n--;)delete m.prototype[a[n]];return m()};c[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(d.prototype=o(e),n=new d,d.prototype=null,n[p]=e):n=m(),void 0===t?n:r(n,t)}},LlHf:function(e,t,n){var i=n("a0vn"),o=n("WD+B"),r=n("0dIN"),a=function(e){return function(t,n,a){var c,l=i(t),u=o(l.length),s=r(a,u);if(e&&n!=n){for(;u>s;)if((c=l[s++])!=c)return!0}else for(;u>s;s++)if((e||s in l)&&l[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},NmUf:function(e,t,n){var i=n("q1tI");function o(e){return i.createElement("svg",e,i.createElement("path",{d:"M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"}))}o.defaultProps={viewBox:"0 0 576 512"},e.exports=o,o.default=o},OKd1:function(e,t,n){var i=n("IvzW"),o=n("jekk"),r=n("m/aQ"),a=n("1RYp");e.exports=i?Object.defineProperties:function(e,t){r(e);for(var n,i=a(t),c=i.length,l=0;c>l;)o.f(e,n=i[l++],t[n]);return e}},OaLt:function(e,t,n){var i=n("JhOX");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())}))},PK3T:function(e,t,n){var i=n("ckLD");e.exports=function(e,t){if(!i(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!i(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},QD2z:function(e,t,n){var i=n("REpN"),o=n("8deY"),r=n("34EK"),a=n("F8ZZ"),c=n("OaLt"),l=n("TuXZ"),u=o("wks"),s=i.Symbol,p=l?s:s&&s.withoutSetter||a;e.exports=function(e){return r(u,e)||(c&&r(s,e)?u[e]=s[e]:u[e]=p("Symbol."+e)),u[e]}},QU3x:function(e,t,n){var i=n("34EK"),o=n("a0vn"),r=n("LlHf").indexOf,a=n("HIFH");e.exports=function(e,t){var n,c=o(e),l=0,u=[];for(n in c)!i(a,n)&&i(c,n)&&u.push(n);for(;t.length>l;)i(c,n=t[l++])&&(~r(u,n)||u.push(n));return u}},REpN:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("yLpj"))},STyW:function(e,t,n){var i=n("IvzW"),o=n("JhOX"),r=n("C2zU");e.exports=!i&&!o((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},SWhb:function(e,t,n){var i=n("jdR/"),o=n("zpoX"),r=n("imag"),a=n("m/aQ");e.exports=i("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=r.f;return n?t.concat(n(e)):t}},TuXZ:function(e,t,n){var i=n("OaLt");e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"WD+B":function(e,t,n){var i=n("gQbX"),o=Math.min;e.exports=function(e){return e>0?o(i(e),9007199254740991):0}},XuCD:function(e,t,n){var i=n("q1tI");function o(e){return i.createElement("svg",e,i.createElement("path",{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"}))}o.defaultProps={viewBox:"0 0 512 512"},e.exports=o,o.default=o},XvpG:function(e,t,n){"use strict";var i=n("ZS3K"),o=n("AAQS"),r=n("17+C"),a=n("WD+B"),c=n("wTlq"),l=n("86Yh");i({target:"Array",proto:!0},{flatMap:function(e){var t,n=r(this),i=a(n.length);return c(e),(t=l(n,0)).length=o(t,n,n,i,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},Z2vj:function(e,t,n){n("uKph")("flatMap")},ZRnM:function(e,t,n){var i=n("JhOX"),o=/#|\.prototype\./,r=function(e,t){var n=c[a(e)];return n==u||n!=l&&("function"==typeof t?i(t):!!t)},a=r.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=r.data={},l=r.NATIVE="N",u=r.POLYFILL="P";e.exports=r},ZS3K:function(e,t,n){var i=n("REpN"),o=n("GoW4").f,r=n("Bgjm"),a=n("+7hJ"),c=n("i18P"),l=n("6cYJ"),u=n("ZRnM");e.exports=function(e,t){var n,s,p,d,f,m=e.target,g=e.global,h=e.stat;if(n=g?i:h?i[m]||c(m,{}):(i[m]||{}).prototype)for(s in t){if(d=t[s],p=e.noTargetGet?(f=o(n,s))&&f.value:n[s],!u(g?s:m+(h?".":"#")+s,e.forced)&&void 0!==p){if(typeof d==typeof p)continue;l(d,p)}(e.sham||p&&p.sham)&&r(d,"sham",!0),a(n,s,d,e)}}},a0vn:function(e,t,n){var i=n("8mzz"),o=n("4jnk");e.exports=function(e){return i(o(e))}},bmrq:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},ckLD:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},ehR5:function(e,t,n){var i=n("wTlq");e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,o){return e.call(t,n,i,o)}}return function(){return e.apply(t,arguments)}}},gQbX:function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},gbZP:function(e,t,n){var i=n("jdR/");e.exports=i("document","documentElement")},goFL:function(e,t,n){var i=n("REpN");e.exports=i},i18P:function(e,t,n){var i=n("REpN"),o=n("Bgjm");e.exports=function(e,t){try{o(i,e,t)}catch(n){i[e]=t}return t}},ij4R:function(e,t,n){var i=n("REpN"),o=n("i18P"),r=i["__core-js_shared__"]||o("__core-js_shared__",{});e.exports=r},imag:function(e,t){t.f=Object.getOwnPropertySymbols},"jdR/":function(e,t,n){var i=n("goFL"),o=n("REpN"),r=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?r(i[e])||r(o[e]):i[e]&&i[e][t]||o[e]&&o[e][t]}},jekk:function(e,t,n){var i=n("IvzW"),o=n("STyW"),r=n("m/aQ"),a=n("PK3T"),c=Object.defineProperty;t.f=i?c:function(e,t,n){if(r(e),t=a(t,!0),r(n),o)try{return c(e,t,n)}catch(i){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},krUJ:function(e,t,n){var i=n("ij4R"),o=Function.toString;"function"!=typeof i.inspectSource&&(i.inspectSource=function(e){return o.call(e)}),e.exports=i.inspectSource},l5rq:function(e,t,n){var i=n("q1tI");function o(e){return i.createElement("svg",e,i.createElement("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}))}o.defaultProps={viewBox:"0 0 448 512"},e.exports=o,o.default=o},lSYd:function(e,t){e.exports=!1},"m/aQ":function(e,t,n){var i=n("ckLD");e.exports=function(e){if(!i(e))throw TypeError(String(e)+" is not an object");return e}},"t+sS":function(e,t,n){var i=n("q1tI");function o(e){return i.createElement("svg",e,i.createElement("path",{d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"}))}o.defaultProps={viewBox:"0 0 512 512"},e.exports=o,o.default=o},uFM1:function(e,t,n){var i=n("8deY"),o=n("F8ZZ"),r=i("keys");e.exports=function(e){return r[e]||(r[e]=o(e))}},uKph:function(e,t,n){var i=n("QD2z"),o=n("Km5v"),r=n("jekk"),a=i("unscopables"),c=Array.prototype;null==c[a]&&r.f(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},wTlq:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},zpoX:function(e,t,n){var i=n("QU3x"),o=n("FlY1").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}}}]);
//# sourceMappingURL=component---src-templates-doc-page-template-tsx-0655fab4196c00c18e49.js.map
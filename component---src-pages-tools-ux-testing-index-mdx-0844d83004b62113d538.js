(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),s=a.n(o),i=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),d=a.n(l),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,s=r.subDirectory,b=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),O=a("dI71"),w=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0,strict:!0}),o=r===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,r);return Object(p.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=o,t),w.listItem)},Object(p.b)(i.Link,{className:w.link,to:""+c},e))}));return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:w.list},r))))))},t}(r.a.Component),v=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,l=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=l.tabs,g=l.title,O=l.theme,w=l.description,k=l.keywords,P=Object(f.a)().interiorTheme,y=Object(i.useStaticQuery)("2456312558").site.pathPrefix,N=y?n.pathname.replace(y,""):n.pathname,I=m?N.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"",C=O||P;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:C,pageTitle:g,pageDescription:w,pageKeywords:k,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:C}),m&&Object(p.b)(T,{slug:N,tabs:m,currentTab:I}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d})),Object(p.b)(h.a,{pageContext:t,location:n,slug:N,tabs:m,currentTab:I}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uKHq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),o=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),l={_frontmatter:b},d=i.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)(d,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(c,{mdxType:"PageDescription"},Object(s.b)("p",null,"This project is a ",Object(s.b)("a",{parentName:"p",href:"https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/"},"Gatsby theme")," that empowers developers, writers, and designers to create fast, accessible sites that look and feel like Carbon. Follow along to start creating your own site.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tools-ux-testing-index-mdx-0844d83004b62113d538.js.map
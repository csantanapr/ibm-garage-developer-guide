(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),p=a.n(n),i=a("NmYn"),b=a.n(i),o=a("Wbzz"),r=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),s=a.n(l),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,p=e.tabs,i=void 0===p?[]:p;return Object(u.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,p=a||n,i=p.baseUrl,b=p.subDirectory,r=i+"/edit/"+p.branch+b+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:r},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("dI71"),A=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],p=t.map((function(e){var t,p=b()(e,{lower:!0,strict:!0}),i=p===n,r=new RegExp(n+"/?(#.*)?$"),c=a.replace(r,p);return Object(u.b)("li",{key:e,className:s()((t={},t[A.selectedItem]=i,t),A.listItem)},Object(u.b)(o.Link,{className:A.link,to:""+c},e))}));return Object(u.b)("div",{className:A.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:A.list},p))))))},t}(p.a.Component),y=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,p=e.Title,i=t.frontmatter,l=void 0===i?{}:i,s=t.relativePagePath,d=t.titleType,m=l.tabs,O=l.title,N=l.theme,A=l.description,w=l.keywords,x=Object(k.a)().interiorTheme,v=Object(o.useStaticQuery)("2456312558").site.pathPrefix,T=v?n.pathname.replace(v,""):n.pathname,B=m?T.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",C=N||x;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:C,pageTitle:O,pageDescription:A,pageKeywords:w,titleType:d},Object(u.b)(g,{title:p?Object(u.b)(p,null):O,label:"label",tabs:m,theme:C}),m&&Object(u.b)(f,{slug:T,tabs:m,currentTab:B}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:s})),Object(u.b)(h.a,{pageContext:t,location:n,slug:T,tabs:m,currentTab:B}),Object(u.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FvS5:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return g}));var n=a("wx14"),p=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),o=a("T0C+"),r=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=c("PageDescription"),s=c("AnchorLinks"),d=c("AnchorLink"),m={_frontmatter:r},u=b.a;function g(e){var t=e.components,a=Object(p.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"Use IBM Cloud Pak for Applications to integrate microservices")),Object(i.b)("p",null,"For this homework, you will use two existing applications and deploy them as a set of microservices using the CP4Apps workflow."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABtUlEQVQoz1VRXW/TMBTND+cViYcJ8QBCCHhhkzbxwBhN1m1q6UZS2mRpuzpr8+E6sV3Hjp04jeAP4BYxiSPr6l7p3HvuubbCi97DPB4v0hVit2GOf3r56LrSba1UXdda66Zp1P9otdS7RunWisOlPflwEx6vQXwxfzOYfcWICcERJgmEEQBJkmCMi3+gJPeX26X3iP3AikD88er5yeBVMJm/vXx22n9XbAjnLIY4zSkAD3lRmBUqzisphai6Vl5N9Y+zgNqOFcfru+/uZOynaXo3dIPpPULIkJLHaDaaBn5Cy5KARdTrBbNwSwuplKxKoTgsCquujamG89JEqYxZbXS6pv3mDY/sE4IwyhGXHcQVNE5oow/8rt0ZJ5Y6HIYQcn7+JYoiUxJKZUnsyebldSkowqZavR55n9wVez8+knXm3q+HPiAE75vNJEqp4zhxEkspORe7WvSD/EVfMQwhYsnyc7S49MD2BpxmGA6mK9sFKD8oG0ipGGN/t9gbUcKPkBMynG9YWcrmt1BdJeta/VJKS8Nq2rzA1tPvmaan3OhvYFagLIMHZEm2f1m6j2mWpiY3l/4Dym3Lg/xdaVIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Frontend Backend Demo",title:"Frontend Backend Demo",src:"/static/d7e4bd08eece95700746227611ce7769/3cbba/cp4apps-front-back.png",srcSet:["/static/d7e4bd08eece95700746227611ce7769/7fc1e/cp4apps-front-back.png 288w","/static/d7e4bd08eece95700746227611ce7769/a5df1/cp4apps-front-back.png 576w","/static/d7e4bd08eece95700746227611ce7769/3cbba/cp4apps-front-back.png 1152w","/static/d7e4bd08eece95700746227611ce7769/0b124/cp4apps-front-back.png 1728w","/static/d7e4bd08eece95700746227611ce7769/4ea69/cp4apps-front-back.png 2304w","/static/d7e4bd08eece95700746227611ce7769/ebc9b/cp4apps-front-back.png 5160w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"This guide assumes the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You are using a ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})," that has already been installed."),Object(i.b)("li",{parentName:"ol"},"Cloud Pak for Applications has already been installed in the environment."),Object(i.b)("li",{parentName:"ol"},"You already completed ",Object(i.b)("a",{parentName:"li",href:"/practical/cp4apps"},"CP4Apps homeworks"),".")),Object(i.b)("p",null,"This guide consists of the following sections:"),Object(i.b)(s,{mdxType:"AnchorLinks"},Object(i.b)(d,{to:"#deploy-existing-backend-as-appsody-app",mdxType:"AnchorLink"},"Deploy existing backend as Appsody app"),Object(i.b)(d,{to:"#deploy-existing-frontend-as-appsody-app",mdxType:"AnchorLink"},"Deploy existing frontend as Appsody app"),Object(i.b)(d,{to:"#verify-deployed-microservice-solution",mdxType:"AnchorLink"},"Verify deployed microservice solution")),Object(i.b)("h2",null,"Deploy existing backend as Appsody app"),Object(i.b)("p",null,"Create a backend app from an Appsody template, set it up for Appsody, and connect the repo to a pipeline."),Object(i.b)("p",null,"First, create a backend app from an existing template."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to the template ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kabanero-demo/appsody-backend"},"https://github.com/kabanero-demo/appsody-backend"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Complete the ",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"},"GitHub create repository from template")," process"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Owner"),": Select the GitHub organization for your team")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Repository name"),": Use a name like ",Object(i.b)("inlineCode",{parentName:"p"},"appsody-backend-{initials}")))),Object(i.b)("p",{parentName:"li"},"The new repository will be created in your selected organization.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Clone the new Github repo locally"))),Object(i.b)("p",null,"Second, set up the cloned template with Appsody."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Initialize the backend as an Appsody Express.js app"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"appsody init kabanero-0.2.1/nodejs-express none\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use Appsody to run the backend"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"appsody run -p 3001:3000 -p 9230:9229 -p 8081:8080\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Test the running backend, accessible at http://localhost:3001 (port 3000 will be use later for frontend)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add deployment manifest"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"appsody deploy --generate-only\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit the generated file, ",Object(i.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Specify the namespace to deploy the application into",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  namespace: dev-{initials}\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Commit and push the new Appsody-related files"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Add appsody files"\ngit push\n')))),Object(i.b)("p",null,"Third, connect the repo to the Tekton pipeline."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a webhook for your GitHub repo to trigger a Tekton pipeline, as described in ",Object(i.b)("a",{parentName:"li",href:"/practical/cp4apps#build-an-app-with-a-tekton-pipeline"},"Tekton Pipelines Homework"))),Object(i.b)("h2",null,"Deploy existing frontend as Appsody app"),Object(i.b)("p",null,"Create a frontend app from an Appsody template, set it up for Appsody and connect it to the backend, and connect the repo to a pipeline."),Object(i.b)("p",null,"First, create a frontend app from an existing template."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Repeat the steps above to create a repo from a template:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Template"),": ",Object(i.b)("a",{parentName:"p",href:"https://github.com/kabanero-demo/appsody-frontend"},"https://github.com/kabanero-demo/appsody-frontend"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Owner"),": Select the GitHub organization for your team")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Repository name"),": Use a name like ",Object(i.b)("inlineCode",{parentName:"p"},"appsody-frontend-{initials}"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Clone the new Github repo locally"))),Object(i.b)("p",null,"Second, set up the cloned template with Appsody and connect it to the backend."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Initialize the frontend as an Appsody Express.js app"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"appsody init kabanero-0.2.1/nodejs-express none\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use Appsody to run the frontend"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"appsody run\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Test the running frontend, accessible at http://localhost:3000 (port 3001 is used by the backend)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make sure the backend is running with Appsody and exposed on port 3001")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Test the app by adding a new user")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Repeat the steps above from the backend using the command ",Object(i.b)("inlineCode",{parentName:"p"},"appsody deploy --generate-only")," to add the Appsody deployment manifest file ",Object(i.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," and set the target namespace to ",Object(i.b)("inlineCode",{parentName:"p"},"dev-{initials}"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Also in ",Object(i.b)("inlineCode",{parentName:"p"},"app-deploy.yaml"),", add an environment variable to link the frontend service to the backend service"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  env:\n    - name: APPSODY_BACKEND_DEFAULT_URL\n      value: http://appsody-backend-{initials}:3000/\n")),Object(i.b)("p",{parentName:"li"},"  (On the server, the frontend and backend will both listen on port 3000 (in different pods).)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Commit and push your changes to Git"))),Object(i.b)("p",null,"Third, connect the repo to the Tekton pipeline."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a webhook for your GitHub repo to trigger a Tekton pipeline, as described in ",Object(i.b)("a",{parentName:"li",href:"/practical/cp4apps#build-an-app-with-a-tekton-pipeline"},"Tekton Pipelines Homework"))),Object(i.b)("h2",null,"Verify deployed microservice solution"),Object(i.b)("p",null,"The webhooks should have triggered the pipelines to deploy the frontend and backend to your OpenShift project. Let’s verify the apps are in OpenShift and running correctly."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the OpenShift web console, navigate to your project and its deployments")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Verify there are two applications corresponding to the frontend (",Object(i.b)("inlineCode",{parentName:"p"},"appsody-frontend-{initials}"),") and backend (",Object(i.b)("inlineCode",{parentName:"p"},"appsody-backend-{initials}"),") services"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAABYlAAAWJQFJUiTwAAACHElEQVQoz4VQ2W7TQBS1GpKgPEQJyiNV1CICWWwndpamDRUgBLzwwiemQqSkVUEI8TMIsSTNYo8z9tizeBuui+ARro6uzr3SnTnnKHeq1bv7+7VarVqtViqVcrlcKpVyuVuFQmFvL6f8qWKxCPvbNwU8n89n26ZqNNVeSzUOG+2WZnTNI80Yqr2B1ht0dBM2Tc3s9EZdc9S+Gdsw6n1jMIau6Oax3j8BHD7Qp29mhJDFYmk5ju0FxKeUMgDjAloQ0L+AFUAZPn99+uzV5MlL1Tz5+OmzlDIMQ+iJ/FelaRrHsWKevhgcP+2PHzf10eXVB9i7rssYk/+rJEmUtj4E5S19WL/ffns+BzEYuyDe84ht277vI4RgBAPALcsCAhuMsRBCgTA0c6waRweNzvnFFajlQqRSiigWYZSkaWaS0ghUJolHCBBwDM9lP8MZ/Nzujg4a2mw2F77rIStiFBBSGrgYOvd9EfhARBDEnMEYURqHYXbcG040Y1xvqO+mZxR79sZiOyd2d8xBu9U1d5Cz/OmtV3yH1l+/UNtCix/b799Ca5UdA8B5vaHNp2ciYNstYtiNiBcDfCKpz5AtdigNiLtacsemaItX18l2pYBhY/QI+r2H2vzyPU3k2iEk4D7lIWTCuYwiH2NwmQixs8ERIxijzSaOoiztTPlg0mj14DiWckuEJxKIKk7TMIHsJONchEBT1/N+B4ZdF/L7BRT16bus3xjJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Frontend Backend Console",title:"Frontend Backend Console",src:"/static/a11c72cd5454b1afac20d057b698449c/3cbba/ocp-console-front-back.png",srcSet:["/static/a11c72cd5454b1afac20d057b698449c/7fc1e/ocp-console-front-back.png 288w","/static/a11c72cd5454b1afac20d057b698449c/a5df1/ocp-console-front-back.png 576w","/static/a11c72cd5454b1afac20d057b698449c/3cbba/ocp-console-front-back.png 1152w","/static/a11c72cd5454b1afac20d057b698449c/0b124/ocp-console-front-back.png 1728w","/static/a11c72cd5454b1afac20d057b698449c/d4943/ocp-console-front-back.png 2058w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Access the route for the frontend service and register a new user"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABn0lEQVQoz31RTU/bQBDNL0OtkJrEGAMSVsuBC/yfHjn2D1TqoUIghBBNqioQwAFSEhIn2LGd3U1im/1wjAj2honTWwNPb0ezM/NmVrM5RSnk8wVFXd9Qta1iYXttbVfXd/TNXX3zs6blFbW4slpc0QrKqqqtF9V5RPu4/Gnpw3IOkwEQYUwwCgkOMPL7HrJtbFvYdQf/MITzde/bz+NTEviW5zkIYUJy00VIpHwBpmkqJZyZldJ2UUj5LAuhrCw3T6QZssI0TRKfsmH46FOakWWkIo5DzkMm4PrIBdQumAxyGkV3Hat0dnV7b54Z9etGq3xu/K7WKsYtOG3LEfGTlAvFUgaMw2SHDK7qjUqt/uvcOCpXTv5Ue31iucgjQzYez579vxhaBpQ5eGB5+KbZvmua981uu/VQNeows4cIGvksekfMOPaDZte2ev1Su/X97/WPxs1Fp2NaPdN2iR+8J54vaUTZWER7Zk2/OPhyebjvmLGIR2yWoiJ6U8yjMfSGCmDIRcAFWNjwPAIOLGyxGDCZTJ4nz0mSTOFD3+J0+gp+7kM2+mPMWgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Frontend Route",title:"Frontend Route",src:"/static/49e782ef08c49a9078b6a4a3609683ae/3cbba/frontend-running.png",srcSet:["/static/49e782ef08c49a9078b6a4a3609683ae/7fc1e/frontend-running.png 288w","/static/49e782ef08c49a9078b6a4a3609683ae/a5df1/frontend-running.png 576w","/static/49e782ef08c49a9078b6a4a3609683ae/3cbba/frontend-running.png 1152w","/static/49e782ef08c49a9078b6a4a3609683ae/0b124/frontend-running.png 1728w","/static/49e782ef08c49a9078b6a4a3609683ae/4ea69/frontend-running.png 2304w","/static/49e782ef08c49a9078b6a4a3609683ae/61c60/frontend-running.png 2368w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))))}g.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-practical-cp-4-apps-2-index-mdx-25a2d211f9aae2cc2566.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("NmYn"),o=a.n(n),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),h=a.n(m),d=a("qKvR"),u=function(e){var t,a=e.title,r=e.theme,i=e.tabs,n=void 0===i?[]:i;return Object(d.b)("div",{className:p()(h.a.pageHeader,(t={},t[h.a.withTabs]=n.length,t[h.a.darkMode]="dark"===r,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:h.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,r=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,n=i.baseUrl,o=i.subDirectory,c=n+"/edit/"+i.branch+o+"/src/pages"+t;return n?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},y=a("FCXl"),j=a("dI71"),O=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),n=i===r,c=new RegExp(r+"/?(#.*)?$"),l=a.replace(c,i);return Object(d.b)("li",{key:e,className:p()((t={},t[O.selectedItem]=n,t),O.listItem)},Object(d.b)(s.Link,{className:O.link,to:""+l},e))}));return Object(d.b)("div",{className:O.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:O.list},i))))))},t}(i.a.Component),N=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,n=t.frontmatter,b=void 0===n?{}:n,p=t.relativePagePath,m=t.titleType,h=b.tabs,g=b.title,j=b.theme,O=b.description,v=b.keywords,w=Object(x.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,T=k?r.pathname.replace(k,""):r.pathname,I=h?T.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"",C=j||w;return Object(d.b)(l.a,{tabs:h,homepage:!1,theme:C,pageTitle:g,pageDescription:O,pageKeywords:v,titleType:m},Object(d.b)(u,{title:i?Object(d.b)(i,null):g,label:"label",tabs:h,theme:C}),h&&Object(d.b)(A,{slug:T,tabs:h,currentTab:I}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:p})),Object(d.b)(y.a,{pageContext:t,location:r,slug:T,tabs:h,currentTab:I}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ejHx:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a("wx14"),i=a("zLVn"),n=(a("q1tI"),a("7ljp")),o=a("013z"),s=a("T0C+"),c=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},b=l("PageDescription"),p=l("AnchorLinks"),m=l("AnchorLink"),h={_frontmatter:c},d=o.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(d,Object(r.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use Artifactory to store artifacts such as Helm charts and maven assets")),Object(n.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(n.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/deliver/practice_delivery_pipeline/"},"automate continuous delivery through a delivery pipeline"),", in part by using an artifact repository for storing output of the build stage. The ",Object(n.b)(s.a,{name:"env",mdxType:"Globals"})," uses Artifactory as an artifact repository manager, which it uses to host its Helm repository."),Object(n.b)("h2",null,"What is Artifactory"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://jfrog.com/artifactory/"},"Artifactory")," is an artifact management repository."),Object(n.b)("p",null,"An artifact repository manager hosts multiple binary repositories, like a database management system for artifacts. The binary repository compliments the source code repository: the code from an SCM is the input to the build process, whereas a binary repository stores the output of the build process, often called artifacts. The artifacts are often individual application components that can later be assembled into a full product."),Object(n.b)("p",null,"An artifact repository manager is an integral part of a CI/CD solution, a companion to the pipeline. As the pipeline builds artifacts, they’re stored in the repositories. When the pipeline later needs artifacts that have already been built, they’re retrieved from the repositories. This enables a build to be broken into smaller stages with well-defined inputs and outputs and provides better tracking of each stage’s results. Often a failed pipeline can restart in the middle using artifacts that were already built and stored."),Object(n.b)("p",null,"An artifact repository often serves as the storage for a package manager, which assembles an application from artifacts. Here are some common package managers and their repositories:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://maven.apache.org"},Object(n.b)("strong",{parentName:"a"},"Maven")),": Builds Java artifacts (such as Jar, War, Ear, etc.) and projects stored in ",Object(n.b)("a",{parentName:"li",href:"https://maven.apache.org/tools/introduction/introduction-to-repositories.html"},"Maven repositories")," such as ",Object(n.b)("a",{parentName:"li",href:"https://maven.apache.org/repository/index.html"},"Maven Central")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.npmjs.com/about-npm/"},Object(n.b)("strong",{parentName:"a"},"npm")),": Assembles programs from JavaScript packages stored in ",Object(n.b)("a",{parentName:"li",href:"https://docs.npmjs.com/misc/registry"},"npm-registries")," such as the ",Object(n.b)("a",{parentName:"li",href:"https://docs.npmjs.com/about-the-public-npm-registry"},"public npm registry")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://pypi.org/project/pip/"},Object(n.b)("strong",{parentName:"a"},"PIP")),": Installs Python packages from ",Object(n.b)("a",{parentName:"li",href:"https://packaging.python.org/tools/hosting-your-own-index/"},"index repositories")," such as the ",Object(n.b)("a",{parentName:"li",href:"https://pypi.org/"},"Python Package Index (PyPI)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://helm.sh"},Object(n.b)("strong",{parentName:"a"},"Helm")),": Deploys applications to Kubernetes using charts stored in ",Object(n.b)("a",{parentName:"li",href:"https://helm.sh/docs/chart_repository/"},"Helm repositories")," such as the ",Object(n.b)("a",{parentName:"li",href:"https://helm.sh/blog/intro-helm-hub/"},"Helm Hub")," catalog of repositories")),Object(n.b)("p",null,"Docker is not a package manager, but its architecture includes an artifact repository:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.docker.com/"},Object(n.b)("strong",{parentName:"a"},"Docker")),": Stores images in ",Object(n.b)("a",{parentName:"li",href:"https://docs.docker.com/registry/"},"Docker registries")," such as ",Object(n.b)("a",{parentName:"li",href:"https://docs.docker.com/docker-hub/"},"Docker Hub"))),Object(n.b)("p",null,"Note that you do not need a very large team to start reaping benefits from an artifact repository manager. The initial investment is not very large and the benefits are felt immediately."),Object(n.b)("h2",null,"Artifact management in the Pipeline"),Object(n.b)("p",null,"Note: Be sure to ",Object(n.b)("a",{parentName:"p",href:"/admin/artifactory-setup/"},"set up Artifactory")," before using it in the Development Tools environment, if you are using external Artifactory that was not set up as part of the toolkit installation."),Object(n.b)("p",null,"The ",Object(n.b)(s.a,{name:"env",mdxType:"Globals"})," will eventually be extended to store a number of artifact types in Artifactory. Thus far, the CI and CD pipelines exchange two types of artifacts: Docker images and Helm charts. The CI pipeline (",Object(n.b)("a",{parentName:"p",href:"/tools/jenkins"},"Jenkins"),", ",Object(n.b)("a",{parentName:"p",href:"/tools/tekton"},"Tekton"),", etc.) builds these artifacts and ArgoCD deploys them. To store and share the artifacts, the pipeline uses two repositories:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Docker images"),": The ",Object(n.b)("a",{parentName:"li",href:"/tools/ibm-cloud-container-registry"},"Developer Tools Image Registry")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Helm charts"),": A Helm repository in Artifactory")),Object(n.b)("p",null,"The ",Object(n.b)("a",{parentName:"p",href:"/starterkits"},Object(n.b)(s.a,{name:"templates",mdxType:"Globals"}))," have also been configured to store their Helm charts in Artificatory."),Object(n.b)("p",null,"Artifactory is part of the ",Object(n.b)(s.a,{name:"env",mdxType:"Globals"}),"’s complete CI/CD solution:"),Object(n.b)(p,{small:!0,mdxType:"AnchorLinks"},Object(n.b)(m,{to:"/getting-started-day-1/continuous-integration",mdxType:"AnchorLink"},"Continuous Integration"),Object(n.b)(m,{to:"/getting-started-day-2/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery")),Object(n.b)("h3",null,"Artifactory dashboard"),Object(n.b)("p",null,"Use the Artifactory dashboard to browse the repositories and their artifacts."),Object(n.b)("p",null,"Open the Artifactory web UI for your environment."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Use the ",Object(n.b)("a",{parentName:"li",href:"/getting-started-day-1/dashboard"},Object(n.b)(s.a,{name:"dashboard",mdxType:"Globals"}))," to open the Artifactory dashboard")),Object(n.b)("p",null,"Browse the Helm repository."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Go to the Artifact Repository Browser page"),Object(n.b)("li",{parentName:"ul"},"Expand the tree for the ",Object(n.b)("inlineCode",{parentName:"li"},"generic-local")," repository, which is the Helm repository"),Object(n.b)("li",{parentName:"ul"},"Expand the branch for your environment’s cluster, such as ",Object(n.b)("inlineCode",{parentName:"li"},"showcase-dev-iks"))),Object(n.b)("p",null,"The artifacts in the cluster’s branch follow the ",Object(n.b)("a",{parentName:"p",href:"https://helm.sh/docs/chart_repository/"},"Helm chart repository")," structure:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"index.yaml"),": Helm’s index of all of the charts in the repository"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"charts"),": The ",Object(n.b)("inlineCode",{parentName:"li"},"tgz")," files named for the application they deploy\n",Object(n.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABW0lEQVQoz41Qy0rDQBTNF7kSBUGhVFyoWBARty5qq0KluhEX7gSXfoMI/oJ9i78iVGybZJLpZCbJJMe5Y6MLW/DC4b7PPTPO0vIadvcPUSrvYHvvCJWDY9zdP6DXf8VLq4tOd4B2p4+WQXsGilvtHvqDNzw+PWNzq4LV9TJWNkpwmte38IMQ78MhPscTBHyKcCoQhBxBwOF5DNzkIpJzwWezPgvADI/TuLpBrDOMfQahYsRZDplqyCSFSASYYtC5xn8syzI49fNLaBNwzpGmKfI8t6CmVBKJTmyuzZEkSeYTmf7EiJGm79TOmrZQEJJZQoMoiqCksjXqe54HpRSklL/ezPjTCL0P17zIEFbrF0i1BmMMcRxbsm/5uc1pkYzIiaCokS/iQrk2PM7J6YUtjEajH5UFaEEIYQcpJ7/ISEhqvsWp1hq2QNfDMLRK7FMNGR1wXffPdywCEX4BfnBMl/B0Y7UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Artifact Repository Browser",title:"Artifact Repository Browser",src:"/static/198eae5ba5dc1fb394205d3f2167cd39/3cbba/artifact-repo-browser.png",srcSet:["/static/198eae5ba5dc1fb394205d3f2167cd39/7fc1e/artifact-repo-browser.png 288w","/static/198eae5ba5dc1fb394205d3f2167cd39/a5df1/artifact-repo-browser.png 576w","/static/198eae5ba5dc1fb394205d3f2167cd39/3cbba/artifact-repo-browser.png 1152w","/static/198eae5ba5dc1fb394205d3f2167cd39/46052/artifact-repo-browser.png 1382w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)("p",null,"Browse the artifacts to see how a Helm repository is organized."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Select the ",Object(n.b)("inlineCode",{parentName:"li"},"index.yaml")," file and View it to see its contents\n",Object(n.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"856px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACDklEQVQ4y6WUiXKbQAyGef8H7CQ2mMPBXOY+FtiFv5IW2mSSpp0pM99IXhZJq19rp2ompHmLrOjQ9vOBesf8D9h9dTvBMWaD1gbrqrFqjW3bse0H5Jtt+x76nvfN8yI4oGeaJkRRhLZtxZ/nGUopsZqSGMYYQn/meLcsi+x1pApaSJJEgrLtug5932McR8q+2erX9Vs42E6ncvgDdoqiQBAEyLJcfK62LEukaUrVzjhbw3ABHMAG08KHgEye51RhgPs9gue5xBX+zYN7vdC7FHVdUoIn2YpsQdX3FMC24VOFnLEsayRpRRU1eCQV+TWKZ0cVtxRECVWlaB8zoaz494K2s737FRDYSQgDz1e4ugr3twVvsSa7In6sCKNF1mSdiO6WIJzhBzP5NC61phbZCXFs0w0dNYfrhnIkY1Z6aYR93+RYWq9/VPkURiq042CkT9y7OH6I0iwIixPHMfVrkj1n808h3iv8qYdWlFCE8X0PNxIkCG4iTpal1K8nJchFEPb/IopG0zTI8hp5YYXIcx6bgYL01J9ZaBru14yq/m27r0QZhhWvlx4/Xnrc/FHwiCCc4HojidUJrtfhcrW8vFrYT9KBihllVh2OqtSCMMzouAmeTztj4zjQbWkpWScinWwi2Gm1rH0QhaXme6jUSHdXyXVj+E73w0ABbeavMcefw3ZMxHHk/304IBfFz08QxtM/yrS1tgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Helm Repository Index",title:"Helm Repository Index",src:"/static/e1b1f707d85402b7bf70674715f25480/4fce3/helm-repo-index.png",srcSet:["/static/e1b1f707d85402b7bf70674715f25480/7fc1e/helm-repo-index.png 288w","/static/e1b1f707d85402b7bf70674715f25480/a5df1/helm-repo-index.png 576w","/static/e1b1f707d85402b7bf70674715f25480/4fce3/helm-repo-index.png 856w"],sizes:"(max-width: 856px) 100vw, 856px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(n.b)("li",{parentName:"ul"},"Expand a chart’s branch to see that the ",Object(n.b)("inlineCode",{parentName:"li"},"tgz")," file contains the chart directory structure\n",Object(n.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"528px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.7638888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAABM0lEQVQ4y5WUWY6EMAxEuf8lEeKHfd83z7xIRhkm6g6RSgmBlMvlmEB+RxRF0jSNDMMgfd/Luq5sy3Vdf2afEZznKSAMQynLUrquk+M4bqJveAYM9MWyLEZh27ZG5TiOXoqe6g0hChkQTdNkSCGf59k8EwwbmNnTtW2N4lYI6bZtkmXZrZD08VZVA9bsE4jv/3lIFMBLEMexQZ7nxtOiKKSqqpsY1HVtlOK1nlMEKAFEJE3IKVCappIkiSHmsA3S5Xs9ZyN4Vkv91AOkCYGrus5royS2l6SCEhSTHqR20E9wEgIUQqb+AYJ8I3USMkNINbW6rivinTIz/mkrsvZtw4+EkJE2V0WL9booYN/3+2Jr19j97a3Q9s/u6zd/HSchZKqQ9ZtfmdNDiGg7+ppOwQJfhT+jOjgbQ9qTaQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Helm Chart Structure",title:"Helm Chart Structure",src:"/static/1cf433a7e30805f30599c805c0d564cc/3d774/helm-chart-structure.png",srcSet:["/static/1cf433a7e30805f30599c805c0d564cc/7fc1e/helm-chart-structure.png 288w","/static/1cf433a7e30805f30599c805c0d564cc/3d774/helm-chart-structure.png 528w"],sizes:"(max-width: 528px) 100vw, 528px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)("p",null,"Notice that each chart has its own URL in Artifactory, and index lists the URL for a chart."),Object(n.b)("h2",null,"Conclusion"),Object(n.b)("p",null,"The ",Object(n.b)(s.a,{name:"env",mdxType:"Globals"})," includes an artifact repository manager called Artifactory, which it uses to host a Helm repository.\nAs the CI pipeline builds the Helm chart for an application, it stores the chart in the Artifactory repository. When the ArgoCD pipeline deploys an application, it retrieves the chart from the Artifactory repository."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tools-artifactory-index-mdx-3d1cb3b724455b9987e4.js.map
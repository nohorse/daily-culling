(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(149),o=a(147);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},142:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(141),c=a.n(u);a.d(e,"Link",function(){return c.a}),a.d(e,"withPrefix",function(){return u.withPrefix}),a.d(e,"navigate",function(){return u.navigate}),a.d(e,"push",function(){return u.push}),a.d(e,"replace",function(){return u.replace}),a.d(e,"navigateTo",function(){return u.navigateTo});var s=a(143),l=a.n(s);a.d(e,"PageRenderer",function(){return l.a});var d=a(32);a.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(t,e,a){var n;t.exports=(n=a(145))&&n.default||n},144:function(t){t.exports={data:{site:{siteMetadata:{title:"Daily Culling"}}}}},145:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(52),c=a(2),s=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},146:function(t,e,a){},147:function(t,e,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),u=a.n(o),c=a(150),s=a.n(c),l=a(142);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,u=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:u,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:u},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},e.a=d;var p="1025518380"},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Daily Culling",description:"We all have things we can get rid of to make a better life. Why not make that part of your daily routine?",author:"@nohorse"}}}}},149:function(t,e,a){"use strict";var n=a(144),r=a(0),i=a.n(r),o=a(4),u=a.n(o),c=a(142),s=function(t){var e=t.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};s.propTypes={siteTitle:u.a.string},s.defaultProps={siteTitle:""};var l=s,d=(a(146),function(t){var e=t.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,i.a.createElement("footer",null,"© 2018, Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:u.a.node.isRequired};e.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-c5139e1f969cdc095ac3.js.map
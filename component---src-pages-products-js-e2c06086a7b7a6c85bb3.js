"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[447],{7528:function(e,t,a){var n=a(6540),r=a(4794);t.A=function(e){var t,a;let{description:c,title:l,children:m}=e;const{site:i}=(0,r.useStaticQuery)("63159454"),s=c||i.siteMetadata.description,o=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,o?`${l} | ${o}`:l),n.createElement("meta",{name:"description",content:s}),n.createElement("meta",{property:"og:title",content:l}),n.createElement("meta",{property:"og:description",content:s}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=i.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:l}),n.createElement("meta",{name:"twitter:description",content:s}),m)}},8527:function(e,t,a){a.r(t);var n=a(6540),r=a(3230),c=a(7528),l=a(2532);t.default=e=>{let{data:t}=e;const a=t.allProductsJson.edges;return n.createElement(r.A,null,n.createElement(c.A,{title:"Products"}),n.createElement("div",{className:"container py-5"},n.createElement("h1",{className:"display-4 mb-4"},"Our Products"),n.createElement("div",{className:"row"},a.map((e=>{var t;let{node:a}=e;return n.createElement("div",{key:a.id,className:"col-md-4 mb-4"},n.createElement("div",{className:"card h-100"},null!==(t=a.image)&&void 0!==t&&t.childImageSharp?n.createElement(l.G,{className:"card-img-top",image:(0,l.c)(a.image.childImageSharp),alt:a.name}):n.createElement("p",null,"No image available"),n.createElement("div",{className:"card-body"},n.createElement("h5",{className:"card-title"},a.name),n.createElement("p",{className:"card-text"},"$",a.price))))})))))}}}]);
//# sourceMappingURL=component---src-pages-products-js-e2c06086a7b7a6c85bb3.js.map
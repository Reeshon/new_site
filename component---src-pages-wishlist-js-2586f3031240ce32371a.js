"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[444],{7528:function(e,t,n){var a=n(6540),i=n(4794);t.A=function(e){var t,n;let{description:l,title:r,children:c}=e;const{site:m}=(0,i.useStaticQuery)("63159454"),o=l||m.siteMetadata.description,s=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,s?`${r} | ${s}`:r),a.createElement("meta",{name:"description",content:o}),a.createElement("meta",{property:"og:title",content:r}),a.createElement("meta",{property:"og:description",content:o}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:r}),a.createElement("meta",{name:"twitter:description",content:o}),c)}},2752:function(e,t,n){n.r(t);var a=n(6540),i=n(3230),l=n(7528),r=n(2568),c=n(8854),m=n(4794);const o=r.default.div.withConfig({displayName:"wishlist__WishlistContainer",componentId:"sc-1beht6r-0"})(["max-width:800px;margin:0 auto;padding:20px;"]),s=r.default.div.withConfig({displayName:"wishlist__WishlistItem",componentId:"sc-1beht6r-1"})(["display:flex;justify-content:space-between;margin-bottom:20px;"]);t.default=()=>{const{wishlistItems:e,removeFromWishlist:t}=(0,c.n)(),n=e.reduce(((e,t)=>e+t.price),0).toFixed(2);return a.createElement(i.A,null,a.createElement(l.A,{title:"Wishlist"}),a.createElement(o,null,a.createElement("h1",null,"Your Wishlist"),0===e.length?a.createElement("p",null,"Your wishlist is empty."):e.map((e=>a.createElement(s,{key:e.id},a.createElement("div",null,a.createElement("h3",null,e.name),a.createElement("p",null,"$",e.price.toFixed(2))),a.createElement("button",{onClick:()=>t(e.id),className:"btn btn-danger"},"Remove")))),e.length>0&&a.createElement(a.Fragment,null,a.createElement("h2",null,"Total: $",n),a.createElement(m.Link,{to:"/checkout/",className:"btn btn-primary"},"Proceed to Checkout"))))}}}]);
//# sourceMappingURL=component---src-pages-wishlist-js-2586f3031240ce32371a.js.map
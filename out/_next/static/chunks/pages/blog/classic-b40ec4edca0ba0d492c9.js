(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2283],{7882:function(e,a,t){"use strict";var s=t(7294),l=s.createElement;function i(e){var a=e.title,t=e.subTitle;return l("div",{className:"page-header text-center",style:{backgroundImage:"url(images/page-header-bg.jpg)"}},l("div",{className:"container"},l("h1",{className:"page-title"},a,l("span",null,t))))}a.Z=s.memo(i)},4590:function(e,a,t){"use strict";var s=t(6265),l=t(7294),i=t(8216),n=t(2679),o=t(8335),c=t(4138),r=t(2870),u=l.createElement;function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}a.Z=(0,i.$j)(null,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},r.Nw))((function(e){var a=e.post,t=e.adClass,s=void 0===t?"":t,i=e.isContent,r=void 0===i||i,d=e.isAuthor,m=void 0===d||d,g=new Date(a.date);return u("article",{className:"entry ".concat(s)},a.image.length<=1?u("figure",{className:"entry-media ".concat("video"==a.type?"entry-video":""),style:{paddingTop:"".concat(a.image[0].height/a.image[0].width*100,"%")}},"video"!==a.type?u(o.Z,{href:"/blog/single/default/".concat(a.slug)},u("div",{className:"lazy-overlay"}),u(n.LazyLoadImage,{alt:"Post",src:"http://localhost:4000"+a.image[0].url,threshold:500,effect:"blur",height:"auto"})):u(l.Fragment,null,u(o.Z,{href:"/blog/single/default/".concat(a.slug)},u("div",{className:"lazy-overlay"}),u(n.LazyLoadImage,{alt:"Post",src:"http://localhost:4000"+a.image[0].url,threshold:500,effect:"blur",height:"auto"})),u("a",{href:"https://www.youtube.com/watch?v=vBPgmASQ1A0",onClick:function(a){a.preventDefault(),e.showVideo()},className:"btn-video btn-iframe"},u("i",{className:"icon-play"})))):u("figure",{className:"entry-media",style:{paddingTop:"".concat(a.image[0].height/a.image[0].width*100,"%")}},u(c.Z,{adClass:"owl-simple owl-light owl-nav-inside cols-1",options:{dots:!1,nav:!0,responsive:{992:{nav:!0}}}},a.image.map((function(e,t){return u(o.Z,{href:"/blog/single/default/".concat(a.slug),key:t},u("div",{className:"lazy-overlay"}),u(n.LazyLoadImage,{alt:"Post",src:"".concat("http://localhost:4000"+e.url),threshold:500,effect:"blur"}))})))),u("div",{className:"entry-body"},u("div",{className:"entry-meta"},m?u(l.Fragment,null,u("span",{className:"entry-author"},"by ",u(o.Z,{href:"/blog/single/default/".concat(a.slug)},a.author)),u("span",{className:"meta-separator"},"|")):"",u(o.Z,{href:"/blog/single/default/".concat(a.slug)},g.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})),u("span",{className:"meta-separator"},"|"),u(o.Z,{href:"/blog/single/default/".concat(a.slug)},a.comments," Comments")),u("h2",{className:"entry-title"},u(o.Z,{href:"/blog/single/default/".concat(a.slug)},a.title)),u("div",{className:"entry-cats"},"in\xa0",a.blog_categories.map((function(e,t){return u("span",{key:t},u(o.Z,{href:{pathname:"/blog/classic",query:{category:e.slug}}},e.name),t<a.blog_categories.length-1?", ":"")}))),r?u("div",{className:"entry-content"},u("p",null,a.content),u(o.Z,{href:"/blog/single/default/".concat(a.slug),className:"read-more"},"Continue Reading")):""))}))},7205:function(e,a,t){"use strict";var s=t(1163),l=t(7294),i=t(2679),n=t(8335),o=l.createElement;function c(e){var a=e.categories,t=void 0===a?[]:a,l=e.toggle,c=void 0!==l&&l,r=(0,s.useRouter)(),u=r.query;return o("div",{className:"sidebar mt-0 ".concat(c?"sidebar-filter px-3 right pt-3":"")},o("div",{className:"widget widget-search"},o("h3",{className:"widget-title"},"Search"),o("form",{action:"#",method:"get"},o("div",{className:"header-search-wrapper search-wrapper-wide"},o("label",{htmlFor:"ws",className:"sr-only"},"Search in blog"),o("input",{type:"search",className:"form-control",name:"ws",id:"ws",placeholder:"Search in blog",required:!0}),o("button",{type:"submit",className:"btn"},o("i",{className:"icon-search"}),o("span",{className:"sr-only"},"Search"))))),o("div",{className:"widget widget-cats"},o("h3",{className:"widget-title"},"Categories"),o("ul",null,r.pathname.includes("single")?t.map((function(e,a){return o("li",{key:a},o(n.Z,{href:{pathname:"/blog/classic/",query:{category:e.slug}},className:"".concat(u.category==e.slug?"active":""),scroll:!1},e.name,o("span",null,e.count)))})):t.map((function(e,a){return o("li",{key:a},o(n.Z,{href:{pathname:r.pathname,query:{category:e.slug}},className:"".concat(u.category==e.slug?"active":""),scroll:!1},e.name,o("span",null,e.count)))})))),o("div",{className:"widget"},o("h3",{className:"widget-title"},"Popular Posts"),o("ul",{className:"posts-list"},o("li",null,o("figure",{className:"position-relative"},o(n.Z,{href:"/blog/single/default/sed-adipiscing-ornare.",className:"w-100"},o("div",{className:"lazy-overlay"}),o(i.LazyLoadImage,{alt:"Post",src:"http://localhost:4000/uploads/post_1_b9361c0eac.jpg",threshold:500,effect:"blur",height:"80"}))),o("div",null,o("span",null,"Nov 22, 2018"),o("h4",null,o(n.Z,{href:"/blog/single/default/sed-adipiscing-ornare."},"Sed adipiscing ornare..")))),o("li",null,o("figure",{className:"position-relative"},o(n.Z,{href:"/blog/single/default/fusce-pellentesque-suscipit.",className:"w-100"},o("div",{className:"lazy-overlay"}),o(i.LazyLoadImage,{alt:"Post",src:"http://localhost:4000/uploads/post_4_be80872f91.jpg",threshold:500,effect:"blur",height:"80"}))),o("div",null,o("span",null,"Nov 19, 2018"),o("h4",null,o(n.Z,{href:"/blog/single/default/fusce-pellentesque-suscipit."},"Fusce pellentesque suscipit.")))),o("li",null,o("figure",{className:"position-relative"},o(n.Z,{href:"/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum.",className:"w-100"},o("div",{className:"lazy-overlay"}),o(i.LazyLoadImage,{alt:"Post",src:"http://localhost:4000/uploads/post_5_3c9d9563f6.jpg",threshold:500,effect:"blur",height:"80"}))),o("div",null,o("span",null,"Nov 12, 2018"),o("h4",null,o(n.Z,{href:"/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum."},"Donec nec justo eget felis facilisis  fermentum.")))),o("li",null,o("figure",{className:"position-relative"},o(n.Z,{href:"/blog/single/default/vivamus-vestibulum-ngtulla-necante.",className:"w-100"},o("div",{className:"lazy-overlay"}),o(i.LazyLoadImage,{alt:"Post",src:"http://localhost:4000/uploads/post_2_a2b4601de7.jpg",threshold:500,effect:"blur",height:"80"}))),o("div",null,o("span",null,"Nov 25, 2018"),o("h4",null,o(n.Z,{href:"/blog/single/default/vivamus-vestibulum-ngtulla-necante."},"Vivamus vestibulum ngtulla necante.")))))),o("div",{className:"widget widget-banner-sidebar"},o("div",{className:"banner-sidebar-title"},"ad box 280 x 280"),o("div",{className:"banner-sidebar banner-overlay"},o(n.Z,{href:"/shop/sidebar/3cols",className:"w-100"},o("div",{className:"lazy-overlay"}),o(i.LazyLoadImage,{alt:"banner",src:"images/blog/sidebar/banner.jpg",threshold:500,height:277,width:"280",effect:"opacity"})),o("div",{className:"banner-content text-left"},o("p",{className:"mb-1"},"online & in-store"),o("h3",{className:"banner-subtitle text-uppercase"},"Spring Sale"),o("h2",{className:"banner-title"},"Up to 60% off",o("br",null),"from $55"),o(n.Z,{href:"/shop/sidebar/3cols",className:"btn btn-outline btn-md btn-outline-white text-uppercase m-0"},"Shop Now")))),o("div",{className:"widget"},o("h3",{className:"widget-title"},"Browse Tags"),o("div",{className:"tagcloud"},o(n.Z,{href:"#"},"fashion"),o(n.Z,{href:"#"},"style"),o(n.Z,{href:"#"},"women"),o(n.Z,{href:"#"},"photography"),o(n.Z,{href:"#"},"travel"),o(n.Z,{href:"#"},"shopping"),o(n.Z,{href:"#"},"hobbies"))),o("div",{className:"widget widget-text"},o("h3",{className:"widget-title"},"About Blog"),o("div",{className:"widget-text-content"},o("p",null,"Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl."))))}a.Z=l.memo(c)},8290:function(e,a,t){"use strict";t.r(a);var s=t(4121),l=t(7934),i=t(1163),n=t(7294),o=t(1243),c=t(8335),r=t(7882),u=t(4590),d=t(7205),m=t(6635),g=t(9638),h=t(6442),f=n.createElement;a.default=(0,m.Z)({ssr:!1})((function(){var e=(0,i.useRouter)(),a=(0,l.t)(g.AU),t=(0,s.Z)(a,2),m=t[0],p=t[1],b=p.data,v=p.loading,y=p.error,N=(0,n.useState)(!1),w=N[0],Z=N[1],k=b&&b.postsByPage.data,L=b&&b.postsByPage.categories;function P(){document.querySelector("body").offsetWidth<992?Z(!0):Z(!1)}return(0,n.useEffect)((function(){m({variables:{page:"classic",category:e.query.category}}),(0,h.qN)()}),[e.query]),(0,n.useEffect)((function(){return window.addEventListener("resize",P),P(),function(){window.removeEventListener("resize",P)}}),[]),y?f("div",null):f("div",{className:"main"},f(r.Z,{title:"Blog Classic",subTitle:"Blog"}),f("nav",{className:"breadcrumb-nav"},f("div",{className:"container"},f("ol",{className:"breadcrumb"},f("li",{className:"breadcrumb-item"},f(c.Z,{href:"/"},"Home")),f("li",{className:"breadcrumb-item"},f(c.Z,{href:"/blog/classic"},"Blog")),f("li",{className:"breadcrumb-item active"},"Classic")))),f("div",{className:"page-content"},f("div",{className:"container"},f("div",{className:"row skeleton-body ".concat(v?"":"loaded")},f("div",{className:"col-lg-9"},v||!k?[1,2,3,4,5,6].map((function(e){return f("div",{className:"skel-single-post",key:e})})):0==k.length?f("p",{className:"blogs-info"},"No posts were found matching your selection."):k.map((function(e,a){return f(u.Z,{post:e,key:a})}))),f("div",{className:"col-lg-3 skel-shop-sidebar skeleton-body ".concat(v?"":"loaded")},f("div",{className:"skel-widget"}),f("div",{className:"skel-widget"}),f("div",{className:"skel-widget"}),f("div",{className:"skel-widget"}),f(o.Z,{className:"sticky-content",offsetTop:70},f(d.Z,{categories:L,toggle:w}),w?f("button",{className:"sidebar-fixed-toggler right",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")?document.querySelector("body").classList.remove("sidebar-filter-active"):document.querySelector("body").classList.add("sidebar-filter-active")}},f("i",{className:"icon-cog"})):"",f("div",{className:"sidebar-filter-overlay",onClick:function(){document.querySelector("body").classList.remove("sidebar-filter-active")}})))))))}))},511:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/classic",function(){return t(8290)}])}},function(e){e.O(0,[1243,9774,2888,179],(function(){return a=511,e(e.s=a);var a}));var a=e.O();_N_E=a}]);
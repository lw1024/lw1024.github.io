(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{332:function(t,e,n){},333:function(t,e,n){},334:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));n(48),n(193),n(108);var i=/#.*$/,r=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function c(t){return s.test(t)}function u(t){return/^mailto:/.test(t)}function a(t){return/^tel:/.test(t)}function l(t){if(c(t))return t;var e=t.match(i),n=e?e[0]:"",s=function(t){return decodeURI(t).replace(i,"").replace(r,"")}(t);return o.test(s)?t:s+".html"+n}function f(t,e,n){if(!t)return n;for(var i,r=e;(r=r.$parent)&&!i;)i=r.$refs[t];return i&&i.$el&&(i=i.$el),i||n}},335:function(t,e,n){},336:function(t,e,n){},337:function(t,e,n){"use strict";var i=n(332);n.n(i).a},338:function(t,e,n){"use strict";var i=n(333);n.n(i).a},339:function(t,e,n){"use strict";var i=n(11),r=n(7),o=n(109),s=n(16),c=n(12),u=n(24),a=n(340),l=n(49),f=n(5),h=n(50),p=n(80).f,d=n(30).f,v=n(14).f,g=n(194).trim,m=r.Number,_=m.prototype,b="Number"==u(h(_)),$=function(t){var e,n,i,r,o,s,c,u,a=l(t,!1);if("string"==typeof a&&a.length>2)if(43===(e=(a=g(a)).charCodeAt(0))||45===e){if(88===(n=a.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(a.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+a}for(s=(o=a.slice(2)).length,c=0;c<s;c++)if((u=o.charCodeAt(c))<48||u>r)return NaN;return parseInt(o,i)}return+a};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var x,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(b?f((function(){_.valueOf.call(n)})):"Number"!=u(n))?a(new m($(e)),n,k):$(e)},I=i?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;I.length>y;y++)c(m,x=I[y])&&!c(k,x)&&v(k,x,d(m,x));k.prototype=_,_.constructor=k,s(r,"Number",k)}},340:function(t,e,n){var i=n(10),r=n(110);t.exports=function(t,e,n){var o,s;return r&&"function"==typeof(o=e.constructor)&&o!==n&&i(s=o.prototype)&&s!==n.prototype&&r(t,s),t}},341:function(t,e,n){var i=n(191),r=n(184),o=n(342),s=n(346);t.exports=function(t,e){if(null==t)return{};var n=i(s(t),(function(t){return[t]}));return e=r(e),o(t,n,(function(t,n){return e(t,n[0])}))}},342:function(t,e,n){var i=n(115),r=n(343),o=n(107);t.exports=function(t,e,n){for(var s=-1,c=e.length,u={};++s<c;){var a=e[s],l=i(t,a);n(l,a)&&r(u,o(a,t),l)}return u}},343:function(t,e,n){var i=n(344),r=n(107),o=n(113),s=n(79),c=n(51);t.exports=function(t,e,n,u){if(!s(t))return t;for(var a=-1,l=(e=r(e,t)).length,f=l-1,h=t;null!=h&&++a<l;){var p=c(e[a]),d=n;if(a!=f){var v=h[p];void 0===(d=u?u(v,p,h):void 0)&&(d=s(v)?v:o(e[a+1])?[]:{})}i(h,p,d),h=h[p]}return t}},344:function(t,e,n){var i=n(345),r=n(112),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&r(s,n)&&(void 0!==n||e in t)||i(t,e,n)}},345:function(t,e,n){var i=n(192);t.exports=function(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},346:function(t,e,n){var i=n(185),r=n(347),o=n(349);t.exports=function(t){return i(t,o,r)}},347:function(t,e,n){var i=n(111),r=n(348),o=n(186),s=n(187),c=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)i(e,o(t)),t=r(t);return e}:s;t.exports=c},348:function(t,e,n){var i=n(190)(Object.getPrototypeOf,Object);t.exports=i},349:function(t,e,n){var i=n(188),r=n(350),o=n(114);t.exports=function(t){return o(t)?i(t,!0):r(t)}},350:function(t,e,n){var i=n(79),r=n(189),o=n(351),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!i(t))return o(t);var e=r(t),n=[];for(var c in t)("constructor"!=c||!e&&s.call(t,c))&&n.push(c);return n}},351:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},352:function(t,e,n){},359:function(t,e,n){"use strict";n(19);var i={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,375,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},r=(n(337),n(9)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(n(338),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),c=(n(339),n(81)),u=n.n(c),a=n(341),l=n.n(a),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},h=Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return h}))},360:function(t,e,n){"use strict";var i=n(4),r=n(34).findIndex,o=n(117),s=n(25),c=!0,u=s("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},361:function(t,e,n){"use strict";var i=n(335);n.n(i).a},362:function(t,e,n){"use strict";var i=n(336);n.n(i).a},363:function(t,e,n){"use strict";var i=n(352);n.n(i).a},376:function(t,e,n){"use strict";n.r(e);n(19),n(360),n(196);var i,r=n(334),o={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(r.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),i=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-i-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},s=(n(361),n(9));function c(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var u={components:{Sticker:Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),i=e.top-n.top;i<20?this.$el.scrollTop=this.$el.scrollTop+i-20:i+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var i=e&&document.getElementById(e);i&&window.scrollTo(0,c(i)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===i&&(i=c(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],r=0,o=function(e){t.activeIndex=e};r<n.length;r++){if(!(c(document.getElementById(n[r].slug))-50<e)){r||o(r);break}o(r)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},a=(n(362),{components:{Toc:Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,i){return n("div",{key:i,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===i}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports,Comment:n(359).a,Newsletter:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,377))}}}),l=(n(363),Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[e("div",{staticClass:"vuepress-blog-theme-content"},[e("Content"),this._v(" "),this.$service.email.enabled?e("Newsletter"):this._e(),this._v(" "),e("hr"),this._v(" "),e("Comment")],1),this._v(" "),e("Toc")],1)}),[],!1,null,null,null));e.default=l.exports}}]);
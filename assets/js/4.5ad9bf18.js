(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(t,n,e){},333:function(t,n,e){},337:function(t,n,e){"use strict";var r=e(332);e.n(r).a},338:function(t,n,e){"use strict";var r=e(333);e.n(r).a},339:function(t,n,e){"use strict";var r=e(11),i=e(7),o=e(109),a=e(16),s=e(12),u=e(24),c=e(340),p=e(49),l=e(5),f=e(50),v=e(80).f,g=e(30).f,m=e(14).f,h=e(194).trim,d=i.Number,_=d.prototype,b="Number"==u(f(_)),y=function(t){var n,e,r,i,o,a,s,u,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(n=(c=h(c)).charCodeAt(0))||45===n){if(88===(e=c.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,r)}return+c};if(o("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var x,N=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof N&&(b?l((function(){_.valueOf.call(e)})):"Number"!=u(e))?c(new d(y(n)),e,N):y(n)},I=r?v(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;I.length>$;$++)s(d,x=I[$])&&!s(N,x)&&m(N,x,g(d,x));N.prototype=_,_.constructor=N,a(i,"Number",N)}},340:function(t,n,e){var r=e(10),i=e(110);t.exports=function(t,n,e){var o,a;return i&&"function"==typeof(o=n.constructor)&&o!==e&&r(a=o.prototype)&&a!==e.prototype&&i(t,a),t}},341:function(t,n,e){var r=e(191),i=e(184),o=e(342),a=e(346);t.exports=function(t,n){if(null==t)return{};var e=r(a(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},342:function(t,n,e){var r=e(115),i=e(343),o=e(107);t.exports=function(t,n,e){for(var a=-1,s=n.length,u={};++a<s;){var c=n[a],p=r(t,c);e(p,c)&&i(u,o(c,t),p)}return u}},343:function(t,n,e){var r=e(344),i=e(107),o=e(113),a=e(79),s=e(51);t.exports=function(t,n,e,u){if(!a(t))return t;for(var c=-1,p=(n=i(n,t)).length,l=p-1,f=t;null!=f&&++c<p;){var v=s(n[c]),g=e;if(c!=l){var m=f[v];void 0===(g=u?u(m,v,f):void 0)&&(g=a(m)?m:o(n[c+1])?[]:{})}r(f,v,g),f=f[v]}return t}},344:function(t,n,e){var r=e(345),i=e(112),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];o.call(t,n)&&i(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},345:function(t,n,e){var r=e(192);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},346:function(t,n,e){var r=e(185),i=e(347),o=e(349);t.exports=function(t){return r(t,o,i)}},347:function(t,n,e){var r=e(111),i=e(348),o=e(186),a=e(187),s=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:a;t.exports=s},348:function(t,n,e){var r=e(190)(Object.getPrototypeOf,Object);t.exports=r},349:function(t,n,e){var r=e(188),i=e(350),o=e(114);t.exports=function(t){return o(t)?r(t,!0):i(t)}},350:function(t,n,e){var r=e(79),i=e(189),o=e(351),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var s in t)("constructor"!=s||!n&&a.call(t,s))&&e.push(s);return e}},351:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},353:function(t,n,e){},359:function(t,n,e){"use strict";e(19);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(2).then(e.t.bind(null,375,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(337),e(9)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(e(338),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=(e(339),e(81)),u=e.n(s),c=e(341),p=e.n(c),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return p()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return f}))},364:function(t,n,e){"use strict";var r=e(353);e.n(r).a},381:function(t,n,e){"use strict";e.r(n);e(3);var r=e(118),i=e.n(r),o=e(8),a=e(359),s={components:{NavigationIcon:o.l,ClockIcon:o.a},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return a.b},resolvePostDate:function(t){return i()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")}}},u=(e(364),e(9)),c=Object(u.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"base-list-layout"}},[e("div",{staticClass:"ui-posts"},t._l(t.pages,(function(n){return e("div",{key:n.key,staticClass:"ui-post"},[e("div",{staticClass:"ui-post-title"},[e("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),e("p",{staticClass:"ui-post-summary"},[t._v("\n        "+t._s(n.frontmatter.summary||n.summary)+"\n        ")]),t._v(" "),n.frontmatter.author?e("div",{staticClass:"ui-post-author"},[e("NavigationIcon"),t._v(" "),e("span",[t._v(t._s(n.frontmatter.author)+" in\n          "+t._s(n.frontmatter.location))])],1):t._e(),t._v(" "),n.frontmatter.date?e("div",{staticClass:"ui-post-date"},[e("ClockIcon"),t._v(" "),e("span",[t._v(t._s(t.resolvePostDate(n.frontmatter.date)))])],1):t._e()])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);n.default=c.exports}}]);
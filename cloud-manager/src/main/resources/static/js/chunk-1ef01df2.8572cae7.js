(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ef01df2"],{"0a42":function(t,n,e){},"1af6":function(t,n,e){var i=e("63b6");i(i.S,"Array",{isArray:e("9003")})},"20fd":function(t,n,e){"use strict";var i=e("d9f6"),a=e("aebd");t.exports=function(t,n,e){n in t?i.f(t,n,a(0,e)):t[n]=e}},"549b":function(t,n,e){"use strict";var i=e("d864"),a=e("63b6"),o=e("241e"),s=e("b0dc"),r=e("3702"),u=e("b447"),c=e("20fd"),l=e("7cd6");a(a.S+a.F*!e("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,a,d,p=o(t),m="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,g=void 0!==h,b=0,v=l(p);if(g&&(h=i(h,f>2?arguments[2]:void 0,2)),void 0==v||m==Array&&r(v))for(n=u(p.length),e=new m(n);n>b;b++)c(e,b,g?h(p[b],b):p[b]);else for(d=v.call(p),e=new m;!(a=d.next()).done;b++)c(e,b,g?s(d,h,[a.value,b],!0):a.value);return e.length=b,e}})},"54a1":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("95d5")},"5b35":function(t,n,e){"use strict";var i=e("d415"),a=e.n(i);a.a},"75fc":function(t,n,e){"use strict";var i=e("a745"),a=e.n(i);function o(t){if(a()(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var s=e("774e"),r=e.n(s),u=e("c8bb"),c=e.n(u);function l(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return o(t)||l(t)||d()}e.d(n,"a",function(){return p})},"774e":function(t,n,e){t.exports=e("d2d5")},"7cf8":function(t,n,e){"use strict";e.d(n,"g",function(){return o}),e.d(n,"j",function(){return s}),e.d(n,"h",function(){return r}),e.d(n,"f",function(){return u}),e.d(n,"i",function(){return c}),e.d(n,"d",function(){return l}),e.d(n,"b",function(){return d}),e.d(n,"a",function(){return p}),e.d(n,"e",function(){return m}),e.d(n,"c",function(){return f});var i=e("b775"),a="cloud-manager";function o(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/summary/institutions/each/period"),method:"post",data:t})}function s(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/summary/site/each/period"),method:"post",data:t})}function r(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/institutions/period"),method:"post",data:t})}function u(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/summary/institutions/all/period"),method:"post",data:t})}function c(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/summary/site/all/period"),method:"post",data:t})}function l(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/site/period"),method:"post",data:t})}function d(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/find/summary/finished"),method:"post",data:t})}function p(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/find/typed/duration"),method:"post",data:t})}function m(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/find/typed/table"),method:"post",data:t})}function f(t){return Object(i["a"])({url:"/".concat(a,"/api/job/v3/site/all"),method:"post",data:t})}},9003:function(t,n,e){t.exports=e("0b93")(176)},"95d5":function(t,n,e){var i=e("40c3"),a=e("5168")("iterator"),o=e("481b");t.exports=e("584a").isIterable=function(t){var n=Object(t);return void 0!==n[a]||"@@iterator"in n||o.hasOwnProperty(i(n))}},a032:function(t,n,e){"use strict";var i=e("0a42"),a=e.n(i);a.a},a5b0:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tooltip",style:t.elmwidth},[t.tooltip?e("el-tooltip",{attrs:{effect:"dark",placement:t.placement}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.content))]),e("span",{ref:"name"},[t._v("\n              "+t._s(t.content)+"\n          ")])]):e("span",{ref:"name"},[t._v("\n          "+t._s(t.content)+"\n      ")])],1)},a=[],o=(e("7f7f"),{name:"OverflowTooltip",props:{width:{type:String,default:""},content:{type:String,default:""},placement:{type:String,default:"top"}},data:function(){return{tooltip:!1,elmwidth:""}},created:function(){},updated:function(){this.updatawidth()},mounted:function(){this.elmwidth="width:".concat(this.width),this.updatawidth()},methods:{updatawidth:function(){var t=this.$refs.name.offsetWidth;t>parseInt(this.width)?this.tooltip=!0:this.tooltip=!1}}}),s=o,r=(e("5b35"),e("2877")),u=Object(r["a"])(s,i,a,!1,null,null,null);n["a"]=u.exports},a745:function(t,n,e){t.exports=e("f410")},aebd:function(t,n,e){t.exports=e("0b93")(26)},c6a8:function(t,n,e){"use strict";e.d(n,"R",function(){return a}),e.d(n,"K",function(){return o}),e.d(n,"S",function(){return s}),e.d(n,"s",function(){return r}),e.d(n,"h",function(){return u}),e.d(n,"P",function(){return c}),e.d(n,"p",function(){return l}),e.d(n,"L",function(){return d}),e.d(n,"T",function(){return p}),e.d(n,"Q",function(){return m}),e.d(n,"v",function(){return f}),e.d(n,"V",function(){return h}),e.d(n,"H",function(){return g}),e.d(n,"I",function(){return b}),e.d(n,"i",function(){return v}),e.d(n,"k",function(){return _}),e.d(n,"j",function(){return y}),e.d(n,"w",function(){return w}),e.d(n,"U",function(){return C}),e.d(n,"J",function(){return j}),e.d(n,"C",function(){return S}),e.d(n,"l",function(){return x}),e.d(n,"D",function(){return O}),e.d(n,"E",function(){return I}),e.d(n,"z",function(){return $}),e.d(n,"f",function(){return T}),e.d(n,"g",function(){return k}),e.d(n,"B",function(){return J}),e.d(n,"G",function(){return L}),e.d(n,"A",function(){return D}),e.d(n,"F",function(){return F}),e.d(n,"a",function(){return z}),e.d(n,"e",function(){return N}),e.d(n,"y",function(){return G}),e.d(n,"q",function(){return A}),e.d(n,"b",function(){return P}),e.d(n,"m",function(){return E}),e.d(n,"d",function(){return W}),e.d(n,"t",function(){return M}),e.d(n,"r",function(){return R}),e.d(n,"N",function(){return B}),e.d(n,"W",function(){return H}),e.d(n,"o",function(){return q}),e.d(n,"M",function(){return V}),e.d(n,"O",function(){return K}),e.d(n,"c",function(){return Q}),e.d(n,"X",function(){return U}),e.d(n,"n",function(){return X}),e.d(n,"u",function(){return Y}),e.d(n,"x",function(){return Z});var i=e("b775");function a(t){return Object(i["a"])({url:"/cloud-manager/api/site/page/cloudManager",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/cloud-manager/api/site/reactivate",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/cloud-manager/api/site/find/all",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/cloud-manager/api/group/findPagedRegionInfoNew",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/cloud-manager/api/site/check",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/cloud-manager/api/site/addNew",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/exchange/dropDownBox",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/cloud-manager/api/site/cloudManager/network",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/cloud-manager/api/site/updateNew",method:"post",data:t})}function m(t){return Object(i["a"])({url:"/cloud-manager/api/site/delete",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/cloud-manager/api/site/find",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/cloud-manager/api/site/checkWeb",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/cloud-manager/api/site/ip/list",method:"post",data:t})}function b(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/party/edit",method:"post",data:t})}function v(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/party/check",method:"post",data:t})}function _(t){return Object(i["a"])({url:"/cloud-manager/api/site/ip/deal",method:"post",data:t})}function y(t){return Object(i["a"])({url:"/cloud-manager/api/site/checkSiteName",method:"post",data:t})}function w(t){return Object(i["a"])({url:"/cloud-manager/api/system/page",method:"post",data:t})}function C(t){return Object(i["a"])({url:"/cloud-manager/api/system/history",method:"post",data:t})}function j(t){return Object(i["a"])({url:"/cloud-manager/api/site/ip/query/history",method:"post",data:t})}function S(t){return Object(i["a"])({url:"/cloud-manager/api/site/institutions",method:"post",data:t})}function x(t){return Object(i["a"])({url:"/cloud-manager/api/site/institutions/delete",method:"post",data:t})}function O(t){return Object(i["a"])({url:"/cloud-manager/api/site/institutions/all/dropdown",method:"post",data:t})}function I(t){return Object(i["a"])({url:"/cloud-manager/api/site/institutions/status/dropdown",method:"post",data:t})}function $(t){return Object(i["a"])({url:"/cloud-manager/api/fate/user/institutions/all",method:"post",data:t})}function T(t){return Object(i["a"])({url:"/cloud-manager/api/authority/cancel",method:"post",data:t})}function k(t){return Object(i["a"])({url:"/cloud-manager/api/authority/cancelList",method:"post",data:t})}function J(t){return Object(i["a"])({url:"/cloud-manager/api/authority/history",method:"post",data:t})}function L(t){return Object(i["a"])({url:"/cloud-manager/api/authority/status",method:"post",data:t})}function D(t){return Object(i["a"])({url:"/cloud-manager/api/authority/details",method:"post",data:t})}function F(t){return Object(i["a"])({url:"/cloud-manager/api/authority/review",method:"post",data:t})}function z(t){return Object(i["a"])({url:"/cloud-manager/api/fate/user/institutions",method:"post",data:t})}function N(t){return Object(i["a"])({url:"/cloud-manager/api/authority/currentAuthority",method:"post",data:t})}function G(t){return Object(i["a"])({url:"/cloud-manager/api/dropdown/version",method:"post",data:t})}function A(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/exchange/page",method:"post",data:t})}function P(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/add",method:"post",data:t})}function E(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/delete",method:"post",data:t})}function W(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/add",method:"post",data:t})}function M(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/page",method:"post",data:t})}function R(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/query",method:"post",data:t})}function B(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/party/page",method:"post",data:t})}function H(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/publish",method:"post",data:t})}function q(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/delete",method:"post",data:t})}function V(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/update",method:"post",data:t})}function K(t){return Object(i["a"])({url:"/cloud-manager/api/product/page",method:"post",data:t})}function Q(t){return Object(i["a"])({url:"/cloud-manager/api/product/add",method:"post",data:t})}function U(t){return Object(i["a"])({url:"/cloud-manager/api/product/update",method:"post",data:t})}function X(t){return Object(i["a"])({url:"/cloud-manager/api/product/delete",method:"post",data:t})}function Y(t){return Object(i["a"])({url:"/cloud-manager/api/product/version",method:"post",data:t})}function Z(t){return Object(i["a"])({url:"/cloud-manager/api/product/name",method:"post",data:t})}},c8bb:function(t,n,e){t.exports=e("54a1")},d17f:function(t,n,e){"use strict";var i=e("e4c5"),a=e.n(i);a.a},d2d5:function(t,n,e){e("1654"),e("549b"),t.exports=e("584a").Array.from},d415:function(t,n,e){},e4c5:function(t,n,e){},ecbd:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"monitor-box"},[e("div",{staticClass:"monitor-header"},[e("el-radio-group",{staticClass:"radio",on:{change:t.handleChahe},model:{value:t.radio,callback:function(n){t.radio=n},expression:"radio"}},[e("el-radio-button",{attrs:{label:"Today’s active data"}},[t._v(t._s(t.$t("m.monitor.todayActiveData")))]),e("el-radio-button",{attrs:{label:"Cumulative active data"}},[t._v(t._s(t.$t("m.monitor.cumulativeActiveData")))])],1)],1),e("div",{staticClass:"monitor-body"},[e("div",{staticClass:"content"},[e("monitortoday",{ref:"monitortoday"})],1)])])},a=[],o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",["Today’s active data"===t.type?e("div",{staticClass:"type-time"},[e("span",[t._v(t._s(t.$t("m.monitor.activeInstitutionsToday")))]),e("span",{staticStyle:{color:"#217AD9"}},[t._v(" "+t._s(t.instTotal))])]):e("div",{staticClass:"time-picker"},[e("span",{staticClass:"date"},[t._v(t._s(t.$t("m.common.date")))]),e("el-date-picker",{attrs:{clearable:!1,type:"daterange","range-separator":"~","value-format":"timestamp","start-placeholder":t.$t("m.common.start"),"end-placeholder":t.$t("m.common.end"),"picker-options":t.pickerOptions},on:{change:t.initi},model:{value:t.timevalue,callback:function(n){t.timevalue=n},expression:"timevalue"}})],1),e("div",{staticClass:"content-item"},[e("div",{staticClass:"jobs-complete"},[e("span",[t._v(t._s(t.$t("m.monitor.totalJobs"))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activejobs.total))]),e("span",[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activejobs.waiting)+" ("+t._s(t._f("toGetFixed")(t.activejobs.waiting/t.activejobs.total))+"%)   ")]),e("span",[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activejobs.running)+" ("+t._s(t._f("toGetFixed")(t.activejobs.running/t.activejobs.total))+"%)   ")]),e("span",[t._v(t._s(t.$t("m.common.success"))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activejobs.success)+" ("+t._s(t._f("toGetFixed")(t.activejobs.success/t.activejobs.total))+"%)   ")]),e("span",[t._v(t._s(t.$t("m.common.failed"))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activejobs.failed)+" ("+t._s(t._f("toGetFixed")(1-t.activejobs.waiting/t.activejobs.total-t.activejobs.running/t.activejobs.total-t.activejobs.success/t.activejobs.total))+"%)")])]),e("div",{staticClass:"institutions-jobs"},[e("div",{staticClass:"institutions"},[t.institutionsList.length>0?e("div",{staticClass:"item-box"},t._l(t.institutionsList,function(n,i){return e("span",{key:i},[e("div",{class:{"item-institution":!0,"institution-activa":n.show},on:{click:function(e){return t.getsite(n,i)}}},[e("overflowtooltip",{staticClass:"item-text",attrs:{width:"100px",content:n.institutions,placement:"top"}}),e("span",{ref:"bar",refInFor:!0,staticClass:"bar",style:t.stylebar},[e("div",{staticClass:"item-bar",style:"width:"+n.total*t.institutionsitemWidth/n.max+"px"}),e("span",{ref:"text",refInFor:!0,staticClass:"text"},[t._v(t._s(n.total))])]),n.show?e("i",{staticClass:"el-icon-caret-right icon-right"}):t._e()],1)])}),0):e("div",{staticClass:"item-box no-date-box"},[t._v("\n                    "+t._s(t.$t("m.common.noData"))+"\n                ")]),e("div",{staticClass:"institutions-pagination"},[e("el-pagination",{attrs:{small:"",background:"",layout:"total, prev, pager, next","page-size":t.pageSizeInst,total:t.instTotal},on:{"current-change":t.handleCurrentChangeInst}})],1)]),e("div",{staticClass:"jobs"},["Today’s active data"===t.type?e("div",{staticClass:"jobs-site-title"},[t._v(t._s(t.$t("m.monitor.activeSitesToday"))+":"+t._s(t.activeSite.active))]):t._e(),e("div",{staticClass:"job-alone-complete"},[e("span",[t._v(" "+t._s(t.$t("m.monitor.totalJobs"))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activeSite.total))]),e("span",[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activeSite.waiting)+" ("+t._s(t._f("toGetFixed")(t.activeSite.waiting/t.activeSite.total))+"%)")]),e("span",[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activeSite.running)+" ("+t._s(t._f("toGetFixed")(t.activeSite.running/t.activeSite.total))+"%)")]),e("span",[t._v(t._s(t.$t("m.common.success"))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activeSite.success)+"  ("+t._s(t._f("toGetFixed")(t.activeSite.success/t.activeSite.total))+"%)")]),e("span",[t._v(t._s(t.$t("m.common.failed"))+"：")]),e("span",{staticClass:"span"},[t._v(t._s(t.activeSite.failed)+"  ("+t._s(t._f("toGetFixed")(1-t.activeSite.waiting/t.activeSite.total-t.activeSite.running/t.activeSite.total-t.activeSite.success/t.activeSite.total))+"%)")])]),e("div",{staticClass:"jobs-title"},[e("span",{staticClass:"waiting"}),e("span",[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"})))]),e("span",{staticClass:"running"}),e("span",[t._v(t._s(t.$t("m.monitor.running",{type:"r"})))]),e("span",{staticClass:"complete"}),e("span",[t._v(t._s(t.$t("m.common.success")))]),e("span",{staticClass:"failed"}),e("span",[t._v(t._s(t.$t("m.common.failed")))])]),t.siteList.length>0?e("div",{staticClass:"jobs-box"},t._l(t.siteList,function(n,i){return e("span",{key:i},[e("div",{ref:"jobs",refInFor:!0,staticClass:"jobs-institution"},[e("overflowtooltip",{staticClass:"jobs-text",attrs:{width:"80px",content:n.site,placement:"top"}}),e("overflowtooltip",{staticClass:"jobs-text",attrs:{width:"50px",content:n.partyId,placement:"top"}}),e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+":\n                                        "+t._s(n.waiting)+"\n                                        ("+t._s(t._f("toGetFixed")(n.waiting/n.total))+"%)\n                                    ")]),e("div",[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+":\n                                        "+t._s(n.running)+"\n                                        ("+t._s(t._f("toGetFixed")(n.running/n.total))+"%)\n                                    ")]),e("div",[t._v(t._s(t.$t("m.common.success"))+":\n                                        "+t._s(n.success)+"\n                                        ("+t._s(t._f("toGetFixed")(n.success/n.total))+"%)\n                                    ")]),e("div",[t._v(t._s(t.$t("m.common.failed"))+":\n                                        "+t._s(n.failed)+"\n                                        ("+t._s(t._f("toGetFixed")(n.failed/n.total))+"%)\n                                    ")])]),e("span",{staticStyle:{height:"24px","vertical-align":"bottom"}},[e("div",{staticClass:"jobs-bar",style:"width:"+n.total*t.sitemWidth/n.max+"px"},[e("div",{staticClass:"jobs-bar-waiting",style:"width:"+n.waiting/n.total*100+"%"}),e("div",{staticClass:"jobs-bar-running",style:"width:"+n.running/n.total*100+"%"}),e("div",{staticClass:"jobs-bar-success",style:"width:"+n.success/n.total*100+"%"}),e("div",{staticClass:"jobs-bar-failed",style:"width:"+n.failed/n.total*100+"%"})])])]),e("span",{staticClass:"text"},[t._v(t._s(n.total))])],1)])}),0):e("div",{staticClass:"jobs-box no-date-box"},[t._v("\n                    "+t._s(t.$t("m.common.noData"))+"\n                ")]),"Today’s active data"!==t.type?e("div",{staticStyle:{height:"34px"}},[e("div",{staticClass:"institutions-pagination"},[e("el-pagination",{attrs:{small:"",background:"",layout:"total, prev, pager, next","page-size":t.pageSizeJob,total:t.JobTotal},on:{"current-change":t.handleCurrentChangeJob}})],1)]):t._e()])])]),e("div",{staticClass:"content-item"},[e("div",{staticClass:"institution-based"},[e("div",{staticClass:"statistics"},[t._v(t._s(t.$t("m.monitor.institutionBasedStatistics")))]),e("div",{staticClass:"cooperation"},[t._v("\n                "+t._s(t.$t("m.monitor.institutionsCooperation"))+"\n            ")]),e("div",{staticClass:"select"},[e("span",{staticClass:"select-text"},[t._v(t._s(t.$t("m.monitor.checkInstitution")))]),e("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.institutionStat,placement:"top"}},[e("el-select",{attrs:{filterable:"",placeholder:t.$t("m.common.pleaseSelect")},on:{change:t.toGetinstitutions},model:{value:t.institutionStat,callback:function(n){t.institutionStat=n},expression:"institutionStat"}},t._l(t.institutionsdownList,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),e("div",{staticClass:"institution-table"},[e("el-table",{attrs:{data:t.tableIntSateData,"header-row-class-name":"tableHead","header-cell-class-name":"tableHeadCell","cell-class-name":"tableCell","header-cell-style":{background:"#FAFBFC"},"cell-style":{background:"#FAFBFC"},border:"","max-height":"250"}},[e("el-table-column",{attrs:{prop:"institutions",fixed:"",align:"center",resizable:!1,label:""},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:n.row.institutions,placement:"top"}},[e("span",{staticStyle:{color:"#4E5766","font-weight":"bold"}},[t._v(t._s(n.row.institutions))])])]}}])}),e("el-table-column",{attrs:{prop:"name",label:t.$t("m.monitor.jobs"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.total))])]}}])}),e("el-table-column",{attrs:{prop:"",label:t.$t("m.monitor.waiting",{type:"W"}),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.waiting)+" ("+t._s(t._f("toGetFixed")(n.row.waiting/n.row.total))+"%)")])]}}])}),e("el-table-column",{attrs:{prop:"",label:t.$t("m.monitor.running",{type:"R"}),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.running)+" ("+t._s(t._f("toGetFixed")(n.row.running/n.row.total))+"%)")])]}}])}),e("el-table-column",{attrs:{prop:"",label:t.$t("m.common.success"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.success)+" ("+t._s(t._f("toGetFixed")(n.row.success/n.row.total))+"%)")])]}}])}),e("el-table-column",{attrs:{prop:"",label:t.$t("m.common.failed"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.failed)+" ("+t._s(t._f("toGetFixed")(n.row.failed/n.row.total))+"%)")])]}}])})],1),e("div",{staticClass:"paginationInstitutionSize"},[e("el-pagination",{attrs:{background:"","current-page":t.currentInstitutionPage,"page-size":t.pageInstitutionSize,layout:"total, prev, pager, next, jumper",total:t.totalInstitution},on:{"current-change":t.handleInstitutionCurrentChange,"update:currentPage":function(n){t.currentInstitutionPage=n},"update:current-page":function(n){t.currentInstitutionPage=n}}})],1)],1)])]),e("div",{staticClass:"content-item"},[e("div",{staticClass:"institution-based"},[e("div",{staticClass:"statistics"},[t._v(t._s(t.$t("m.monitor.siteBasedStatistics")))]),e("div",{staticClass:"cooperation"},[t._v("\n                "+t._s(t.$t("m.monitor.sitesCooperation"))+"\n            ")]),e("div",{staticClass:"select"},[e("span",{staticClass:"select-text"},[t._v(t._s(t.$t("m.monitor.checkInstitution")))]),e("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.institutionSite,placement:"top"}},[e("el-select",{attrs:{filterable:"",placeholder:t.$t("m.common.pleaseSelect")},on:{change:t.toGetIntSite},model:{value:t.institutionSite,callback:function(n){t.institutionSite=n},expression:"institutionSite"}},t._l(t.institutionsdownList,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),e("div",{staticClass:"institution-table"},[e("el-table",{key:t.cacheNum,ref:"singleTable",attrs:{"header-row-class-name":"tableHead","header-cell-class-name":"tableHeadCell","cell-class-name":"tableCell",data:t.tableIntSiteData,"span-method":t.objectSpanMethod,"header-cell-style":{background:"#FAFBFC"},"cell-style":{background:"#FAFBFC"},border:"","max-height":"250"}},[e("el-table-column",{attrs:{prop:"",align:"center",resizable:!1,label:""},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:n.row.institution,placement:"top"}},[e("span",{staticStyle:{color:"#4E5766","font-weight":"bold"}},[t._v(t._s(n.row.institution))])])]}}])}),e("el-table-column",{attrs:{prop:"siteName",align:"center",resizable:!1,label:"site","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:n.row.institutionSiteName,placement:"top"}},[e("span",[t._v(t._s(n.row.institutionSiteName))])])]}}])}),t._l(t.tableIntLabeList,function(n,i){return e("el-table-column",{key:i,attrs:{align:"center",resizable:!1,prop:n,label:n},scopedSlots:t._u([{key:"default",fn:function(i){return[i.row[n]?e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",[e("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+"："+t._s(i.row[n].waitingJobs)+"  ")]),e("span",[t._v("("+t._s(i.row[n].waitingPercent)+")")])]),e("div",[e("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+t._s(i.row[n].runningJobs)+"  ")]),e("span",[t._v("("+t._s(i.row[n].runningPercent)+")")])]),e("div",[e("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.common.success"))+"："+t._s(i.row[n].successJobs)+"  ")]),e("span",[t._v("("+t._s(i.row[n].successPercent)+")")])]),e("div",[e("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.common.failed"))+"："+t._s(i.row[n].failedJobs)+"  ")]),e("span",[t._v("("+t._s(i.row[n].failedPercent)+")")])])]),e("span",[t._v(t._s(i.row[n].totalJobs))])]):e("span",[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",[e("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+"：0  ")]),e("span",[t._v("(0%)")])]),e("div",[e("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+"：0  ")]),e("span",[t._v("(0%)")])]),e("div",[e("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.common.success"))+"：0  ")]),e("span",[t._v("(0%)")])]),e("div",[e("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.common.failed"))+"：0  ")]),e("span",[t._v("(0%)")])])]),e("span",[t._v("0")])])],1)]}}],null,!0)},[e("template",{slot:"header"},[e("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:n,placement:"top"}},[e("span",[t._v(t._s(n))])])],1)],2)})],2),e("div",{staticClass:"paginationInstitutionSize"},[e("el-pagination",{attrs:{background:"","current-page":t.currentSitePage,"page-size":t.pageInstitutionSize,layout:"total, prev, pager, next, jumper",total:t.totalSitetitution},on:{"current-change":t.handleSiteCurrentChange,"update:currentPage":function(n){t.currentSitePage=n},"update:current-page":function(n){t.currentSitePage=n}}})],1)],1)])])])},s=[],r=e("75fc"),u=(e("96cf"),e("3b8d")),c=(e("ac6a"),e("cebc")),l=e("a5b0"),d=e("7cf8"),p=e("c6a8"),m={name:"monitor",components:{overflowtooltip:l["a"]},filters:{toGetFixed:function(t){var n=100*t;return n?n.toFixed(1):0}},data:function(){return{type:"Today’s active data",dateToday:(new Date).getTime(),timevalue:[new Date-2592e6,(new Date).getTime()],instTotal:0,JobTotal:0,pageSizeInst:80,pageSizeJob:80,instpageNum:1,siteTotal:0,JobpageNum:1,activejobs:{},activeSite:{},institutionsList:[],siteList:[],institutionsdownList:[],tableIntSateData:[],tableIntSiteData:[],tableIntLabeList:[],institutionsitemWidth:"",stylebar:"",sitemWidth:"",institutionStat:"",institutionSite:"",value:"",lengthList:[],pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},currentInstitutionPage:1,currentSitePage:1,pageInstitutionSize:10,totalInstitution:0,totalSitetitution:0,firstPageNum:1,secondPageNum:1,firstTempVal:"",secondTempVal:"",nowInstitus:{row:{},index:""},cacheNum:0}},watch:{institutionsList:{handler:function(t){var n=this;t.length>0&&this.$nextTick(function(){n.calcinstitution().then(function(t){n.institutionsitemWidth=n.$refs.bar[0].clientWidth-t-30})})},immediate:!0,deep:!0},siteList:{handler:function(t){var n=this;t.length>0&&this.$nextTick(function(){n.sitemWidth=n.$refs.jobs[0].clientWidth-160})}}},created:function(){},mounted:function(){this.initi()},methods:{initi:function(){this.getInstitutionsListToday(),this.institutionsAll(),this.getinstitutionsdownList()},institutionsAll:function(){var t={beginDate:this.dateToday,endDate:this.dateToday,pageNum:this.instpageNum,pageSize:80};"Today’s active data"!==this.type&&(t.beginDate=this.timevalue[0],t.endDate=this.timevalue[1]),Object(d["f"])(t).then(function(t){e(t)});var n=this,e=function(t){var e=t&&t.data||{},i={};i.active=e.institutionsCount||0,i.waiting=e.waitingJobCount||0,i.running=e.runningJobCount||0,i.success=e.successJobCount||0,i.failed=e.failedJobCount||0,i.total=e.failedJobCount+e.successJobCount+e.runningJobCount+e.waitingJobCount,n.activejobs=Object(c["a"])({},i)}},getinstitutionsdownList:function(){var t=this;this.institutionsdownList=[],Object(p["a"])().then(function(n){n.data.forEach(function(n,e){var i={};i.value=n,i.label=n,t.institutionsdownList.push(i)}),t.institutionSite=t.institutionStat=t.institutionsdownList[0].value,t.toGetinstitutions(t.institutionStat),t.toGetIntSite(t.institutionSite,"type")})},calcinstitution:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var n,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.$refs.text.map(function(t){return t.clientWidth}),t.next=3,Math.max.apply(Math,Object(r["a"])(n));case 3:return e=t.sent,this.stylebar="width:calc(100% - ".concat(e,"px - 110px)"),t.abrupt("return",e);case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),handleCurrentChangeInst:function(t){this.instpageNum=t,this.institutionsAll()},handleCurrentChangeJob:function(t){this.JobpageNum=t,this.nowInstitus.index?this.getsite(this.nowInstitus.row,this.nowInstitus.index):this.getsite(this.institutionsList[0],0)},handleInstitutionCurrentChange:function(t){this.firstPageNum=t,this.toGetinstitutions(this.institutionStat)},handleSiteCurrentChange:function(t){this.secondPageNum=t,this.toGetIntSite(this.institutionSite,"type")},getInstitutionsListToday:function(){var t={beginDate:this.dateToday,endDate:this.dateToday,pageNum:1,pageSize:80};"Today’s active data"!==this.type&&(t.beginDate=this.timevalue[0],t.endDate=this.timevalue[1]),Object(d["g"])(t).then(function(t){e(t)});var n=this,e=function(t){n.instTotal=t.data.totalRecord;var e=[];t.data.list.forEach(function(t){e.push(t.runningJobCount+t.failedJobCount+t.successJobCount+t.waitingJobCount)});var i=Math.max.apply(Math,e);n.institutionsList=t.data.list.map(function(t){var n={};return n.institutions=t.institutions,n.waiting=t.waitingJobCount,n.running=t.runningJobCount,n.success=t.successJobCount,n.failed=t.failedJobCount,n.total=n.waiting+n.running+n.success+n.failed,n.max=i,n.show=!1,n}),n.getsite(n.institutionsList[0],0)}},getsite:function(t,n){var e=this.institutionsList.map(function(t,e){return t.show=e===n,t});this.institutionsList=Object(r["a"])(e),this.nowInstitus={row:t,index:n};var i={beginDate:this.dateToday,endDate:this.dateToday,institutions:t?t.institutions:""};"Today’s active data"!==this.type&&(i.beginDate=this.timevalue[0],i.endDate=this.timevalue[1]),Object(d["j"])(i).then(function(t){o(t)});var a=this,o=function(n){a.JobTotal=n.data.totalRecord,a.getsiteAllToday(t?t.institutions:"");var e=[];n.data.list.forEach(function(t){e.push(t.failedJobCount+t.successJobCount+t.runningJobCount+t.waitingJobCount)});var i=Math.max.apply(Math,e);a.siteList=n.data.list.map(function(t){var n={};return n.partyId=t.partyId,n.site=t.site,n.waiting=t.waitingJobCount,n.running=t.runningJobCount,n.success=t.successJobCount,n.failed=t.failedJobCount,n.total=n.waiting+n.running+n.success+n.failed,n.max=i,n})}},getsiteAllToday:function(t){var n={beginDate:this.dateToday,endDate:this.dateToday,institutions:t,pageNum:1,pageSize:100};"Today’s active data"!==this.type&&(n.beginDate=this.timevalue[0],n.endDate=this.timevalue[1]),Object(d["i"])(n).then(function(t){i(t)});var e=this,i=function(t){var n=t.data,i={};i.active=n.siteCount||0,i.waiting=n.waitingJobCount||0,i.running=n.runningJobCount||0,i.success=n.successJobCount||0,i.failed=n.failedJobCount||0,i.total=i.waiting+i.running+i.success+i.failed,e.activeSite=Object(c["a"])({},i)}},objectSpanMethod:function(t){t.row,t.column;var n=t.rowIndex,e=t.columnIndex;if(0===e){var i=this.lengthList[n],a=i>0?1:0;return{rowspan:i,colspan:a}}},toGetinstitutions:function(t){var n={beginDate:this.dateToday,endDate:this.dateToday,institutions:t||this.institutionStat};"Today’s active data"!==this.type&&(n.beginDate=this.timevalue[0],n.endDate=this.timevalue[1]),Object(d["h"])(n).then(function(t){i(t)});var e=this,i=function(n){e.totalInstitution=n.data.totalRecord;var i=[];n.data.list.forEach(function(n){var e=Object(c["a"])({waiting:parseInt(n.waitingJobCountForInstitutions)||0,running:parseInt(n.runningJobCountForInstitutions)||0,failed:parseInt(n.failedJobCountForInstitutions)||0,success:parseInt(n.successJobCountForInstitutions)||0},n);e.total=e.failed+e.success+e.running+e.waiting,n.institutions===t?i.unshift(e):i.push(e)}),e.$nextTick(function(){e.tableIntSateData=[].concat(i)})}},toGetIntSite:function(t,n){var e=this;this.institutionSite=t;var i={beginDate:this.dateToday,endDate:this.dateToday,institutions:t||this.institutionSite,pageNum:this.secondPageNum,pageSize:10};"Today’s active data"!==this.type&&(i.beginDate=this.timevalue[0],i.endDate=this.timevalue[1]),Object(d["d"])(i).then(function(t){e.getsiteSataData(t,n)})},getsiteSataData:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(n,e){var i,a,o,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.lengthList=[],this.tableIntLabeList=[],this.tableIntSiteData=[],this.totalSitetitution=n.data&&n.data.total||0,this.tableIntLabeList=n.data&&n.data.siteList,i=[],a=[],o=[],n.data&&n.data.data.forEach(function(t){if(t.institutionSiteList.length>0)if(t.institution===s.institutionSite){o.push(t.institutionSiteList.length);for(var n=0;n<t.institutionSiteList.length-1;n++)o.push(0)}else{s.lengthList.push(t.institutionSiteList.length);for(var e=0;e<t.institutionSiteList.length-1;e++)s.lengthList.push(0)}else s.lengthList.push(t.institutionSiteList.length);s.lengthList=[].concat(o,Object(r["a"])(s.lengthList)),t.institutionSiteList.forEach(function(n,e){var o={};o.institutionSiteName=n.institutionSiteName,o.institution=t.institution,n.mixSiteModeling.forEach(function(t){o[t.siteName]=Object(c["a"])({},t)}),o.institution===s.institutionSite?a.push(o):i.push(o)})}),i=a.concat(i),this.$nextTick(function(){s.tableIntSiteData=Object(r["a"])(i)});case 11:case"end":return t.stop()}},t,this)}));function n(n,e){return t.apply(this,arguments)}return n}()}},f=m,h=(e("a032"),e("2877")),g=Object(h["a"])(f,o,s,!1,null,null,null),b=g.exports,v={name:"monitor",components:{monitortoday:b},filters:{},data:function(){return{radio:"Today’s active data"}},created:function(){},mounted:function(){},methods:{handleChahe:function(t){this.$refs["monitortoday"].type=t,this.$refs["monitortoday"].initi()}}},_=v,y=(e("d17f"),Object(h["a"])(_,i,a,!1,null,null,null));n["default"]=y.exports},f410:function(t,n,e){e("1af6"),t.exports=e("584a").Array.isArray}}]);
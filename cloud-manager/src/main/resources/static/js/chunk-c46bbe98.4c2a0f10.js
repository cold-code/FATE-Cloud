(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c46bbe98"],{"0a42":function(t,n,i){},"1af6":function(t,n,i){var e=i("63b6");e(e.S,"Array",{isArray:i("9003")})},"20fd":function(t,n,i){"use strict";var e=i("d9f6"),a=i("aebd");t.exports=function(t,n,i){n in t?e.f(t,n,a(0,i)):t[n]=i}},"549b":function(t,n,i){"use strict";var e=i("d864"),a=i("63b6"),s=i("241e"),o=i("b0dc"),r=i("3702"),c=i("b447"),u=i("20fd"),l=i("7cd6");a(a.S+a.F*!i("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var n,i,a,d,p=s(t),m="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,g=void 0!==h,v=0,b=l(p);if(g&&(h=e(h,f>2?arguments[2]:void 0,2)),void 0==b||m==Array&&r(b))for(n=c(p.length),i=new m(n);n>v;v++)u(i,v,g?h(p[v],v):p[v]);else for(d=b.call(p),i=new m;!(a=d.next()).done;v++)u(i,v,g?o(d,h,[a.value,v],!0):a.value);return i.length=v,i}})},"54a1":function(t,n,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"75fc":function(t,n,i){"use strict";var e=i("a745"),a=i.n(e);function s(t){if(a()(t)){for(var n=0,i=new Array(t.length);n<t.length;n++)i[n]=t[n];return i}}var o=i("774e"),r=i.n(o),c=i("c8bb"),u=i.n(c);function l(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return s(t)||l(t)||d()}i.d(n,"a",function(){return p})},"774e":function(t,n,i){t.exports=i("d2d5")},9003:function(t,n,i){t.exports=i("0b93")(176)},"95d5":function(t,n,i){var e=i("40c3"),a=i("5168")("iterator"),s=i("481b");t.exports=i("584a").isIterable=function(t){var n=Object(t);return void 0!==n[a]||"@@iterator"in n||s.hasOwnProperty(e(n))}},a032:function(t,n,i){"use strict";var e=i("0a42"),a=i.n(e);a.a},a745:function(t,n,i){t.exports=i("f410")},aebd:function(t,n,i){t.exports=i("0b93")(26)},c6a8:function(t,n,i){"use strict";i.d(n,"J",function(){return a}),i.d(n,"p",function(){return s}),i.d(n,"h",function(){return o}),i.d(n,"H",function(){return r}),i.d(n,"E",function(){return c}),i.d(n,"K",function(){return u}),i.d(n,"I",function(){return l}),i.d(n,"s",function(){return d}),i.d(n,"M",function(){return p}),i.d(n,"C",function(){return m}),i.d(n,"j",function(){return f}),i.d(n,"i",function(){return h}),i.d(n,"t",function(){return g}),i.d(n,"L",function(){return v}),i.d(n,"D",function(){return b}),i.d(n,"y",function(){return _}),i.d(n,"z",function(){return y}),i.d(n,"f",function(){return w}),i.d(n,"g",function(){return C}),i.d(n,"u",function(){return S}),i.d(n,"B",function(){return j}),i.d(n,"x",function(){return x}),i.d(n,"A",function(){return O}),i.d(n,"a",function(){return I}),i.d(n,"e",function(){return $}),i.d(n,"w",function(){return T}),i.d(n,"n",function(){return D}),i.d(n,"b",function(){return k}),i.d(n,"k",function(){return L}),i.d(n,"d",function(){return J}),i.d(n,"q",function(){return F}),i.d(n,"o",function(){return G}),i.d(n,"N",function(){return A}),i.d(n,"m",function(){return z}),i.d(n,"F",function(){return N}),i.d(n,"G",function(){return P}),i.d(n,"c",function(){return M}),i.d(n,"O",function(){return E}),i.d(n,"l",function(){return W}),i.d(n,"r",function(){return B}),i.d(n,"v",function(){return R});var e=i("b775");function a(t){return Object(e["a"])({url:"/cloud-manager/api/site/page/cloudManager",method:"post",data:t})}function s(t){return Object(e["a"])({url:"/cloud-manager/api/group/findPagedRegionInfoNew",method:"post",data:t})}function o(t){return Object(e["a"])({url:"/cloud-manager/api/site/check",method:"post",data:t})}function r(t){return Object(e["a"])({url:"/cloud-manager/api/site/addNew",method:"post",data:t})}function c(t){return Object(e["a"])({url:"/cloud-manager/api/site/cloudManager/network",method:"post",data:t})}function u(t){return Object(e["a"])({url:"/cloud-manager/api/site/updateNew",method:"post",data:t})}function l(t){return Object(e["a"])({url:"/cloud-manager/api/site/delete",method:"post",data:t})}function d(t){return Object(e["a"])({url:"/cloud-manager/api/site/find",method:"post",data:t})}function p(t){return Object(e["a"])({url:"/cloud-manager/api/site/checkWeb",method:"post",data:t})}function m(t){return Object(e["a"])({url:"/cloud-manager/api/site/ip/list",method:"post",data:t})}function f(t){return Object(e["a"])({url:"/cloud-manager/api/site/ip/deal",method:"post",data:t})}function h(t){return Object(e["a"])({url:"/cloud-manager/api/site/checkSiteName",method:"post",data:t})}function g(t){return Object(e["a"])({url:"/cloud-manager/api/system/page",method:"post",data:t})}function v(t){return Object(e["a"])({url:"/cloud-manager/api/system/history",method:"post",data:t})}function b(t){return Object(e["a"])({url:"/cloud-manager/api/site/ip/query/history",method:"post",data:t})}function _(t){return Object(e["a"])({url:"/cloud-manager/api/site/institutions",method:"post",data:t})}function y(t){return Object(e["a"])({url:"/cloud-manager/api/site/institutions/all/dropdown",method:"post",data:t})}function w(t){return Object(e["a"])({url:"/cloud-manager/api/authority/cancel",method:"post",data:t})}function C(t){return Object(e["a"])({url:"/cloud-manager/api/authority/cancelList",method:"post",data:t})}function S(t){return Object(e["a"])({url:"/cloud-manager/api/authority/history/fateManager",method:"post",data:t})}function j(t){return Object(e["a"])({url:"/cloud-manager/api/authority/status",method:"post",data:t})}function x(t){return Object(e["a"])({url:"/cloud-manager/api/authority/details",method:"post",data:t})}function O(t){return Object(e["a"])({url:"/cloud-manager/api/authority/review",method:"post",data:t})}function I(t){return Object(e["a"])({url:"/cloud-manager/api/fate/user/institutions",method:"post",data:t})}function $(t){return Object(e["a"])({url:"/cloud-manager/api/authority/currentAuthority",method:"post",data:t})}function T(t){return Object(e["a"])({url:"/cloud-manager/api/dropdown/version",method:"post",data:t})}function D(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/exchange/page",method:"post",data:t})}function k(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/add",method:"post",data:t})}function L(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/delete",method:"post",data:t})}function J(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/add",method:"post",data:t})}function F(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/page",method:"post",data:t})}function G(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/query",method:"post",data:t})}function A(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/publish",method:"post",data:t})}function z(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/delete",method:"post",data:t})}function N(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/update",method:"post",data:t})}function P(t){return Object(e["a"])({url:"/cloud-manager/api/product/page",method:"post",data:t})}function M(t){return Object(e["a"])({url:"/cloud-manager/api/product/add",method:"post",data:t})}function E(t){return Object(e["a"])({url:"/cloud-manager/api/product/update",method:"post",data:t})}function W(t){return Object(e["a"])({url:"/cloud-manager/api/product/delete",method:"post",data:t})}function B(t){return Object(e["a"])({url:"/cloud-manager/api/product/version",method:"post",data:t})}function R(t){return Object(e["a"])({url:"/cloud-manager/api/product/name",method:"post",data:t})}},c8bb:function(t,n,i){t.exports=i("54a1")},d17f:function(t,n,i){"use strict";var e=i("e4c5"),a=i.n(e);a.a},d2d5:function(t,n,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},e4c5:function(t,n,i){},ecbd:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"monitor-box"},[i("div",{staticClass:"monitor-header"},[i("el-radio-group",{staticClass:"radio",on:{change:t.handleChahe},model:{value:t.radio,callback:function(n){t.radio=n},expression:"radio"}},[i("el-radio-button",{attrs:{label:"Today’s active data"}},[t._v(t._s(t.$t("m.monitor.todayActiveData")))]),i("el-radio-button",{attrs:{label:"Cumulative active data"}},[t._v(t._s(t.$t("m.monitor.cumulativeActiveData")))])],1)],1),i("div",{staticClass:"monitor-body"},[i("div",{staticClass:"content"},[i("monitortoday",{ref:"monitortoday"})],1)])])},a=[],s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",["Today’s active data"===t.type?i("div",{staticClass:"type-time"},[i("span",[t._v(t._s(t.$t("m.monitor.activeInstitutionsToday")))]),i("span",{staticStyle:{color:"#217AD9"}},[t._v(t._s(t.activejobs.active))])]):i("div",{staticClass:"time-picker"},[i("span",{staticClass:"date"},[t._v(t._s(t.$t("m.common.date")))]),i("el-date-picker",{attrs:{clearable:!1,type:"daterange","range-separator":"~","value-format":"timestamp","start-placeholder":t.$t("m.common.start"),"end-placeholder":t.$t("m.common.end"),"picker-options":t.pickerOptions},on:{change:t.initi},model:{value:t.timevalue,callback:function(n){t.timevalue=n},expression:"timevalue"}})],1),i("div",{staticClass:"content-item"},[i("div",{staticClass:"jobs-complete"},[i("span",[t._v(t._s(t.$t("m.monitor.totalJobs"))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.total))]),i("span",[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.waiting)+" ("+t._s(t._f("toGetFixed")(t.activejobs.waiting/t.activejobs.total))+"%)   ")]),i("span",[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.running)+" ("+t._s(t._f("toGetFixed")(t.activejobs.running/t.activejobs.total))+"%)   ")]),i("span",[t._v(t._s(t.$t("m.common.success"))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.success)+" ("+t._s(t._f("toGetFixed")(t.activejobs.success/t.activejobs.total))+"%)   ")]),i("span",[t._v(t._s(t.$t("m.common.failed"))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activejobs.failed)+" ("+t._s(t._f("toGetFixed")(1-t.activejobs.waiting/t.activejobs.total-t.activejobs.running/t.activejobs.total-t.activejobs.success/t.activejobs.total))+"%)")])]),i("div",{staticClass:"institutions-jobs"},[i("div",{staticClass:"institutions"},[t.institutionsList.length>0?i("div",{staticClass:"item-box"},t._l(t.institutionsList,function(n,e){return i("span",{key:e},[i("div",{class:{"item-institution":!0,"institution-activa":n.show},on:{click:function(i){return t.getsite(n,e)}}},[i("overflowtooltip",{staticClass:"item-text",attrs:{width:"100px",content:n.institutions,placement:"top"}}),i("span",{ref:"bar",refInFor:!0,staticClass:"bar",style:t.stylebar},[i("div",{staticClass:"item-bar",style:"width:"+n.total*t.institutionsitemWidth/n.max+"px"}),i("span",{ref:"text",refInFor:!0,staticClass:"text"},[t._v(t._s(n.total))])]),n.show?i("i",{staticClass:"el-icon-caret-right icon-right"}):t._e()],1)])}),0):i("div",{staticClass:"item-box no-date-box"},[t._v("\n                    "+t._s(t.$t("m.common.noData"))+"\n                ")]),i("div",{staticClass:"institutions-pagination"},[i("el-pagination",{attrs:{small:"",background:"",layout:"total, prev, pager, next","page-size":t.pageSizeInst,total:t.instTotal},on:{"current-change":t.handleCurrentChangeInst}})],1)]),i("div",{staticClass:"jobs"},["Today’s active data"===t.type?i("div",{staticClass:"jobs-site-title"},[t._v(t._s(t.$t("m.monitor.activeSitesToday"))+":"+t._s(t.activeSite.active))]):t._e(),i("div",{staticClass:"job-alone-complete"},[i("span",[t._v(" "+t._s(t.$t("m.monitor.totalJobs"))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.total))]),i("span",[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.waiting)+" ("+t._s(t._f("toGetFixed")(t.activeSite.waiting/t.activeSite.total))+"%)")]),i("span",[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.running)+" ("+t._s(t._f("toGetFixed")(t.activeSite.running/t.activeSite.total))+"%)")]),i("span",[t._v(t._s(t.$t("m.common.success"))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.success)+"  ("+t._s(t._f("toGetFixed")(t.activeSite.success/t.activeSite.total))+"%)")]),i("span",[t._v(t._s(t.$t("m.common.failed"))+"：")]),i("span",{staticClass:"span"},[t._v(t._s(t.activeSite.failed)+"  ("+t._s(t._f("toGetFixed")(1-t.activeSite.waiting/t.activeSite.total-t.activeSite.running/t.activeSite.total-t.activeSite.success/t.activeSite.total))+"%)")])]),i("div",{staticClass:"jobs-title"},[i("span",{staticClass:"waiting"}),i("span",[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"})))]),i("span",{staticClass:"running"}),i("span",[t._v(t._s(t.$t("m.monitor.running",{type:"r"})))]),i("span",{staticClass:"complete"}),i("span",[t._v(t._s(t.$t("m.common.success")))]),i("span",{staticClass:"failed"}),i("span",[t._v(t._s(t.$t("m.common.failed")))])]),t.siteList.length>0?i("div",{staticClass:"jobs-box"},t._l(t.siteList,function(n,e){return i("span",{key:e},[i("div",{ref:"jobs",refInFor:!0,staticClass:"jobs-institution"},[i("overflowtooltip",{staticClass:"jobs-text",attrs:{width:"80px",content:n.site,placement:"top"}}),i("overflowtooltip",{staticClass:"jobs-text",attrs:{width:"50px",content:n.partyId,placement:"top"}}),i("el-tooltip",{attrs:{placement:"top"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("div",[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+":\n                                        "+t._s(n.waiting)+"\n                                        ("+t._s(t._f("toGetFixed")(n.waiting/n.total))+"%)\n                                    ")]),i("div",[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+":\n                                        "+t._s(n.running)+"\n                                        ("+t._s(t._f("toGetFixed")(n.running/n.total))+"%)\n                                    ")]),i("div",[t._v(t._s(t.$t("m.common.success"))+":\n                                        "+t._s(n.success)+"\n                                        ("+t._s(t._f("toGetFixed")(n.success/n.total))+"%)\n                                    ")]),i("div",[t._v(t._s(t.$t("m.common.failed"))+":\n                                        "+t._s(n.failed)+"\n                                        ("+t._s(t._f("toGetFixed")(n.failed/n.total))+"%)\n                                    ")])]),i("span",{staticStyle:{height:"24px","vertical-align":"bottom"}},[i("div",{staticClass:"jobs-bar",style:"width:"+n.total*t.sitemWidth/n.max+"px"},[i("div",{staticClass:"jobs-bar-waiting",style:"width:"+n.waiting/n.total*100+"%"}),i("div",{staticClass:"jobs-bar-running",style:"width:"+n.running/n.total*100+"%"}),i("div",{staticClass:"jobs-bar-success",style:"width:"+n.success/n.total*100+"%"}),i("div",{staticClass:"jobs-bar-failed",style:"width:"+n.failed/n.total*100+"%"})])])]),i("span",{staticClass:"text"},[t._v(t._s(n.total))])],1)])}),0):i("div",{staticClass:"jobs-box no-date-box"},[t._v("\n                    "+t._s(t.$t("m.common.noData"))+"\n                ")]),"Today’s active data"!==t.type?i("div",{staticStyle:{height:"34px"}}):t._e()])])]),i("div",{staticClass:"content-item"},[i("div",{staticClass:"institution-based"},[i("div",{staticClass:"statistics"},[t._v(t._s(t.$t("m.monitor.institutionBasedStatistics")))]),i("div",{staticClass:"cooperation"},[t._v("\n                "+t._s(t.$t("m.monitor.institutionsCooperation"))+"\n            ")]),i("div",{staticClass:"select"},[i("span",{staticClass:"select-text"},[t._v(t._s(t.$t("m.monitor.checkInstitution")))]),i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.institutionStat,placement:"top"}},[i("el-select",{attrs:{filterable:"",placeholder:t.$t("m.common.pleaseSelect")},on:{change:t.toGetinstitutions},model:{value:t.institutionStat,callback:function(n){t.institutionStat=n},expression:"institutionStat"}},t._l(t.institutionsdownList,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),i("div",{staticClass:"institution-table"},[i("el-table",{attrs:{data:t.tableIntSateData,"header-row-class-name":"tableHead","header-cell-class-name":"tableHeadCell","cell-class-name":"tableCell","header-cell-style":{background:"#FAFBFC"},"cell-style":{background:"#FAFBFC"},border:"","max-height":"250"}},[i("el-table-column",{attrs:{prop:"institutions",fixed:"",align:"center",resizable:!1,label:""},scopedSlots:t._u([{key:"default",fn:function(n){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:n.row.institutions,placement:"top"}},[i("span",{staticStyle:{color:"#4E5766","font-weight":"bold"}},[t._v(t._s(n.row.institutions))])])]}}])}),i("el-table-column",{attrs:{prop:"name",label:t.$t("m.monitor.jobs"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.total))])]}}])}),i("el-table-column",{attrs:{prop:"",label:t.$t("m.monitor.waiting",{type:"W"}),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.waiting)+" ("+t._s(t._f("toGetFixed")(n.row.waiting/n.row.total))+"%)")])]}}])}),i("el-table-column",{attrs:{prop:"",label:t.$t("m.monitor.running",{type:"R"}),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.running)+" ("+t._s(t._f("toGetFixed")(n.row.running/n.row.total))+"%)")])]}}])}),i("el-table-column",{attrs:{prop:"",label:t.$t("m.common.success"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.success)+" ("+t._s(t._f("toGetFixed")(n.row.success/n.row.total))+"%)")])]}}])}),i("el-table-column",{attrs:{prop:"",label:t.$t("m.common.failed"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(n){return[i("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(n.row.failed)+" ("+t._s(t._f("toGetFixed")(n.row.failed/n.row.total))+"%)")])]}}])})],1),i("div",{staticClass:"paginationInstitutionSize"},[i("el-pagination",{attrs:{background:"","current-page":t.currentInstitutionPage,"page-size":t.pageInstitutionSize,layout:"total, prev, pager, next, jumper",total:t.totalInstitution},on:{"current-change":t.handleInstitutionCurrentChange,"update:currentPage":function(n){t.currentInstitutionPage=n},"update:current-page":function(n){t.currentInstitutionPage=n}}})],1)],1)])]),i("div",{staticClass:"content-item"},[i("div",{staticClass:"institution-based"},[i("div",{staticClass:"statistics"},[t._v(t._s(t.$t("m.monitor.siteBasedStatistics")))]),i("div",{staticClass:"cooperation"},[t._v("\n                "+t._s(t.$t("m.monitor.sitesCooperation"))+"\n            ")]),i("div",{staticClass:"select"},[i("span",{staticClass:"select-text"},[t._v(t._s(t.$t("m.monitor.checkInstitution")))]),i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.institutionSite,placement:"top"}},[i("el-select",{attrs:{filterable:"",placeholder:t.$t("m.common.pleaseSelect")},on:{change:t.toGetIntSite},model:{value:t.institutionSite,callback:function(n){t.institutionSite=n},expression:"institutionSite"}},t._l(t.institutionsdownList,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),i("div",{staticClass:"institution-table"},[i("el-table",{attrs:{"header-row-class-name":"tableHead","header-cell-class-name":"tableHeadCell","cell-class-name":"tableCell",data:t.tableIntSiteData,"span-method":t.objectSpanMethod,"header-cell-style":{background:"#FAFBFC"},"cell-style":{background:"#FAFBFC"},border:"","max-height":"250"}},[i("el-table-column",{attrs:{prop:"",align:"center",resizable:!1,label:""},scopedSlots:t._u([{key:"default",fn:function(n){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:n.row.institution,placement:"top"}},[i("span",{staticStyle:{color:"#4E5766","font-weight":"bold"}},[t._v(t._s(n.row.institution))])])]}}])}),i("el-table-column",{attrs:{prop:"siteName",align:"center",resizable:!1,label:"site","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(n){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:n.row.institutionSiteName,placement:"top"}},[i("span",[t._v(t._s(n.row.institutionSiteName))])])]}}])}),t._l(t.tableIntLabeList,function(n,e){return i("el-table-column",{key:e,attrs:{align:"center",resizable:!1,prop:n,label:n},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row[n]?i("el-tooltip",{attrs:{placement:"top"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+"："+t._s(e.row[n].waitingJobs)+"  ")]),i("span",[t._v("("+t._s(e.row[n].waitingPercent)+")")])]),i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+t._s(e.row[n].runningJobs)+"  ")]),i("span",[t._v("("+t._s(e.row[n].runningPercent)+")")])]),i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.common.success"))+"："+t._s(e.row[n].successJobs)+"  ")]),i("span",[t._v("("+t._s(e.row[n].successPercent)+")")])]),i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.common.failed"))+"："+t._s(e.row[n].failedJobs)+"  ")]),i("span",[t._v("("+t._s(e.row[n].failedPercent)+")")])])]),i("span",[t._v(t._s(e.row[n].totalJobs))])]):i("span",[i("el-tooltip",{attrs:{placement:"top"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.monitor.waiting",{type:"w"}))+"：0  ")]),i("span",[t._v("(0%)")])]),i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.monitor.running",{type:"r"}))+"：0  ")]),i("span",[t._v("(0%)")])]),i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.common.success"))+"：0  ")]),i("span",[t._v("(0%)")])]),i("div",[i("span",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(t.$t("m.common.failed"))+"：0  ")]),i("span",[t._v("(0%)")])])]),i("span",[t._v("0")])])],1)]}}],null,!0)},[i("template",{slot:"header"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:n,placement:"top"}},[i("span",[t._v(t._s(n))])])],1)],2)})],2),i("div",{staticClass:"paginationInstitutionSize"},[i("el-pagination",{attrs:{background:"","current-page":t.currentSitePage,"page-size":t.pageInstitutionSize,layout:"total, prev, pager, next, jumper",total:t.totalSitetitution},on:{"current-change":t.handleSiteCurrentChange,"update:currentPage":function(n){t.currentSitePage=n},"update:current-page":function(n){t.currentSitePage=n}}})],1)],1)])])])},o=[],r=i("75fc"),c=(i("96cf"),i("3b8d")),u=(i("ac6a"),i("cebc")),l=i("a5b0"),d=i("b775"),p="cloud-manager";function m(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/institutions/each/period"),method:"post",data:t})}function f(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/site/each/period"),method:"post",data:t})}function h(t){return Object(d["a"])({url:"/".concat(p,"/api/job/institutions/period"),method:"post",data:t})}function g(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/institutions/all/period"),method:"post",data:t})}function v(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/site/all/period"),method:"post",data:t})}function b(t){return Object(d["a"])({url:"/".concat(p,"/api/job/site/period"),method:"post",data:t})}var _=i("c6a8"),y={name:"monitor",components:{overflowtooltip:l["a"]},filters:{toGetFixed:function(t){var n=100*t;return n?n.toFixed(1):0}},data:function(){return{type:"Today’s active data",dateToday:(new Date).getTime(),timevalue:[new Date-2592e6,(new Date).getTime()],instTotal:0,pageSizeInst:80,instpageNum:1,siteTotal:0,activejobs:{},activeSite:{},institutionsList:[],siteList:[],institutionsdownList:[],tableIntSateData:[],tableIntSiteData:[],tableIntLabeList:[],institutionsitemWidth:"",stylebar:"",sitemWidth:"",institutionStat:"",institutionSite:"",value:"",lengthList:[],pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},currentInstitutionPage:1,currentSitePage:1,pageInstitutionSize:10,totalInstitution:0,totalSitetitution:0,firstPageNum:1,secondPageNum:1,firstTempVal:"",secondTempVal:""}},watch:{institutionsList:{handler:function(t){var n=this;t.length>0&&this.$nextTick(function(){n.calcinstitution().then(function(t){n.institutionsitemWidth=n.$refs.bar[0].clientWidth-t-30})})},immediate:!0,deep:!0},siteList:{handler:function(t){var n=this;t.length>0&&this.$nextTick(function(){n.sitemWidth=n.$refs.jobs[0].clientWidth-160})}}},created:function(){},mounted:function(){this.initi()},methods:{initi:function(){this.getInstitutionsListToday(),this.institutionsAll(),this.getinstitutionsdownList()},setTopItem:function(t,n,i){if(t.length<1)return[];for(var e=[],a=0;a<t.length;a++)t[a][i]===n&&(e.push(t[a]),t.splice(a,1));return e.concat(t)},institutionsAll:function(){var t={beginDate:this.dateToday,endDate:this.dateToday,pageNum:this.instpageNum,pageSize:80};"Today’s active data"!==this.type&&(t.beginDate=this.timevalue[0],t.endDate=this.timevalue[1]),g(t).then(function(t){i(t)});var n=this,i=function(t){var i=t&&t.data||{},e={};e.active=i.institutionsCount||0,e.waiting=i.waitingJobCount||0,e.running=i.runningJobCount||0,e.success=i.successJobCount||0,e.failed=i.failedJobCount||0,e.total=i.failedJobCount+i.successJobCount+i.runningJobCount+i.waitingJobCount,n.activejobs=Object(u["a"])({},e)}},getinstitutionsdownList:function(){var t=this;this.institutionsdownList=[],Object(_["a"])().then(function(n){n.data.forEach(function(n,i){var e={};e.value=n,e.label=n,t.institutionsdownList.push(e)}),t.institutionSite=t.institutionStat=t.institutionsdownList[0].value,t.toGetinstitutions(t.institutionStat),t.toGetIntSite(t.institutionSite,"type")})},calcinstitution:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.$refs.text.map(function(t){return t.clientWidth}),t.next=3,Math.max.apply(Math,Object(r["a"])(n));case 3:return i=t.sent,this.stylebar="width:calc(100% - ".concat(i,"px - 110px)"),t.abrupt("return",i);case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),handleCurrentChangeInst:function(t){this.instpageNum=t,this.institutionsAll()},handleInstitutionCurrentChange:function(t){this.firstPageNum=t,this.toGetinstitutions(this.institutionStat)},handleSiteCurrentChange:function(t){this.secondPageNum=t,this.toGetIntSite(this.institutionSite,"type")},getInstitutionsListToday:function(){var t={beginDate:this.dateToday,endDate:this.dateToday,pageNum:1,pageSize:80};"Today’s active data"!==this.type&&(t.beginDate=this.timevalue[0],t.endDate=this.timevalue[1]),m(t).then(function(t){i(t)});var n=this,i=function(t){n.instTotal=t.data.totalRecord;var i=[];t.data.list.forEach(function(t){i.push(t.runningJobCount+t.failedJobCount+t.successJobCount+t.waitingJobCount)});var e=Math.max.apply(Math,i);n.institutionsList=t.data.list.map(function(t){var n={};return n.institutions=t.institutions,n.waiting=t.waitingJobCount,n.running=t.runningJobCount,n.success=t.successJobCount,n.failed=t.failedJobCount,n.total=n.waiting+n.running+n.success+n.failed,n.max=e,n.show=!1,n}),n.getsite(n.institutionsList[0],0)}},getsite:function(t,n){var i=this.institutionsList.map(function(t,i){return t.show=i===n,t});this.institutionsList=Object(r["a"])(i);var e={beginDate:this.dateToday,endDate:this.dateToday,institutions:t?t.institutions:""};"Today’s active data"!==this.type&&(e.beginDate=this.timevalue[0],e.endDate=this.timevalue[1]),f(e).then(function(t){s(t)});var a=this,s=function(n){a.siteTotal=n.data.totalRecord,a.getsiteAllToday(t?t.institutions:"");var i=[];n.data.list.forEach(function(t){i.push(t.failedJobCount+t.successJobCount+t.runningJobCount+t.waitingJobCount)});var e=Math.max.apply(Math,i);a.siteList=n.data.list.map(function(t){var n={};return n.partyId=t.partyId,n.site=t.site,n.waiting=t.waitingJobCount,n.running=t.runningJobCount,n.success=t.successJobCount,n.failed=t.failedJobCount,n.total=n.waiting+n.running+n.success+n.failed,n.max=e,n})}},getsiteAllToday:function(t){var n={beginDate:this.dateToday,endDate:this.dateToday,institutions:t,pageNum:1,pageSize:100};"Today’s active data"!==this.type&&(n.beginDate=this.timevalue[0],n.endDate=this.timevalue[1]),v(n).then(function(t){e(t)});var i=this,e=function(t){var n=t.data,e={};e.active=n.siteCount||0,e.waiting=n.waitingJobCount||0,e.running=n.runningJobCount||0,e.success=n.successJobCount||0,e.failed=n.failedJobCount||0,e.total=e.waiting+e.running+e.success+e.failed,i.activeSite=Object(u["a"])({},e)}},objectSpanMethod:function(t){t.row,t.column;var n=t.rowIndex,i=t.columnIndex;if(0===i){var e=this.lengthList[n],a=e>0?1:0;return{rowspan:e,colspan:a}}},toGetinstitutions:function(t){var n={beginDate:this.dateToday,endDate:this.dateToday,institutions:t||this.institutionStat};"Today’s active data"!==this.type&&(n.beginDate=this.timevalue[0],n.endDate=this.timevalue[1]),h(n).then(function(t){e(t)});var i=this,e=function(n){i.totalInstitution=n.data.totalRecord,i.tableIntSateData=n.data.list.map(function(t){return t.waiting=parseInt(t.waitingJobCountForInstitutions)||0,t.running=parseInt(t.runningJobCountForInstitutions)||0,t.failed=parseInt(t.failedJobCountForInstitutions)||0,t.success=parseInt(t.successJobCountForInstitutions)||0,t.total=t.failed+t.success+t.running+t.waiting,t}),i.tableIntSateData=i.setTopItem(i.tableIntSateData,t,"institutions")}},toGetIntSite:function(t,n){var i=this;this.institutionSite=t;var e={beginDate:this.dateToday,endDate:this.dateToday,institutions:t||this.institutionSite,pageNum:this.secondPageNum,pageSize:10};"Today’s active data"!==this.type&&(e.beginDate=this.timevalue[0],e.endDate=this.timevalue[1]),b(e).then(function(t){i.getsiteSataData(t,n)})},getsiteSataData:function(t,n){var i=this;this.lengthList=[],this.totalSitetitution=t.data&&t.data.total||0,this.tableIntLabeList=t.data&&t.data.siteList;var e=[];t.data&&t.data.data.forEach(function(t){if(t.institutionSiteList.length>1){i.lengthList.push(t.institutionSiteList.length);for(var n=0;n<t.institutionSiteList.length-1;n++)i.lengthList.push(0)}else i.lengthList.push(t.institutionSiteList.length);t.institutionSiteList.forEach(function(n,i){var a={};a.institutionSiteName=n.institutionSiteName,a.institution=t.institution,n.mixSiteModeling.forEach(function(t){a[t.siteName]=Object(u["a"])({},t)}),e.push(a)})}),e=this.setTopItem(e,this.institutionSite,"institution"),this.tableIntSiteData=Object(r["a"])(e)}}},w=y,C=(i("a032"),i("2877")),S=Object(C["a"])(w,s,o,!1,null,null,null),j=S.exports,x={name:"monitor",components:{monitortoday:j},filters:{},data:function(){return{radio:"Today’s active data"}},created:function(){},mounted:function(){},methods:{handleChahe:function(t){this.$refs["monitortoday"].type=t,this.$refs["monitortoday"].initi()}}},O=x,I=(i("d17f"),Object(C["a"])(O,e,a,!1,null,null,null));n["default"]=I.exports},f410:function(t,n,i){i("1af6"),t.exports=i("584a").Array.isArray}}]);
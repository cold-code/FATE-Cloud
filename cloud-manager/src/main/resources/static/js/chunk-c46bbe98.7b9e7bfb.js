(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c46bbe98"],{"0a42":function(t,i,a){},"1af6":function(t,i,a){var e=a("63b6");e(e.S,"Array",{isArray:a("9003")})},"20fd":function(t,i,a){"use strict";var e=a("d9f6"),n=a("aebd");t.exports=function(t,i,a){i in t?e.f(t,i,n(0,a)):t[i]=a}},"549b":function(t,i,a){"use strict";var e=a("d864"),n=a("63b6"),s=a("241e"),o=a("b0dc"),r=a("3702"),u=a("b447"),c=a("20fd"),l=a("7cd6");n(n.S+n.F*!a("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var i,a,n,d,p=s(t),f="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,g=void 0!==b,h=0,m=l(p);if(g&&(b=e(b,v>2?arguments[2]:void 0,2)),void 0==m||f==Array&&r(m))for(i=u(p.length),a=new f(i);i>h;h++)c(a,h,g?b(p[h],h):p[h]);else for(d=m.call(p),a=new f;!(n=d.next()).done;h++)c(a,h,g?o(d,b,[n.value,h],!0):n.value);return a.length=h,a}})},"54a1":function(t,i,a){a("6c1c"),a("1654"),t.exports=a("95d5")},"75fc":function(t,i,a){"use strict";var e=a("a745"),n=a.n(e);function s(t){if(n()(t)){for(var i=0,a=new Array(t.length);i<t.length;i++)a[i]=t[i];return a}}var o=a("774e"),r=a.n(o),u=a("c8bb"),c=a.n(u);function l(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return s(t)||l(t)||d()}a.d(i,"a",function(){return p})},"774e":function(t,i,a){t.exports=a("d2d5")},9003:function(t,i,a){t.exports=a("0b93")(176)},"95d5":function(t,i,a){var e=a("40c3"),n=a("5168")("iterator"),s=a("481b");t.exports=a("584a").isIterable=function(t){var i=Object(t);return void 0!==i[n]||"@@iterator"in i||s.hasOwnProperty(e(i))}},a032:function(t,i,a){"use strict";var e=a("0a42"),n=a.n(e);n.a},a745:function(t,i,a){t.exports=a("f410")},aebd:function(t,i,a){t.exports=a("0b93")(26)},c6a8:function(t,i,a){"use strict";a.d(i,"J",function(){return n}),a.d(i,"p",function(){return s}),a.d(i,"h",function(){return o}),a.d(i,"H",function(){return r}),a.d(i,"E",function(){return u}),a.d(i,"K",function(){return c}),a.d(i,"I",function(){return l}),a.d(i,"s",function(){return d}),a.d(i,"M",function(){return p}),a.d(i,"C",function(){return f}),a.d(i,"j",function(){return v}),a.d(i,"i",function(){return b}),a.d(i,"t",function(){return g}),a.d(i,"L",function(){return h}),a.d(i,"D",function(){return m}),a.d(i,"y",function(){return _}),a.d(i,"z",function(){return y}),a.d(i,"f",function(){return w}),a.d(i,"g",function(){return C}),a.d(i,"u",function(){return S}),a.d(i,"B",function(){return j}),a.d(i,"x",function(){return x}),a.d(i,"A",function(){return I}),a.d(i,"a",function(){return O}),a.d(i,"e",function(){return T}),a.d(i,"w",function(){return $}),a.d(i,"n",function(){return D}),a.d(i,"b",function(){return L}),a.d(i,"k",function(){return k}),a.d(i,"d",function(){return J}),a.d(i,"q",function(){return F}),a.d(i,"o",function(){return A}),a.d(i,"N",function(){return z}),a.d(i,"m",function(){return N}),a.d(i,"F",function(){return G}),a.d(i,"G",function(){return P}),a.d(i,"c",function(){return M}),a.d(i,"O",function(){return W}),a.d(i,"l",function(){return E}),a.d(i,"r",function(){return R}),a.d(i,"v",function(){return B});var e=a("b775");function n(t){return Object(e["a"])({url:"/cloud-manager/api/site/page/cloudManager",method:"post",data:t})}function s(t){return Object(e["a"])({url:"/cloud-manager/api/group/findPagedRegionInfoNew",method:"post",data:t})}function o(t){return Object(e["a"])({url:"/cloud-manager/api/site/check",method:"post",data:t})}function r(t){return Object(e["a"])({url:"/cloud-manager/api/site/addNew",method:"post",data:t})}function u(t){return Object(e["a"])({url:"/cloud-manager/api/site/cloudManager/network",method:"post",data:t})}function c(t){return Object(e["a"])({url:"/cloud-manager/api/site/updateNew",method:"post",data:t})}function l(t){return Object(e["a"])({url:"/cloud-manager/api/site/delete",method:"post",data:t})}function d(t){return Object(e["a"])({url:"/cloud-manager/api/site/find",method:"post",data:t})}function p(t){return Object(e["a"])({url:"/cloud-manager/api/site/checkWeb",method:"post",data:t})}function f(t){return Object(e["a"])({url:"/cloud-manager/api/site/ip/list",method:"post",data:t})}function v(t){return Object(e["a"])({url:"/cloud-manager/api/site/ip/deal",method:"post",data:t})}function b(t){return Object(e["a"])({url:"/cloud-manager/api/site/checkSiteName",method:"post",data:t})}function g(t){return Object(e["a"])({url:"/cloud-manager/api/system/page",method:"post",data:t})}function h(t){return Object(e["a"])({url:"/cloud-manager/api/system/history",method:"post",data:t})}function m(t){return Object(e["a"])({url:"/cloud-manager/api/site/ip/query/history",method:"post",data:t})}function _(t){return Object(e["a"])({url:"/cloud-manager/api/site/institutions",method:"post",data:t})}function y(t){return Object(e["a"])({url:"/cloud-manager/api/site/institutions/all/dropdown",method:"post",data:t})}function w(t){return Object(e["a"])({url:"/cloud-manager/api/authority/cancel",method:"post",data:t})}function C(t){return Object(e["a"])({url:"/cloud-manager/api/authority/cancelList",method:"post",data:t})}function S(t){return Object(e["a"])({url:"/cloud-manager/api/authority/history/fateManager",method:"post",data:t})}function j(t){return Object(e["a"])({url:"/cloud-manager/api/authority/status",method:"post",data:t})}function x(t){return Object(e["a"])({url:"/cloud-manager/api/authority/details",method:"post",data:t})}function I(t){return Object(e["a"])({url:"/cloud-manager/api/authority/review",method:"post",data:t})}function O(t){return Object(e["a"])({url:"/cloud-manager/api/fate/user/institutions",method:"post",data:t})}function T(t){return Object(e["a"])({url:"/cloud-manager/api/authority/currentAuthority",method:"post",data:t})}function $(t){return Object(e["a"])({url:"/cloud-manager/api/dropdown/version",method:"post",data:t})}function D(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/exchange/page",method:"post",data:t})}function L(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/add",method:"post",data:t})}function k(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/delete",method:"post",data:t})}function J(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/add",method:"post",data:t})}function F(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/page",method:"post",data:t})}function A(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/query",method:"post",data:t})}function z(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/publish",method:"post",data:t})}function N(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/delete",method:"post",data:t})}function G(t){return Object(e["a"])({url:"/cloud-manager/api/exchange/rollsite/update",method:"post",data:t})}function P(t){return Object(e["a"])({url:"/cloud-manager/api/product/page",method:"post",data:t})}function M(t){return Object(e["a"])({url:"/cloud-manager/api/product/add",method:"post",data:t})}function W(t){return Object(e["a"])({url:"/cloud-manager/api/product/update",method:"post",data:t})}function E(t){return Object(e["a"])({url:"/cloud-manager/api/product/delete",method:"post",data:t})}function R(t){return Object(e["a"])({url:"/cloud-manager/api/product/version",method:"post",data:t})}function B(t){return Object(e["a"])({url:"/cloud-manager/api/product/name",method:"post",data:t})}},c8bb:function(t,i,a){t.exports=a("54a1")},d17f:function(t,i,a){"use strict";var e=a("e4c5"),n=a.n(e);n.a},d2d5:function(t,i,a){a("1654"),a("549b"),t.exports=a("584a").Array.from},e4c5:function(t,i,a){},ecbd:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"monitor-box"},[a("div",{staticClass:"monitor-header"},[a("el-radio-group",{staticClass:"radio",on:{change:t.handleChahe},model:{value:t.radio,callback:function(i){t.radio=i},expression:"radio"}},[a("el-radio-button",{attrs:{label:"Today’s active data"}},[t._v(t._s(t.$t("Today’s active data")))]),a("el-radio-button",{attrs:{label:"Cumulative active data"}},[t._v(t._s(t.$t("Cumulative active data")))])],1)],1),a("div",{staticClass:"monitor-body"},[a("div",{staticClass:"content"},[a("monitortoday",{ref:"monitortoday"})],1)])])},n=[],s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",["Today’s active data"===t.type?a("div",{staticClass:"type-time"},[a("span",[t._v(t._s(t.$t("Active institutions today:")))]),a("span",{staticStyle:{color:"#217AD9"}},[t._v(t._s(t.activejobs.active))])]):a("div",{staticClass:"time-picker"},[a("span",{staticClass:"date"},[t._v(t._s(t.$t("Date")))]),a("el-date-picker",{attrs:{clearable:!1,type:"daterange","range-separator":"~","value-format":"timestamp","start-placeholder":t.$t("start"),"end-placeholder":t.$t("end"),"picker-options":t.pickerOptions},on:{change:t.initi},model:{value:t.timevalue,callback:function(i){t.timevalue=i},expression:"timevalue"}})],1),a("div",{staticClass:"content-item"},[a("div",{staticClass:"jobs-complete"},[a("span",[t._v(t._s(t.$t("Total jobs"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activejobs.total))]),a("span",[t._v(t._s(t.$t("waiting"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activejobs.waiting)+" ("+t._s(t._f("toGetFixed")(t.activejobs.waiting/t.activejobs.total))+"%)   ")]),a("span",[t._v(t._s(t.$t("running"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activejobs.running)+" ("+t._s(t._f("toGetFixed")(t.activejobs.running/t.activejobs.total))+"%)   ")]),a("span",[t._v(t._s(t.$t("success"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activejobs.success)+" ("+t._s(t._f("toGetFixed")(t.activejobs.success/t.activejobs.total))+"%)   ")]),a("span",[t._v(t._s(t.$t("failed"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activejobs.failed)+" ("+t._s(t._f("toGetFixed")(1-t.activejobs.waiting/t.activejobs.total-t.activejobs.running/t.activejobs.total-t.activejobs.success/t.activejobs.total))+"%)")])]),a("div",{staticClass:"institutions-jobs"},[a("div",{staticClass:"institutions"},[t.institutionsList.length>0?a("div",{staticClass:"item-box"},t._l(t.institutionsList,function(i,e){return a("span",{key:e},[a("div",{class:{"item-institution":!0,"institution-activa":i.show},on:{click:function(a){return t.getsite(i,e)}}},[a("overflowtooltip",{staticClass:"item-text",attrs:{width:"100px",content:i.institutions,placement:"top"}}),a("span",{ref:"bar",refInFor:!0,staticClass:"bar",style:t.stylebar},[a("div",{staticClass:"item-bar",style:"width:"+i.total*t.institutionsitemWidth/i.max+"px"}),a("span",{ref:"text",refInFor:!0,staticClass:"text"},[t._v(t._s(i.total))])]),i.show?a("i",{staticClass:"el-icon-caret-right icon-right"}):t._e()],1)])}),0):a("div",{staticClass:"item-box no-date-box"},[t._v("\n                    "+t._s(t.$t("No Data"))+"\n                ")]),a("div",{staticClass:"institutions-pagination"},[a("el-pagination",{attrs:{small:"",background:"",layout:"total, prev, pager, next","page-size":t.pageSizeInst,total:t.instTotal},on:{"current-change":t.handleCurrentChangeInst}})],1)]),a("div",{staticClass:"jobs"},["Today’s active data"===t.type?a("div",{staticClass:"jobs-site-title"},[t._v(t._s(t.$t("Active sites today"))+":"+t._s(t.activeSite.active))]):t._e(),a("div",{staticClass:"job-alone-complete"},[a("span",[t._v(" "+t._s(t.$t("Total jobs"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activeSite.total))]),a("span",[t._v(t._s(t.$t("waiting"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activeSite.waiting)+" ("+t._s(t._f("toGetFixed")(t.activeSite.waiting/t.activeSite.total))+"%)")]),a("span",[t._v(t._s(t.$t("running"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activeSite.running)+" ("+t._s(t._f("toGetFixed")(t.activeSite.running/t.activeSite.total))+"%)")]),a("span",[t._v(t._s(t.$t("success"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activeSite.success)+"  ("+t._s(t._f("toGetFixed")(t.activeSite.success/t.activeSite.total))+"%)")]),a("span",[t._v(t._s(t.$t("failed"))+"：")]),a("span",{staticClass:"span"},[t._v(t._s(t.activeSite.failed)+"  ("+t._s(t._f("toGetFixed")(1-t.activeSite.waiting/t.activeSite.total-t.activeSite.running/t.activeSite.total-t.activeSite.success/t.activeSite.total))+"%)")])]),a("div",{staticClass:"jobs-title"},[a("span",{staticClass:"waiting"}),a("span",[t._v(t._s(t.$t("waiting")))]),a("span",{staticClass:"running"}),a("span",[t._v(t._s(t.$t("running")))]),a("span",{staticClass:"complete"}),a("span",[t._v(t._s(t.$t("success")))]),a("span",{staticClass:"failed"}),a("span",[t._v(t._s(t.$t("failed")))])]),t.siteList.length>0?a("div",{staticClass:"jobs-box"},t._l(t.siteList,function(i,e){return a("span",{key:e},[a("div",{ref:"jobs",refInFor:!0,staticClass:"jobs-institution"},[a("overflowtooltip",{staticClass:"jobs-text",attrs:{width:"50px",content:i.site,placement:"top"}}),a("overflowtooltip",{staticClass:"jobs-text",attrs:{width:"50px",content:i.partyId,placement:"top"}}),a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",[t._v(t._s(t.$t("waiting"))+":\n                                        "+t._s(i.waiting)+"\n                                        ("+t._s(t._f("toGetFixed")(i.waiting/i.total))+"%)\n                                    ")]),a("div",[t._v(t._s(t.$t("running"))+":\n                                        "+t._s(i.running)+"\n                                        ("+t._s(t._f("toGetFixed")(i.running/i.total))+"%)\n                                    ")]),a("div",[t._v(t._s(t.$t("success"))+":\n                                        "+t._s(i.success)+"\n                                        ("+t._s(t._f("toGetFixed")(i.success/i.total))+"%)\n                                    ")]),a("div",[t._v(t._s(t.$t("failed"))+":\n                                        "+t._s(i.failed)+"\n                                        ("+t._s(t._f("toGetFixed")(i.failed/i.total))+"%)\n                                    ")])]),a("span",{staticStyle:{height:"24px","vertical-align":"bottom"}},[a("div",{staticClass:"jobs-bar",style:"width:"+i.total*t.sitemWidth/i.max+"px"},[a("div",{staticClass:"jobs-bar-waiting",style:"width:"+i.waiting/i.total*100+"%"}),a("div",{staticClass:"jobs-bar-running",style:"width:"+i.running/i.total*100+"%"}),a("div",{staticClass:"jobs-bar-success",style:"width:"+i.success/i.total*100+"%"}),a("div",{staticClass:"jobs-bar-failed",style:"width:"+i.failed/i.total*100+"%"})])])]),a("span",{staticClass:"text"},[t._v(t._s(i.total))])],1)])}),0):a("div",{staticClass:"jobs-box no-date-box"},[t._v("\n                    "+t._s(t.$t("No Data"))+"\n                ")]),"Today’s active data"!==t.type?a("div",{staticStyle:{height:"34px"}}):t._e()])])]),a("div",{staticClass:"content-item"},[a("div",{staticClass:"institution-based"},[a("div",{staticClass:"statistics"},[t._v(t._s(t.$t("Institution based statistics")))]),a("div",{staticClass:"cooperation"},[t._v("\n                "+t._s(t.$t("Statistics of cooperation between institutions"))+"\n            ")]),a("div",{staticClass:"select"},[a("span",{staticClass:"select-text"},[t._v(t._s(t.$t("Institution")))]),a("el-select",{attrs:{filterable:"",placeholder:t.$t("m.common.pleaseSelect")},on:{change:t.toGetinstitutions},model:{value:t.institutionStat,callback:function(i){t.institutionStat=i},expression:"institutionStat"}},t._l(t.institutionsdownList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),a("div",{staticClass:"institution-table"},[a("el-table",{attrs:{data:t.tableIntSateData,"header-row-class-name":"tableHead","header-cell-class-name":"tableHeadCell","cell-class-name":"tableCell","header-cell-style":{background:"#FAFBFC"},"cell-style":{background:"#FAFBFC"},border:"","max-height":"250"}},[a("el-table-column",{attrs:{prop:"institutions",fixed:"",align:"center",resizable:!1,label:""},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",{staticStyle:{color:"#4E5766","font-weight":"bold"}},[t._v(t._s(i.row.institutions))])]}}])}),a("el-table-column",{attrs:{prop:"name",label:t.$t("jobs"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(i.row.total))])]}}])}),a("el-table-column",{attrs:{prop:"",label:t.$t("Waiting"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(i.row.waiting)+" ("+t._s(t._f("toGetFixed")(i.row.waiting/i.row.total))+"%)")])]}}])}),a("el-table-column",{attrs:{prop:"",label:t.$t("Running"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(i.row.running)+" ("+t._s(t._f("toGetFixed")(i.row.running/i.row.total))+"%)")])]}}])}),a("el-table-column",{attrs:{prop:"",label:t.$t("success"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(i.row.success)+" ("+t._s(t._f("toGetFixed")(i.row.success/i.row.total))+"%)")])]}}])}),a("el-table-column",{attrs:{prop:"",label:t.$t("failed"),resizable:!1},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",{staticStyle:{color:"#848C99"}},[t._v(t._s(i.row.failed)+" ("+t._s(t._f("toGetFixed")(i.row.failed/i.row.total))+"%)")])]}}])})],1),a("div",{staticClass:"paginationInstitutionSize"},[a("el-pagination",{attrs:{background:"","current-page":t.currentInstitutionPage,"page-size":t.pageInstitutionSize,layout:"total, prev, pager, next, jumper",total:t.totalInstitution},on:{"current-change":t.handleInstitutionCurrentChange,"update:currentPage":function(i){t.currentInstitutionPage=i},"update:current-page":function(i){t.currentInstitutionPage=i}}})],1)],1)])]),a("div",{staticClass:"content-item"},[a("div",{staticClass:"institution-based"},[a("div",{staticClass:"statistics"},[t._v(t._s(t.$t("Site based statistics")))]),a("div",{staticClass:"cooperation"},[t._v("\n                "+t._s(t.$t("Statistics of cooperation between sites"))+"\n            ")]),a("div",{staticClass:"select"},[a("span",{staticClass:"select-text"},[t._v(t._s(t.$t("Institution")))]),a("el-select",{attrs:{filterable:"",placeholder:t.$t("m.common.pleaseSelect")},on:{change:t.toGetIntSite},model:{value:t.institutionSite,callback:function(i){t.institutionSite=i},expression:"institutionSite"}},t._l(t.institutionsdownList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),a("div",{staticClass:"institution-table"},[a("el-table",{attrs:{"header-row-class-name":"tableHead","header-cell-class-name":"tableHeadCell","cell-class-name":"tableCell",data:t.tableIntSiteData,"span-method":t.objectSpanMethod,"header-cell-style":{background:"#FAFBFC"},"cell-style":{background:"#FAFBFC"},border:"","max-height":"250"}},[a("el-table-column",{attrs:{prop:"",align:"center",resizable:!1,label:""},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",{staticStyle:{color:"#4E5766","font-weight":"bold"}},[t._v(t._s(i.row.institution))])]}}])}),a("el-table-column",{attrs:{prop:"siteName",align:"center",resizable:!1,label:"site","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(i){return[a("span",[t._v(t._s(i.row.institutionSiteName))])]}}])}),t._l(t.tableIntLabeList,function(i,e){return a("el-table-column",{key:e,attrs:{align:"center",resizable:!1,prop:i,label:i},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row[i]?a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("waiting："+t._s(e.row[i].waitingJobs)+"  ")]),a("span",[t._v("("+t._s(e.row[i].waitingPercent)+")")])]),a("div",[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("running："+t._s(e.row[i].runningJobs)+"  ")]),a("span",[t._v("("+t._s(e.row[i].runningPercent)+")")])]),a("div",[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("success："+t._s(e.row[i].successJobs)+"  ")]),a("span",[t._v("("+t._s(e.row[i].successPercent)+")")])]),a("div",[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("failed："+t._s(e.row[i].failedJobs)+"  ")]),a("span",[t._v("("+t._s(e.row[i].failedPercent)+")")])])]),a("span",[t._v(t._s(e.row[i].totalJobs))])]):a("span",[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("waiting：0  ")]),a("span",[t._v("(0%)")])]),a("div",[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("running：0  ")]),a("span",[t._v("(0%)")])]),a("div",[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("success：0  ")]),a("span",[t._v("(0%)")])]),a("div",[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("failed：0  ")]),a("span",[t._v("(0%)")])])]),a("span",[t._v("0")])])],1)]}}],null,!0)})})],2),a("div",{staticClass:"paginationInstitutionSize"},[a("el-pagination",{attrs:{background:"","current-page":t.currentSitePage,"page-size":t.pageInstitutionSize,layout:"total, prev, pager, next, jumper",total:t.totalSitetitution},on:{"current-change":t.handleSiteCurrentChange,"update:currentPage":function(i){t.currentSitePage=i},"update:current-page":function(i){t.currentSitePage=i}}})],1)],1)])])])},o=[],r=a("75fc"),u=(a("96cf"),a("3b8d")),c=(a("ac6a"),a("cebc")),l=a("a5b0"),d=a("b775"),p="cloud-manager";function f(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/institutions/each/period"),method:"post",data:t})}function v(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/site/each/period"),method:"post",data:t})}function b(t){return Object(d["a"])({url:"/".concat(p,"/api/job/institutions/period"),method:"post",data:t})}function g(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/institutions/all/period"),method:"post",data:t})}function h(t){return Object(d["a"])({url:"/".concat(p,"/api/job/summary/site/all/period"),method:"post",data:t})}function m(t){return Object(d["a"])({url:"/".concat(p,"/api/job/site/period"),method:"post",data:t})}var _=a("c6a8"),y={zh:{"Today’s active data":"今日活跃数据","Cumulative active data":"累计活跃数据","Active institutions today:":"今日活跃机构数:",Date:"日期","Total jobs":"总任务数",waiting:"等待",Waiting:"等待",Running:"运行中",running:"运行中",success:"成功",failed:"失败","No Data":"暂无数据","Active sites today":"今日活跃站点数","Institution based statistics":"基于机构数据统计","Statistics of cooperation between institutions":"各机构间的建模任务统计",jobs:"任务数",Institution:"查看机构","Site based statistics":"基于站点数据统计","Statistics of cooperation between sites":"各站点间的建模任务统计",start:"开始日期",end:"结束日期"},en:{"Today’s active data":"Today’s active data","Cumulative active data":"Cumulative active data","Active institutions today:":"Active institutions today:",Date:"Date","Total jobs":"Total jobs",waiting:"waiting",Waiting:"Waiting",running:"running",Running:"Running",success:"success",failed:"failed","No Data":"No Data","Active sites today":"Active sites today","Institution based statistics":"Institution based statistics","Statistics of cooperation between institutions":"Statistics of cooperation between institutions",jobs:"jobs",Institution:"Institution","Site based statistics":"Site based statistics","Statistics of cooperation between sites":"Statistics of cooperation between sites",start:"start",end:"end"}},w={name:"monitor",components:{overflowtooltip:l["a"]},filters:{toGetFixed:function(t){var i=100*t;return i?i.toFixed(1):0}},data:function(){return{type:"Today’s active data",dateToday:(new Date).getTime(),timevalue:[new Date-2592e6,(new Date).getTime()],instTotal:0,pageSizeInst:80,instpageNum:1,siteTotal:0,activejobs:{},activeSite:{},institutionsList:[],siteList:[],institutionsdownList:[],tableIntSateData:[],tableIntSiteData:[],tableIntLabeList:[],institutionsitemWidth:"",stylebar:"",sitemWidth:"",institutionStat:"",institutionSite:"",value:"",lengthList:[],pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},currentInstitutionPage:1,currentSitePage:1,pageInstitutionSize:10,totalInstitution:0,totalSitetitution:0,firstPageNum:1,secondPageNum:1,firstTempVal:"",secondTempVal:""}},watch:{institutionsList:{handler:function(t){var i=this;t.length>0&&this.$nextTick(function(){i.calcinstitution().then(function(t){i.institutionsitemWidth=i.$refs.bar[0].clientWidth-t-10})})},immediate:!0,deep:!0},siteList:{handler:function(t){var i=this;t.length>0&&this.$nextTick(function(){i.sitemWidth=i.$refs.jobs[0].clientWidth-130})}}},created:function(){this.$i18n.mergeLocaleMessage("en",y.en),this.$i18n.mergeLocaleMessage("zh",y.zh)},mounted:function(){this.initi()},methods:{initi:function(){this.getInstitutionsListToday(),this.institutionsAll(),this.getinstitutionsdownList()},setTopItem:function(t,i,a){if(t.length<1)return[];for(var e=[],n=0;n<t.length;n++)t[n][a]===i&&(e.push(t[n]),t.splice(n,1));return e.concat(t)},institutionsAll:function(){var t={beginDate:this.dateToday,endDate:this.dateToday,pageNum:this.instpageNum,pageSize:80};"Today’s active data"!==this.type&&(t.beginDate=this.timevalue[0],t.endDate=this.timevalue[1]),g(t).then(function(t){a(t)});var i=this,a=function(t){var a=t&&t.data||{},e={};e.active=a.institutionsCount||0,e.waiting=a.waitingJobCount||0,e.running=a.runningJobCount||0,e.success=a.successJobCount||0,e.failed=a.failedJobCount||0,e.total=a.failedJobCount+a.successJobCount+a.runningJobCount+a.waitingJobCount,i.activejobs=Object(c["a"])({},e)}},getinstitutionsdownList:function(){var t=this;this.institutionsdownList=[],Object(_["a"])().then(function(i){i.data.forEach(function(i,a){var e={};e.value=i,e.label=i,t.institutionsdownList.push(e)}),t.institutionSite=t.institutionStat=t.institutionsdownList[0].value,t.toGetinstitutions(t.institutionStat),t.toGetIntSite(t.institutionSite,"type")})},calcinstitution:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=this.$refs.text.map(function(t){return t.clientWidth}),t.next=3,Math.max.apply(Math,Object(r["a"])(i));case 3:return a=t.sent,this.stylebar="width:calc(100% - ".concat(a,"px - 110px)"),t.abrupt("return",a);case 6:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}(),handleCurrentChangeInst:function(t){this.instpageNum=t,this.institutionsAll()},handleInstitutionCurrentChange:function(t){this.firstPageNum=t,this.toGetinstitutions(this.institutionStat)},handleSiteCurrentChange:function(t){this.secondPageNum=t,this.toGetIntSite(this.institutionSite,"type")},getInstitutionsListToday:function(){var t={beginDate:this.dateToday,endDate:this.dateToday,pageNum:1,pageSize:80};"Today’s active data"!==this.type&&(t.beginDate=this.timevalue[0],t.endDate=this.timevalue[1]),f(t).then(function(t){a(t)});var i=this,a=function(t){i.instTotal=t.data.totalRecord;var a=[];t.data.list.forEach(function(t){a.push(t.runningJobCount+t.failedJobCount+t.successJobCount+t.waitingJobCount)});var e=Math.max.apply(Math,a);i.institutionsList=t.data.list.map(function(t){var i={};return i.institutions=t.institutions,i.waiting=t.waitingJobCount,i.running=t.runningJobCount,i.success=t.successJobCount,i.failed=t.failedJobCount,i.total=i.waiting+i.running+i.success+i.failed,i.max=e,i.show=!1,i}),i.getsite(i.institutionsList[0],0)}},getsite:function(t,i){var a=this.institutionsList.map(function(t,a){return t.show=a===i,t});this.institutionsList=Object(r["a"])(a);var e={beginDate:this.dateToday,endDate:this.dateToday,institutions:t?t.institutions:""};"Today’s active data"!==this.type&&(e.beginDate=this.timevalue[0],e.endDate=this.timevalue[1]),v(e).then(function(t){s(t)});var n=this,s=function(i){n.siteTotal=i.data.totalRecord,n.getsiteAllToday(t?t.institutions:"");var a=[];i.data.list.forEach(function(t){a.push(t.failedJobCount+t.successJobCount+t.runningJobCount+t.waitingJobCount)});var e=Math.max.apply(Math,a);n.siteList=i.data.list.map(function(t){var i={};return i.partyId=t.partyId,i.site=t.site,i.waiting=t.waitingJobCount,i.running=t.runningJobCount,i.success=t.successJobCount,i.failed=t.failedJobCount,i.total=i.waiting+i.running+i.success+i.failed,i.max=e,i})}},getsiteAllToday:function(t){var i={beginDate:this.dateToday,endDate:this.dateToday,institutions:t,pageNum:1,pageSize:100};"Today’s active data"!==this.type&&(i.beginDate=this.timevalue[0],i.endDate=this.timevalue[1]),h(i).then(function(t){e(t)});var a=this,e=function(t){var i=t.data,e={};e.active=i.siteCount||0,e.waiting=i.waitingJobCount||0,e.running=i.runningJobCount||0,e.success=i.successJobCount||0,e.failed=i.failedJobCount||0,e.total=e.waiting+e.running+e.success+e.failed,a.activeSite=Object(c["a"])({},e)}},objectSpanMethod:function(t){t.row,t.column;var i=t.rowIndex,a=t.columnIndex;if(0===a){var e=this.lengthList[i],n=e>0?1:0;return{rowspan:e,colspan:n}}},toGetinstitutions:function(t){var i={beginDate:this.dateToday,endDate:this.dateToday,institutions:t||this.institutionStat};"Today’s active data"!==this.type&&(i.beginDate=this.timevalue[0],i.endDate=this.timevalue[1]),b(i).then(function(t){e(t)});var a=this,e=function(i){a.totalInstitution=i.data.totalRecord,a.tableIntSateData=i.data.list.map(function(t){return t.waiting=parseInt(t.waitingJobCountForInstitutions)||0,t.running=parseInt(t.runningJobCountForInstitutions)||0,t.failed=parseInt(t.failedJobCountForInstitutions)||0,t.success=parseInt(t.successJobCountForInstitutions)||0,t.total=t.failed+t.success+t.running+t.waiting,t}),a.tableIntSateData=a.setTopItem(a.tableIntSateData,t,"institutions")}},toGetIntSite:function(t,i){var a=this;this.institutionSite=t;var e={beginDate:this.dateToday,endDate:this.dateToday,institutions:t||this.institutionSite,pageNum:this.secondPageNum,pageSize:10};"Today’s active data"!==this.type&&(e.beginDate=this.timevalue[0],e.endDate=this.timevalue[1]),m(e).then(function(t){a.getsiteSataData(t,i)})},getsiteSataData:function(t,i){var a=this;this.lengthList=[],this.totalSitetitution=t.data&&t.data.total||0,this.tableIntLabeList=t.data&&t.data.siteList;var e=[];t.data&&t.data.data.forEach(function(t){if(t.institutionSiteList.length>1){a.lengthList.push(t.institutionSiteList.length);for(var i=0;i<t.institutionSiteList.length-1;i++)a.lengthList.push(0)}else a.lengthList.push(t.institutionSiteList.length);t.institutionSiteList.forEach(function(i,a){var n={};n.institutionSiteName=i.institutionSiteName,n.institution=t.institution,i.mixSiteModeling.forEach(function(t){n[t.siteName]=Object(c["a"])({},t)}),e.push(n)})}),e=this.setTopItem(e,this.institutionSite,"institution"),this.tableIntSiteData=Object(r["a"])(e)}}},C=w,S=(a("a032"),a("2877")),j=Object(S["a"])(C,s,o,!1,null,null,null),x=j.exports,I={zh:{"Today’s active data":"今日活跃数据","Cumulative active data":"累计活跃数据"},en:{"Today’s active data":"Today’s active data","Cumulative active data":"Cumulative active data"}},O={name:"monitor",components:{monitortoday:x},filters:{},data:function(){return{radio:"Today’s active data"}},created:function(){this.$i18n.mergeLocaleMessage("en",I.en),this.$i18n.mergeLocaleMessage("zh",I.zh)},mounted:function(){},methods:{handleChahe:function(t){this.$refs["monitortoday"].type=t,this.$refs["monitortoday"].initi()}}},T=O,$=(a("d17f"),Object(S["a"])(T,e,n,!1,null,null,null));i["default"]=$.exports},f410:function(t,i,a){a("1af6"),t.exports=a("584a").Array.isArray}}]);
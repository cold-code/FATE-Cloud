(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f601ac04"],{"02ac":function(t,e,s){"use strict";var i=s("779a"),a=s.n(i);a.a},"6dde":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ipaddexchange-box"},[s("div",{staticClass:"add-exchange"},[s("div",{staticClass:"exchange-title"},[t._v(t._s(t.$t("m.ip.addExchange")))]),s("el-form",{ref:"editform",staticClass:"edit-form",attrs:{rules:t.editRules,"label-width":"150px","label-position":"left",model:t.exchangeData}},[s("el-form-item",{attrs:{label:"Exchange",prop:"exchangeName"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v("Exchange")])]),s("el-input",{on:{blur:function(e){return t.cancelValid("exchangeName")},focus:function(e){return t.cancelValid("exchangeName")}},model:{value:t.exchangeData.exchangeName,callback:function(e){t.$set(t.exchangeData,"exchangeName",e)},expression:"exchangeData.exchangeName"}})],1),s("el-form-item",{attrs:{label:"VIP ",prop:"vipEntrance"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v("VIP Entrance :")])]),s("el-input",{on:{blur:function(e){return t.cancelValid("vipEntrance")},focus:function(e){return t.cancelValid("vipEntrance")}},model:{value:t.exchangeData.vipEntrance,callback:function(e){t.$set(t.exchangeData,"vipEntrance","string"===typeof e?e.trim():e)},expression:"exchangeData.vipEntrance"}})],1),s("div",{staticClass:"edit-text"},[s("span",[t._v(t._s(t.$t("m.ip.rollsiteAndRouterInfo")))]),s("el-button",{attrs:{type:"text"},on:{click:t.addRollsite}},[t._v(t._s(t.$t("m.common.add")))])],1),t._l(t.rollsiteList,function(e,i){return s("section",{key:i,staticClass:"rollsite-text"},[s("el-button",{staticClass:"remove-section",class:{remove:1!==t.rollsiteList.length},attrs:{type:"text",disabled:1===t.rollsiteList.length,icon:"el-icon el-icon-close"},on:{click:function(e){return t.removeRollsite(i)}}}),s("el-form-item",{attrs:{label:t.$t("m.ip.rollsiteEntrances"),prop:"networkAccess"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v(t._s(t.$t("m.ip.rollsiteEntrances")))])]),s("el-input",{class:{inputwarn:e.networkAccessWarnshow},on:{focus:function(t){e.networkAccessWarnshow=!1}},model:{value:e.networkAccess,callback:function(s){t.$set(e,"networkAccess","string"===typeof s?s.trim():s)},expression:"item.networkAccess"}})],1),s("el-form-item",{key:i,attrs:{label:t.$t("m.site.networkExits"),prop:e.networkAccessExit}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v(t._s(t.$t("m.site.networkExits")))])]),s("el-input",{class:{inputwarn:e.networkExitsWarnshow},on:{focus:function(e){return t.cancelValid("networkAccessExit")}},model:{value:e.networkAccessExit,callback:function(s){t.$set(e,"networkAccessExit","string"===typeof s?s.trim():s)},expression:"item.networkAccessExit"}})],1),s("div",{staticClass:"edit-table"},[s("el-table",{attrs:{data:t.rollsiteList[i].partyAddBeanList,"max-height":"250"}},[s("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(a){return[s("div",{staticClass:"router-info"},[s("span",[t._v(t._s(t.$t("m.ip.routerInfo")))]),s("el-button",{attrs:{type:"text",disabled:!e.networkAccess,icon:"el-icon-refresh-right"},on:{click:function(e){return t.toAcquire(i,a)}}}),s("el-button",{attrs:{type:"text",disabled:!e.networkAccess,icon:"el-icon-circle-plus"},on:{click:function(e){return t.showAddSiteNet(i)}}})],1)]}}],null,!0)},[s("el-table-column",{attrs:{type:"index",label:t.$t("m.common.index"),width:"65"}}),s("el-table-column",{attrs:{prop:"partyId",sortable:"",label:t.$t("m.common.partyID"),width:"90","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"networkAccess",label:t.$t("m.ip.routerNetworkAccess"),width:"180","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"secureStatus",label:t.$t("m.ip.isSecure"),width:"85"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(1===e.row.secureStatus?t.$t("m.common.true"):t.$t("m.common.false")))])]}}],null,!0)}),s("el-table-column",{attrs:{prop:"pollingStatus",label:t.$t("m.ip.isPolling"),width:"85"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(1===e.row.pollingStatus?t.$t("m.common.true"):t.$t("m.common.false")))])]}}],null,!0)}),s("el-table-column",{attrs:{prop:"Update Time",label:t.$t("m.common.updateTime"),width:"155","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(t._f("dateFormat")(e.row.updateTime)))])]}}],null,!0)}),s("el-table-column",{attrs:{prop:"status",align:"center",label:t.$t("m.ip.status"),"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?s("span",[t._v(t._s(t.$t("m.common.unactivated")))]):t._e(),1===e.row.status?s("span",[t._v(t._s(t.$t("m.common.published")))]):t._e(),2===e.row.status?s("span",[t._v(t._s(t.$t("m.common.unpublished")))]):t._e(),3===e.row.status?s("span",[t._v(t._s(t.$t("m.common.toDeleted")))]):t._e()]}}],null,!0)}),s("el-table-column",{attrs:{prop:"",align:"center",label:t.$t("m.common.action")},scopedSlots:t._u([{key:"default",fn:function(e){return["default"===e.row.partyId?s("span",[s("el-button",{attrs:{type:"text",disabled:e.row.using}},[s("i",{staticClass:"el-icon-edit",on:{click:function(s){return t.toEditSiteNet(e)}}})]),s("el-button",{attrs:{disabled:"",type:"text"}},[s("i",{staticClass:"el-icon-close"})])],1):s("span",[1===e.row.status||2===e.row.status?s("span",[s("el-button",{attrs:{type:"text",disabled:e.row.using}},[s("i",{staticClass:"el-icon-edit",on:{click:function(s){return t.toEditSiteNet(e)}}})]),s("el-button",{attrs:{type:"text",disabled:e.row.using}},[s("i",{staticClass:"el-icon-close",on:{click:function(s){t.siteNetIndex=e.$index,e.row.using||(e.row.status=3)}}})])],1):t._e(),3===e.row.status?s("el-button",{attrs:{type:"text"},on:{click:function(s){return t.toRecover(e)}}},[t._v("\n                                              "+t._s(t.$t("m.common.recover"))+"\n                                          ")]):t._e()],1)]}}],null,!0)})],1)],1)],1)],1)})],2),s("div",{staticClass:"exchange-footer"},[s("el-button",{staticClass:"ok-btn",attrs:{type:"primary"},on:{click:t.toaction}},[t._v(t._s(t.$t("m.common.OK")))]),s("el-button",{staticClass:"ok-btn",attrs:{type:"info"},on:{click:t.tocancel}},[t._v(t._s(t.$t("m.common.cancel")))])],1)],1),s("el-dialog",{staticClass:"add-site-dialog",attrs:{visible:t.addSiteNet,title:t.$t("m.ip.routerNetworkAccess"),width:"500px","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.addSiteNet=e}}},[s("div",{staticClass:"site-net-table"},[s("el-form",{ref:"siteNetform",staticClass:"edit-form",attrs:{rules:t.siteEditRules,"label-width":"200px","label-position":"top",model:t.tempSiteNet}},[s("el-form-item",{staticClass:"inline",class:{inline:"default"===t.tempSiteNet.partyId},attrs:{label:"",prop:"partyId"}},[s("span",{attrs:{slot:"label"},slot:"label"},["add"===t.siteNetType?s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}):t._e(),s("span",[t._v(t._s(t.$t("m.common.partyID"))+" :")])]),"edit"===t.siteNetType&&1===t.tempSiteNet.status||"default"===t.tempSiteNet.partyId?s("span",[t._v("\n                          "+t._s(t.tempSiteNet.partyId)+"\n                      ")]):s("el-input",{attrs:{onkeyup:"this.value = this.value.replace(/[^\\d.:]/g,'');"},on:{blur:t.checkParty,focus:function(e){return t.$refs["siteNetform"].clearValidate("partyId")}},model:{value:t.tempSiteNet.partyId,callback:function(e){t.$set(t.tempSiteNet,"partyId","string"===typeof e?e.trim():e)},expression:"tempSiteNet.partyId"}})],1),s("el-form-item",{staticStyle:{height:"100%"},attrs:{label:"",prop:"networkAccess"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v(t._s(t.$t("m.ip.routerNetworkAccess"))+"：")])]),s("el-input",{class:{"edit-text":!0,"plus-text":!0,"Network-text":!0,exitwarn:t.routerNetworkAccesswarnshow},attrs:{placeholder:""},on:{focus:function(e){return t.addShow("router")}},model:{value:t.tempSiteNet.networkAccess,callback:function(e){t.$set(t.tempSiteNet,"networkAccess",e)},expression:"tempSiteNet.networkAccess"}},[s("i",{staticClass:"el-icon-plus plus",attrs:{slot:"suffix"},on:{click:function(e){return t.addShow("router")}},slot:"suffix"})])],1),s("el-form-item",{staticClass:"inline",attrs:{label:t.$t("m.ip.isSecure"),prop:"isSecure"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v("isSecure:")])]),s("el-switch",{model:{value:t.isSecure,callback:function(e){t.isSecure=e},expression:"isSecure"}})],1),s("el-form-item",{staticClass:"inline",attrs:{label:t.$t("m.ip.isPolling"),prop:"isPolling"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v("isPolling:")])]),"exchange"===t.tempSiteNet.partyId?s("span",[s("el-switch",{attrs:{disabled:""},model:{value:t.isPolling,callback:function(e){t.isPolling=e},expression:"isPolling"}})],1):s("span",[s("el-switch",{model:{value:t.isPolling,callback:function(e){t.isPolling=e},expression:"isPolling"}})],1)])],1),s("div",{staticClass:"dialog-footer"},[s("el-button",{staticClass:"ok-btn",attrs:{type:"primary"},on:{click:t.toAddSiteNet}},[t._v(t._s(t.$t("m.common.submit")))]),s("el-button",{staticClass:"ok-btn",attrs:{type:"info"},on:{click:t.cancelAddSiteNet}},[t._v(t._s(t.$t("m.common.cancel")))])],1)],1)]),s("el-dialog",{staticClass:"site-toleave-dialog",attrs:{visible:t.isleavedialog,"show-close":!0,width:"450px"},on:{"update:visible":function(e){t.isleavedialog=e}}},[s("div",{staticClass:"line-text-one"},[t._v(t._s(t.$t("m.siteAdd.sureLeavePage")))]),s("div",{staticClass:"line-text-two"},[t._v(t._s(t.$t("m.siteAdd.notSavedTips")))]),s("div",{staticClass:"dialog-footer"},[s("el-button",{staticClass:"ok-btn",attrs:{type:"primary"},on:{click:t.sureLeave}},[t._v(t._s(t.$t("m.common.sure")))]),s("el-button",{staticClass:"ok-btn",attrs:{type:"info"},on:{click:t.cancelLeave}},[t._v(t._s(t.$t("m.common.cancel")))])],1)]),s("ipeditadd",{ref:"ipeditadd",attrs:{formName:t.formName},on:{updateIp:t.updateIp}})],1)},a=[],n=s("cebc"),o=(s("5df3"),s("4f7f"),s("75fc")),r=(s("28a5"),s("ac6a"),s("7f7f"),s("c6a8")),l=s("c1df"),c=s.n(l),d=s("bb14"),u=s("0dcd"),p={name:"ipaddexchange",components:{ipeditadd:u["a"]},filters:{dateFormat:function(t){return c()(t).format("YYYY-MM-DD HH:mm:ss")}},data:function(){var t=this;return{addSiteNet:!1,isleave:!1,isleavedialog:!1,siteNetIndex:0,rollsiteIndex:0,routerNetworkAccesswarnshow:!1,formName:"siteNetform",rollsiteList:[{networkAccessWarnshow:!1,networkExitsWarnshow:!1,networkAccess:"",networkAccessExit:"",partyAddBeanList:[]}],tempExchangeDataList:[],tempSiteNet:{},exchangeData:{},isSecure:!1,isPolling:!0,siteNetType:"add",partyIdList:[],tempPartyId:"",siteEditRules:{partyId:[{required:!0,trigger:"bulr",validator:function(e,s,i){s=s||"";var a=s.trim();a?t.checkResult?i(new Error(t.$t("m.ip.partyIDAssigned"))):"default"===a||/(^[1-9]\d*$)/.test(a)?i():i(new Error(t.$t("m.common.fieldInvalidInput"))):i(new Error(t.$t("m.common.requiredfieldWithType",{type:t.$t("m.common.partyID")})))}}],networkAccess:[{required:!0,trigger:"bulr",validator:function(e,s,i){s=s||"";var a=s.trim();a?Object(d["a"])(a)?i():i(new Error(t.$t("m.common.invalidInput"))):i(new Error(t.$t("m.common.requiredfieldWithType",{type:t.$t("m.ip.routerNetworkAccess")})))}}]},editRules:{exchangeName:[{required:!0,message:this.$t("m.common.requiredfieldWithType",{type:"exchange"}),trigger:"bulr"}],vipEntrance:[{required:!0,trigger:"bulr",validator:function(e,s,i){s=s||"";var a=s.trim();a?Object(d["a"])(a)?i():i(new Error(t.$t("m.common.invalidInput"))):i(new Error(t.$t("m.ip.vipRequired")))}}],networkAccessExit:[{required:!0,trigger:"bulr",validator:function(e,s,i){s=s||"";var a=s.trim();a?Object(d["a"])(a)?i():i(new Error(t.$t("m.common.invalidInput"))):i(new Error(t.$t("m.siteAdd.networkAcessExitRequired")))}}]}}},created:function(){},mounted:function(){var t=this;this.$router.beforeEach(function(e,s,i){t.leaveRouteName=e.name,t.isleave?i():(t.isleavedialog=!0,i(!1))})},methods:{validator:function(t,e,s){return function(t,e,s){e=e||"";var i=e.trim();i?Object(d["a"])(i)?s():s(new Error(this.$t("m.common.invalidInput"))):s(new Error(this.$t("m.siteAdd.networkAcessExitRequired")))}},addShow:function(t){this.$refs["ipeditadd"].networkacesstype=t,this.$refs["ipeditadd"].adddialog=!0;var e={router:"networkAccess"},s=e[t];if(this.tempSiteNet[s]){var i=[];this.tempSiteNet[s].split(";").forEach(function(t){if(t){var e={};e.ip=t,e.show=!1,e.checked=!1,i.push(e)}}),this.$refs["ipeditadd"].entrancesSelect=Object(o["a"])(new Set(i))}else this.$refs["ipeditadd"].entrancesSelect=[]},addRollsite:function(){this.rollsiteList.unshift({networkAccessWarnshow:!1,networkExitsWarnshow:!1,networkAccess:"",partyAddBeanList:[]})},showAddSiteNet:function(t){this.rollsiteList[t].networkAccess&&(this.rollsiteIndex=t,this.siteNetType="add",this.isSecure=!0,this.tempSiteNet={status:2},this.addSiteNet=!0,this.$refs["siteNetform"]&&this.$refs["siteNetform"].resetFields())},removeRollsite:function(t){this.rollsiteList.splice(t,1)},toaction:function(){var t=this,e=!0,s=!0,i=!0,a=[],n=[];this.rollsiteList.forEach(function(t,r){t.networkAccessWarnshow=!t.networkAccess,t.networkExitsWarnshow=!t.networkAccessExit,0===t.partyAddBeanList.length&&(e=!1),t.networkAccessExit||(i=!1),a.push(t.networkAccess),n=Object(o["a"])(new Set(a)),a.length!==n.length&&(s=!1,t.networkAccessWarnshow=!0,t.networkExitsWarnshow=!0)}),e?s?i?this.$refs["editform"].validate(function(i){if(i&&e&&s){var a={exchangeName:t.exchangeData.exchangeName.trim(),vipEntrance:t.exchangeData.vipEntrance.trim(),rollSiteAddBeanList:t.rollsiteList};Object(r["b"])(a).then(function(e){t.isleave=!0,t.$router.push({name:"IP Manage",query:{type:"exchange"}})})}}):this.$message.error(this.$t("m.siteAdd.networkAcessExitRequired")):this.$message.error(this.$t("m.ip.rollsiteNetworkExists")):this.$message.error(this.$t("m.ip.routerInfoRequired"))},tocancel:function(){this.$router.push({name:"IP Manage",query:{type:"exchange"}})},cancelValid:function(t){this.$refs["editform"].clearValidate(t)},toAddSiteNet:function(){var t=this,e=this.rollsiteIndex;this.tempSiteNet.secureStatus=!0===this.isSecure?1:2,this.tempSiteNet.pollingStatus=!0===this.isPolling?1:2,this.$refs["siteNetform"].validate(function(s){if(s)if("edit"===t.siteNetType){t.partyIdList=t.tempExchangeDataList[e].map(function(t){return t.partyId});var i=t.tempExchangeDataList[e][t.siteNetIndex];i.networkAccess!==t.tempSiteNet.networkAccess||i.secureStatus!==t.tempSiteNet.secureStatus||i.pollingStatus!==t.tempSiteNet.pollingStatus?t.tempSiteNet.status=2:t.tempSiteNet.status=i.status,t.rollsiteList[e].partyAddBeanList[t.siteNetIndex]=Object(n["a"])({},t.tempSiteNet),t.rollsiteList[e].partyAddBeanList=Object(o["a"])(t.rollsiteList[e].partyAddBeanList),t.addSiteNet=!1}else"add"===t.siteNetType&&(t.rollsiteList[e].partyAddBeanList.push(Object(n["a"])({},t.tempSiteNet)),t.rollsiteList[e].partyAddBeanList=Object(o["a"])(t.rollsiteList[e].partyAddBeanList),t.tempExchangeDataList[e]=JSON.parse(JSON.stringify(t.rollsiteList[e].partyAddBeanList)),t.addSiteNet=!1)})},cancelAddSiteNet:function(){this.tempSiteNet={},this.addSiteNet=!1,this.$refs["siteNetform"].resetFields()},toEditSiteNet:function(t){t.row.using||(this.siteNetType="edit",this.addSiteNet=!0,this.tempSiteNet=Object(n["a"])({},t.row),this.isSecure=1===this.tempSiteNet.secureStatus,this.isPolling=1===this.tempSiteNet.pollingStatus,this.siteNetIndex=t.$index,this.tempPartyId=t.row.partyId)},todelSiteNet:function(t,e){this.rollsiteList[t].partyAddBeanList.splice(e.$index,1)},toAcquire:function(t){var e=this;if(this.rollsiteList[t].networkAccess){this.rollsiteIndex=t;var s={networkAccess:this.rollsiteList[t].networkAccess};Object(r["p"])(s).then(function(s){e.rollsiteList[t].partyAddBeanList=s.data,e.tempExchangeDataList[t]=JSON.parse(JSON.stringify(s.data))}).catch(function(t){var s=document.querySelector(".el-message");s||e.$message.error(t.msg)})}},toSearch:function(t){var e=this;Object(r["I"])(!this.rollsiteList[t].searchData).then(function(t){e.exchangeData.partyAddBeanList=Object(o["a"])(t.data),e.tempExchangeDataList=JSON.parse(JSON.stringify(t.data))})},sureLeave:function(){this.isleave=!0,this.isleavedialog=!1;var t="IP Manage"===this.leaveRouteName?{type:"exchange"}:"";this.$router.push({name:this.leaveRouteName,query:t})},cancelLeave:function(){this.$router.push({name:"IP Manage",type:"exchange"}),this.$store.dispatch("SetMune","IP Manage"),this.isleavedialog=!1},toRecover:function(t){var e=this.rollsiteIndex,s=this.tempExchangeDataList[this.rollsiteIndex][this.siteNetIndex],i=t.row;s.networkAccess!==i.networkAccess||s.secureStatus!==i.secureStatus||s.pollingStatus!==i.pollingStatus?i.status=2:i.status=s.status,this.rollsiteList[e].partyAddBeanList=Object(o["a"])(this.rollsiteList[e].partyAddBeanList)},checkParty:function(){var t=this,e=this,s=e.tempSiteNet.partyId,i=null;Object(r["h"])({partyId:s,rollSiteId:i}).then(function(e){!0===e.data&&(t.checkResult=e.data,t.$refs["siteNetform"].validateField("partyId",function(t){}))})},updateIp:function(t){this.$set(this.tempSiteNet,"".concat(t.name),t.data)}}},m=p,h=(s("02ac"),s("2877")),f=Object(h["a"])(m,i,a,!1,null,null,null);e["default"]=f.exports},"779a":function(t,e,s){}}]);
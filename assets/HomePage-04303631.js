import{_ as b,I as $,c as x,a as y,r as p,o as c,b as m,d as l,e as v,f as t,g as h,w as I,v as q,h as k,i as P,j as e,k as u,t as i,p as U,l as L}from"./index-949a2914.js";const D={name:"vue-base-card",components:{IonIcon:$},props:{idProp:{type:String,default:"card-0"}},data(){return{chevronDownOutline:x,chevronForwardOutline:y,showRows:!1}}},j=["id"],R={class:"header-container"},C=["for"],S=["for"],H=["id"],N={key:0,class:"content-container"};function V(o,_,r,f,a,g){const d=p("IonIcon");return c(),m("div",{id:r.idProp,class:"container"},[l("div",R,[v(o.$slots,"titulo",{},void 0,!0),a.showRows?h("",!0):(c(),m("label",{key:0,for:"checkbox-show-rows-".concat(r.idProp)},[t(d,{icon:a.chevronForwardOutline},null,8,["icon"])],8,C)),a.showRows?(c(),m("label",{key:1,for:"checkbox-show-rows-".concat(r.idProp)},[t(d,{icon:a.chevronDownOutline},null,8,["icon"])],8,S)):h("",!0),I(l("input",{type:"checkbox",id:"checkbox-show-rows-".concat(r.idProp),"onUpdate:modelValue":_[0]||(_[0]=n=>a.showRows=n)},null,8,H),[[q,a.showRows]])]),a.showRows?(c(),m("div",N,[v(o.$slots,"default",{},void 0,!0)])):h("",!0)],8,j)}const B=b(D,[["render",V],["__scopeId","data-v-c2df2d4b"]]);const F={name:"vue-home-page-view",components:{vueHelpCard:B,IonTitle:k}},s=o=>(U("data-v-d089c46e"),o=o(),L(),o),O={class:"section-inputs-q-system"},T=s(()=>l("div",null," Ut elit dolore mollit laborum. Deserunt ea ullamco et dolore id nostrud ex enim elit ullamco sint velit. Laborum cillum ut mollit minim mollit ad do consectetur ea magna voluptate cillum laborum. Ullamco non esse aliqua sunt consequat dolore magna ex duis ipsum reprehenderit fugiat pariatur. Laborum consectetur nulla et commodo commodo voluptate. ",-1)),Q=s(()=>l("div",null," Ut elit dolore mollit laborum. Deserunt ea ullamco et dolore id nostrud ex enim elit ullamco sint velit. Laborum cillum ut mollit minim mollit ad do consectetur ea magna voluptate cillum laborum. Ullamco non esse aliqua sunt consequat dolore magna ex duis ipsum reprehenderit fugiat pariatur. Laborum consectetur nulla et commodo commodo voluptate. ",-1)),A=s(()=>l("div",null," Ut elit dolore mollit laborum. Deserunt ea ullamco et dolore id nostrud ex enim elit ullamco sint velit. Laborum cillum ut mollit minim mollit ad do consectetur ea magna voluptate cillum laborum. Ullamco non esse aliqua sunt consequat dolore magna ex duis ipsum reprehenderit fugiat pariatur. Laborum consectetur nulla et commodo commodo voluptate. ",-1)),E=s(()=>l("div",null," Ut elit dolore mollit laborum. Deserunt ea ullamco et dolore id nostrud ex enim elit ullamco sint velit. Laborum cillum ut mollit minim mollit ad do consectetur ea magna voluptate cillum laborum. Ullamco non esse aliqua sunt consequat dolore magna ex duis ipsum reprehenderit fugiat pariatur. Laborum consectetur nulla et commodo commodo voluptate. ",-1)),M=s(()=>l("div",null," Ut elit dolore mollit laborum. Deserunt ea ullamco et dolore id nostrud ex enim elit ullamco sint velit. Laborum cillum ut mollit minim mollit ad do consectetur ea magna voluptate cillum laborum. Ullamco non esse aliqua sunt consequat dolore magna ex duis ipsum reprehenderit fugiat pariatur. Laborum consectetur nulla et commodo commodo voluptate. ",-1)),W=s(()=>l("div",null," Ut elit dolore mollit laborum. Deserunt ea ullamco et dolore id nostrud ex enim elit ullamco sint velit. Laborum cillum ut mollit minim mollit ad do consectetur ea magna voluptate cillum laborum. Ullamco non esse aliqua sunt consequat dolore magna ex duis ipsum reprehenderit fugiat pariatur. Laborum consectetur nulla et commodo commodo voluptate. ",-1));function z(o,_,r,f,a,g){const d=p("IonTitle"),n=p("vueHelpCard"),w=p("vue-base-lyout");return c(),P(w,null,{default:e(()=>[l("section",O,[t(d,null,{default:e(()=>[u(i(o.$t("parametrosQSystem")),1)]),_:1}),t(n,{idProp:"help-rqd"},{titulo:e(()=>[u(i(o.$t("rockQualityDesignation")),1)]),default:e(()=>[T]),_:1}),t(n,{idProp:"help-jn"},{titulo:e(()=>[u(i(o.$t("jointSetNumber")),1)]),default:e(()=>[Q]),_:1}),t(n,{idProp:"help-jr"},{titulo:e(()=>[u(i(o.$t("jointRoughness")),1)]),default:e(()=>[A]),_:1}),t(n,{idProp:"help-ja"},{titulo:e(()=>[u(i(o.$t("jointAlterationNumber")),1)]),default:e(()=>[E]),_:1}),t(n,{idProp:"help-jw"},{titulo:e(()=>[u(i(o.$t("jointWaterReductionFactor")),1)]),default:e(()=>[M]),_:1}),t(n,{idProp:"help-srf"},{titulo:e(()=>[u(i(o.$t("stressReductionFactor")),1)]),default:e(()=>[W]),_:1})])]),_:1})}const J=b(F,[["render",z],["__scopeId","data-v-d089c46e"]]);export{J as default};

import{_ as D,I,E as U,G as $,B as R,H as M,J as F,K as P,L as N,M as L,N as A,h as E,O as T,V as g,r as c,o as d,i as p,j as l,d as S,f as a,k as r,t as u,g as m}from"./index-949a2914.js";const B={name:"vue-calculate-view",components:{IonIcon:I,IonSelect:U,IonItem:$,IonButton:R,IonSelectOption:M,IonRange:F,IonInput:P,IonDatetime:N,IonDatetimeButton:L,IonModal:A,IonTitle:E},data(){return{closeCircleOutline:T,titleIndex:null,value:{titleValue:null,dateValue:null,dateFormated:null,rqdSelect:null,rqdMinSlider:null,rqdMaxSlider:null,rqdValue:null,jvXValue:null,jvYValue:null,jvZValue:null,jvValue:null,jnSelect:null,jnValue:null,jrDescription:null,jrSelect:null,jrValue:null,jaContact:null,jaFilling:null,jaSelect:null,jaValue:null,jwSelect:null,jwValue:null,srfDescription:null,srfSelect:null,srfValue:null,tunelSpanValue:null,esrValue:null,qValue:null,dimEquiValue:null,suporte:null},resultados:{}}},computed:{currentDate(){const e=new Date,n=String(e.getDate()).padStart(2,"0"),j=String(e.getMonth()+1).padStart(2,"0"),b=e.getFullYear();return{dia:n,mes:j,ano:b}},currentTime(){const e=new Date,n=String(e.getHours()).padStart(2,"0"),j=String(e.getMinutes()).padStart(2,"0");return{hora:n,minuto:j}},cardAtual(){return this.$store.getters.currentCardAtual},currentOptions(){return this.$store.getters.currentOptions},valorQ(){return this.resultados.qValue?this.resultados.qValue:"N.A"},valorRqd(){return this.resultados.rqdValue?this.resultados.rqdValue:"N.A"},valorJv(){return this.resultados.jvValue?this.resultados.jvValue:"N.A"},valorEsr(){return this.resultados.esrValue?this.resultados.esrValue:"N.A"},valorDimEqui(){return this.resultados.dimEquiValue}},watch:{value:{handler(){this.calculaRqd(),this.assignValues()},deep:!0}},mounted(){this.memoryHandler()},updated(){this.memoryHandler(),this.value.esrValue=this.currentOptions.esrValue},methods:{memoryHandler(){const e=this.verificarLocal();this.cardAtual==="novo"?(this.value.titleValue="Log ".concat(e.length),this.value.dateValue="".concat(this.currentDate.ano,"-").concat(this.currentDate.mes,"-").concat(this.currentDate.dia,"T").concat(this.currentTime.hora,":").concat(this.currentTime.minuto,":00")):this.value=e[this.cardAtual]?e[this.cardAtual]:this.value},percentualPinFormatter(e){return"".concat(e,"%")},regularPinFormatter(e){return"".concat(e)},closeEdit(){this.$router.push("/tabs/logs")},armazenarLocal(e){if(typeof Storage<"u"){const n=JSON.parse(localStorage.getItem("qSystemLogs"))||[];n.push(e),localStorage.setItem("qSystemLogs",JSON.stringify(n))}},replaceLocal(e){if(typeof Storage<"u"){const n=JSON.parse(localStorage.getItem("qSystemLogs"));n[this.cardAtual]=e,localStorage.setItem("qSystemLogs",JSON.stringify(n))}},verificarLocal(){if(typeof Storage<"u"){let e=JSON.parse(localStorage.getItem("qSystemLogs"));return e||(e=[],localStorage.setItem("qSystemLogs",JSON.stringify(e))),e}return null},calculaRqd(){this.currentOptions.rqdMetodo==="directInput"?this.value.rqdSelect&&(this.value.rqdMinSlider=this.value.rqdSelect.split("-")[0]<10?10:this.value.rqdSelect.split("-")[0],this.value.rqdMaxSlider=this.value.rqdSelect.split("-")[1]):this.currentOptions.rqdMetodo==="jvCorrelation"&&(this.value.jvValue=(Number(this.value.jvXValue)||0)+(Number(this.value.jvYValue)||0)+(Number(this.value.jvZValue)||0),this.value.rqdValue=this.value.jvValue?Math.round((115-3.3*this.value.jvValue)/5)*5:"N.A.",this.value.rqdValue=this.value.rqdValue>100?100:this.value.rqdValue)},calculaSuporte(){return"suporte"},getDate(){const n=this.value.dateValue.split("T"),j=n[0].split("-"),b=n[1].split(":");this.dateFormated="".concat(j[2],"/").concat(j[1],"/").concat(j[0]," ").concat(b[0],":").concat(b[1])},assignValues(){const e=JSON.parse(JSON.stringify(this.value));e.jnValue=g.jn[this.value.jnSelect]?g.jn[this.value.jnSelect]:this.value.jnValue,e.jrValue=g.jr[this.value.jrSelect]?g.jr[this.value.jrSelect]:this.value.jrValue,e.jaValue=g.ja[this.value.jaSelect]?g.ja[this.value.jaSelect]:this.value.jaValue,e.jwValue=g.jw[this.value.jwSelect]?g.jw[this.value.jwSelect]:this.value.jwValue,e.srfValue=g.srf[this.value.srfSelect]?g.srf[this.value.srfSelect]:this.value.srfValue,e.qValue=e.rqdValue*e.jrValue*e.jwValue/(e.jnValue*e.jaValue*e.srfValue),e.dimEquiValue=((e.tunelSpanValue?e.tunelSpanValue:10)/e.esrValue).toFixed(2),e.suporte=this.calculaSuporte(),this.resultados=JSON.parse(JSON.stringify(e))},saveCloseEdit(){this.cardAtual==="novo"?this.armazenarLocal(this.resultados):this.replaceLocal(this.resultados),this.$router.push("/tabs/logs")}}},Y={class:"section-geral"},Q={class:"input-container title-container"},W={class:"input-container date-container"},Z={class:"section-inputs"},H={class:"input-container rqd-container"},X={class:"input-container jn-container"},z={class:"input-container jr-container"},G={class:"input-container ja-container"},K={class:"input-container jw-container"},_={class:"input-container srf-container"},x={class:"input-container"},ee={class:"section-resultados"},le={class:"resultados-container"},te={class:"save-log-container"};function ae(e,n,j,b,t,s){const h=c("IonTitle"),k=c("IonIcon"),f=c("IonItem"),O=c("IonInput"),J=c("IonDatetimeButton"),w=c("IonDatetime"),C=c("IonModal"),o=c("IonSelectOption"),v=c("IonSelect"),V=c("IonRange"),y=c("IonButton"),q=c("vue-base-lyout");return d(),p(q,null,{default:l(()=>[S("section",Y,[a(h,null,{default:l(()=>[r(u(e.$t("parametrosGerais")),1)]),_:1}),S("div",Q,[a(k,{class:"close-edit",icon:t.closeCircleOutline,onClick:n[0]||(n[0]=i=>s.closeEdit())},null,8,["icon"]),a(f,null,{default:l(()=>[r(u(e.$t("tituloRegistro")),1)]),_:1}),a(O,{modelValue:t.value.titleValue,"onUpdate:modelValue":n[1]||(n[1]=i=>t.value.titleValue=i)},null,8,["modelValue"])]),S("div",W,[a(f,null,{default:l(()=>[r(u(e.$t("dataRegistro")),1)]),_:1}),a(f,{class:"input-item date-time-container"},{default:l(()=>[a(J,{datetime:"datetime"}),a(C,{"keep-contents-mounted":!0},{default:l(()=>[a(w,{id:"datetime","datetime-format":"DD-MM-YYYY",modelValue:t.value.dateValue,"onUpdate:modelValue":n[2]||(n[2]=i=>t.value.dateValue=i),min:"".concat(s.currentDate.ano,"-01-01T00:00:00"),max:"".concat(s.currentDate.ano,"-12-31T23:59:59")},null,8,["modelValue","min","max"])]),_:1})]),_:1})])]),S("section",Z,[a(h,null,{default:l(()=>[r(u(e.$t("parametrosQSystem")),1)]),_:1}),S("div",H,[a(f,null,{default:l(()=>[r(u(e.$t("rockQualityDesignation")),1)]),_:1}),s.currentOptions.rqdMetodo==="directInput"?(d(),p(v,{key:0,label:"RQD:",placeholder:"".concat(e.$t("select")),modelValue:t.value.rqdSelect,"onUpdate:modelValue":n[3]||(n[3]=i=>t.value.rqdSelect=i)},{default:l(()=>[a(o,{value:"0-25"},{default:l(()=>[r(u(e.$t("aOptionRqd")),1)]),_:1}),a(o,{value:"25-50"},{default:l(()=>[r(u(e.$t("bOptionRqd")),1)]),_:1}),a(o,{value:"50-75"},{default:l(()=>[r(u(e.$t("cOptionRqd")),1)]),_:1}),a(o,{value:"75-90"},{default:l(()=>[r(u(e.$t("dOptionRqd")),1)]),_:1}),a(o,{value:"90-100"},{default:l(()=>[r(u(e.$t("eOptionRqd")),1)]),_:1})]),_:1},8,["placeholder","modelValue"])):m("",!0),s.currentOptions.rqdMetodo==="directInput"&&t.value.rqdSelect?(d(),p(V,{key:1,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.percentualPinFormatter,snaps:!0,min:t.value.rqdMinSlider,max:t.value.rqdMaxSlider,modelValue:t.value.rqdValue,"onUpdate:modelValue":n[4]||(n[4]=i=>t.value.rqdValue=i),step:"5"},null,8,["pin-formatter","min","max","modelValue"])):m("",!0),s.currentOptions.rqdMetodo==="jvCorrelation"?(d(),p(O,{key:2,label:e.$t("labelJvX"),modelValue:t.value.jvXValue,"onUpdate:modelValue":n[5]||(n[5]=i=>t.value.jvXValue=i)},null,8,["label","modelValue"])):m("",!0),s.currentOptions.rqdMetodo==="jvCorrelation"?(d(),p(O,{key:3,label:e.$t("labelJvY"),modelValue:t.value.jvYValue,"onUpdate:modelValue":n[6]||(n[6]=i=>t.value.jvYValue=i)},null,8,["label","modelValue"])):m("",!0),s.currentOptions.rqdMetodo==="jvCorrelation"?(d(),p(O,{key:4,label:e.$t("labelJvZ"),modelValue:t.value.jvZValue,"onUpdate:modelValue":n[7]||(n[7]=i=>t.value.jvZValue=i)},null,8,["label","modelValue"])):m("",!0),s.currentOptions.rqdMetodo==="jvCorrelation"?(d(),p(f,{key:5,class:"input-item"},{default:l(()=>[r(u(e.$t("labelJv"))+" "+u(s.valorJv),1)]),_:1})):m("",!0),s.currentOptions.rqdMetodo==="jvCorrelation"?(d(),p(f,{key:6,class:"input-item"},{default:l(()=>[r(u(e.$t("labelRqd"))+" "+u(s.valorRqd),1)]),_:1})):m("",!0)]),S("div",X,[a(f,null,{default:l(()=>[r(u(e.$t("jointSetNumber")),1)]),_:1}),a(v,{label:"Jn:",placeholder:"".concat(e.$t("select")),modelValue:t.value.jnSelect,"onUpdate:modelValue":n[8]||(n[8]=i=>t.value.jnSelect=i)},{default:l(()=>[a(o,{value:"a"},{default:l(()=>[r(u(e.$t("aOptionJn")),1)]),_:1}),a(o,{value:"b"},{default:l(()=>[r(u(e.$t("bOptionRqd")),1)]),_:1}),a(o,{value:"c"},{default:l(()=>[r(u(e.$t("cOptionJn")),1)]),_:1}),a(o,{value:"d"},{default:l(()=>[r(u(e.$t("dOptionJn")),1)]),_:1}),a(o,{value:"e"},{default:l(()=>[r(u(e.$t("eOptionJn")),1)]),_:1}),a(o,{value:"f"},{default:l(()=>[r(u(e.$t("fOptionJn")),1)]),_:1}),a(o,{value:"g"},{default:l(()=>[r(u(e.$t("gOptionJn")),1)]),_:1}),a(o,{value:"h"},{default:l(()=>[r(u(e.$t("hOptionJn")),1)]),_:1}),a(o,{value:"i"},{default:l(()=>[r(u(e.$t("iOptionJn")),1)]),_:1})]),_:1},8,["placeholder","modelValue"]),t.value.jnSelect=="a"?(d(),p(V,{key:0,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:.5,max:1,modelValue:t.value.jnValue,"onUpdate:modelValue":n[9]||(n[9]=i=>t.value.jnValue=i),step:"0.1"},null,8,["pin-formatter","modelValue"])):m("",!0)]),S("div",z,[a(f,null,{default:l(()=>[r(u(e.$t("jointRoughness")),1)]),_:1}),a(v,{label:e.$t("labelJrDescription"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jrDescription,"onUpdate:modelValue":n[10]||(n[10]=i=>t.value.jrDescription=i)},{default:l(()=>[a(o,{value:"a"},{default:l(()=>[r(u(e.$t("aOptionJrDescription")),1)]),_:1}),a(o,{value:"b"},{default:l(()=>[r(u(e.$t("bOptionJrDescription")),1)]),_:1}),a(o,{value:"c"},{default:l(()=>[r(u(e.$t("cOptionJrDescription")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"]),t.value.jrDescription==="a"||t.value.jrDescription==="b"?(d(),p(v,{key:0,label:e.$t("labelJr"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jrSelect,"onUpdate:modelValue":n[11]||(n[11]=i=>t.value.jrSelect=i)},{default:l(()=>[a(o,{value:"a"},{default:l(()=>[r(u(e.$t("aOptionJr")),1)]),_:1}),a(o,{value:"b"},{default:l(()=>[r(u(e.$t("bOptionJr")),1)]),_:1}),a(o,{value:"c"},{default:l(()=>[r(u(e.$t("cOptionJr")),1)]),_:1}),a(o,{value:"d"},{default:l(()=>[r(u(e.$t("dOptionJr")),1)]),_:1}),a(o,{value:"e"},{default:l(()=>[r(u(e.$t("eOptionJr")),1)]),_:1}),a(o,{value:"f"},{default:l(()=>[r(u(e.$t("fOptionJr")),1)]),_:1}),a(o,{value:"g"},{default:l(()=>[r(u(e.$t("gOptionJr")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.jrDescription==="c"?(d(),p(v,{key:1,label:e.$t("labelJr"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jrSelect,"onUpdate:modelValue":n[12]||(n[12]=i=>t.value.jrSelect=i)},{default:l(()=>[a(o,{value:"h"},{default:l(()=>[r(u(e.$t("hOptionJr")),1)]),_:1}),a(o,{value:"i"},{default:l(()=>[r(u(e.$t("iOptionJr")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0)]),S("div",G,[a(f,null,{default:l(()=>[r(u(e.$t("jointAlterationNumber")),1)]),_:1}),a(v,{label:e.$t("labelJaContact"),placeholder:e.$t("select"),modelValue:t.value.jaContact,"onUpdate:modelValue":n[13]||(n[13]=i=>t.value.jaContact=i)},{default:l(()=>[a(o,{value:"wallContact"},{default:l(()=>[r(u(e.$t("aOptionJaContact")),1)]),_:1}),a(o,{value:"partlyWallContact"},{default:l(()=>[r(u(e.$t("bOptionJaContact")),1)]),_:1}),a(o,{value:"noWallContact"},{default:l(()=>[r(u(e.$t("cOptionJaContact")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"]),t.value.jaContact==="wallContact"?(d(),p(v,{key:0,label:e.$t("labelJaContactFilling"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jaFilling,"onUpdate:modelValue":n[14]||(n[14]=i=>t.value.jaFilling=i)},{default:l(()=>[a(o,{value:"clean"},{default:l(()=>[r(u(e.$t("aOptionContactFilling")),1)]),_:1}),a(o,{value:"filling"},{default:l(()=>[r(u(e.$t("bOptionContactFilling")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.jaContact==="wallContact"&&t.value.jaFilling==="clean"?(d(),p(v,{key:1,label:e.$t("labelJa"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jaSelect,"onUpdate:modelValue":n[15]||(n[15]=i=>t.value.jaSelect=i)},{default:l(()=>[a(o,{value:"a"},{default:l(()=>[r(u(e.$t("aOptionJa")),1)]),_:1}),a(o,{value:"b"},{default:l(()=>[r(u(e.$t("bOptionJa")),1)]),_:1}),a(o,{value:"c"},{default:l(()=>[r(u(e.$t("cOptionJa")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.jaContact==="wallContact"&&t.value.jaFilling==="filling"?(d(),p(v,{key:2,label:e.$t("labelJa"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jaSelect,"onUpdate:modelValue":n[16]||(n[16]=i=>t.value.jaSelect=i)},{default:l(()=>[a(o,{value:"d"},{default:l(()=>[r(u(e.$t("dOptionJa")),1)]),_:1}),a(o,{value:"e"},{default:l(()=>[r(u(e.$t("eOptionJa")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.jaContact==="partlyWallContact"?(d(),p(v,{key:3,label:e.$t("labelJa"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jaSelect,"onUpdate:modelValue":n[17]||(n[17]=i=>t.value.jaSelect=i)},{default:l(()=>[a(o,{value:"f"},{default:l(()=>[r(u(e.$t("fOptionJa")),1)]),_:1}),a(o,{value:"g"},{default:l(()=>[r(u(e.$t("gOptionJa")),1)]),_:1}),a(o,{value:"h"},{default:l(()=>[r(u(e.$t("hOptionJa")),1)]),_:1}),a(o,{value:"i"},{default:l(()=>[r(u(e.$t("iOptionJa")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.jaContact==="partlyWallContact"&&t.value.jaSelect=="i"?(d(),p(V,{key:4,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:8,max:12,modelValue:t.value.jaValue,"onUpdate:modelValue":n[18]||(n[18]=i=>t.value.jaValue=i),step:"1"},null,8,["pin-formatter","modelValue"])):m("",!0),t.value.jaContact==="noWallContact"?(d(),p(v,{key:5,label:e.$t("labelJa"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jaSelect,"onUpdate:modelValue":n[19]||(n[19]=i=>t.value.jaSelect=i)},{default:l(()=>[a(o,{value:"j"},{default:l(()=>[r(u(e.$t("jOptionJa")),1)]),_:1}),a(o,{value:"k"},{default:l(()=>[r(u(e.$t("kOptionJa")),1)]),_:1}),a(o,{value:"l"},{default:l(()=>[r(u(e.$t("lOptionJa")),1)]),_:1}),a(o,{value:"m"},{default:l(()=>[r(u(e.$t("mOptionJa")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.jaContact==="noWallContact"&&t.value.jaSelect=="m"?(d(),p(V,{key:6,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:13,max:20,modelValue:t.value.jaValue,"onUpdate:modelValue":n[20]||(n[20]=i=>t.value.jaValue=i),step:"1"},null,8,["pin-formatter","modelValue"])):m("",!0)]),S("div",K,[a(f,null,{default:l(()=>[r(u(e.$t("jointWaterReductionFactor")),1)]),_:1}),s.currentOptions.jwMetodo==="conceptual"?(d(),p(v,{key:0,label:e.$t("labelJw"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jwSelect,"onUpdate:modelValue":n[21]||(n[21]=i=>t.value.jwSelect=i)},{default:l(()=>[a(o,{value:"a"},{default:l(()=>[r(u(e.$t("aOptionJwConceptual")),1)]),_:1}),a(o,{value:"b"},{default:l(()=>[r(u(e.$t("bOptionJwConceptual")),1)]),_:1}),a(o,{value:"c"},{default:l(()=>[r(u(e.$t("cOptionJwConceptual")),1)]),_:1}),a(o,{value:"da"},{default:l(()=>[r(u(e.$t("daOptionJwConceptual")),1)]),_:1}),a(o,{value:"db"},{default:l(()=>[r(u(e.$t("dbOptionJwConceptual")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),s.currentOptions.jwMetodo==="pressure"?(d(),p(v,{key:1,label:e.$t("labelJw"),placeholder:"".concat(e.$t("select")),modelValue:t.value.jwSelect,"onUpdate:modelValue":n[22]||(n[22]=i=>t.value.jwSelect=i)},{default:l(()=>[a(o,{value:"a"},{default:l(()=>[r(u(e.$t("aOptionJwPressure")),1)]),_:1}),a(o,{value:"b"},{default:l(()=>[r(u(e.$t("bOptionJwPressure")),1)]),_:1}),a(o,{value:"c"},{default:l(()=>[r(u(e.$t("cOptionJwPressure")),1)]),_:1}),a(o,{value:"da"},{default:l(()=>[r(u(e.$t("daOptionJwPressure")),1)]),_:1}),a(o,{value:"db"},{default:l(()=>[r(u(e.$t("dbOptionJwPressure")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.jwSelect==="da"?(d(),p(V,{key:2,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:13,max:20,modelValue:t.value.jwValue,"onUpdate:modelValue":n[23]||(n[23]=i=>t.value.jwValue=i),step:"1"},null,8,["pin-formatter","modelValue"])):m("",!0),t.value.jwSelect==="db"?(d(),p(V,{key:3,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:.05,max:.1,modelValue:t.value.jwValue,"onUpdate:modelValue":n[24]||(n[24]=i=>t.value.jwValue=i),step:"0.01"},null,8,["pin-formatter","modelValue"])):m("",!0)]),S("div",_,[a(f,null,{default:l(()=>[r(u(e.$t("stressReductionFactor")),1)]),_:1}),a(v,{label:e.$t("labelSrfDescription"),placeholder:"".concat(e.$t("select")),modelValue:t.value.srfDescription,"onUpdate:modelValue":n[25]||(n[25]=i=>t.value.srfDescription=i)},{default:l(()=>[a(o,{value:"a"},{default:l(()=>[r(u(e.$t("aOptionSrfDescription")),1)]),_:1}),a(o,{value:"b"},{default:l(()=>[r(u(e.$t("bOptionSrfDescription")),1)]),_:1}),a(o,{value:"c"},{default:l(()=>[r(u(e.$t("cOptionSrfDescription")),1)]),_:1}),a(o,{value:"d"},{default:l(()=>[r(u(e.$t("dOptionSrfDescription")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"]),t.value.srfDescription==="a"?(d(),p(v,{key:0,label:e.$t("labelSrf"),placeholder:"".concat(e.$t("select")),modelValue:t.value.srfSelect,"onUpdate:modelValue":n[26]||(n[26]=i=>t.value.srfSelect=i)},{default:l(()=>[a(o,{value:"a"},{default:l(()=>[r(u(e.$t("aOptionSrfConceptual")),1)]),_:1}),a(o,{value:"b"},{default:l(()=>[r(u(e.$t("bOptionSrfConceptual")),1)]),_:1}),a(o,{value:"c"},{default:l(()=>[r(u(e.$t("cOptionSrfConceptual")),1)]),_:1}),a(o,{value:"d"},{default:l(()=>[r(u(e.$t("dOptionSrfConceptual")),1)]),_:1}),a(o,{value:"e"},{default:l(()=>[r(u(e.$t("eOptionSrfConceptual")),1)]),_:1}),a(o,{value:"f"},{default:l(()=>[r(u(e.$t("fOptionSrfConceptual")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.srfDescription==="b"&&s.currentOptions.srfMetodo==="conceptual"?(d(),p(v,{key:1,label:e.$t("labelSrf"),placeholder:"".concat(e.$t("select")),modelValue:t.value.srfSelect,"onUpdate:modelValue":n[27]||(n[27]=i=>t.value.srfSelect=i)},{default:l(()=>[a(o,{value:"g"},{default:l(()=>[r(u(e.$t("gOptionSrfConceptual")),1)]),_:1}),a(o,{value:"h"},{default:l(()=>[r(u(e.$t("hOptionSrfConceptual")),1)]),_:1}),a(o,{value:"i"},{default:l(()=>[r(u(e.$t("iOptionSrfConceptual")),1)]),_:1}),a(o,{value:"j"},{default:l(()=>[r(u(e.$t("jOptionSrfConceptual")),1)]),_:1}),a(o,{value:"k"},{default:l(()=>[r(u(e.$t("kOptionSrfConceptual")),1)]),_:1}),a(o,{value:"l"},{default:l(()=>[r(u(e.$t("lOptionSrfConceptual")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.srfDescription==="b"&&s.currentOptions.srfMetodo==="sigmacSigmaone"?(d(),p(v,{key:2,label:e.$t("labelSrfSigmacSigmaone"),placeholder:"".concat(e.$t("select")),modelValue:t.value.srfSelect,"onUpdate:modelValue":n[28]||(n[28]=i=>t.value.srfSelect=i)},{default:l(()=>[a(o,{value:"g"},{default:l(()=>[r(u(e.$t("gOptionSrfSigmacSigmaone")),1)]),_:1}),a(o,{value:"h"},{default:l(()=>[r(u(e.$t("hOptionSrfSigmacSigmaone")),1)]),_:1}),a(o,{value:"i"},{default:l(()=>[r(u(e.$t("iOptionSrfSigmacSigmaone")),1)]),_:1}),a(o,{value:"j"},{default:l(()=>[r(u(e.$t("jOptionSrfSigmacSigmaone")),1)]),_:1}),a(o,{value:"k"},{default:l(()=>[r(u(e.$t("kOptionSrfSigmacSigmaone")),1)]),_:1}),a(o,{value:"l"},{default:l(()=>[r(u(e.$t("lOptionSrfSigmacSigmaone")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.srfDescription==="b"&&s.currentOptions.srfMetodo==="sigmathetaSigmac"?(d(),p(v,{key:3,label:e.$t("labelSrfSigmathetaSigmac"),placeholder:"".concat(e.$t("select")),modelValue:t.value.srfSelect,"onUpdate:modelValue":n[29]||(n[29]=i=>t.value.srfSelect=i)},{default:l(()=>[a(o,{value:"g"},{default:l(()=>[r(u(e.$t("gOptionSrfSigmathetaSigmac")),1)]),_:1}),a(o,{value:"h"},{default:l(()=>[r(u(e.$t("hOptionSrfSigmathetaSigmac")),1)]),_:1}),a(o,{value:"i"},{default:l(()=>[r(u(e.$t("iOptionSrfSigmathetaSigmac")),1)]),_:1}),a(o,{value:"j"},{default:l(()=>[r(u(e.$t("jOptionSrfSigmathetaSigmac")),1)]),_:1}),a(o,{value:"k"},{default:l(()=>[r(u(e.$t("kOptionSrfSigmathetaSigmac")),1)]),_:1}),a(o,{value:"l"},{default:l(()=>[r(u(e.$t("lOptionSrfSigmathetaSigmac")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.srfDescription==="b"&&t.value.srfSelect==="i"?(d(),p(V,{key:4,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:.5,max:2,modelValue:t.value.srfValue,"onUpdate:modelValue":n[30]||(n[30]=i=>t.value.srfValue=i),step:"0.25"},null,8,["pin-formatter","modelValue"])):m("",!0),t.value.srfDescription==="b"&&t.value.srfSelect==="j"?(d(),p(V,{key:5,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:5,max:50,modelValue:t.value.srfValue,"onUpdate:modelValue":n[31]||(n[31]=i=>t.value.srfValue=i),step:"5"},null,8,["pin-formatter","modelValue"])):m("",!0),t.value.srfDescription==="b"&&t.value.srfSelect==="k"?(d(),p(V,{key:6,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:50,max:200,modelValue:t.value.srfValue,"onUpdate:modelValue":n[32]||(n[32]=i=>t.value.srfValue=i),step:"10"},null,8,["pin-formatter","modelValue"])):m("",!0),t.value.srfDescription==="b"&&t.value.srfSelect==="l"?(d(),p(V,{key:7,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:200,max:400,modelValue:t.value.srfValue,"onUpdate:modelValue":n[33]||(n[33]=i=>t.value.srfValue=i),step:"10"},null,8,["pin-formatter","modelValue"])):m("",!0),t.value.srfDescription==="c"&&s.currentOptions.srfMetodo==="conceptual"?(d(),p(v,{key:8,label:e.$t("labelSrfSigmathetaSigmac"),placeholder:"".concat(e.$t("select")),modelValue:t.value.srfSelect,"onUpdate:modelValue":n[34]||(n[34]=i=>t.value.srfSelect=i)},{default:l(()=>[a(o,{value:"m"},{default:l(()=>[r(u(e.$t("mOptionSrfConceptual")),1)]),_:1}),a(o,{value:"n"},{default:l(()=>[r(u(e.$t("nOptionSrfConceptual")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.srfDescription==="c"&&s.currentOptions.srfMetodo==="sigmathetaSigmac"?(d(),p(v,{key:9,label:e.$t("labelSrfSigmathetaSigmac"),placeholder:"".concat(e.$t("select")),modelValue:t.value.srfSelect,"onUpdate:modelValue":n[35]||(n[35]=i=>t.value.srfSelect=i)},{default:l(()=>[a(o,{value:"m"},{default:l(()=>[r(u(e.$t("mOptionSrfSigmathetaSigmac")),1)]),_:1}),a(o,{value:"n"},{default:l(()=>[r(u(e.$t("nOptionSrfSigmathetaSigmac")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.srfDescription==="c"&&t.value.srfSelect==="m"?(d(),p(V,{key:10,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:5,max:10,modelValue:t.value.srfValue,"onUpdate:modelValue":n[36]||(n[36]=i=>t.value.srfValue=i),step:"1"},null,8,["pin-formatter","modelValue"])):m("",!0),t.value.srfDescription==="c"&&t.value.srfSelect==="n"?(d(),p(V,{key:11,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:10,max:20,modelValue:t.value.srfValue,"onUpdate:modelValue":n[37]||(n[37]=i=>t.value.srfValue=i),step:"1"},null,8,["pin-formatter","modelValue"])):m("",!0),t.value.srfDescription==="d"?(d(),p(v,{key:12,label:e.$t("labelSrf"),placeholder:"".concat(e.$t("select")),modelValue:t.value.srfSelect,"onUpdate:modelValue":n[38]||(n[38]=i=>t.value.srfSelect=i)},{default:l(()=>[a(o,{value:"o"},{default:l(()=>[r(u(e.$t("oOptionSrfConceptual")),1)]),_:1}),a(o,{value:"p"},{default:l(()=>[r(u(e.$t("pOptionSrfConceptual")),1)]),_:1})]),_:1},8,["label","placeholder","modelValue"])):m("",!0),t.value.srfDescription==="d"&&t.value.srfSelect==="o"?(d(),p(V,{key:13,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:5,max:10,modelValue:t.value.srfValue,"onUpdate:modelValue":n[39]||(n[39]=i=>t.value.srfValue=i),step:"1"},null,8,["pin-formatter","modelValue"])):m("",!0),t.value.srfDescription==="d"&&t.value.srfSelect==="p"?(d(),p(V,{key:14,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":s.regularPinFormatter,snaps:!0,min:10,max:15,modelValue:t.value.srfValue,"onUpdate:modelValue":n[40]||(n[40]=i=>t.value.srfValue=i),step:"1"},null,8,["pin-formatter","modelValue"])):m("",!0)]),S("div",x,[a(f,null,{default:l(()=>[r(u(e.$t("esrPadrao")),1)]),_:1}),a(f,{class:"input-item"},{default:l(()=>[r(u(e.$t("labelEsr"))+" "+u(s.valorEsr),1)]),_:1}),a(f,null,{default:l(()=>[r(u(e.$t("dimenssoesTunel")),1)]),_:1}),a(O,{label:e.$t("labelSpanAltura"),placeholder:"10 m",modelValue:t.value.tunelSpanValue,"onUpdate:modelValue":n[41]||(n[41]=i=>t.value.tunelSpanValue=i)},null,8,["label","modelValue"])])]),S("section",ee,[a(h,null,{default:l(()=>[r(u(e.$t("resultados")),1)]),_:1}),S("div",le,[a(f,null,{default:l(()=>[r(u(e.$t("dimensaoEquivalente")),1)]),_:1}),a(f,{class:"input-item"},{default:l(()=>[r(u(e.$t("labelDe"))+" "+u(s.valorDimEqui),1)]),_:1}),a(f,null,{default:l(()=>[r(u(e.$t("valorQCalculado")),1)]),_:1}),a(f,{class:"input-item"},{default:l(()=>[r(u(e.$t("labelQ"))+" "+u(s.valorQ),1)]),_:1}),a(f,null,{default:l(()=>[r(u(e.$t("suporteDefinido")),1)]),_:1}),a(f,{class:"input-item"},{default:l(()=>[r(u(e.$t("labelZona"))+" "+u(s.valorQ),1)]),_:1})])]),S("div",te,[a(y,{class:"save-log-button",onClick:n[42]||(n[42]=i=>s.saveCloseEdit())},{default:l(()=>[r(u(e.$t("saveLog")),1)]),_:1})])]),_:1})}const re=D(B,[["render",ae],["__scopeId","data-v-8865a269"]]);export{re as default};

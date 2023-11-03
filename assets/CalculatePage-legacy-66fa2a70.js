System.register(["./index-legacy-1c6d0588.js"],(function(e,l){"use strict";var a,t,u,n,o,r,i,d,s,c,p,m,v,f,V,S,h,$,g,b,_,j,O;return{setters:[e=>{a=e._,t=e.I,u=e.E,n=e.G,o=e.B,r=e.H,i=e.J,d=e.K,s=e.L,c=e.M,p=e.N,m=e.h,v=e.O,f=e.V,V=e.r,S=e.o,h=e.i,$=e.j,g=e.d,b=e.f,_=e.k,j=e.t,O=e.g}],execute:function(){var l=document.createElement("style");l.textContent="ion-title[data-v-8865a269]{padding:0;--color: var(--color-main);margin-bottom:10px;font-weight:700}section[data-v-8865a269]{padding-left:10px;padding-right:10px;padding-bottom:20px;margin-bottom:50px;border-bottom:1pt solid var(--color-main)}.section-resultados[data-v-8865a269]{border:none}.section-geral[data-v-8865a269]{margin-top:20px;position:relative}.input-container[data-v-8865a269],.resultados-container[data-v-8865a269]{display:flex;flex-direction:column;z-index:0;margin-bottom:10px}.close-edit[data-v-8865a269]{position:absolute;width:30px;height:30px;color:var(--color-main);right:5px;top:0;z-index:3}.save-log-container[data-v-8865a269]{display:flex;width:99%;justify-content:center}.save-log-button[data-v-8865a269]{--background: var(--color-main);width:90%}.input-item[data-v-8865a269]{--background: var(--color-alt);--color: red;color:#e57171;--placeholder-color: var(--color-text-main);--padding-bottom: 0;--padding-end: 10px;--padding-start: 15px;--padding-top: 10px;border:none;font-weight:400;margin-bottom:2px}.sc-ion-input-md-h[data-v-8865a269]{padding-left:15px}\n",document.head.appendChild(l);const k={class:"section-geral"},w={class:"input-container title-container"},J={class:"input-container date-container"},y={class:"section-inputs"},C={class:"input-container rqd-container"},q={class:"input-container jn-container"},D={class:"input-container jr-container"},x={class:"input-container ja-container"},U={class:"input-container jw-container"},I={class:"input-container srf-container"},R={class:"input-container"},F={class:"section-resultados"},M={class:"resultados-container"},P={class:"save-log-container"};e("default",a({name:"vue-calculate-view",components:{IonIcon:t,IonSelect:u,IonItem:n,IonButton:o,IonSelectOption:r,IonRange:i,IonInput:d,IonDatetime:s,IonDatetimeButton:c,IonModal:p,IonTitle:m},data:()=>({closeCircleOutline:v,titleIndex:null,value:{titleValue:null,dateValue:null,dateFormated:null,rqdSelect:null,rqdMinSlider:null,rqdMaxSlider:null,rqdValue:null,jvXValue:null,jvYValue:null,jvZValue:null,jvValue:null,jnSelect:null,jnValue:null,jrDescription:null,jrSelect:null,jrValue:null,jaContact:null,jaFilling:null,jaSelect:null,jaValue:null,jwSelect:null,jwValue:null,srfDescription:null,srfSelect:null,srfValue:null,tunelSpanValue:null,esrValue:null,qValue:null,dimEquiValue:null,suporte:null},resultados:{}}),computed:{currentDate(){const e=new Date;return{dia:String(e.getDate()).padStart(2,"0"),mes:String(e.getMonth()+1).padStart(2,"0"),ano:e.getFullYear()}},currentTime(){const e=new Date;return{hora:String(e.getHours()).padStart(2,"0"),minuto:String(e.getMinutes()).padStart(2,"0")}},cardAtual(){return this.$store.getters.currentCardAtual},currentOptions(){return this.$store.getters.currentOptions},valorQ(){return this.resultados.qValue?this.resultados.qValue:"N.A"},valorRqd(){return this.resultados.rqdValue?this.resultados.rqdValue:"N.A"},valorJv(){return this.resultados.jvValue?this.resultados.jvValue:"N.A"},valorEsr(){return this.resultados.esrValue?this.resultados.esrValue:"N.A"},valorDimEqui(){return this.resultados.dimEquiValue}},watch:{value:{handler(){this.calculaRqd(),this.assignValues()},deep:!0}},mounted(){this.memoryHandler()},updated(){this.memoryHandler(),this.value.esrValue=this.currentOptions.esrValue},methods:{memoryHandler(){const e=this.verificarLocal();"novo"===this.cardAtual?(this.value.titleValue=`Log ${e.length}`,this.value.dateValue=`${this.currentDate.ano}-${this.currentDate.mes}-${this.currentDate.dia}T${this.currentTime.hora}:${this.currentTime.minuto}:00`):this.value=e[this.cardAtual]?e[this.cardAtual]:this.value},percentualPinFormatter:e=>`${e}%`,regularPinFormatter:e=>`${e}`,closeEdit(){this.$router.push("/tabs/logs")},armazenarLocal(e){if("undefined"!=typeof Storage){const l=JSON.parse(localStorage.getItem("qSystemLogs"))||[];l.push(e),localStorage.setItem("qSystemLogs",JSON.stringify(l))}},replaceLocal(e){if("undefined"!=typeof Storage){const l=JSON.parse(localStorage.getItem("qSystemLogs"));l[this.cardAtual]=e,localStorage.setItem("qSystemLogs",JSON.stringify(l))}},verificarLocal(){if("undefined"!=typeof Storage){let e=JSON.parse(localStorage.getItem("qSystemLogs"));return e||(e=[],localStorage.setItem("qSystemLogs",JSON.stringify(e))),e}return null},calculaRqd(){"directInput"===this.currentOptions.rqdMetodo?this.value.rqdSelect&&(this.value.rqdMinSlider=this.value.rqdSelect.split("-")[0]<10?10:this.value.rqdSelect.split("-")[0],this.value.rqdMaxSlider=this.value.rqdSelect.split("-")[1]):"jvCorrelation"===this.currentOptions.rqdMetodo&&(this.value.jvValue=(Number(this.value.jvXValue)||0)+(Number(this.value.jvYValue)||0)+(Number(this.value.jvZValue)||0),this.value.rqdValue=this.value.jvValue?5*Math.round((115-3.3*this.value.jvValue)/5):"N.A.",this.value.rqdValue=this.value.rqdValue>100?100:this.value.rqdValue)},calculaSuporte:()=>"suporte",getDate(){const e=this.value.dateValue.split("T"),l=e[0].split("-"),a=e[1].split(":");this.dateFormated=`${l[2]}/${l[1]}/${l[0]} ${a[0]}:${a[1]}`},assignValues(){const e=JSON.parse(JSON.stringify(this.value));e.jnValue=f.jn[this.value.jnSelect]?f.jn[this.value.jnSelect]:this.value.jnValue,e.jrValue=f.jr[this.value.jrSelect]?f.jr[this.value.jrSelect]:this.value.jrValue,e.jaValue=f.ja[this.value.jaSelect]?f.ja[this.value.jaSelect]:this.value.jaValue,e.jwValue=f.jw[this.value.jwSelect]?f.jw[this.value.jwSelect]:this.value.jwValue,e.srfValue=f.srf[this.value.srfSelect]?f.srf[this.value.srfSelect]:this.value.srfValue,e.qValue=e.rqdValue*e.jrValue*e.jwValue/(e.jnValue*e.jaValue*e.srfValue),e.dimEquiValue=((e.tunelSpanValue?e.tunelSpanValue:10)/e.esrValue).toFixed(2),e.suporte=this.calculaSuporte(),this.resultados=JSON.parse(JSON.stringify(e))},saveCloseEdit(){"novo"===this.cardAtual?this.armazenarLocal(this.resultados):this.replaceLocal(this.resultados),this.$router.push("/tabs/logs")}}},[["render",function(e,l,a,t,u,n){const o=V("IonTitle"),r=V("IonIcon"),i=V("IonItem"),d=V("IonInput"),s=V("IonDatetimeButton"),c=V("IonDatetime"),p=V("IonModal"),m=V("IonSelectOption"),v=V("IonSelect"),f=V("IonRange"),N=V("IonButton"),E=V("vue-base-lyout");return S(),h(E,null,{default:$((()=>[g("section",k,[b(o,null,{default:$((()=>[_(j(e.$t("parametrosGerais")),1)])),_:1}),g("div",w,[b(r,{class:"close-edit",icon:u.closeCircleOutline,onClick:l[0]||(l[0]=e=>n.closeEdit())},null,8,["icon"]),b(i,null,{default:$((()=>[_(j(e.$t("tituloRegistro")),1)])),_:1}),b(d,{modelValue:u.value.titleValue,"onUpdate:modelValue":l[1]||(l[1]=e=>u.value.titleValue=e)},null,8,["modelValue"])]),g("div",J,[b(i,null,{default:$((()=>[_(j(e.$t("dataRegistro")),1)])),_:1}),b(i,{class:"input-item date-time-container"},{default:$((()=>[b(s,{datetime:"datetime"}),b(p,{"keep-contents-mounted":!0},{default:$((()=>[b(c,{id:"datetime","datetime-format":"DD-MM-YYYY",modelValue:u.value.dateValue,"onUpdate:modelValue":l[2]||(l[2]=e=>u.value.dateValue=e),min:`${n.currentDate.ano}-01-01T00:00:00`,max:`${n.currentDate.ano}-12-31T23:59:59`},null,8,["modelValue","min","max"])])),_:1})])),_:1})])]),g("section",y,[b(o,null,{default:$((()=>[_(j(e.$t("parametrosQSystem")),1)])),_:1}),g("div",C,[b(i,null,{default:$((()=>[_(j(e.$t("rockQualityDesignation")),1)])),_:1}),"directInput"===n.currentOptions.rqdMetodo?(S(),h(v,{key:0,label:"RQD:",placeholder:`${e.$t("select")}`,modelValue:u.value.rqdSelect,"onUpdate:modelValue":l[3]||(l[3]=e=>u.value.rqdSelect=e)},{default:$((()=>[b(m,{value:"0-25"},{default:$((()=>[_(j(e.$t("aOptionRqd")),1)])),_:1}),b(m,{value:"25-50"},{default:$((()=>[_(j(e.$t("bOptionRqd")),1)])),_:1}),b(m,{value:"50-75"},{default:$((()=>[_(j(e.$t("cOptionRqd")),1)])),_:1}),b(m,{value:"75-90"},{default:$((()=>[_(j(e.$t("dOptionRqd")),1)])),_:1}),b(m,{value:"90-100"},{default:$((()=>[_(j(e.$t("eOptionRqd")),1)])),_:1})])),_:1},8,["placeholder","modelValue"])):O("",!0),"directInput"===n.currentOptions.rqdMetodo&&u.value.rqdSelect?(S(),h(f,{key:1,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.percentualPinFormatter,snaps:!0,min:u.value.rqdMinSlider,max:u.value.rqdMaxSlider,modelValue:u.value.rqdValue,"onUpdate:modelValue":l[4]||(l[4]=e=>u.value.rqdValue=e),step:"5"},null,8,["pin-formatter","min","max","modelValue"])):O("",!0),"jvCorrelation"===n.currentOptions.rqdMetodo?(S(),h(d,{key:2,label:e.$t("labelJvX"),modelValue:u.value.jvXValue,"onUpdate:modelValue":l[5]||(l[5]=e=>u.value.jvXValue=e)},null,8,["label","modelValue"])):O("",!0),"jvCorrelation"===n.currentOptions.rqdMetodo?(S(),h(d,{key:3,label:e.$t("labelJvY"),modelValue:u.value.jvYValue,"onUpdate:modelValue":l[6]||(l[6]=e=>u.value.jvYValue=e)},null,8,["label","modelValue"])):O("",!0),"jvCorrelation"===n.currentOptions.rqdMetodo?(S(),h(d,{key:4,label:e.$t("labelJvZ"),modelValue:u.value.jvZValue,"onUpdate:modelValue":l[7]||(l[7]=e=>u.value.jvZValue=e)},null,8,["label","modelValue"])):O("",!0),"jvCorrelation"===n.currentOptions.rqdMetodo?(S(),h(i,{key:5,class:"input-item"},{default:$((()=>[_(j(e.$t("labelJv"))+" "+j(n.valorJv),1)])),_:1})):O("",!0),"jvCorrelation"===n.currentOptions.rqdMetodo?(S(),h(i,{key:6,class:"input-item"},{default:$((()=>[_(j(e.$t("labelRqd"))+" "+j(n.valorRqd),1)])),_:1})):O("",!0)]),g("div",q,[b(i,null,{default:$((()=>[_(j(e.$t("jointSetNumber")),1)])),_:1}),b(v,{label:"Jn:",placeholder:`${e.$t("select")}`,modelValue:u.value.jnSelect,"onUpdate:modelValue":l[8]||(l[8]=e=>u.value.jnSelect=e)},{default:$((()=>[b(m,{value:"a"},{default:$((()=>[_(j(e.$t("aOptionJn")),1)])),_:1}),b(m,{value:"b"},{default:$((()=>[_(j(e.$t("bOptionRqd")),1)])),_:1}),b(m,{value:"c"},{default:$((()=>[_(j(e.$t("cOptionJn")),1)])),_:1}),b(m,{value:"d"},{default:$((()=>[_(j(e.$t("dOptionJn")),1)])),_:1}),b(m,{value:"e"},{default:$((()=>[_(j(e.$t("eOptionJn")),1)])),_:1}),b(m,{value:"f"},{default:$((()=>[_(j(e.$t("fOptionJn")),1)])),_:1}),b(m,{value:"g"},{default:$((()=>[_(j(e.$t("gOptionJn")),1)])),_:1}),b(m,{value:"h"},{default:$((()=>[_(j(e.$t("hOptionJn")),1)])),_:1}),b(m,{value:"i"},{default:$((()=>[_(j(e.$t("iOptionJn")),1)])),_:1})])),_:1},8,["placeholder","modelValue"]),"a"==u.value.jnSelect?(S(),h(f,{key:0,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:.5,max:1,modelValue:u.value.jnValue,"onUpdate:modelValue":l[9]||(l[9]=e=>u.value.jnValue=e),step:"0.1"},null,8,["pin-formatter","modelValue"])):O("",!0)]),g("div",D,[b(i,null,{default:$((()=>[_(j(e.$t("jointRoughness")),1)])),_:1}),b(v,{label:e.$t("labelJrDescription"),placeholder:`${e.$t("select")}`,modelValue:u.value.jrDescription,"onUpdate:modelValue":l[10]||(l[10]=e=>u.value.jrDescription=e)},{default:$((()=>[b(m,{value:"a"},{default:$((()=>[_(j(e.$t("aOptionJrDescription")),1)])),_:1}),b(m,{value:"b"},{default:$((()=>[_(j(e.$t("bOptionJrDescription")),1)])),_:1}),b(m,{value:"c"},{default:$((()=>[_(j(e.$t("cOptionJrDescription")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"]),"a"===u.value.jrDescription||"b"===u.value.jrDescription?(S(),h(v,{key:0,label:e.$t("labelJr"),placeholder:`${e.$t("select")}`,modelValue:u.value.jrSelect,"onUpdate:modelValue":l[11]||(l[11]=e=>u.value.jrSelect=e)},{default:$((()=>[b(m,{value:"a"},{default:$((()=>[_(j(e.$t("aOptionJr")),1)])),_:1}),b(m,{value:"b"},{default:$((()=>[_(j(e.$t("bOptionJr")),1)])),_:1}),b(m,{value:"c"},{default:$((()=>[_(j(e.$t("cOptionJr")),1)])),_:1}),b(m,{value:"d"},{default:$((()=>[_(j(e.$t("dOptionJr")),1)])),_:1}),b(m,{value:"e"},{default:$((()=>[_(j(e.$t("eOptionJr")),1)])),_:1}),b(m,{value:"f"},{default:$((()=>[_(j(e.$t("fOptionJr")),1)])),_:1}),b(m,{value:"g"},{default:$((()=>[_(j(e.$t("gOptionJr")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"c"===u.value.jrDescription?(S(),h(v,{key:1,label:e.$t("labelJr"),placeholder:`${e.$t("select")}`,modelValue:u.value.jrSelect,"onUpdate:modelValue":l[12]||(l[12]=e=>u.value.jrSelect=e)},{default:$((()=>[b(m,{value:"h"},{default:$((()=>[_(j(e.$t("hOptionJr")),1)])),_:1}),b(m,{value:"i"},{default:$((()=>[_(j(e.$t("iOptionJr")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0)]),g("div",x,[b(i,null,{default:$((()=>[_(j(e.$t("jointAlterationNumber")),1)])),_:1}),b(v,{label:e.$t("labelJaContact"),placeholder:e.$t("select"),modelValue:u.value.jaContact,"onUpdate:modelValue":l[13]||(l[13]=e=>u.value.jaContact=e)},{default:$((()=>[b(m,{value:"wallContact"},{default:$((()=>[_(j(e.$t("aOptionJaContact")),1)])),_:1}),b(m,{value:"partlyWallContact"},{default:$((()=>[_(j(e.$t("bOptionJaContact")),1)])),_:1}),b(m,{value:"noWallContact"},{default:$((()=>[_(j(e.$t("cOptionJaContact")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"]),"wallContact"===u.value.jaContact?(S(),h(v,{key:0,label:e.$t("labelJaContactFilling"),placeholder:`${e.$t("select")}`,modelValue:u.value.jaFilling,"onUpdate:modelValue":l[14]||(l[14]=e=>u.value.jaFilling=e)},{default:$((()=>[b(m,{value:"clean"},{default:$((()=>[_(j(e.$t("aOptionContactFilling")),1)])),_:1}),b(m,{value:"filling"},{default:$((()=>[_(j(e.$t("bOptionContactFilling")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"wallContact"===u.value.jaContact&&"clean"===u.value.jaFilling?(S(),h(v,{key:1,label:e.$t("labelJa"),placeholder:`${e.$t("select")}`,modelValue:u.value.jaSelect,"onUpdate:modelValue":l[15]||(l[15]=e=>u.value.jaSelect=e)},{default:$((()=>[b(m,{value:"a"},{default:$((()=>[_(j(e.$t("aOptionJa")),1)])),_:1}),b(m,{value:"b"},{default:$((()=>[_(j(e.$t("bOptionJa")),1)])),_:1}),b(m,{value:"c"},{default:$((()=>[_(j(e.$t("cOptionJa")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"wallContact"===u.value.jaContact&&"filling"===u.value.jaFilling?(S(),h(v,{key:2,label:e.$t("labelJa"),placeholder:`${e.$t("select")}`,modelValue:u.value.jaSelect,"onUpdate:modelValue":l[16]||(l[16]=e=>u.value.jaSelect=e)},{default:$((()=>[b(m,{value:"d"},{default:$((()=>[_(j(e.$t("dOptionJa")),1)])),_:1}),b(m,{value:"e"},{default:$((()=>[_(j(e.$t("eOptionJa")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"partlyWallContact"===u.value.jaContact?(S(),h(v,{key:3,label:e.$t("labelJa"),placeholder:`${e.$t("select")}`,modelValue:u.value.jaSelect,"onUpdate:modelValue":l[17]||(l[17]=e=>u.value.jaSelect=e)},{default:$((()=>[b(m,{value:"f"},{default:$((()=>[_(j(e.$t("fOptionJa")),1)])),_:1}),b(m,{value:"g"},{default:$((()=>[_(j(e.$t("gOptionJa")),1)])),_:1}),b(m,{value:"h"},{default:$((()=>[_(j(e.$t("hOptionJa")),1)])),_:1}),b(m,{value:"i"},{default:$((()=>[_(j(e.$t("iOptionJa")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"partlyWallContact"===u.value.jaContact&&"i"==u.value.jaSelect?(S(),h(f,{key:4,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:8,max:12,modelValue:u.value.jaValue,"onUpdate:modelValue":l[18]||(l[18]=e=>u.value.jaValue=e),step:"1"},null,8,["pin-formatter","modelValue"])):O("",!0),"noWallContact"===u.value.jaContact?(S(),h(v,{key:5,label:e.$t("labelJa"),placeholder:`${e.$t("select")}`,modelValue:u.value.jaSelect,"onUpdate:modelValue":l[19]||(l[19]=e=>u.value.jaSelect=e)},{default:$((()=>[b(m,{value:"j"},{default:$((()=>[_(j(e.$t("jOptionJa")),1)])),_:1}),b(m,{value:"k"},{default:$((()=>[_(j(e.$t("kOptionJa")),1)])),_:1}),b(m,{value:"l"},{default:$((()=>[_(j(e.$t("lOptionJa")),1)])),_:1}),b(m,{value:"m"},{default:$((()=>[_(j(e.$t("mOptionJa")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"noWallContact"===u.value.jaContact&&"m"==u.value.jaSelect?(S(),h(f,{key:6,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:13,max:20,modelValue:u.value.jaValue,"onUpdate:modelValue":l[20]||(l[20]=e=>u.value.jaValue=e),step:"1"},null,8,["pin-formatter","modelValue"])):O("",!0)]),g("div",U,[b(i,null,{default:$((()=>[_(j(e.$t("jointWaterReductionFactor")),1)])),_:1}),"conceptual"===n.currentOptions.jwMetodo?(S(),h(v,{key:0,label:e.$t("labelJw"),placeholder:`${e.$t("select")}`,modelValue:u.value.jwSelect,"onUpdate:modelValue":l[21]||(l[21]=e=>u.value.jwSelect=e)},{default:$((()=>[b(m,{value:"a"},{default:$((()=>[_(j(e.$t("aOptionJwConceptual")),1)])),_:1}),b(m,{value:"b"},{default:$((()=>[_(j(e.$t("bOptionJwConceptual")),1)])),_:1}),b(m,{value:"c"},{default:$((()=>[_(j(e.$t("cOptionJwConceptual")),1)])),_:1}),b(m,{value:"da"},{default:$((()=>[_(j(e.$t("daOptionJwConceptual")),1)])),_:1}),b(m,{value:"db"},{default:$((()=>[_(j(e.$t("dbOptionJwConceptual")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"pressure"===n.currentOptions.jwMetodo?(S(),h(v,{key:1,label:e.$t("labelJw"),placeholder:`${e.$t("select")}`,modelValue:u.value.jwSelect,"onUpdate:modelValue":l[22]||(l[22]=e=>u.value.jwSelect=e)},{default:$((()=>[b(m,{value:"a"},{default:$((()=>[_(j(e.$t("aOptionJwPressure")),1)])),_:1}),b(m,{value:"b"},{default:$((()=>[_(j(e.$t("bOptionJwPressure")),1)])),_:1}),b(m,{value:"c"},{default:$((()=>[_(j(e.$t("cOptionJwPressure")),1)])),_:1}),b(m,{value:"da"},{default:$((()=>[_(j(e.$t("daOptionJwPressure")),1)])),_:1}),b(m,{value:"db"},{default:$((()=>[_(j(e.$t("dbOptionJwPressure")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"da"===u.value.jwSelect?(S(),h(f,{key:2,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:13,max:20,modelValue:u.value.jwValue,"onUpdate:modelValue":l[23]||(l[23]=e=>u.value.jwValue=e),step:"1"},null,8,["pin-formatter","modelValue"])):O("",!0),"db"===u.value.jwSelect?(S(),h(f,{key:3,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:.05,max:.1,modelValue:u.value.jwValue,"onUpdate:modelValue":l[24]||(l[24]=e=>u.value.jwValue=e),step:"0.01"},null,8,["pin-formatter","modelValue"])):O("",!0)]),g("div",I,[b(i,null,{default:$((()=>[_(j(e.$t("stressReductionFactor")),1)])),_:1}),b(v,{label:e.$t("labelSrfDescription"),placeholder:`${e.$t("select")}`,modelValue:u.value.srfDescription,"onUpdate:modelValue":l[25]||(l[25]=e=>u.value.srfDescription=e)},{default:$((()=>[b(m,{value:"a"},{default:$((()=>[_(j(e.$t("aOptionSrfDescription")),1)])),_:1}),b(m,{value:"b"},{default:$((()=>[_(j(e.$t("bOptionSrfDescription")),1)])),_:1}),b(m,{value:"c"},{default:$((()=>[_(j(e.$t("cOptionSrfDescription")),1)])),_:1}),b(m,{value:"d"},{default:$((()=>[_(j(e.$t("dOptionSrfDescription")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"]),"a"===u.value.srfDescription?(S(),h(v,{key:0,label:e.$t("labelSrf"),placeholder:`${e.$t("select")}`,modelValue:u.value.srfSelect,"onUpdate:modelValue":l[26]||(l[26]=e=>u.value.srfSelect=e)},{default:$((()=>[b(m,{value:"a"},{default:$((()=>[_(j(e.$t("aOptionSrfConceptual")),1)])),_:1}),b(m,{value:"b"},{default:$((()=>[_(j(e.$t("bOptionSrfConceptual")),1)])),_:1}),b(m,{value:"c"},{default:$((()=>[_(j(e.$t("cOptionSrfConceptual")),1)])),_:1}),b(m,{value:"d"},{default:$((()=>[_(j(e.$t("dOptionSrfConceptual")),1)])),_:1}),b(m,{value:"e"},{default:$((()=>[_(j(e.$t("eOptionSrfConceptual")),1)])),_:1}),b(m,{value:"f"},{default:$((()=>[_(j(e.$t("fOptionSrfConceptual")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"b"===u.value.srfDescription&&"conceptual"===n.currentOptions.srfMetodo?(S(),h(v,{key:1,label:e.$t("labelSrf"),placeholder:`${e.$t("select")}`,modelValue:u.value.srfSelect,"onUpdate:modelValue":l[27]||(l[27]=e=>u.value.srfSelect=e)},{default:$((()=>[b(m,{value:"g"},{default:$((()=>[_(j(e.$t("gOptionSrfConceptual")),1)])),_:1}),b(m,{value:"h"},{default:$((()=>[_(j(e.$t("hOptionSrfConceptual")),1)])),_:1}),b(m,{value:"i"},{default:$((()=>[_(j(e.$t("iOptionSrfConceptual")),1)])),_:1}),b(m,{value:"j"},{default:$((()=>[_(j(e.$t("jOptionSrfConceptual")),1)])),_:1}),b(m,{value:"k"},{default:$((()=>[_(j(e.$t("kOptionSrfConceptual")),1)])),_:1}),b(m,{value:"l"},{default:$((()=>[_(j(e.$t("lOptionSrfConceptual")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"b"===u.value.srfDescription&&"sigmacSigmaone"===n.currentOptions.srfMetodo?(S(),h(v,{key:2,label:e.$t("labelSrfSigmacSigmaone"),placeholder:`${e.$t("select")}`,modelValue:u.value.srfSelect,"onUpdate:modelValue":l[28]||(l[28]=e=>u.value.srfSelect=e)},{default:$((()=>[b(m,{value:"g"},{default:$((()=>[_(j(e.$t("gOptionSrfSigmacSigmaone")),1)])),_:1}),b(m,{value:"h"},{default:$((()=>[_(j(e.$t("hOptionSrfSigmacSigmaone")),1)])),_:1}),b(m,{value:"i"},{default:$((()=>[_(j(e.$t("iOptionSrfSigmacSigmaone")),1)])),_:1}),b(m,{value:"j"},{default:$((()=>[_(j(e.$t("jOptionSrfSigmacSigmaone")),1)])),_:1}),b(m,{value:"k"},{default:$((()=>[_(j(e.$t("kOptionSrfSigmacSigmaone")),1)])),_:1}),b(m,{value:"l"},{default:$((()=>[_(j(e.$t("lOptionSrfSigmacSigmaone")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"b"===u.value.srfDescription&&"sigmathetaSigmac"===n.currentOptions.srfMetodo?(S(),h(v,{key:3,label:e.$t("labelSrfSigmathetaSigmac"),placeholder:`${e.$t("select")}`,modelValue:u.value.srfSelect,"onUpdate:modelValue":l[29]||(l[29]=e=>u.value.srfSelect=e)},{default:$((()=>[b(m,{value:"g"},{default:$((()=>[_(j(e.$t("gOptionSrfSigmathetaSigmac")),1)])),_:1}),b(m,{value:"h"},{default:$((()=>[_(j(e.$t("hOptionSrfSigmathetaSigmac")),1)])),_:1}),b(m,{value:"i"},{default:$((()=>[_(j(e.$t("iOptionSrfSigmathetaSigmac")),1)])),_:1}),b(m,{value:"j"},{default:$((()=>[_(j(e.$t("jOptionSrfSigmathetaSigmac")),1)])),_:1}),b(m,{value:"k"},{default:$((()=>[_(j(e.$t("kOptionSrfSigmathetaSigmac")),1)])),_:1}),b(m,{value:"l"},{default:$((()=>[_(j(e.$t("lOptionSrfSigmathetaSigmac")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"b"===u.value.srfDescription&&"i"===u.value.srfSelect?(S(),h(f,{key:4,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:.5,max:2,modelValue:u.value.srfValue,"onUpdate:modelValue":l[30]||(l[30]=e=>u.value.srfValue=e),step:"0.25"},null,8,["pin-formatter","modelValue"])):O("",!0),"b"===u.value.srfDescription&&"j"===u.value.srfSelect?(S(),h(f,{key:5,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:5,max:50,modelValue:u.value.srfValue,"onUpdate:modelValue":l[31]||(l[31]=e=>u.value.srfValue=e),step:"5"},null,8,["pin-formatter","modelValue"])):O("",!0),"b"===u.value.srfDescription&&"k"===u.value.srfSelect?(S(),h(f,{key:6,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:50,max:200,modelValue:u.value.srfValue,"onUpdate:modelValue":l[32]||(l[32]=e=>u.value.srfValue=e),step:"10"},null,8,["pin-formatter","modelValue"])):O("",!0),"b"===u.value.srfDescription&&"l"===u.value.srfSelect?(S(),h(f,{key:7,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:200,max:400,modelValue:u.value.srfValue,"onUpdate:modelValue":l[33]||(l[33]=e=>u.value.srfValue=e),step:"10"},null,8,["pin-formatter","modelValue"])):O("",!0),"c"===u.value.srfDescription&&"conceptual"===n.currentOptions.srfMetodo?(S(),h(v,{key:8,label:e.$t("labelSrfSigmathetaSigmac"),placeholder:`${e.$t("select")}`,modelValue:u.value.srfSelect,"onUpdate:modelValue":l[34]||(l[34]=e=>u.value.srfSelect=e)},{default:$((()=>[b(m,{value:"m"},{default:$((()=>[_(j(e.$t("mOptionSrfConceptual")),1)])),_:1}),b(m,{value:"n"},{default:$((()=>[_(j(e.$t("nOptionSrfConceptual")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"c"===u.value.srfDescription&&"sigmathetaSigmac"===n.currentOptions.srfMetodo?(S(),h(v,{key:9,label:e.$t("labelSrfSigmathetaSigmac"),placeholder:`${e.$t("select")}`,modelValue:u.value.srfSelect,"onUpdate:modelValue":l[35]||(l[35]=e=>u.value.srfSelect=e)},{default:$((()=>[b(m,{value:"m"},{default:$((()=>[_(j(e.$t("mOptionSrfSigmathetaSigmac")),1)])),_:1}),b(m,{value:"n"},{default:$((()=>[_(j(e.$t("nOptionSrfSigmathetaSigmac")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"c"===u.value.srfDescription&&"m"===u.value.srfSelect?(S(),h(f,{key:10,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:5,max:10,modelValue:u.value.srfValue,"onUpdate:modelValue":l[36]||(l[36]=e=>u.value.srfValue=e),step:"1"},null,8,["pin-formatter","modelValue"])):O("",!0),"c"===u.value.srfDescription&&"n"===u.value.srfSelect?(S(),h(f,{key:11,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:10,max:20,modelValue:u.value.srfValue,"onUpdate:modelValue":l[37]||(l[37]=e=>u.value.srfValue=e),step:"1"},null,8,["pin-formatter","modelValue"])):O("",!0),"d"===u.value.srfDescription?(S(),h(v,{key:12,label:e.$t("labelSrf"),placeholder:`${e.$t("select")}`,modelValue:u.value.srfSelect,"onUpdate:modelValue":l[38]||(l[38]=e=>u.value.srfSelect=e)},{default:$((()=>[b(m,{value:"o"},{default:$((()=>[_(j(e.$t("oOptionSrfConceptual")),1)])),_:1}),b(m,{value:"p"},{default:$((()=>[_(j(e.$t("pOptionSrfConceptual")),1)])),_:1})])),_:1},8,["label","placeholder","modelValue"])):O("",!0),"d"===u.value.srfDescription&&"o"===u.value.srfSelect?(S(),h(f,{key:13,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:5,max:10,modelValue:u.value.srfValue,"onUpdate:modelValue":l[39]||(l[39]=e=>u.value.srfValue=e),step:"1"},null,8,["pin-formatter","modelValue"])):O("",!0),"d"===u.value.srfDescription&&"p"===u.value.srfSelect?(S(),h(f,{key:14,"aria-label":"Range with ticks range with pin",ticks:!0,pin:!0,"pin-formatter":n.regularPinFormatter,snaps:!0,min:10,max:15,modelValue:u.value.srfValue,"onUpdate:modelValue":l[40]||(l[40]=e=>u.value.srfValue=e),step:"1"},null,8,["pin-formatter","modelValue"])):O("",!0)]),g("div",R,[b(i,null,{default:$((()=>[_(j(e.$t("esrPadrao")),1)])),_:1}),b(i,{class:"input-item"},{default:$((()=>[_(j(e.$t("labelEsr"))+" "+j(n.valorEsr),1)])),_:1}),b(i,null,{default:$((()=>[_(j(e.$t("dimenssoesTunel")),1)])),_:1}),b(d,{label:e.$t("labelSpanAltura"),placeholder:"10 m",modelValue:u.value.tunelSpanValue,"onUpdate:modelValue":l[41]||(l[41]=e=>u.value.tunelSpanValue=e)},null,8,["label","modelValue"])])]),g("section",F,[b(o,null,{default:$((()=>[_(j(e.$t("resultados")),1)])),_:1}),g("div",M,[b(i,null,{default:$((()=>[_(j(e.$t("dimensaoEquivalente")),1)])),_:1}),b(i,{class:"input-item"},{default:$((()=>[_(j(e.$t("labelDe"))+" "+j(n.valorDimEqui),1)])),_:1}),b(i,null,{default:$((()=>[_(j(e.$t("valorQCalculado")),1)])),_:1}),b(i,{class:"input-item"},{default:$((()=>[_(j(e.$t("labelQ"))+" "+j(n.valorQ),1)])),_:1}),b(i,null,{default:$((()=>[_(j(e.$t("suporteDefinido")),1)])),_:1}),b(i,{class:"input-item"},{default:$((()=>[_(j(e.$t("labelZona"))+" "+j(n.valorQ),1)])),_:1})])]),g("div",P,[b(N,{class:"save-log-button",onClick:l[42]||(l[42]=e=>n.saveCloseEdit())},{default:$((()=>[_(j(e.$t("saveLog")),1)])),_:1})])])),_:1})}],["__scopeId","data-v-8865a269"]]))}}}));

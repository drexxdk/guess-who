"use strict";(self.webpackChunkguess_who=self.webpackChunkguess_who||[]).push([[592],{8645:(h,c,i)=>{i.d(c,{c:()=>d});var e=i(4650),g=i(6895);const t=["image",""];function r(a,p){if(1&a&&(e.TgZ(0,"label"),e._uU(1),e.qZA()),2&a){const l=e.oxw();e.xp6(1),e.Oqu(l.text)}}let d=(()=>{class a{constructor(){this.disabled=!1,this.selected=new e.vpe,this.hover=new e.vpe,this.textShown=!0}ngOnInit(){}onClick(){this.disabled||(this.textShown=!this.textShown,this.selected.emit(this.image))}onPointerEnter(){this.disabled||this.hover.emit(this.image)}onPointerLeave(){this.disabled||this.hover.emit(void 0)}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-image","image",""]],inputs:{image:"image",text:"text",disabled:"disabled"},outputs:{selected:"selected",hover:"hover"},attrs:t,decls:4,vars:11,consts:[["src","assets/blank.svg"],[3,"click","pointerenter","pointerleave"],["alt","Picture of person",3,"srcset","src"],[4,"ngIf"]],template:function(l,o){1&l&&(e._UZ(0,"img",0),e.TgZ(1,"div",1),e.NdJ("click",function(){return o.onClick()})("pointerenter",function(){return o.onPointerEnter()})("pointerleave",function(){return o.onPointerLeave()}),e._UZ(2,"img",2),e.YNc(3,r,2,1,"label",3),e.qZA()),2&l&&(e.xp6(2),e.Da_("srcset","\n              assets/people/",o.image,"-derivatives/",o.image,"-250w.jpg 250w,\n              assets/people/",o.image,"-derivatives/",o.image,"-500w.jpg  2x,\n              assets/people/",o.image,"-derivatives/",o.image,"-750w.jpg  3x,\n              assets/people/",o.image,"-derivatives/",o.image,"-1000w.jpg 4x\n            ",e.LSH),e.hYB("src","assets/people/",o.image,"-derivatives/",o.image,"-1000w.jpg",e.LSH),e.xp6(1),e.Q6J("ngIf",o.textShown&&o.text))},dependencies:[g.O5],styles:["[_nghost-%COMP%]{position:relative;display:inline-flex;align-items:center}[_nghost-%COMP%]:not(.disabled) > div[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%] > img[_ngcontent-%COMP%]{visibility:hidden}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;left:0;right:0;border-radius:2rem;overflow:hidden}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;bottom:0;background:var(--image-overlay-background);left:0;right:0;padding:2rem;font-size:1.8rem;font-weight:700;text-align:center;color:var(--image-overlay-text)}"]}),a})()},8474:(h,c,i)=>{i.d(c,{$:()=>t});var e=i(6895),g=i(4650);let t=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=g.oAB({type:r}),r.\u0275inj=g.cJS({imports:[e.ez]}),r})()},2017:(h,c,i)=>{i.r(c),i.d(c,{SelectNameModule:()=>u});var e=i(6895),g=i(715),t=i(4650),r=i(8645);function d(n,m){if(1&n&&(t.TgZ(0,"li")(1,"button"),t._uU(2),t.qZA()()),2&n){const s=m.$implicit;t.xp6(2),t.Oqu(s)}}const p=[{path:"",component:(()=>{class n{constructor(){this.names=["Simon Jensen","Jens Frederiksen","Hans Mortensen","Mikkel Hansen"]}ngOnInit(){}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-select-name"]],decls:6,vars:1,consts:[["id","image"],["image","profile-1","text","Who is this?"],["id","options"],[4,"ngFor","ngForOf"]],template:function(s,_){1&s&&(t.TgZ(0,"div",0)(1,"div"),t._UZ(2,"app-image",1),t.qZA()(),t.TgZ(3,"div",2)(4,"ul"),t.YNc(5,d,3,1,"li",3),t.qZA()()),2&s&&(t.xp6(5),t.Q6J("ngForOf",_.names))},dependencies:[e.sg,r.c],styles:["[_nghost-%COMP%]{overflow:auto;max-width:120rem;margin:0 auto;display:flex}@media (orientation: portrait){[_nghost-%COMP%]{flex-direction:column;flex-grow:1}}@media (orientation: landscape){[_nghost-%COMP%]{gap:2rem;justify-content:center}}#image[_ngcontent-%COMP%]{position:sticky;top:0;overflow:hidden;flex-shrink:0;background-color:var(--body-background)}@media (orientation: portrait){#image[_ngcontent-%COMP%]{padding-bottom:2rem}}@media (orientation: landscape){#image[_ngcontent-%COMP%]{display:flex;max-width:50%}}#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex}@media (orientation: portrait){#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:0 auto;flex-direction:column;text-align:center;max-height:50vh;flex-shrink:0;aspect-ratio:1;gap:2rem}}@media (orientation: portrait) and (min-height: 1000px){#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-height:50rem}}@media (orientation: landscape){#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-width:50rem}}#options[_ngcontent-%COMP%]{width:100%;align-items:center}@media (orientation: landscape){#options[_ngcontent-%COMP%]{display:grid}}#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;gap:1rem;list-style-type:none}@media (orientation: portrait){#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 auto;max-width:50rem}}#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex}button[_ngcontent-%COMP%]{padding:1rem 2rem;border:.1rem solid var(--button-border-color);border-radius:1rem;font-size:1.6rem;width:100%;text-align:left;background-color:var(--button-background);color:var(--button-text);font-weight:700}@media (hover: hover){button[_ngcontent-%COMP%]{cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:var(--button-background-hover);color:var(--button-text-hover);border-color:var(--button-border-color-hover)}}"]}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(p),g.Bz]}),n})();var o=i(8474);let u=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.ez,l,o.$]}),n})()}}]);
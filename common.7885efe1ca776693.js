"use strict";(self.webpackChunkguess_who=self.webpackChunkguess_who||[]).push([[592],{1325:(u,d,i)=>{i.d(d,{a:()=>e});var t=i(4650);const s=["text",""];let e=(()=>{class a{constructor(l){this.elementRef=l,this.align="left"}ngOnInit(){this.elementRef.nativeElement.dataset.align=this.align}}return a.\u0275fac=function(l){return new(l||a)(t.Y36(t.SBq))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-headline","text",""]],inputs:{text:"text",align:"align"},attrs:s,decls:1,vars:1,template:function(l,p){1&l&&t._uU(0),2&l&&t.hij("",p.text,"\n")},styles:["[_nghost-%COMP%]{display:block;font-size:1.8rem;font-weight:700}[data-align=left][_nghost-%COMP%]{text-align:left}[data-align=center][_nghost-%COMP%]{text-align:center}[data-align=right][_nghost-%COMP%]{text-align:right}@media (orientation: portrait){[_nghost-%COMP%]{font-size:clamp(1.8rem,6vw,3.5rem)}}@media (orientation: landscape){[_nghost-%COMP%]{font-size:clamp(1.8rem,6vh,3.5rem)}}"]}),a})()},5505:(u,d,i)=>{i.d(d,{Q:()=>e});var t=i(6895),s=i(4650);let e=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[t.ez]}),a})()},5153:(u,d,i)=>{i.r(d),i.d(d,{SelectNameModule:()=>m});var t=i(6895),s=i(715),e=i(4650),a=i(8645);function _(n,g){if(1&n){const o=e.EpF();e.TgZ(0,"li")(1,"button",4),e.NdJ("pointerenter",function(C){const P=e.CHM(o).$implicit,O=e.oxw();return e.KtG(O.onPointerEnter(P,C))})("pointerleave",function(C){e.CHM(o);const M=e.oxw();return e.KtG(M.onPointerLeave(C))})("click",function(){const M=e.CHM(o).$implicit,P=e.oxw();return e.KtG(P.onClick(M))}),e._uU(2),e.qZA()()}if(2&n){const o=g.$implicit,r=e.oxw();e.xp6(1),e.ekj("hover",r.hover===o)("selected",r.selected===o),e.Q6J("disabled",r.selected)("disabled",!!r.selected),e.xp6(1),e.hij(" ",o," ")}}const p=[{path:"",component:(()=>{class n{constructor(){this.names=["Simon Jensen","Jens Frederiksen","Hans Mortensen","Mikkel Hansen"]}ngOnInit(){}onSelected(o){this.selected=o}onClick(o){this.selected||(this.selected=o)}onPointerEnter(o,r){this.hover=o}onPointerLeave(o){this.hover=void 0}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-select-name"]],decls:6,vars:5,consts:[["id","image"],["src","assets/people/1.webp","text","Who is this?","ariaLabel","Toggle title shown","alt","Person face"],["id","options"],[4,"ngFor","ngForOf"],[3,"disabled","pointerenter","pointerleave","click"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"app-image",1),e.qZA()(),e.TgZ(3,"div",2)(4,"ul"),e.YNc(5,_,3,7,"li",3),e.qZA()()),2&o&&(e.xp6(4),e.ekj("hover",r.hover&&!r.selected)("selected",r.selected),e.xp6(1),e.Q6J("ngForOf",r.names))},dependencies:[t.sg,a.c],styles:["[_nghost-%COMP%]{overflow:auto;max-width:120rem;margin:0 auto;display:flex}@media (orientation: portrait){[_nghost-%COMP%]{flex-direction:column;flex-grow:1}}@media (orientation: landscape){[_nghost-%COMP%]{gap:2rem;justify-content:center}}#image[_ngcontent-%COMP%]{position:sticky;top:0;overflow:hidden;flex-shrink:0;background-color:var(--body-background-color);z-index:1}@media (orientation: portrait){#image[_ngcontent-%COMP%]{padding-bottom:2rem}}@media (orientation: portrait) and (max-width: 540px){#image[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]     label{font-size:6vw}}@media (orientation: portrait) and (min-width: 541px){#image[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]     label{font-size:3.5rem}}@media (orientation: landscape){#image[_ngcontent-%COMP%]{display:flex;max-width:50%}}@media (orientation: landscape) and (max-height: 580px){#image[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]     label{font-size:6vh}}@media (orientation: landscape) and (min-height: 581px){#image[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]     label{font-size:3.5rem}}#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex}@media (orientation: portrait){#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:0 auto;flex-direction:column;text-align:center;max-height:50vh;flex-shrink:0;aspect-ratio:1;gap:2rem}}@media (orientation: portrait) and (min-height: 1000px){#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-height:50rem}}@media (orientation: landscape){#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-width:50rem}}#options[_ngcontent-%COMP%]{width:100%;align-items:center}@media (orientation: landscape){#options[_ngcontent-%COMP%]{display:grid}}#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;gap:1rem;list-style-type:none}@media (orientation: portrait){#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 auto;max-width:50rem}}#options[_ngcontent-%COMP%]   ul.selected[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.selected){opacity:.5}#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex}#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1.5rem 3rem;border:.1rem solid var(--gray-400);border-radius:1rem;font-size:1.6rem;width:100%;text-align:left;background-color:var(--gray-200);font-weight:700;position:relative}#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%], #options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.hover[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 .5rem var(--success)}"]}),n})()}];let c=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(p),s.Bz]}),n})();var h=i(8474);let m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[t.ez,c,h.$]}),n})()},8645:(u,d,i)=>{i.d(d,{c:()=>p});var t=i(4650),s=i(6895),e=i(1325),a=i(6457);const _=["src","","alt","","ariaLabel",""];function l(c,h){if(1&c&&t._UZ(0,"app-headline",5),2&c){const m=t.oxw();t.Q6J("text",m.text)("align","center")}}let p=(()=>{class c{constructor(){this.disabled=!1,this.selected=new t.vpe,this.hover=new t.vpe,this.textShown=!0}ngOnInit(){}onClick(){this.textShown=!this.textShown,this.selected.emit(this.src)}onPointerEnter(m){this.hover.emit(this.src)}onPointerLeave(m){this.hover.emit(void 0)}}return c.\u0275fac=function(m){return new(m||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-image","src","","alt","","ariaLabel",""]],inputs:{src:"src",alt:"alt",ariaLabel:"ariaLabel",text:"text",disabled:"disabled"},outputs:{selected:"selected",hover:"hover"},attrs:_,decls:5,vars:5,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1 1","fill","transparent","width","1","height","1"],[3,"disabled","click","pointerenter","pointerleave"],["svg","loading"],[3,"src","alt"],[3,"text","align",4,"ngIf"],[3,"text","align"]],template:function(m,n){1&m&&(t.O4$(),t._UZ(0,"svg",0),t.kcU(),t.TgZ(1,"button",1),t.NdJ("click",function(){return n.onClick()})("pointerenter",function(o){return n.onPointerEnter(o)})("pointerleave",function(o){return n.onPointerLeave(o)}),t._UZ(2,"app-icon",2)(3,"img",3),t.YNc(4,l,1,2,"app-headline",4),t.qZA()),2&m&&(t.xp6(1),t.Q6J("disabled",n.disabled),t.uIk("aria-label",n.ariaLabel),t.xp6(2),t.Q6J("src",n.src,t.LSH)("alt",n.alt),t.xp6(1),t.Q6J("ngIf",n.textShown&&n.text))},dependencies:[s.O5,e.a,a.o],styles:["[_nghost-%COMP%]{position:relative;display:inline-flex;align-items:center}[_nghost-%COMP%]:not(.disabled) > div[_ngcontent-%COMP%]{cursor:pointer}.selected[_nghost-%COMP%]   button[_ngcontent-%COMP%], .hover[_nghost-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:inset 0 0 0 .5rem var(--success)}.selected[_nghost-%COMP%]   button[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%], .hover[_nghost-%COMP%]   button[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{display:none}.selected[_nghost-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .hover[_nghost-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:-1;position:relative}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{visibility:hidden}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{width:100%;height:100%;display:block}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;left:0;right:0;border-radius:2rem;overflow:hidden;aspect-ratio:1;box-shadow:inset 0 0 0 .5rem var(--gray-300);background-color:var(--gray-200)}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:var(--gray-500);width:20%;height:20%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover;position:relative}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:active   app-headline[_ngcontent-%COMP%]{background-color:#0009;color:#fff}@media (hover: hover){[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover   app-headline[_ngcontent-%COMP%]{background-color:#0009;color:#fff}}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   app-headline[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:2rem;pointer-events:none;background:rgba(0,0,0,.5);color:#fff}"]}),c})()},8474:(u,d,i)=>{i.d(d,{$:()=>_});var t=i(6895),s=i(5505),e=i(7549),a=i(4650);let _=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=a.oAB({type:l}),l.\u0275inj=a.cJS({imports:[t.ez,s.Q,e.Q]}),l})()}}]);
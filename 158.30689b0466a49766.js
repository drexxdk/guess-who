"use strict";(self.webpackChunkguess_who=self.webpackChunkguess_who||[]).push([[158],{9158:(at,m,a)=>{a.r(m),a.d(m,{GameModule:()=>it});var c=a(6895),r=a(4119),b=a(9715),y=a(5698),p=a(6386),_=a(4216),t=a(4650),u=a(2997);const w=["*"];let h=(()=>{class n{constructor(e){this.elementRef=e,this.align="left"}ngOnInit(){this.elementRef.nativeElement.dataset.align=this.align}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-headline"]],inputs:{align:"align"},ngContentSelectors:w,decls:1,vars:0,template:function(e,o){1&e&&(t.F$t(),t.Hsn(0))},styles:["@keyframes pulse{0%{box-shadow:0 0 0 0 var(--pulse-color)}}@keyframes shake{0%{transform:translate(0)}25%{transform:translate(var(--shake-1))}50%{transform:translate(var(--shake-2))}to{transform:translate(0)}}[_nghost-%COMP%]{display:flex;font-size:18px;font-weight:700;gap:.5em}[data-align=left][_nghost-%COMP%]{justify-content:flex-start;text-align:left}[data-align=center][_nghost-%COMP%]{justify-content:center;text-align:center}[data-align=right][_nghost-%COMP%]{justify-content:flex-end;text-align:right}@media (orientation: portrait){[_nghost-%COMP%]{font-size:clamp(18px,7.3vw,35px)}}@media (orientation: landscape){[_nghost-%COMP%]{font-size:clamp(18px,7.3vh,35px)}}[_nghost-%COMP%]     app-icon i{width:1em;height:1em}"]}),n})();var I=a(5944);const k=["alt","","ariaLabel",""];function E(n,i){if(1&n&&t._UZ(0,"img",7),2&n){const e=t.oxw();t.Q6J("src",e.src,t.LSH)("alt",e.alt)}}function T(n,i){1&n&&t._UZ(0,"app-icon",8)}function S(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.text)}}function G(n,i){if(1&n&&t._UZ(0,"app-icon",12),2&n){const e=t.oxw(2);t.Q6J("svg","valid"===e.validation?"check":"x-mark")}}function q(n,i){if(1&n&&(t.TgZ(0,"app-headline",9),t.YNc(1,S,2,1,"span",10),t.YNc(2,G,1,1,"app-icon",11),t.qZA()),2&n){const e=t.oxw();t.Udp("transition",e.validation?"unset":null),t.Q6J("align","center"),t.uIk("data-shown",e.textShown||void 0!==e.validation),t.xp6(1),t.Q6J("ngIf",e.text),t.xp6(1),t.Q6J("ngIf",e.validation)}}let C=(()=>{class n{constructor(){this.selected=!1,this.disabled=!1,this.animation=!1,this.clickEvent=new t.vpe,this.textShown=!0}ngOnInit(){console.log(this.src,this.selected,this.disabled,this.validation,this.animation)}onClick(){this.textShown=!this.textShown,this.clickEvent.emit(this.textShown)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-image","alt","","ariaLabel",""]],inputs:{src:"src",alt:"alt",ariaLabel:"ariaLabel",text:"text",selected:"selected",disabled:"disabled",validation:"validation",animation:"animation",textShown:"textShown"},outputs:{clickEvent:"clickEvent"},attrs:k,decls:8,vars:12,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1 1","fill","transparent","width","1","height","1"],[3,"disabled","click"],[1,"loading"],["svg","loading"],["class","image",3,"src","alt",4,"ngIf"],["class","image","svg","image",4,"ngIf"],[3,"transition","align",4,"ngIf"],[1,"image",3,"src","alt"],["svg","image",1,"image"],[3,"align"],[4,"ngIf"],[3,"svg",4,"ngIf"],[3,"svg"]],template:function(e,o){1&e&&(t.O4$(),t._UZ(0,"svg",0),t.kcU(),t.TgZ(1,"button",1),t.NdJ("click",function(){return o.onClick()}),t.TgZ(2,"div")(3,"div",2),t._UZ(4,"app-icon",3),t.qZA(),t.YNc(5,E,1,2,"img",4),t.YNc(6,T,1,0,"app-icon",5),t.YNc(7,q,3,6,"app-headline",6),t.qZA()()),2&e&&(t.xp6(1),t.ekj("selected",o.selected)("animation",o.animation)("border-on-hover",!o.text||!o.src),t.Q6J("disabled",o.disabled),t.uIk("aria-label",o.ariaLabel)("data-validation",o.validation),t.xp6(4),t.Q6J("ngIf",o.src),t.xp6(1),t.Q6J("ngIf",!o.src),t.xp6(1),t.Q6J("ngIf",o.text||o.selected&&void 0!==o.validation))},dependencies:[c.O5,h,I.o],styles:['@keyframes pulse{0%{box-shadow:0 0 0 0 var(--pulse-color)}}@keyframes shake{0%{transform:translate(0)}25%{transform:translate(var(--shake-1))}50%{transform:translate(var(--shake-2))}to{transform:translate(0)}}[_nghost-%COMP%]{position:relative;display:inline-flex;align-items:center}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{width:100%;height:100%;display:block;visibility:hidden}[_nghost-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;border-radius:5%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{aspect-ratio:1}[_nghost-%COMP%]   button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;border-radius:5%;overflow:hidden;background-color:rgb(var(--gray-800));height:100%}[_nghost-%COMP%]   button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{content:"";top:0;bottom:0;pointer-events:none;border:5px solid rgb(var(--gray-700))}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;box-shadow:0 0 0 2em transparent;border-radius:5%}@media (hover: hover){[_nghost-%COMP%]   button.border-on-hover[_ngcontent-%COMP%]:hover > div[_ngcontent-%COMP%]:before{border-color:rgb(var(--gray-500));z-index:1}}[_nghost-%COMP%]   button[data-validation=valid][_ngcontent-%COMP%]{--color: rgb(var(--success));--accent: rgb(var(--success-accent));--pulse-color: rgb(var(--success))}[_nghost-%COMP%]   button[data-validation=invalid][_ngcontent-%COMP%]{--color: rgb(var(--danger));--accent: rgb(var(--danger-accent));--pulse-color: rgb(var(--danger))}[_nghost-%COMP%]   button.selected[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{border-color:var(--color);z-index:1}[_nghost-%COMP%]   button.selected[_ngcontent-%COMP%]   app-headline[_ngcontent-%COMP%]{background-color:var(--color);color:var(--accent)}[_nghost-%COMP%]   button.animation[data-validation=valid][_ngcontent-%COMP%]:after{animation:pulse 1s}[_nghost-%COMP%]   button.animation[data-validation=invalid][_ngcontent-%COMP%]{animation:shake .15s 2 linear}[_nghost-%COMP%]   button.animation[_ngcontent-%COMP%]:after{z-index:3}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;display:grid;place-items:center;pointer-events:none;color:rgb(var(--gray-500))}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{width:25%;height:25%}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover;position:relative}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:active   app-headline[_ngcontent-%COMP%]{background-color:rgba(var(--black),.5)}@media (hover: hover){[_nghost-%COMP%]   button[_ngcontent-%COMP%]:not(.border-on-hover):hover   app-headline[_ngcontent-%COMP%]{background-color:rgba(var(--black),.5)}}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   app-headline[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:5%;pointer-events:none;background-color:rgba(var(--gray-900),.5);transform:translateY(0);transition:transform .3s ease-in-out}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   app-headline[data-shown=false][_ngcontent-%COMP%]{transform:translateY(100%)}']}),n})();var A=a(212),g=a(3101);const N=["question",""];function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",3)(1,"div")(2,"app-image",4),t.NdJ("clickEvent",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.onClickQuestionImage(s))}),t.ALo(3,"translate"),t.ALo(4,"translate"),t.ALo(5,"translate"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("src",e.question.image)("text",e.question.selectedOptionId?void 0:e.question.title)("ariaLabel",e.textShown?t.lcZ(3,8,"GAME.SELECT_NAME.QUESTION_TOGGLE_BUTTON_ARIA_LABEL_HIDE"):t.lcZ(4,10,"GAME.SELECT_NAME.QUESTION_TOGGLE_BUTTON_ARIA_LABEL_SHOW"))("alt",t.lcZ(5,12,"GAME.SELECT_NAME.QUESTION_IMAGE_ALT"))("selected",!!e.question.selectedOptionId)("textShown",e.textShown)("validation",e.question.answer?e.question.answer.isCorrect?"valid":"invalid":void 0)("disabled",!!e.question.answer)}}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li")(1,"app-button",5),t.NdJ("clickEvent",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.onClick(l.id))}),t._uU(2),t.qZA()()}if(2&n){const e=i.$implicit,o=t.oxw();t.xp6(1),t.Q6J("animation",e.id===o.question.selectedOptionId)("selected",e.id===o.question.selectedOptionId)("disabled",!!o.question.selectedOptionId)("validation",o.question.answer?o.question.answer.selectedOptionId===e.id&&o.question.answer.correctOptionId===e.id?"valid":"invalid":void 0),t.xp6(1),t.hij(" ",e.title," ")}}let L=(()=>{class n{constructor(){this.clickEvent=new t.vpe,this.textShown=!0}onClick(e){this.clickEvent.emit({questionId:this.question.id,optionId:e})}onClickQuestionImage(e){this.textShown=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-select-name","question",""]],inputs:{question:"question"},outputs:{clickEvent:"clickEvent"},attrs:N,decls:4,vars:4,consts:[["id","image",4,"ngIf"],["id","options"],[4,"ngFor","ngForOf"],["id","image"],[3,"src","text","ariaLabel","alt","selected","textShown","validation","disabled","clickEvent"],[3,"animation","selected","disabled","validation","clickEvent"]],template:function(e,o){1&e&&(t.YNc(0,Z,6,14,"div",0),t.TgZ(1,"div",1)(2,"ul"),t.YNc(3,J,3,5,"li",2),t.qZA()()),2&e&&(t.Q6J("ngIf",o.question.image&&o.question.options.length),t.xp6(2),t.ekj("selected",o.question.selectedOptionId),t.xp6(1),t.Q6J("ngForOf",o.question.options))},dependencies:[c.sg,c.O5,C,A.r,g.X$],styles:['@keyframes pulse{0%{box-shadow:0 0 0 0 var(--pulse-color)}}@keyframes shake{0%{transform:translate(0)}25%{transform:translate(var(--shake-1))}50%{transform:translate(var(--shake-2))}to{transform:translate(0)}}[_nghost-%COMP%]{overflow:auto;display:flex;margin:0 auto;position:absolute;top:0;bottom:0;left:0;right:0;padding:20px}@media (orientation: portrait){[_nghost-%COMP%]{flex-direction:column;flex-grow:1}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{content:"";display:block;flex-grow:1}}@media (orientation: landscape){[_nghost-%COMP%]{gap:20px;justify-content:center}}#image[_ngcontent-%COMP%]{overflow:hidden;flex-shrink:0;z-index:1;min-width:100px;min-height:100px}@media (min-height: 180px){#image[_ngcontent-%COMP%]{position:sticky;top:0}}@media (orientation: portrait){#image[_ngcontent-%COMP%]{padding-bottom:20px}}@media (orientation: portrait) and (max-width: 540px){#image[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]     label{font-size:6vw}}@media (orientation: portrait) and (min-width: 541px){#image[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]     label{font-size:35px}}@media (orientation: landscape){#image[_ngcontent-%COMP%]{display:flex;max-width:50%}}@media (orientation: landscape) and (max-height: 580px){#image[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]     label{font-size:6vh}}@media (orientation: landscape) and (min-height: 581px){#image[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]     label{font-size:35px}}#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex}@media (orientation: portrait){#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:0 auto;flex-direction:column;text-align:center;max-height:min(400px,50vh);flex-shrink:0;aspect-ratio:1;gap:20px}}@media (orientation: landscape){#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-width:400px}}@media (hover: hover){#image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]     app-image button:hover:before{display:none}}#options[_ngcontent-%COMP%]{width:100%;align-items:center}@media (orientation: landscape){#options[_ngcontent-%COMP%]{display:grid;max-width:400px}}#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;gap:10px}@media (orientation: portrait){#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 auto;max-width:400px}}@media (orientation: landscape){#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:-20px;margin-bottom:-20px;padding-top:20px;padding-bottom:20px}}#options[_ngcontent-%COMP%]   ul.selected[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.selected){opacity:.5}#options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex}']}),n})();const Q=["question",""];function F(n,i){if(1&n&&(t.TgZ(0,"div",5)(1,"app-headline",6)(2,"span"),t._uU(3),t.qZA()()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("align","center"),t.xp6(2),t.Oqu(e.question.title)}}const f=function(n){return{number:n}};function B(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"app-image",7),t.NdJ("clickEvent",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.onClick(l.id))}),t.ALo(1,"translate"),t.ALo(2,"translate"),t.ALo(3,"translate"),t.qZA()}if(2&n){const e=i.$implicit,o=i.index,s=t.oxw();t.Q6J("animation",e.id===s.question.selectedOptionId)("selected",e.id===s.question.selectedOptionId)("disabled",!!s.question.selectedOptionId)("src",e.image)("ariaLabel",t.xi3(1,8,"GAME.SELECT_PHOTO.OPTION_ARIA_LABEL",t.VKq(16,f,o+1)))("alt",t.xi3(2,11,"GAME.SELECT_PHOTO.OPTION_IMAGE_ALT",t.VKq(18,f,o+1)))("text",e.image||s.question.answer?void 0:t.lcZ(3,14,"GAME.SELECT_PHOTO.OPTION_IMAGE_MISSING"))("validation",s.question.answer?s.question.answer.selectedOptionId===e.id&&s.question.answer.correctOptionId===e.id?"valid":"invalid":void 0)}}let U=(()=>{class n{constructor(e){this.translate=e,this.clickEvent=new t.vpe}onClick(e){this.clickEvent.emit({questionId:this.question.id,optionId:e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-select-photo","question",""]],inputs:{question:"question"},outputs:{clickEvent:"clickEvent"},attrs:Q,decls:8,vars:4,consts:[["id","question",4,"ngIf"],["id","options"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1 1","fill","transparent","width","1","height","1"],["id","photos"],[3,"animation","selected","disabled","src","ariaLabel","alt","text","validation","clickEvent",4,"ngFor","ngForOf"],["id","question"],[3,"align"],[3,"animation","selected","disabled","src","ariaLabel","alt","text","validation","clickEvent"]],template:function(e,o){1&e&&(t.YNc(0,F,4,2,"div",0),t.TgZ(1,"div",1)(2,"div"),t.O4$(),t._UZ(3,"svg",2),t.kcU(),t.TgZ(4,"div"),t.O4$(),t._UZ(5,"svg",2),t.kcU(),t.TgZ(6,"div",3),t.YNc(7,B,4,20,"app-image",4),t.qZA()()()()),2&e&&(t.Q6J("ngIf",o.question.title&&o.question.options.length),t.xp6(6),t.ekj("selected",o.question.selectedOptionId),t.xp6(1),t.Q6J("ngForOf",o.question.options))},dependencies:[c.sg,c.O5,C,h,g.X$],styles:['@keyframes pulse{0%{box-shadow:0 0 0 0 var(--pulse-color)}}@keyframes shake{0%{transform:translate(0)}25%{transform:translate(var(--shake-1))}50%{transform:translate(var(--shake-2))}to{transform:translate(0)}}[_nghost-%COMP%]{overflow:auto;display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0;align-items:center}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{content:"";display:block;flex-grow:1}#question[_ngcontent-%COMP%]{width:100%;padding:20px;position:sticky;top:0;z-index:2}#options[_ngcontent-%COMP%]{padding:0 20px;width:100%;height:100%;gap:20px;margin-bottom:20px}@media (orientation: landscape){#options[_ngcontent-%COMP%]{max-width:1700px;max-height:400px}}@media (orientation: portrait){#options[_ngcontent-%COMP%]{max-width:440px;max-height:1660px}}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:grid;height:100%}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{display:none}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:grid}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{display:none}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   #photos[_ngcontent-%COMP%]{gap:20px;justify-content:center;min-height:100px}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   #photos[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]{min-width:100px}@media (orientation: landscape){#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   #photos[_ngcontent-%COMP%]{display:flex}}@media (orientation: portrait){#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   #photos[_ngcontent-%COMP%]{display:grid}}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   #photos.selected[_ngcontent-%COMP%] > app-image[_ngcontent-%COMP%]     button:not(.selected){opacity:.5}@media (min-aspect-ratio: 100/100) and (max-aspect-ratio: 100/50) and (min-width: 260px),(min-aspect-ratio: 50/100) and (max-aspect-ratio: 100/100) and (min-height: 260px),(min-width: 860px) and (min-height: 860px){#options[_ngcontent-%COMP%]{display:grid;justify-content:center;max-width:820px;max-height:820px;flex-shrink:unset}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-flex;height:unset;position:relative}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{display:block;visibility:hidden;width:100%;height:100%}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;left:0;right:0}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   #photos[_ngcontent-%COMP%]{height:100%;width:100%;display:grid;gap:20px;grid-template-columns:1fr 1fr}#options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   #photos[_ngcontent-%COMP%]   app-image[_ngcontent-%COMP%]{display:flex}}']}),n})();var Y=a(7870);function H(n,i){1&n&&(t.ynx(0),t._UZ(1,"app-loading"),t.BQk())}function j(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"app-game-select-name",2),t.NdJ("clickEvent",function(s){t.CHM(e);const l=t.oxw(3);return t.KtG(l.onClick(s))}),t.qZA()}if(2&n){const e=t.oxw(2).ngIf;t.Q6J("question",e.game.question)}}function z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"app-game-select-photo",2),t.NdJ("clickEvent",function(s){t.CHM(e);const l=t.oxw(3);return t.KtG(l.onClick(s))}),t.qZA()}if(2&n){const e=t.oxw(2).ngIf;t.Q6J("question",e.game.question)}}function $(n,i){if(1&n&&(t.ynx(0),t.YNc(1,j,1,1,"app-game-select-name",1),t.YNc(2,z,1,1,"app-game-select-photo",1),t.BQk()),2&n){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngIf","select-name"===e.game.type),t.xp6(1),t.Q6J("ngIf","select-photo"===e.game.type)}}function R(n,i){if(1&n&&(t.ynx(0),t.YNc(1,H,2,0,"ng-container",0),t.YNc(2,$,3,2,"ng-container",0),t.BQk()),2&n){const e=i.ngIf;t.xp6(1),t.Q6J("ngIf","loading"===e.status),t.xp6(1),t.Q6J("ngIf",e.game&&"success"===e.status)}}const K=function(n,i){return{game:n,status:i}},X=[{path:"",component:(()=>{class n{constructor(e,o){this.gameStore=e,this.route=o,this.game$=this.gameStore.select(_.cF),this.status$=this.gameStore.select(_.lR)}ngOnInit(){this.loadGame()}ngOnDestroy(){this.gameStore.dispatch(p.j3())}loadGame(){this.route.paramMap.pipe((0,y.q)(1)).subscribe(e=>{const o=e.get("id"),s=o?parseInt(o):void 0;s&&this.gameStore.dispatch(p.S_({id:s}))})}onClick(e){this.gameStore.dispatch(p.un({questionId:e.questionId,optionId:e.optionId}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.yh),t.Y36(r.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game"]],decls:3,vars:8,consts:[[4,"ngIf"],[3,"question","clickEvent",4,"ngIf"],[3,"question","clickEvent"]],template:function(e,o){1&e&&(t.YNc(0,R,3,2,"ng-container",0),t.ALo(1,"async"),t.ALo(2,"async")),2&e&&t.Q6J("ngIf",t.WLB(5,K,t.lcZ(1,1,o.game$),t.lcZ(2,3,o.status$)))},dependencies:[c.O5,L,U,Y.N,c.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]}),n})(),data:{pageType:b.W.game}}];let W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(X),r.Bz]}),n})();var D=a(8776),O=a(6263),V=a(630);let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez]}),n})();var M=a(2876);let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,v,M.Q]}),n})();var tt=a(8107),x=a(2271);let nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[x.m,P,M.Q,tt.h]}),n})(),et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[x.m,P,v]}),n})();var ot=a(7194);let it=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,W,u.Aw.forFeature(O.Jh,O.F6),D.sQ.forFeature([V.f]),nt,et,ot.I]}),n})()}}]);
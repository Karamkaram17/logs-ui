import{Eb as g,Fb as u,Gb as p,_ as o,aa as a,bb as l,cb as s,fc as f,ia as c,ja as r,vb as d}from"./chunk-NRUTE7DH.js";var C=(()=>{let n=class n{constructor(){this.innerLoading=o(!1)}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=r({type:n,selectors:[["kss-lib-loading"]],inputs:{innerLoading:[c.SignalBased,"innerLoading"]},standalone:!0,features:[f],decls:5,vars:2,consts:[[1,"loading-route-container"],[1,"loading-circle"]],template:function(i,m){i&1&&(g(0,"div",0)(1,"div",1),p(2,"div")(3,"div")(4,"div"),u()()),i&2&&d("inner-loading",m.innerLoading())},styles:[".loading-route-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--spinner-background);z-index:99999;pointer-events:none;-webkit-user-select:none;user-select:none;display:flex;align-items:center;justify-content:center}.loading-route-container[_ngcontent-%COMP%]   .loading-circle[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.loading-route-container[_ngcontent-%COMP%]   .loading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.4s}.loading-route-container[_ngcontent-%COMP%]   .loading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.2s}.loading-route-container[_ngcontent-%COMP%]   .loading-circle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;position:absolute;opacity:0;width:60px;height:60px;animation:_ngcontent-%COMP%_ball-scale-multiple 1s 0s linear infinite}.inner-loading[_ngcontent-%COMP%]{background-color:var(--inner-spinner-background)!important}@keyframes _ngcontent-%COMP%_ball-scale-multiple{0%{transform:scale(0);opacity:0}5%{opacity:1}to{transform:scale(1);opacity:0}}"]});let t=n;return t})();var _=(()=>{let n=class n{constructor(){this.isLoading=l(()=>!!this._count()),this._count=s(0)}plus(){this._count.update(e=>e+1)}minus(){this._count.update(e=>e-1)}};n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=a({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();export{C as a,_ as b};
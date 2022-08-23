(()=>{"use strict";const e={chtulhu:{total:{green:4,brown:9,blue:2},stage1:{green:0,brown:2,blue:2},stage2:{green:1,brown:3,blue:0},stage3:{green:3,brown:4,blue:0}},shubniggurath:{total:{green:6,brown:8,blue:2},stage1:{green:1,brown:2,blue:1},stage2:{green:3,brown:2,blue:1},stage3:{green:2,brown:4,blue:0}},iogsothoth:{total:{green:5,brown:9,blue:2},stage1:{green:0,brown:2,blue:1},stage2:{green:2,brown:3,blue:1},stage3:{green:3,brown:4,blue:0}},azathoth:{total:{green:5,brown:9,blue:2},stage1:{green:1,brown:2,blue:1},stage2:{green:2,brown:3,blue:1},stage3:{green:2,brown:4,blue:0}}},t={blue:{min:1,max:12,path:"mythiccards/blue",hardCards:[1,2,6,8],commonCards:[7,9,11,12],easyCards:[3,4,5,10]},brown:{min:1,max:21,path:"mythiccards/brown",hardCards:[6,7,8,9,10],commonCards:[1,2,3,4,5,15,16,17,18,19,20],easyCards:[11,12,13,14,21]},green:{min:1,max:18,path:"mythiccards/green",hardCards:[2,3,4,5,6],commonCards:[7,8,9,10,11,13,14,15],easyCards:[1,12,16,17,18]}},n=document.querySelector("#start"),r=document.querySelectorAll(".screen"),o=document.querySelector("#ancients-list"),s=document.querySelector("#complexity-list"),a=document.querySelector("#img-next"),c=document.querySelector("#restat-btn"),i=[];let l,u,g,d,b,h,m,p;function f(e,n){const{hardCards:r,commonCards:o,easyCards:s}=t[n];if(o.includes(e))return"common";if(s.includes(e))return"easy";if(r.includes(e))return"hard";throw new Error("there is no type for card")}n.addEventListener("click",(e=>{e.preventDefault(),r[0].classList.add("up")})),o.addEventListener("click",(e=>{e.target.classList.contains("ancient-elem")&&(l=e.target.getAttribute("data-ancient"),r[1].classList.add("up"))})),s.addEventListener("click",(n=>{n.target.classList.contains("complexity-btn")&&(u=n.target.getAttribute("data-complexity"),r[2].classList.add("up"),function(){!function(){for(const e in t){const{min:n,max:r,path:o}=t[e];for(let t=n;t<=r;t+=1){const n={color:e,number:t,type:f(t,e),path:`assets/${o}/${e}${t}.webp`};i.push(n)}}}();const n=function(){const e=[];return e.push([...i.filter(w)]),e.push([...i.filter(k)]),e.push([...i]),e.push([...i.filter(v)]),e.push([...i.filter(C)]),e}()[Array.from(document.querySelectorAll(".complexity-btn")).map((e=>e.getAttribute("data-complexity"))).indexOf(u)],{blueMiniDeck:r,greenMiniDeck:o,brownMiniDeck:s}=function(t){const{blue:n,green:r,brown:o}=e[l].total;!function(e,t,n,r){const o=e.filter(M).length,s=e.filter(q).length,a=e.filter(x).length;if(o<t){const n=y(M,L);e.push(...E(i.filter(n),t-o))}if(s<n){const t=y(q,L);e.push(...E(i.filter(t),n-s))}if(a<r){const t=y(x,L);e.push(...E(i.filter(t),r-a))}}(t,n,r,o);return{blueMiniDeck:E(t.filter(M),n),greenMiniDeck:E(t.filter(q),r),brownMiniDeck:E(t.filter(x),o)}}(n);g=D(r),d=D(o),b=D(s),h=D(A("stage1")),m=D(A("stage2")),p=D(A("stage3"))}(),$())})),c.addEventListener("click",(e=>{r.forEach((e=>e.classList.remove("up"))),a.src="assets/cardbg.webp",c.classList.add("hide")}));const y=(...e)=>t=>e.every((e=>e(t))),w=e=>"easy"===e.type,L=e=>"common"===e.type,C=e=>"hard"===e.type,k=e=>"hard"!==e.type,v=e=>"easy"!==e.type,x=e=>"brown"===e.color,M=e=>"blue"===e.color,q=e=>"green"===e.color,D=e=>[...e].sort((()=>Math.random()-.5));function E(e,t){return D(e).slice(0,t)}function S(e,t){const n=[];for(let r=0;r<t;r+=1)n.push(e.pop());return n}function A(t){const{blue:n,green:r,brown:o}=e[l][t],s=S(g,n),a=S(d,r),c=S(b,o);return s.concat(a).concat(c)}function T(e,t){const n=document.querySelector(`.${e}`).getElementsByTagName("li");n[0].innerHTML=t.filter(q).length,n[1].innerHTML=t.filter(x).length,n[2].innerHTML=t.filter(M).length}function $(){T("stage1",h),T("stage2",m),T("stage3",p)}a.addEventListener("click",(e=>{e.preventDefault();const t=function(...e){return e[0].length>0?e[0].pop():e[1].length>0?e[1].pop():e[2].length>0?e[2].pop():void 0}(h,m,p);t?(a.src=t.path,$()):c.classList.remove("hide")}))})();
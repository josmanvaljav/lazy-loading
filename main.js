(()=>{"use strict";const e=e=>e.isIntersecting,t=e=>{const t=e.target,r=t.firstChild,c=r.dataset.src;r.src=c,a.unobserve(t)},a=new IntersectionObserver((a=>{a.filter(e).forEach(t)})),r=document.querySelector("#images");document.querySelector("#addImageButton").addEventListener("click",(()=>{const e=(()=>{const e=document.createElement("div");e.className="lazyImageDiv p-4 my-4 mx-auto w-2/5 bg-gray-50 shadow-sm shadow-gray-300";const t=document.createElement("img");return t.className="mx-auto",t.dataset.src=`https://randomfox.ca/images/${Math.floor(121*Math.random())+1}.jpg`,e.appendChild(t),e})();var t;r.appendChild(e),t=e,a.observe(t)})),document.querySelector("#cleanImages").addEventListener("click",(()=>{let e=document.querySelector(".lazyImageDiv");for(;e;)e.remove(),e=document.querySelector(".lazyImageDiv")}))})();
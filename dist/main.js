(()=>{"use strict";const e=document.querySelector(".projectForm"),t=document.querySelector("#projectSubmitBtn"),n=document.querySelector("#projectCloseBtn"),c=document.querySelector(".addProjectBtn"),d=document.querySelector("#projectName");let l=[];const a=()=>(c.addEventListener("click",i),n.addEventListener("click",r),t.addEventListener("click",o),a),o=()=>{let e=d.value;const t={name:e,allTasks:[]};l.push(t),s(e),r()},s=e=>{let t=document.createElement("div");t.classList.add("projectDiv");let n=document.createElement("div");n.classList.add("buttonContainer");let c=document.createElement("button");c.textContent="Delete",c.classList.add("deleteBtn");let d=document.createElement("button");d.textContent="Edit",d.classList.add("editBtn");let a=document.createElement("p");a.textContent=e,a.classList.add("projectDisplay"),t.appendChild(a),n.appendChild(d),n.appendChild(c),t.appendChild(n),projectNameContainer.appendChild(t),c.addEventListener("click",(()=>{projectNameContainer.removeChild(t),l.splice(t,1)}))},i=()=>{e.classList.add("active")},r=()=>{e.classList.remove("active")};a()})();
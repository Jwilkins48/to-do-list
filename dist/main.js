(()=>{"use strict";const e=document.querySelector(".toDoContainer"),t=document.querySelector("#projectName"),n=document.querySelector("#taskSubmitBtn"),d=document.querySelector(".taskForm"),c=document.querySelector("#taskName"),a=document.querySelector("#taskDesc");let l=[];const s=()=>{e.innerHTML="";const n=document.createElement("div");n.classList.add("taskTitleDiv"),e.appendChild(n);const c=document.createElement("h1");c.classList.add("taskTitle"),n.appendChild(c);const a=document.createElement("div");a.classList.add("taskBtnDiv"),n.appendChild(a);const l=document.createElement("button");l.addEventListener("click",(function(){d.classList.add("active")}));const s=document.createElement("plusContainer");return l.appendChild(s),s.innerHTML='<img src="imgs/bluePlus.png" alt="add" width="33" height="33">',l.classList.add("addTaskBtn"),a.appendChild(l),c.innerHTML=t.value,n};n.addEventListener("click",(()=>{const t={title:c.value,description:a.value};l.push(t),d.classList.remove("active"),(()=>{let t=document.createElement("div");t.classList.add("taskCardContainer");let n=document.createElement("div");n.classList.add("taskCard");let d=document.createElement("h1");d.classList.add("taskCardTitle"),d.textContent=c.value;let l=document.createElement("p");l.classList.add("taskDescription"),l.textContent=a.value;let s=document.createElement("div");s.classList.add("deleteCard"),s.innerHTML='<i class="fa-solid fa-ellipsis-stroke"></i>',n.appendChild(d),n.appendChild(l),n.appendChild(s),t.appendChild(n),e.appendChild(t)})()}));const i=document.querySelector(".projectForm"),o=document.querySelector("#projectSubmitBtn"),r=document.querySelector("#projectCloseBtn"),u=document.querySelector(".addProjectBtn"),m=document.querySelector("#projectName"),p=document.querySelector("#projectNameContainer"),v=document.querySelector("#taskCloseBtn"),C=document.querySelector(".taskForm");let L=[];const k=()=>(u.addEventListener("click",S),r.addEventListener("click",y),o.addEventListener("click",E),v.addEventListener("click",q),y(),k),E=()=>{let e=m.value;const t={name:e,allTasks:[]};L.push(t),h(e),y()},h=e=>{let t=document.createElement("button");t.addEventListener("click",s),t.classList.add("projectDiv");let n=document.createElement("div");n.classList.add("buttonContainer");let d=document.createElement("button");d.textContent="Delete",d.classList.add("deleteBtn");let c=document.createElement("button");c.textContent="Edit",c.classList.add("editBtn");let a=document.createElement("p");a.textContent=e,a.classList.add("projectDisplay"),t.appendChild(a),n.appendChild(c),n.appendChild(d),t.appendChild(n),p.appendChild(t),d.addEventListener("click",(()=>{p.removeChild(t),L.splice(t,1)}))},S=()=>{m.value="",i.classList.add("active")},y=()=>{i.classList.remove("active")},q=()=>{C.classList.remove("active")};k()})();
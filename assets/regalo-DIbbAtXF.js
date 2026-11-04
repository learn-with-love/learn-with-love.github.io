import"./base-DFLou6Jc.js";/* empty css              *//* empty css              */import"./fullscreen-CSntqjPP.js";import{s as h}from"./stage-oW7CzKzk.js";import{D as v,G as m,E as k,F as y,n as $,M as S}from"./cloud-BH93rOTT.js";h("epic");const l=document.getElementById("gift"),u=new URLSearchParams(location.hash.slice(1)).get("a"),p=a=>a.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),d="/tabelline/";function f(){const a=v();let t;const r=(e,[o,[g,b]])=>`<button type="button" class="gift-opt" data-kind="${e}" data-item="${o}"><span>${g}</span>${b}</button>`;l.innerHTML=`<form class="new-profile">
    <p>Scegli un regalo…</p>
    <div class="gift-grid">${Object.entries(m).map(e=>r("gift",e)).join("")}</div>
    <p>Chi lo manda?</p>
    <label class="nick"><span>@</span><input name="from" maxlength="16" placeholder="il tuo soprannome" autocomplete="off"
      autocapitalize="none" spellcheck="false" required value="${p(a[0]??"")}" list="my-nicks" /></label>
    <datalist id="my-nicks">${a.map(e=>`<option value="${p(e)}">`).join("")}</datalist>
    <p class="form-error" hidden></p>
    <button class="big-btn" type="submit" disabled>Manda!</button>
    <a class="text-btn" href="${d}">Non hai un soprannome? Crealo giocando</a>
  </form>`;const i=l.querySelector("form"),c=i.querySelector("[type=submit]"),n=i.querySelector("[name=from]"),s=i.querySelector(".form-error");i.querySelectorAll(".gift-opt").forEach(e=>e.onclick=()=>{t={kind:e.dataset.kind,item:e.dataset.item},i.querySelectorAll(".gift-opt").forEach(o=>o.classList.toggle("on",o===e)),c.disabled=!1}),n.oninput=()=>{n.value=n.value.toLowerCase().replace(/\s/g,"")},i.onsubmit=async e=>{if(e.preventDefault(),!!t){if(!k(n.value)){s.textContent="Scrivi il tuo soprannome, quello del tuo profilo.",s.hidden=!1;return}c.disabled=!0,s.hidden=!0;try{await y(u,t.kind,t.item,n.value),q(t)}catch(o){s.textContent=o instanceof $?o.message[0].toUpperCase()+o.message.slice(1):"Niente rete, riprova.",s.hidden=!1,c.disabled=!1}}}}function q(a){const[t,r]=(a.kind==="gift"?m:S)[a.item];l.innerHTML=`<div class="link-card">
    <div class="sent-emoji">${t}</div>
    <p><b>${a.kind==="gift"?`Hai mandato ${r}!`:"Invito mandato!"}</b></p>
    <p class="hint">Lo vedrà la prossima volta che gioca.</p>
    <button class="pill-btn" data-again>Manda un altro regalo</button>
    <a class="big-btn" href="${d}">Gioca anche tu!</a></div>`,l.querySelector("[data-again]").onclick=f}u?f():l.innerHTML=`<p class="hint">Questo link non è completo: chiedi di nuovo il link regali al tuo amico.</p>
  <a class="big-btn" href="${d}">Gioca!</a>`;

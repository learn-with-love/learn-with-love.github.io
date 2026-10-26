import"./base-CULxe-I3.js";/* empty css              *//* empty css              */import"./fullscreen-CSntqjPP.js";import{s as v}from"./stage-oW7CzKzk.js";import{t as k,G as m,M as u,v as y,w as $,i as S}from"./cloud-ILdEVxrx.js";v("epic");const l=document.getElementById("gift"),f=new URLSearchParams(location.hash.slice(1)).get("a"),p=a=>a.replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),d="/tabelline/";function g(){const a=k();let t;const r=(e,[i,[b,h]])=>`<button type="button" class="gift-opt" data-kind="${e}" data-item="${i}"><span>${b}</span>${h}</button>`;l.innerHTML=`<form class="new-profile">
    <p>Scegli un regalo…</p>
    <div class="gift-grid">${Object.entries(m).map(e=>r("gift",e)).join("")}</div>
    <p>…oppure un invito</p>
    <div class="gift-grid wide">${Object.entries(u).map(e=>r("meetup",e)).join("")}</div>
    <p>Chi lo manda?</p>
    <label class="nick"><span>@</span><input name="from" maxlength="16" placeholder="il tuo soprannome" autocomplete="off"
      autocapitalize="none" spellcheck="false" required value="${p(a[0]??"")}" list="my-nicks" /></label>
    <datalist id="my-nicks">${a.map(e=>`<option value="${p(e)}">`).join("")}</datalist>
    <p class="form-error" hidden></p>
    <button class="big-btn" type="submit" disabled>Manda!</button>
    <a class="text-btn" href="${d}">Non hai un soprannome? Crealo giocando</a>
  </form>`;const o=l.querySelector("form"),c=o.querySelector("[type=submit]"),n=o.querySelector("[name=from]"),s=o.querySelector(".form-error");o.querySelectorAll(".gift-opt").forEach(e=>e.onclick=()=>{t={kind:e.dataset.kind,item:e.dataset.item},o.querySelectorAll(".gift-opt").forEach(i=>i.classList.toggle("on",i===e)),c.disabled=!1}),n.oninput=()=>{n.value=n.value.toLowerCase().replace(/\s/g,"")},o.onsubmit=async e=>{if(e.preventDefault(),!!t){if(!y(n.value)){s.textContent="Scrivi il tuo soprannome, quello del tuo profilo.",s.hidden=!1;return}c.disabled=!0,s.hidden=!0;try{await $(f,t.kind,t.item,n.value),q(t)}catch(i){s.textContent=i instanceof S?i.message[0].toUpperCase()+i.message.slice(1):"Niente rete, riprova.",s.hidden=!1,c.disabled=!1}}}}function q(a){const[t,r]=(a.kind==="gift"?m:u)[a.item];l.innerHTML=`<div class="link-card">
    <div class="sent-emoji">${t}</div>
    <p><b>${a.kind==="gift"?`Hai mandato ${r}!`:"Invito mandato!"}</b></p>
    <p class="hint">Lo vedrà la prossima volta che gioca.</p>
    <button class="pill-btn" data-again>Manda un altro regalo</button>
    <a class="big-btn" href="${d}">Gioca anche tu!</a></div>`,l.querySelector("[data-again]").onclick=g}f?g():l.innerHTML=`<p class="hint">Questo link non è completo: chiedi di nuovo il link regali al tuo amico.</p>
  <a class="big-btn" href="${d}">Gioca!</a>`;

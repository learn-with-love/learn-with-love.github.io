import"./base-BiAFHE-3.js";/* empty css              *//* empty css              *//* empty css              */import"./fullscreen-CSntqjPP.js";import{s as T}from"./stage-oW7CzKzk.js";import{a as x,G as A,g as k,m as L,b as q}from"./boards-ui-CdMMWZwd.js";import{v as f,s as $,k as P,r as j,n as M,t as H,w as I,x as _}from"./cloud-DAR9OzEx.js";import"./profiles-BmX-ZY6e.js";import"./preload-helper-ckwbz45p.js";T("epic");const s=document.getElementById("group"),m=new URLSearchParams(location.hash.slice(1)),b=m.get("g"),y=m.get("vs");let r=x(m.get("gioco"))?m.get("gioco"):"tabelline";const d=a=>a.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`),h="/tabelline/",z="/progressi/",N=a=>{var e;return((e=a.match(/[#&]g=([A-Za-z0-9_-]{12})/))==null?void 0:e[1])??(/^[A-Za-z0-9_-]{12}$/.test(a.trim())?a.trim():null)},w=a=>a instanceof H?a.message[0].toUpperCase()+a.message.slice(1):"Niente rete, riprova.",C=a=>a.members?q(a):'<p class="hint">Ancora nessuno nel gruppo.</p>';function G(a){s.querySelectorAll("[data-game]").forEach(e=>e.onclick=()=>{r=e.dataset.game,m.set("gioco",r),history.replaceState(null,"",`#${m}`),a()})}async function g(){var u;const a=P();await Promise.all(a.map(t=>j(t.id).catch(()=>{})));const e=a.filter(t=>M(t.id).some(n=>n.id===b)),l=a.filter(t=>!e.includes(t)),i=await f(b,r,(u=e[0])==null?void 0:u.id);s.innerHTML=`<h1>👥 ${d(i.name)}</h1>
    ${k(r)}
    <p class="hint">${L(r)} · media del gruppo: <b>${i.average}</b></p>
    ${C(i)}
    <p class="form-error" hidden></p>
    ${l.length?`<div class="link-actions">${l.map(t=>`<button class="pill-btn" data-join="${t.id}">Entra come @${d(t.nick)}</button>`).join("")}</div>`:""}
    ${a.length?"":`<p class="hint">Per entrare serve un profilo: <a href="${h}">crealo giocando</a>, poi riapri questo link.</p>`}
    <div class="link-actions">
      ${e.length?`<a class="pill-btn" href="${z}">📈 Grafici</a>`:""}
      <button class="pill-btn" data-copy>Copia il link del gruppo</button>
      ${"share"in navigator?'<button class="pill-btn" data-share>Condividi</button>':""}
      ${e.map(t=>`<button class="pill-btn" data-leave="${t.id}">Esci (@${d(t.nick)})</button>`).join("")}
    </div>
    <form class="group-new" data-vs>
      <input name="other" placeholder="Link di un altro gruppo" autocomplete="off" />
      <button class="pill-btn" type="submit">Sfida!</button>
    </form>
    <a class="big-btn" href="${h}">Gioca!</a>`,G(g);const c=s.querySelector(".form-error"),o=(t,n)=>s.querySelectorAll(t).forEach(v=>{v.onclick=async()=>{try{await n(v)}catch(E){c.textContent=w(E),c.hidden=!1}}});o("[data-join]",async t=>{await I(t.dataset.join,i.id),await g()}),o("[data-leave]",async t=>{await _(t.dataset.leave,i.id),await g()}),o("[data-copy]",async t=>{var n;await((n=navigator.clipboard)==null?void 0:n.writeText($(i.id))),t.textContent="Copiato!"}),o("[data-share]",()=>navigator.share({title:`Entra nel gruppo ${i.name}`,url:$(i.id)}).catch(()=>{}));const p=s.querySelector("[data-vs]");p.onsubmit=t=>{t.preventDefault();const n=N(p.elements.namedItem("other").value);if(!n||n===i.id){c.textContent="Incolla il link di un altro gruppo.",c.hidden=!1;return}location.hash=`g=${i.id}&vs=${n}&gioco=${r}`,location.reload()}}async function S(){const[a,e]=await Promise.all([f(b,r),f(y,r)]),[l,i]=[a.average,e.average],c=(o,p,u)=>`<div class="duel-side ${u?"win":""}">
    <h2>${u?"👑 ":""}${d(o.name)}</h2><div class="duel-score">${p}</div>
    <p class="hint">media di ${o.members??0} ${o.members===1?"membro":"membri"}</p>${C(o)}</div>`;s.innerHTML=`<h1>Sfida della settimana · ${A[r]}</h1>
    ${k(r)}
    <div class="duel">${c(a,l,l>i)}<div class="duel-vs">VS</div>${c(e,i,i>l)}</div>
    <p class="hint">${l===i?"Pari! Chi gioca ancora fa vincere il suo gruppo.":"Ogni risposta giusta conta: si può ancora rimontare!"}</p>
    <div class="link-actions">
      <button class="pill-btn" data-copy>Copia il link della sfida</button>
      <a class="pill-btn" href="${$(a.id)}">${d(a.name)}</a><a class="pill-btn" href="${$(e.id)}">${d(e.name)}</a>
    </div>
    <a class="big-btn" href="${h}">Gioca!</a>`,G(S),s.querySelector("[data-copy]").onclick=async o=>{var p;await((p=navigator.clipboard)==null?void 0:p.writeText(location.href)),o.currentTarget.textContent="Copiato!"},s.querySelectorAll("a.pill-btn").forEach(o=>o.onclick=()=>setTimeout(()=>location.reload()))}b?(y?S():g()).catch(a=>{s.innerHTML=`<p class="hint">${d(w(a))}</p><a class="big-btn" href="${h}">Gioca!</a>`}):s.innerHTML=`<p class="hint">Questo link non è completo: chiedi di nuovo il link del gruppo.</p><a class="big-btn" href="${h}">Gioca!</a>`;

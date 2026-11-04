import"./base-Bwwxbrbm.js";/* empty css              *//* empty css              *//* empty css              */import"./fullscreen-CSntqjPP.js";import{s as L}from"./stage-oW7CzKzk.js";import{i as M,b as x}from"./profiles-wRtnttMC.js";import{g as C,m as j,b as z}from"./boards-ui-Bq6t6aOP.js";import{s as y,t as $,k as P,r as H,p as S,q as I,v as N,w as U}from"./cloud-CxgYI5H_.js";import{c as _}from"./nav-CVREXjMX.js";import"./preload-helper-ckwbz45p.js";import"./sfx-C0UI3x48.js";import"./audio-C5J7Qej8.js";L("epic");const l=document.getElementById("group"),m=new URLSearchParams(location.hash.slice(1)),b=m.get("g"),E=m.get("vs");let c=M(m.get("gioco"))?m.get("gioco"):"tabelline";const r=t=>t.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`),v="/tabelline/",O="/progressi/",Z=t=>{var e;return((e=t.match(/[#&]g=([A-Za-z0-9_-]{12})/))==null?void 0:e[1])??(/^[A-Za-z0-9_-]{12}$/.test(t.trim())?t.trim():null)},G=t=>t instanceof I?t.message[0].toUpperCase()+t.message.slice(1):"Niente rete, riprova.",T=t=>t.members?z(t):'<p class="hint">Ancora nessuno nel gruppo.</p>';function A(t){l.querySelectorAll("[data-game]").forEach(e=>e.onclick=()=>{c=e.dataset.game,m.set("gioco",c),history.replaceState(null,"",`#${m}`),t()})}async function h(){var w;const t=P();await Promise.all(t.map(a=>H(a.id).catch(()=>{})));const e=t.filter(a=>S(a.id).some(s=>s.id===b)),d=t.filter(a=>!e.includes(a)),p=[...new Map(t.flatMap(a=>S(a.id)).filter(a=>a.id!==b).map(a=>[a.id,a])).values()],i=await y(b,c,(w=e[0])==null?void 0:w.id);l.innerHTML=`<h1>👥 ${r(i.name)}</h1>
    ${C(c)}
    <p class="hint">${j(c)} · media del gruppo: <b>${i.average}</b></p>
    ${T(i)}
    <p class="form-error" hidden></p>
    ${d.length?`<div class="link-actions">${d.map(a=>`<button class="pill-btn" data-join="${a.id}">Entra come @${r(a.nick)}</button>`).join("")}</div>`:""}
    ${t.length?"":`<p class="hint">Per entrare serve un profilo.</p>
      <a class="big-btn" href="${_()}">Crea il tuo profilo</a>`}
    <div class="link-actions">
      ${e.length?`<a class="pill-btn" href="${O}">📈 Grafici</a>`:""}
      <button class="pill-btn" data-copy>Copia il link del gruppo</button>
      ${"share"in navigator?'<button class="pill-btn" data-share>Condividi</button>':""}
    </div>
    <p class="hint">🧑 Chiedi a un grande di mandarlo.</p>
    ${p.length?`<p class="hint">⚔️ Sfida un tuo gruppo:</p>
    <div class="link-actions">${p.map(a=>`<button class="pill-btn" data-vs-id="${a.id}">👥 ${r(a.name)}</button>`).join("")}</div>`:""}
    <form class="group-new" data-vs>
      <input name="other" placeholder="Link di un altro gruppo" autocomplete="off" />
      <button class="pill-btn" type="submit">Sfida!</button>
    </form>
    ${t.length?`<a class="big-btn" href="${v}">Gioca!</a>`:""}
    ${e.length?`<div class="link-actions small"><button class="text-btn more" data-more>Altro…</button></div>
    <div class="danger-zone" hidden>${e.map(a=>`<button class="text-btn" data-leave="${a.id}">Esci dal gruppo (@${r(a.nick)})</button>`).join("")}</div>`:""}`,A(h);const n=l.querySelector(".form-error"),o=(a,s)=>l.querySelectorAll(a).forEach(g=>{g.onclick=async()=>{try{await s(g)}catch(f){n.textContent=G(f),n.hidden=!1}}});o("[data-join]",async a=>{await N(a.dataset.join,i.id),await h()}),o("[data-more]",async()=>{const a=l.querySelector(".danger-zone");a.hidden=!a.hidden}),o("[data-leave]",async a=>{const s=e.find(f=>f.id===a.dataset.leave),g=l.querySelector(".danger-zone");g.innerHTML=`<p><b>Esci da ${r(i.name)}?</b></p><p class="hint">@${r(s.nick)}</p>
      <div class="link-actions"><button class="pill-btn" data-yes aria-label="Sì, esci">👍 Sì</button>
      <button class="pill-btn" data-no aria-label="No, resto">👎 No</button></div>`,o("[data-yes]",async()=>{await U(s.id,i.id),await h()}),o("[data-no]",h)}),o("[data-copy]",async a=>{var s;await((s=navigator.clipboard)==null?void 0:s.writeText($(i.id))),a.textContent="Copiato!"}),o("[data-share]",()=>navigator.share({title:`Entra nel gruppo ${i.name}`,url:$(i.id)}).catch(()=>{}));const u=a=>{location.hash=`g=${i.id}&vs=${a}&gioco=${c}`,location.reload()};o("[data-vs-id]",async a=>u(a.dataset.vsId));const k=l.querySelector("[data-vs]");k.onsubmit=a=>{a.preventDefault();const s=Z(k.elements.namedItem("other").value);if(!s||s===i.id){n.textContent="Incolla il link di un altro gruppo.",n.hidden=!1;return}u(s)}}async function q(){const[t,e]=await Promise.all([y(b,c),y(E,c)]),[d,p]=[t.average,e.average],i=(n,o,u)=>`<div class="duel-side ${u?"win":""}">
    <h2>${u?"👑 ":""}${r(n.name)}</h2><div class="duel-score">${o}</div>
    <p class="hint">media di ${n.members??0} ${n.members===1?"membro":"membri"}</p>${T(n)}</div>`;l.innerHTML=`<h1>Sfida della settimana · ${x[c]}</h1>
    ${C(c)}
    <div class="duel">${i(t,d,d>p)}<div class="duel-vs">VS</div>${i(e,p,p>d)}</div>
    <p class="hint">${d===p?"Pari! Chi gioca ancora fa vincere il suo gruppo.":"Ogni risposta giusta conta: si può ancora rimontare!"}</p>
    <div class="link-actions">
      <button class="pill-btn" data-copy>Copia il link della sfida</button>
      <a class="pill-btn" href="${$(t.id)}">${r(t.name)}</a><a class="pill-btn" href="${$(e.id)}">${r(e.name)}</a>
    </div>
    <a class="big-btn" href="${v}">Gioca!</a>`,A(q),l.querySelector("[data-copy]").onclick=async n=>{var o;await((o=navigator.clipboard)==null?void 0:o.writeText(location.href)),n.currentTarget.textContent="Copiato!"},l.querySelectorAll("a.pill-btn").forEach(n=>n.onclick=()=>setTimeout(()=>location.reload()))}b?(E?q():h()).catch(t=>{l.innerHTML=`<p class="hint">${r(G(t))}</p><a class="big-btn" href="${v}">Gioca!</a>`}):l.innerHTML=`<p class="hint">Questo link non è completo: chiedi di nuovo il link del gruppo.</p><a class="big-btn" href="${v}">Gioca!</a>`;

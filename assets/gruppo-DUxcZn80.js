import"./base-D1ogZs-M.js";/* empty css              *//* empty css              *//* empty css              */import"./fullscreen-CSntqjPP.js";import{s as P}from"./stage-oW7CzKzk.js";import{d as z,a as G,e as I,i as g}from"./boards-DKlAPRQD.js";import{g as A,t as N,b as U,c as _}from"./boards-ui-DvkzD7OF.js";import{m as w,n as f,k as B,r as O,h as L,g as Z,j as D,p as F,q as Q}from"./cloud-Bk0wxTX4.js";import{c as R}from"./nav-DFAi_Vo9.js";import"./preload-helper-ckwbz45p.js";import"./audio-C5J7Qej8.js";P("epic");const i=document.getElementById("group"),c=new URLSearchParams(location.hash.slice(1)),b=c.get("g"),M=c.get("vs");let r=z(c.get("gioco"))?c.get("gioco"):"tabelline",q=c.get("gara")==="settimana"?"week":"day";const l=t=>t.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`),V="/progressi/",J=t=>{var e;return((e=t.match(/[#&]g=([A-Za-z0-9_-]{12})/))==null?void 0:e[1])??(/^[A-Za-z0-9_-]{12}$/.test(t.trim())?t.trim():null)},y="/home/",K=`<a class="close-btn" href="${y}" aria-label="Chiudi">${G("close",!1)}</a>`,j=t=>t instanceof D?t.message[0].toUpperCase()+t.message.slice(1):"Niente rete, riprova.",W=t=>t.members?_(t):'<p class="hint">Ancora nessuno nel gruppo.</p>';function x(t){i.querySelectorAll("[data-game]").forEach(e=>e.onclick=()=>{r=e.dataset.game,c.set("gioco",r),history.replaceState(null,"",`#${c}`),t()})}async function $(){var C,E;const t=B();await Promise.all(t.map(a=>O(a.id).catch(()=>{})));const e=t.filter(a=>L(a.id).some(o=>o.id===b)),p=t.filter(a=>!e.includes(a)),m=[...new Map(t.flatMap(a=>L(a.id)).filter(a=>a.id!==b).map(a=>[a.id,a])).values()],[n,s]=await Promise.all([w(b,r,(C=e[0])==null?void 0:C.id),Z("gruppo",r,b,(E=e[0])==null?void 0:E.id,q)]),u=n.members??0;i.innerHTML=`${K}<h1>${g("users")} ${l(n.name)}</h1>
    ${u?`<p class="hint group-why">${u} nel gruppo</p>`:""}
    ${A(r)}
    ${N(s,"Classifica del gruppo",{periods:!0})}
    <p class="form-error" hidden></p>
    ${p.length?`<div class="link-actions">${p.map(a=>`<button class="pill-btn yes" data-join="${a.id}">Entra come @${l(a.nick)}</button>`).join("")}</div>`:""}
    ${t.length?"":`<a class="big-btn" href="${R()}">Crea il tuo profilo</a>`}
    <div class="link-actions small">
      <button class="pill-btn" data-invite>${g("share")} Invita</button>
      <button class="pill-btn" data-vs-open>${g("swords")} Sfida</button>
      ${e.length?`<a class="pill-btn" href="${V}">${g("chart")} Grafici</a>`:""}
      ${e.length?'<button class="text-btn more" data-more aria-label="Altro">…</button>':""}
    </div>
    <div class="vs-panel" hidden>
      ${m.length?`<div class="link-actions">${m.map(a=>`<button class="pill-btn" data-vs-id="${a.id}">${g("users")} ${l(a.name)}</button>`).join("")}</div>`:""}
      <form class="group-new" data-vs>
        <input name="other" placeholder="Link di un altro gruppo" autocomplete="off" />
        <button class="pill-btn" type="submit">Sfida!</button>
      </form>
    </div>
    ${e.length?`<div class="danger-zone" hidden>${e.map(a=>`<button class="text-btn" data-leave="${a.id}">Esci dal gruppo (@${l(a.nick)})</button>`).join("")}</div>`:""}`,x($),U(i,a=>{q=a,c.set("gara",a==="week"?"settimana":"oggi"),history.replaceState(null,"",`#${c}`),$()});const h=i.querySelector(".form-error"),d=(a,o)=>i.querySelectorAll(a).forEach(v=>{v.onclick=async()=>{try{await o(v)}catch(k){h.textContent=j(k),h.hidden=!1}}});d("[data-join]",async a=>{await F(a.dataset.join,n.id),await $()}),d("[data-more]",async()=>{const a=i.querySelector(".danger-zone");a.hidden=!a.hidden}),d("[data-leave]",async a=>{const o=e.find(k=>k.id===a.dataset.leave),v=i.querySelector(".danger-zone");v.innerHTML=`<p><b>Esci da ${l(n.name)}?</b></p><p class="hint">@${l(o.nick)}</p>
      <div class="link-actions"><button class="pill-btn" data-yes aria-label="Sì, esci">👍 Sì</button>
      <button class="pill-btn" data-no aria-label="No, resto">👎 No</button></div>`,d("[data-yes]",async()=>{await Q(o.id,n.id),await $()}),d("[data-no]",$)}),d("[data-invite]",async a=>{var o;if(navigator.share)return navigator.share({title:`Entra nel gruppo ${n.name}`,url:f(n.id)}).catch(()=>{});await((o=navigator.clipboard)==null?void 0:o.writeText(f(n.id))),a.innerHTML=`${g("check")} Link copiato`}),d("[data-vs-open]",async()=>{const a=i.querySelector(".vs-panel");a.hidden=!a.hidden});const S=a=>{location.hash=`g=${n.id}&vs=${a}&gioco=${r}`,location.reload()};d("[data-vs-id]",async a=>S(a.dataset.vsId));const T=i.querySelector("[data-vs]");T.onsubmit=a=>{a.preventDefault();const o=J(T.elements.namedItem("other").value);if(!o||o===n.id){h.textContent="Incolla il link di un altro gruppo.",h.hidden=!1;return}S(o)}}async function H(){const[t,e]=await Promise.all([w(b,r),w(M,r)]),[p,m]=[t.average,e.average],n=(s,u,h)=>`<div class="duel-side ${h?"win":""}">
    <h2>${h?"👑 ":""}${l(s.name)}</h2><div class="duel-score">${u}</div>
    <p class="hint">media di ${s.members??0} ${s.members===1?"membro":"membri"}</p>${W(s)}</div>`;i.innerHTML=`<h1>Sfida della settimana · ${I[r]}</h1>
    ${A(r)}
    <div class="duel">${n(t,p,p>m)}<div class="duel-vs">VS</div>${n(e,m,m>p)}</div>
    <p class="hint">${p===m?"Pari! Chi gioca ancora fa vincere il suo gruppo.":"Ogni risposta giusta conta: si può ancora rimontare!"}</p>
    <div class="link-actions">
      <button class="pill-btn" data-copy>Copia il link della sfida</button>
      <a class="pill-btn" href="${f(t.id)}">${l(t.name)}</a><a class="pill-btn" href="${f(e.id)}">${l(e.name)}</a>
    </div>
`,x(H),i.querySelector("[data-copy]").onclick=async s=>{var u;await((u=navigator.clipboard)==null?void 0:u.writeText(location.href)),s.currentTarget.textContent="Copiato!"},i.querySelectorAll("a.pill-btn").forEach(s=>s.onclick=()=>setTimeout(()=>location.reload()))}document.querySelector("main").addEventListener("click",t=>{i.contains(t.target)||(location.href=y)});b?(M?H():$()).catch(t=>{i.innerHTML=`<p class="hint">${l(j(t))}</p><a class="text-btn" href="${y}">Torna alla home</a>`}):i.innerHTML=`<p class="hint">Questo link non è completo: chiedi di nuovo il link del gruppo.</p><a class="text-btn" href="${y}">Torna alla home</a>`;

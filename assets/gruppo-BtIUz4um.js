import"./base-yLrz03pt.js";/* empty css              *//* empty css              *//* empty css              */import"./fullscreen-CSntqjPP.js";import{s as C}from"./stage-oW7CzKzk.js";import{g as u,e as h,f as m,k as S,r as T,h as j,i as L,j as q,m as x}from"./cloud-ILdEVxrx.js";import{a as E}from"./profiles-pDb1ai1d.js";C("epic");const s=document.getElementById("group"),f=new URLSearchParams(location.hash.slice(1)),g=f.get("g"),v=f.get("vs"),l=a=>a.replace(/[&<>"']/g,i=>`&#${i.charCodeAt(0)};`),d="/tabelline/",G=a=>{var i;return((i=a.match(/[#&]g=([A-Za-z0-9_-]{12})/))==null?void 0:i[1])??(/^[A-Za-z0-9_-]{12}$/.test(a.trim())?a.trim():null)},k=a=>a instanceof L?a.message[0].toUpperCase()+a.message.slice(1):"Niente rete, riprova.",y=a=>a.members.length?`<ol class="ranking">${a.members.map((i,n)=>`<li><b>${["🥇","🥈","🥉"][n]??n+1}</b>
      ${E({name:i.nick,animal:i.animal,color:i.color},36)}<span>@${l(i.nick)}</span><em>${i.week}</em></li>`).join("")}</ol>`:'<p class="hint">Ancora nessuno nel gruppo.</p>';async function b(){const a=await u(g),i=S();await Promise.all(i.map(t=>T(t.id).catch(()=>{})));const n=i.filter(t=>j(t.id).some(o=>o.id===a.id)),r=i.filter(t=>!n.includes(t));s.innerHTML=`<h1>👥 ${l(a.name)}</h1>
    <p class="hint">Risposte giuste di questa settimana · media del gruppo: <b>${h(a)}</b></p>
    ${y(a)}
    <p class="form-error" hidden></p>
    ${r.length?`<div class="link-actions">${r.map(t=>`<button class="pill-btn" data-join="${t.id}">Entra come @${l(t.nick)}</button>`).join("")}</div>`:""}
    ${i.length?"":`<p class="hint">Per entrare serve un profilo: <a href="${d}">crealo giocando</a>, poi riapri questo link.</p>`}
    <div class="link-actions">
      <button class="pill-btn" data-copy>Copia il link del gruppo</button>
      ${"share"in navigator?'<button class="pill-btn" data-share>Condividi</button>':""}
      ${n.map(t=>`<button class="pill-btn" data-leave="${t.id}">Esci (@${l(t.nick)})</button>`).join("")}
    </div>
    <form class="group-new" data-vs>
      <input name="other" placeholder="Link di un altro gruppo" autocomplete="off" />
      <button class="pill-btn" type="submit">Sfida!</button>
    </form>
    <a class="big-btn" href="${d}">Gioca!</a>`;const c=s.querySelector(".form-error"),e=(t,o)=>s.querySelectorAll(t).forEach($=>{$.onclick=async()=>{try{await o($)}catch(w){c.textContent=k(w),c.hidden=!1}}});e("[data-join]",async t=>{await q(t.dataset.join,a.id),await b()}),e("[data-leave]",async t=>{await x(t.dataset.leave,a.id),await b()}),e("[data-copy]",async t=>{var o;await((o=navigator.clipboard)==null?void 0:o.writeText(m(a.id))),t.textContent="Copiato!"}),e("[data-share]",()=>navigator.share({title:`Entra nel gruppo ${a.name}`,url:m(a.id)}).catch(()=>{}));const p=s.querySelector("[data-vs]");p.onsubmit=t=>{t.preventDefault();const o=G(p.elements.namedItem("other").value);if(!o||o===a.id){c.textContent="Incolla il link di un altro gruppo.",c.hidden=!1;return}location.hash=`g=${a.id}&vs=${o}`,location.reload()}}async function A(){const[a,i]=await Promise.all([u(g),u(v)]),[n,r]=[h(a),h(i)],c=(e,p,t)=>`<div class="duel-side ${t?"win":""}">
    <h2>${t?"👑 ":""}${l(e.name)}</h2><div class="duel-score">${p}</div>
    <p class="hint">media di ${e.members.length} ${e.members.length===1?"membro":"membri"}</p>${y(e)}</div>`;s.innerHTML=`<h1>Sfida della settimana</h1>
    <div class="duel">${c(a,n,n>r)}<div class="duel-vs">VS</div>${c(i,r,r>n)}</div>
    <p class="hint">${n===r?"Pari! Chi risponde ancora fa vincere il suo gruppo.":"Ogni risposta giusta conta: si può ancora rimontare!"}</p>
    <div class="link-actions">
      <button class="pill-btn" data-copy>Copia il link della sfida</button>
      <a class="pill-btn" href="${m(a.id)}">${l(a.name)}</a><a class="pill-btn" href="${m(i.id)}">${l(i.name)}</a>
    </div>
    <a class="big-btn" href="${d}">Gioca!</a>`,s.querySelector("[data-copy]").onclick=async e=>{var p;await((p=navigator.clipboard)==null?void 0:p.writeText(location.href)),e.currentTarget.textContent="Copiato!"},s.querySelectorAll("a.pill-btn").forEach(e=>e.onclick=()=>setTimeout(()=>location.reload()))}g?(v?A():b()).catch(a=>{s.innerHTML=`<p class="hint">${l(k(a))}</p><a class="big-btn" href="${d}">Gioca!</a>`}):s.innerHTML=`<p class="hint">Questo link non è completo: chiedi di nuovo il link del gruppo.</p><a class="big-btn" href="${d}">Gioca!</a>`;

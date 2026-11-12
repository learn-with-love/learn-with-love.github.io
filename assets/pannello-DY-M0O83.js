import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{A as f}from"./api-B6lG-Qg-.js";const h="simpleteach.adminToken",l=e=>document.getElementById(e),d=e=>e.replace(/[&<>"']/g,a=>`&#${a.charCodeAt(0)};`),y=()=>{try{return localStorage.getItem(h)??""}catch{return""}},$=e=>{try{e?localStorage.setItem(h,e):localStorage.removeItem(h)}catch{}},u=e=>{const a=Math.round(e/1e3),i=Math.floor(a/60);return i?`${i} min${a%60?` ${a%60} s`:""}`:`${a} s`},m=e=>new Date(e).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Rome"}),v=e=>new Date(e).toLocaleDateString("it-IT",{day:"2-digit",month:"2-digit",year:"numeric",timeZone:"Europe/Rome"}),k=e=>e==null?"mai":`${v(e)} ${m(e)}`,p=(e,a)=>`<span class="bar" style="width:${a?Math.max(2,Math.round(e/a*100)):0}%"></span>`,S=[["nick","Soprannome",!1],["created","Creato",!1],["lastSeen","Visto l'ultima volta",!1],["games","Partite",!0],["byGame","Giochi",!1],["friends","Amici",!0]];let r={k:"lastSeen",up:!1};const M=e=>{const a=r.k,i=r.up?1:-1;return[...e].sort((n,o)=>i*(a==="nick"?n.nick.localeCompare(o.nick):(n[a]??0)-(o[a]??0)))};function b(e,a){const i=(t,s)=>`<div class="tile"><b>${t}</b><span>${s}</span></div>`,n=Math.max(...e.daily.map(t=>t.users)),o=Math.max(0,...e.pages.map(t=>t.n));l("out").innerHTML=`
    <div class="tiles">
      ${i(e.users.total,"profili in tutto")}
      ${i(e.users.today,"attivi oggi")}
      ${i(e.users.week,"attivi negli ultimi 7 giorni")}
      ${i(e.users.month,`attivi negli ultimi ${a} giorni`)}
      ${i(u(e.visits.avgMs),`permanenza media (${e.visits.n} visite)`)}
    </div>
    <h2>Giorno per giorno</h2>
    <div class="scroll"><table class="bars"><thead><tr><th>Giorno</th><th class="n">Attivi</th><th class="n">Segnali</th><th class="n">Partite</th><th class="n">Visite</th><th class="n">Media</th><th></th></tr></thead><tbody>
      ${[...e.daily].reverse().map(t=>`<tr><td>${t.day}</td><td class="n">${t.users}</td><td class="n">${t.hits}</td><td class="n">${t.games}</td><td class="n">${t.visits}</td><td class="n">${t.visits?u(t.avgMs):""}</td><td>${p(t.users,n)}</td></tr>`).join("")}
    </tbody></table></div>
    <h2>Pagine e giochi più aperti (${a} giorni)</h2>
    <div class="scroll"><table class="bars"><tbody>
      ${e.pages.length?e.pages.map(t=>`<tr><td>${d(t.page)}</td><td class="n">${t.n}</td><td>${p(t.n,o)}</td></tr>`).join(""):"<tr><td>Ancora niente.</td></tr>"}
    </tbody></table></div>
    <h2>Registro degli accessi (gli ultimi ${e.log.length})</h2>
    <div class="scroll"><table><thead><tr><th>Giorno</th><th>Soprannome</th><th>Primo</th><th>Ultimo</th><th class="n">Segnali</th><th class="n">Partite</th><th></th></tr></thead><tbody>
      ${e.log.map(t=>`<tr><td>${t.day}</td><td>@${d(t.nick)}</td><td>${m(t.first)}</td><td>${m(t.last)}</td><td class="n">${t.hits}</td><td class="n">${t.games}</td><td>${t.source==="partite"?'<span class="tag">da partite</span>':""}</td></tr>`).join("")}
    </tbody></table></div>
    <h2>Profili (${e.profiles.length})</h2>
    <div class="scroll"><table id="profiles"><thead><tr>${S.map(([t,s,c])=>`<th class="${t==="byGame"?"":"sort"}${c?" n":""}" data-k="${t}">${s}${t===r.k?r.up?" ▲":" ▼":""}</th>`).join("")}</tr></thead><tbody>
      ${M(e.profiles).map(t=>`<tr><td>@${d(t.nick)}</td><td>${v(t.created)}</td><td>${k(t.lastSeen)}</td><td class="n">${t.games}</td><td>${Object.entries(t.byGame).map(([s,c])=>`${d(s)} ${c}`).join(", ")}</td><td class="n">${t.friends}</td></tr>`).join("")}
    </tbody></table></div>
    <div class="row">
      <label>Periodo <select id="days">${[7,30,90].map(t=>`<option value="${t}"${t===a?" selected":""}>${t} giorni</option>`).join("")}</select></label>
      <button class="text-btn" id="logout" type="button">Esci da questo dispositivo</button>
    </div>
    <p class="hint">Oggi è ${e.today} (ora italiana). Gli attivi sono i profili che hanno aperto il sito; le visite e le pagine si contano senza profilo. «da partite»: quel giorno il profilo non ha segnali di accesso (il pannello non c'era ancora), ma ha giocato. Le partite dei profili sono quelle del periodo.</p>`;for(const t of l("profiles").querySelectorAll("th.sort"))t.onclick=()=>{const s=t.dataset.k;r={k:s,up:r.k===s?!r.up:s==="nick"},b(e,a)};l("days").onchange=t=>void g(Number(t.target.value)),l("logout").onclick=()=>{$(""),location.reload()}}async function g(e=30){const a=y(),i=l("login"),n=i.querySelector(".form-error");if(!a){i.hidden=!1;return}const o=await fetch(`${f}/v1/admin/stats?days=${e}`,{headers:{Authorization:`Bearer ${a}`}}).catch(()=>null);if(o!=null&&o.ok){i.hidden=!0,b(await o.json(),e);return}l("out").innerHTML="",i.hidden=!1,n.textContent=o?o.status===403?"Segreto sbagliato.":`Errore ${o.status}.`:"Niente rete, riprova.",n.hidden=!1,(o==null?void 0:o.status)===403&&$("")}l("login").onsubmit=e=>{e.preventDefault(),$(String(new FormData(e.target).get("token")??"").trim()),g()};g();

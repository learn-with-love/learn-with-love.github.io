import"./base-CUHWsmzx.js";import{A as $}from"./api-B6lG-Qg-.js";const r="simpleteach.adminToken",s=t=>document.getElementById(t),c=t=>t.replace(/[&<>"']/g,i=>`&#${i.charCodeAt(0)};`),p=()=>{try{return localStorage.getItem(r)??""}catch{return""}},l=t=>{try{t?localStorage.setItem(r,t):localStorage.removeItem(r)}catch{}},h=t=>{const i=Math.round(t/1e3),a=Math.floor(i/60);return a?`${a} min${i%60?` ${i%60} s`:""}`:`${i} s`},g=t=>new Date(t).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Rome"}),m=(t,i)=>`<span class="bar" style="width:${i?Math.max(2,Math.round(t/i*100)):0}%"></span>`;function v(t,i){const a=(e,u)=>`<div class="tile"><b>${e}</b><span>${u}</span></div>`,n=Math.max(...t.daily.map(e=>e.users)),o=Math.max(0,...t.pages.map(e=>e.n));s("out").innerHTML=`
    <div class="tiles">
      ${a(t.users.total,"profili in tutto")}
      ${a(t.users.today,"attivi oggi")}
      ${a(t.users.week,"attivi negli ultimi 7 giorni")}
      ${a(t.users.month,`attivi negli ultimi ${i} giorni`)}
      ${a(h(t.visits.avgMs),`permanenza media (${t.visits.n} visite)`)}
    </div>
    <h2>Giorno per giorno</h2>
    <div class="scroll"><table class="bars"><thead><tr><th>Giorno</th><th class="n">Attivi</th><th class="n">Segnali</th><th class="n">Visite</th><th class="n">Media</th><th></th></tr></thead><tbody>
      ${[...t.daily].reverse().map(e=>`<tr><td>${e.day}</td><td class="n">${e.users}</td><td class="n">${e.hits}</td><td class="n">${e.visits}</td><td class="n">${e.visits?h(e.avgMs):""}</td><td>${m(e.users,n)}</td></tr>`).join("")}
    </tbody></table></div>
    <h2>Pagine e giochi più aperti (${i} giorni)</h2>
    <div class="scroll"><table class="bars"><tbody>
      ${t.pages.length?t.pages.map(e=>`<tr><td>${c(e.page)}</td><td class="n">${e.n}</td><td>${m(e.n,o)}</td></tr>`).join(""):"<tr><td>Ancora niente.</td></tr>"}
    </tbody></table></div>
    <h2>Registro degli accessi (gli ultimi ${t.log.length})</h2>
    <div class="scroll"><table><thead><tr><th>Giorno</th><th>Soprannome</th><th>Primo</th><th>Ultimo</th><th class="n">Segnali</th></tr></thead><tbody>
      ${t.log.map(e=>`<tr><td>${e.day}</td><td>@${c(e.nick)}</td><td>${g(e.first)}</td><td>${g(e.last)}</td><td class="n">${e.hits}</td></tr>`).join("")}
    </tbody></table></div>
    <div class="row">
      <label>Periodo <select id="days">${[7,30,90].map(e=>`<option value="${e}"${e===i?" selected":""}>${e} giorni</option>`).join("")}</select></label>
      <button class="text-btn" id="logout" type="button">Esci da questo dispositivo</button>
    </div>
    <p class="hint">Oggi è ${t.today} (ora italiana). Gli attivi sono i profili che hanno aperto il sito; le visite e le pagine si contano senza profilo.</p>`,s("days").onchange=e=>void d(Number(e.target.value)),s("logout").onclick=()=>{l(""),location.reload()}}async function d(t=30){const i=p(),a=s("login"),n=a.querySelector(".form-error");if(!i){a.hidden=!1;return}const o=await fetch(`${$}/v1/admin/stats?days=${t}`,{headers:{Authorization:`Bearer ${i}`}}).catch(()=>null);if(o!=null&&o.ok){a.hidden=!0,v(await o.json(),t);return}s("out").innerHTML="",a.hidden=!1,n.textContent=o?o.status===403?"Segreto sbagliato.":`Errore ${o.status}.`:"Niente rete, riprova.",n.hidden=!1,(o==null?void 0:o.status)===403&&l("")}s("login").onsubmit=t=>{t.preventDefault(),l(String(new FormData(t.target).get("token")??"").trim()),d()};d();

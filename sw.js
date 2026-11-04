// Il service worker delle notifiche (src/shared/push-ui.ts, worker/src/push.ts): mostra l'avviso
// di un invito a giocare e, toccato, apre la pagina principale dove c'e' la riga dell'invito.
// Non tiene niente in cache: il sito resta quello di GitHub Pages, sempre aggiornato.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('push', (e) => {
  let m = { title: 'Learn With Love', body: 'Un amico ti ha scritto per giocare.', url: '/home/', tag: 'invito' };
  try { m = { ...m, ...e.data.json() }; } catch (x) { /* un avviso senza testo: quello di sopra */ }
  e.waitUntil(self.registration.showNotification(m.title, {
    body: m.body, tag: m.tag, renotify: true, icon: '/icon-192.png', badge: '/icon-192.png', data: { url: m.url },
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || '/home/', self.location.origin).href;
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const open = all.find((c) => new URL(c.url).origin === self.location.origin);
    if (open) { await open.focus(); return open.navigate ? open.navigate('/?go=' + encodeURIComponent('/home/')) : undefined; }
    return self.clients.openWindow('/?go=' + encodeURIComponent('/home/'));
  })());
});

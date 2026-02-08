self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('planner-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/calendarioanual.html',
        '/Calendariomensal.html',
        '/visualizarcompromissos.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

4. Clique em **"Commit new file"**

---

Depois de criar, **aguarde 2-3 minutos** e tente abrir o link novamente:
```
https://ohsia369.github.io/Planner-Sia/

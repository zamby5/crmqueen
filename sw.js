self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(clients.claim())});
self.addEventListener('fetch',function(e){if(e.request.mode==='navigate')e.respondWith(fetch(e.request).catch(function(){return new Response('<h2>Çevrimdışı</h2>',{headers:{'Content-Type':'text/html;charset=utf-8'}})}))});

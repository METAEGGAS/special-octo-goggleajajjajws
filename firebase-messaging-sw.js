/* ExCoreX — Firebase Cloud Messaging Service Worker */
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",
  authDomain: "hhhxh-5ebe4.firebaseapp.com",
  projectId: "hhhxh-5ebe4",
  storageBucket: "hhhxh-5ebe4.firebasestorage.app",
  messagingSenderId: "79243000696",
  appId: "1:79243000696:web:ee0fb2d2ccce791954e68d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
  payload = payload || {};
  if (payload.notification) { return; }
  var d = payload.data || {};
  return self.registration.showNotification(d.title || 'ExCoreX', {
    body: d.body || '',
    icon: 'https://i.ibb.co/xSxGsxLf/IMG.png',
    dir: 'rtl',
    lang: 'ar',
    data: { url: d.link || '/' }
  });
});

self.addEventListener('notificationclick', function(event){
  event.notification.close();
  var url = (event.notification.data && event.notification.data.url) || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list){
      for (var i = 0; i < list.length; i++){
        if (list[i].url.indexOf(self.location.origin) === 0 && 'focus' in list[i]){ return list[i].focus(); }
      }
      if (clients.openWindow){ return clients.openWindow(url); }
    })
  );
});

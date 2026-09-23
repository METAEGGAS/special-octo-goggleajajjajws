/* ExCoreX — Firebase Cloud Messaging Service Worker */
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",
  authDomain: "hhhxh-5ebe4.firebaseapp.com",
  projectId: "hhhxh-5ebe4",
  storageBucket: "hhhxh-5ebe4.firebasestorage.app",
  messagingSenderId: "79243000696",
  appId: "1:79243000696:web:ee0fb2d2ccce791954e68d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  var n = (payload && payload.notification) || {};
  var d = (payload && payload.data) || {};
  var title = n.title || d.title || "إشعار جديد";
  var options = {
    body: n.body || d.body || "",
    icon: "https://i.ibb.co/xSxGsxLf/IMG.png",
    badge: "https://i.ibb.co/xSxGsxLf/IMG.png",
    dir: "rtl",
    lang: "ar",
    data: d,
    vibrate: [200, 100, 200]
  };
  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  var url = (event.notification.data && event.notification.data.url) || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].url.indexOf(self.registration.scope) !== -1 && "focus" in list[i]) {
          return list[i].focus();
        }
      }
      return clients.openWindow(url);
    })
  );
});

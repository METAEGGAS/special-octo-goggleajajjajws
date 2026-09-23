/* ExCoreX — Firebase Cloud Messaging Service Worker
 * Service Worker وحيد من الـ root — مسؤول عن إشعارات الخلفية والضغط على الإشعار.
 * compat build هو الخيار الرسمي الصحيح هنا لأن الملف يُحمَّل مباشرة بدون bundler.
 * لا يحتوي هذا الملف على أي VAPID private key أو أي أسرار.
 * ملاحظة: إصدار 10.12.2-compat في الـ SW مستقل وسياقه منفصل عن الصفحة (modular v12) —
 * هذا مزيج موثق رسميًا ولا يسبب تعارضًا، لأن كل سياق يحمّل نسخته الخاصة.
 */
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// نفس Firebase Web App config المستخدم في index.html (projectId / messagingSenderId / appId متطابقة)
firebase.initializeApp({
  apiKey: "AIzaSyBvzfJOOjRFZnTgTUrwEZQPr8Ba7zKKlNg",
  authDomain: "hhhxh-5ebe4.firebaseapp.com",
  projectId: "hhhxh-5ebe4",
  storageBucket: "hhhxh-5ebe4.firebasestorage.app",
  messagingSenderId: "79243000696",
  appId: "1:79243000696:web:ee0fb2d2ccce791954e68d"
});

const messaging = firebase.messaging();

// تفعيل فوري بدون انتظار إغلاق التبويبات — يمنع بقاء نسخة قديمة من الـ SW متحكمة في الصفحة
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (event) { event.waitUntil(self.clients.claim()); });

// استقبال إشعارات الخلفية (الموقع مغلق أو في الخلفية)
messaging.onBackgroundMessage(function (payload) {
  var n = (payload && payload.notification) || {};
  var d = (payload && payload.data) || {};
  var title = n.title || d.title || "إشعار جديد";
  var options = {
    body: n.body || d.body || "",
    icon: n.icon || "https://i.ibb.co/xSxGsxLf/IMG.png",
    badge: "https://i.ibb.co/xSxGsxLf/IMG.png",
    dir: "rtl",
    lang: "ar",
    data: d,
    vibrate: [200, 100, 200]
  };
  return self.registration.showNotification(title, options);
});

// الضغط على الإشعار: يفتح الرابط الموجود في data.url / data.link أو الصفحة الرئيسية
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  var d = event.notification.data || {};
  var target = d.url || d.link || "/";
  // منع فتح روابط خارج النطاق عن طريق الخطأ في data
  try {
    var u = new URL(target, self.location.origin);
    if (u.origin !== self.location.origin) { target = "/"; } else { target = u.href; }
  } catch (e) { target = "/"; }
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].url.indexOf(self.registration.scope) !== -1 && "focus" in list[i]) {
          list[i].navigate ? list[i].navigate(target) : null;
          return list[i].focus();
        }
      }
      return clients.openWindow(target);
    })
  );
});
